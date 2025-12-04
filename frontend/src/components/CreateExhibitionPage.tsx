import { useState } from 'react';
import { ChevronLeft } from 'react-feather';

interface CreateExhibitionPageProps {
  onBack: () => void;
  onNext: () => void;
}

type TemplateType = 'A' | 'B' | null;

export default function CreateExhibitionPage({ onBack, onNext }: CreateExhibitionPageProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(null);

  const handleTemplateClick = (templateId: TemplateType) => {
    setSelectedTemplate(templateId);
  };

  const isButtonEnabled = selectedTemplate !== null;

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
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">01. 템플릿</p>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">02. 업로드</p>
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
                  <p className="mb-0">쇼케이스에 활용할</p>
                  <p>템플릿을 선택하세요</p>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                <div className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">
                  <p className="mb-0">두 개의 템플릿 중에서 해당 쇼케이스와 어울리는</p>
                  <p>템플릿을 최대 1개 선택해 주세요.</p>
                </div>
              </div>
            </div>

            {/* Template Buttons */}
            <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-[341.749px]">
              {/* Type A - 갤러리 */}
              <button
                onClick={() => handleTemplateClick('A')}
                className={`box-border content-stretch flex flex-col h-[163px] items-center justify-center px-[1.6px] py-0 relative shrink-0 w-[342px] cursor-pointer transition-colors ${
                  selectedTemplate === 'A' ? 'bg-[#f360c0]' : 'bg-white hover:bg-[#f360c0]'
                }`}
                data-name="Button"
              >
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-[12px] h-[138.5px] items-center justify-center relative shrink-0 w-full" data-name="Container">
                  <div className="relative shrink-0 size-[40px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                      <g id="Icon">
                        <path d={svgPaths.p1093e00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                        <path d="M5 15H35" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                        <path d="M15 35V15" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                      </g>
                    </svg>
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative">
                      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
                        <p className="font-['EB_Garamond',serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap whitespace-pre">Type A</p>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[3px] py-0 relative w-full">
                            <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.28px] whitespace-pre">갤러리</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Type B - 비디오 */}
              <button
                onClick={() => handleTemplateClick('B')}
                className={`box-border content-stretch flex flex-col h-[163px] items-center justify-center px-[1.6px] py-0 relative shrink-0 w-[342px] cursor-pointer transition-colors ${
                  selectedTemplate === 'B' ? 'bg-[#f360c0]' : 'bg-white hover:bg-[#f360c0]'
                }`}
                data-name="Button"
              >
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-[12px] h-[138.5px] items-center justify-center relative shrink-0 w-full" data-name="Container">
                  <div className="relative shrink-0 size-[40px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                      <g id="Icon">
                        <path d={svgPaths.p28af1900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                        <path d={svgPaths.p14561f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                      </g>
                    </svg>
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative">
                      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
                        <p className="basis-0 font-['EB_Garamond',serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black text-center">Type B</p>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-px py-0 relative w-full">
                            <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.28px] whitespace-pre">비디오</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>

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