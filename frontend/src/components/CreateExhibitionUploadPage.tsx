import { useRef, useState, useEffect } from 'react';
import { ChevronLeft } from 'react-feather';

interface DisplayItem {
  url: string;
  type: 'image' | 'video';
  isLocal: boolean; // True if it's a local data URL, false if it's a server URL
}

interface CreateExhibitionUploadPageProps {
  onBack: () => void;
  onNext: () => void;
  uploadedFiles: string[];
  setUploadedFiles: (files: string[]) => void;
}

export default function CreateExhibitionUploadPage({ onBack, onNext, uploadedFiles, setUploadedFiles }: CreateExhibitionUploadPageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [allDisplayItems, setAllDisplayItems] = useState<DisplayItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  // Initialize allDisplayItems from uploadedFiles prop
  useEffect(() => {
    // Only initialize if uploadedFiles has changed and local state is empty
    if (uploadedFiles.length > 0 && allDisplayItems.length === 0) {
      const initialItems: DisplayItem[] = uploadedFiles.map(url => ({
        url,
        // Determine type based on URL extension, or default to image for server URLs
        type: url.match(/\.(mp4|webm|mov)$/i) ? 'video' : 'image',
        isLocal: false,
      }));
      setAllDisplayItems(initialItems);
    }
  }, [uploadedFiles, allDisplayItems.length]);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    try {
      const newLocalPreviewItems: DisplayItem[] = await Promise.all(
          Array.from(files).map((file) => {
            const type = file.type.startsWith('image/') ? 'image' : 'video';
            return new Promise<DisplayItem>((resolve) => {
              if (type === 'image') {
                const reader = new FileReader();
                reader.onloadend = () => {
                  resolve({ url: reader.result as string, type: 'image', isLocal: true });
                };
                reader.readAsDataURL(file);
              } else { // Video - use a placeholder
                const videoPlaceholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='5 3 19 12 5 21 5 3'%3E%3C/polygon%3E%3C/svg%3E`;
                resolve({ url: videoPlaceholderSvg, type: 'video', isLocal: true });
              }
            });
          })
        );

        // Add new local previews to the display immediately
        setAllDisplayItems(prev => [...prev, ...newLocalPreviewItems]);

        // Upload files to server
        const formData = new FormData();
        Array.from(files).forEach((file) => {
          formData.append('files', file);
        });

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/upload`, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Upload failed');
        }

        const result = await response.json();
        const serverUrls: string[] = result.urls;

        // Update `allDisplayItems` to replace local previews with server URLs
        setAllDisplayItems(currentItems => {
          const updatedItems = [...currentItems];
          let localCount = 0;
          for (let i = 0; i < updatedItems.length; i++) {
            if (updatedItems[i].isLocal && localCount < serverUrls.length) {
              updatedItems[i] = { ...updatedItems[i], url: serverUrls[localCount], isLocal: false };
              localCount++;
            }
          }
          return updatedItems;
        });

        // Update the parent state with the new server URLs
        setUploadedFiles([...uploadedFiles, ...serverUrls]);

      } catch (error: any) {
        console.error('File upload error:', error);
        alert('파일 업로드에 실패했습니다: ' + error.message);
        // If upload fails, remove the local previews from display
        setAllDisplayItems(prev => prev.filter(item => !item.isLocal));
      } finally {
        setIsUploading(false);
      }
    };

  const handleRemoveFile = (indexToRemove: number) => {
    const itemToRemove = allDisplayItems[indexToRemove];
    const newDisplayItems = allDisplayItems.filter((_, index) => index !== indexToRemove);
    setAllDisplayItems(newDisplayItems);

    // If the removed item was a server URL, also update the parent's uploadedFiles state
    if (!itemToRemove.isLocal) {
      const newUploadedFiles = uploadedFiles.filter(url => url !== itemToRemove.url);
      setUploadedFiles(newUploadedFiles);
    }
  };

  const handleAddMoreClick = () => {
    fileInputRef.current?.click();
  };

  const isButtonEnabled = allDisplayItems.length > 0 && !isUploading;

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[68.976px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[68.976px] items-center justify-between px-[23.99px] py-0 relative w-full">
              {/* Back Button */}
              <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors" data-name="Button">
                <ChevronLeft className="size-5 text-black" />
              </button>
              {/* Heading */}
              <div className="h-[20.996px] relative shrink-0 w-[73.545px]" data-name="Heading 1">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start justify-center relative w-[73.545px]">
                  <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Create New</p>
                </div>
              </div>
              {/* Empty Container */}
              <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col h-[64px] items-start pb-[1.108px] pt-[23.99px] px-[23.99px] relative w-full">
            <div className="content-stretch flex gap-[36px] h-[15.007px] items-center relative shrink-0 w-full" data-name="Container">
              <div className="relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                  <div className="relative shrink-0" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                      <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">01. 템플릿</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">02. 업로드</p>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">03. 설정</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[23.99px] items-start pb-0 pt-[23.99px] px-[23.99px] relative w-full">
            {/* Heading and Description */}
            <div className="content-stretch flex flex-col gap-[7.997px] h-[105.982px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[65px] relative shrink-0 w-[277px]" data-name="Heading 2">
                <div className="absolute font-['Pretendard',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-[0.89px] tracking-[-0.48px] whitespace-pre">
                  <p className="mb-0">쇼케이스에 넣을</p>
                  <p>콘텐츠를 첨부하세요</p>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">쇼케이스에 넣고 싶은 이미지나 영상을 업로드 하세요</p>
              </div>
            </div>

            {/* File Upload/Display Area */}
            {allDisplayItems.length === 0 ? (
              /* Empty State - File Upload Area */
              <div className="box-border content-stretch flex h-[358px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
                <label 
                  htmlFor="file-upload"
                  className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow h-full items-center justify-center min-h-px min-w-px p-[1.6px] relative shrink-0 cursor-pointer" 
                  data-name="Container"
                >
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                  
                  {/* Plus Icon */}
                  <div className="relative rounded-[2.68435e+07px] shrink-0 size-[64px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[1.6px] relative size-[64px]">
                      <div className="h-[32px] relative shrink-0 w-[31px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 32">
                          <g id="Icon">
                            <path d="M6.45833 16H24.5417" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d="M15.5 6.66667V25.3333" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="relative shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6px] items-center relative">
                      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Paragraph">
                        <p className="font-['Pretendard',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">파일을 선택하세요</p>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Paragraph">
                        <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">이미지, 영상 최대 50MB</p>
                      </div>
                    </div>
                  </div>

                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              /* Uploaded Files Grid */
              <div className="box-border content-stretch flex min-h-[358px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
                <div className="basis-0 box-border content-start flex flex-wrap gap-[16px] grow min-h-full items-start justify-center min-w-px pb-[24px] pt-[21.6px] px-[1.6px] relative shrink-0 overflow-y-auto" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                  
                  {/* Uploaded Images */}
                  {allDisplayItems.map((item, index) => (
                    <div key={index} className="relative shrink-0 size-[140px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[140px]">
                        <div className="absolute left-0 size-[140px] top-0">
                          {item.type === 'image' ? (
                            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={item.url} />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-1/2">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                          )}
                        </div>
                        {/* X Button */}
                        <button
                          onClick={() => handleRemoveFile(index)}
                          className="absolute left-[111.5px] size-[20px] top-[7.95px] cursor-pointer bg-white rounded-full"
                          data-name="Icon"
                        >
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g id="Icon">
                              <path d="M15 5L5 15" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
                              <path d="M5 5L15 15" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Add More Button */}
                  <button
                    onClick={handleAddMoreClick}
                    className="relative shrink-0 size-[140px] cursor-pointer"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[140px]">
                      <div className="absolute box-border content-stretch flex items-center justify-center left-[calc(50%+0.41px)] p-[1.6px] rounded-[2.68435e+07px] size-[64px] top-[calc(50%+0.35px)] translate-x-[-50%] translate-y-[-50%]" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
                        <div className="h-[32px] relative shrink-0 w-[31px]" data-name="Icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 32">
                            <g id="Icon">
                              <path d="M6.45833 16H24.5417" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M15.5 6.66667V25.3333" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
              </div>
            )}

            {/* Next Button */}
            <button
              onClick={onNext}
              disabled={!isButtonEnabled}
              className={`relative shrink-0 w-full cursor-pointer transition-colors ${
                isButtonEnabled ? 'bg-black' : 'bg-[#99a1af]'
              }`}
              data-name="Button"
            >
              {isButtonEnabled && <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />}
              <div className="flex flex-col justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
                  <div className="content-stretch flex h-[16.616px] items-start relative shrink-0" data-name="Text">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">
                      {isUploading ? '업로드 중...' : '다음으로'}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}