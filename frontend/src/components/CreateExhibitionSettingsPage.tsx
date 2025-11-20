import { useState } from 'react';
import svgPaths from "../imports/svg-d9kg8os1tu";

interface CreateExhibitionSettingsPageProps {
  onBack: () => void;
  onComplete: () => void;
  exhibitionTitle: string;
  setExhibitionTitle: (title: string) => void;
}

export default function CreateExhibitionSettingsPage({ onBack, onComplete, exhibitionTitle, setExhibitionTitle }: CreateExhibitionSettingsPageProps) {
  const [description, setDescription] = useState('');
  const [period, setPeriod] = useState('');
  const [visibility, setVisibility] = useState('');

  const isButtonEnabled = exhibitionTitle.trim() !== '' && description.trim() !== '' && period.trim() !== '' && visibility.trim() !== '';

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
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">02. 업로드</p>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">03. 설정</p>
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
                  <p className="mb-0">쇼케이스의 정보를</p>
                  <p>입력하세요</p>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">쇼케이스의 제목과 설명을 입력하세요</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
              {/* Title Field */}
              <div className="content-stretch flex flex-col gap-[8px] h-[71.2px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">제목</p>
                </div>
                <div className="h-[48.2px] relative shrink-0 w-full" data-name="Text Input">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex h-[48.2px] items-center px-[16px] py-[12px] relative w-full">
                      <input
                        type="text"
                        value={exhibitionTitle}
                        onChange={(e) => setExhibitionTitle(e.target.value)}
                        placeholder="전시관 제목을 입력하세요"
                        className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] tracking-[-0.28px] bg-transparent border-none outline-none placeholder:text-[#99a1af] text-[#4a5565]"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </div>
              </div>

              {/* Description Field */}
              <div className="content-stretch flex flex-col gap-[8px] h-[139.8px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">설명</p>
                </div>
                <div className="h-[111.2px] relative shrink-0 w-full" data-name="Text Area">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex h-[111.2px] items-start px-[16px] py-[12px] relative w-full">
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="전시관에 대한 설명을 입력하세요"
                        className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] tracking-[-0.28px] bg-transparent border-none outline-none resize-none placeholder:text-[#99a1af] text-[#4a5565]"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </div>
              </div>

              {/* Period Field */}
              <div className="content-stretch flex flex-col gap-[8px] h-[70.2px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">전시 기간</p>
                </div>
                <div className="h-[48.2px] relative shrink-0 w-full" data-name="Text Input">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex h-[48.2px] items-center px-[16px] py-[12px] relative w-full">
                      <input
                        type="text"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        placeholder="예: 2025-10-26 부터 2025-12-25 까지"
                        className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] tracking-[-0.28px] bg-transparent border-none outline-none placeholder:text-[#99a1af] text-[#4a5565]"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </div>
              </div>

              {/* Visibility Field */}
              <div className="content-stretch flex flex-col gap-[8px] h-[70.2px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">공개 범위</p>
                </div>
                <div className="h-[48.2px] relative shrink-0 w-full" data-name="Text Input">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex h-[48.2px] items-center px-[16px] py-[12px] relative w-full">
                      <input
                        type="text"
                        value={visibility}
                        onChange={(e) => setVisibility(e.target.value)}
                        placeholder="예: 공개 또는 비공개"
                        className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] tracking-[-0.28px] bg-transparent border-none outline-none placeholder:text-[#99a1af] text-[#4a5565]"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={onComplete}
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
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">쇼케이스 만들기</p>
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