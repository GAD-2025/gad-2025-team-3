import { useRef } from 'react';
import svgPaths from "../imports/svg-d9kg8os1tu";

interface CreateExhibitionUploadPageProps {
  onBack: () => void;
  onNext: () => void;
  uploadedFiles: string[];
  setUploadedFiles: (files: string[]) => void;
}

export default function CreateExhibitionUploadPage({ onBack, onNext, uploadedFiles, setUploadedFiles }: CreateExhibitionUploadPageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFileUrls: string[] = Array.from(files).map((file) => URL.createObjectURL(file));
      setUploadedFiles([...uploadedFiles, ...newFileUrls]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
  };

  const handleAddMoreClick = () => {
    fileInputRef.current?.click();
  };

  const isButtonEnabled = uploadedFiles.length > 0;

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[68.976px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[68.976px] items-center justify-between px-[23.99px] py-0 relative w-full">
              {/* Back Button */}
              <button 
                onClick={onBack}
                className="relative shrink-0 size-[19.992px] cursor-pointer" 
                data-name="Button"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[19.992px]">
                  <div className="h-[19.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
                      <div className="absolute inset-[-7.14%_-14.29%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
                          <path d={svgPaths.p63e1620} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
                      <div className="absolute inset-[-0.83px_-7.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                          <path d="M12.4948 0.832986H0.832986" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
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
            {uploadedFiles.length === 0 ? (
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
                  {uploadedFiles.map((fileUrl, index) => (
                    <div key={index} className="relative shrink-0 size-[140px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[140px]">
                        <div className="absolute left-0 size-[140px] top-0">
                          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={fileUrl} />
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
                  <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">다음으로 </p>
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