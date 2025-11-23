import { useState } from 'react';
import svgPaths from "../imports/svg-pbzr8ku87j";
import { SignupData } from '../App'; // Import SignupData from App.tsx

interface SignupStep1Props {
  onNext: () => void;
  onBack: () => void;
  formData: SignupData; // Receive formData from App.tsx
  handleCheckboxChange: (name: keyof SignupData) => void;
  handleAllAgree: () => void;
}

export default function SignupStep1({ onNext, onBack, formData, handleCheckboxChange, handleAllAgree }: SignupStep1Props) {
  const [modalOpen, setModalOpen] = useState<string | null>(null);

  // Directly use formData from props
  const allRequiredChecked = formData.age14 && formData.terms && formData.privacy;
  const allChecked = formData.age14 && formData.terms && formData.privacy && formData.marketing;

  const handleNext = () => {
    if (allRequiredChecked) {
      onNext();
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="자인 페이지 생성">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[70.083px] items-start pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[68.976px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[68.976px] items-center justify-between px-[23.99px] py-0 relative w-full">
              {/* Back Button */}
              <button className="relative shrink-0 size-[19.992px] cursor-pointer z-10" data-name="Button" onClick={onBack}>
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
                  <p className="font-['Apple_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Sign Up</p>
                </div>
              </div>
              {/* Empty Container */}
              <div className="h-0 relative shrink-0 w-[19.992px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[19.992px]" />
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
            <div className="content-stretch flex gap-[15.993px] h-[15.007px] items-center relative shrink-0 w-full" data-name="Container">
              <div className="relative shrink-0 w-[69.305px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-[69.305px]">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-black tracking-[-0.24px]">01. 약관 동의</p>
                </div>
              </div>
              <div className="h-[15.007px] relative shrink-0 w-[11.493px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.007px] items-start relative w-[11.493px]">
                  <p className="basis-0 font-['Playfair_Display',serif] font-normal grow leading-[15px] min-h-px min-w-px relative shrink-0 text-[10px] text-gray-200 tracking-[1.5px] uppercase">→</p>
                </div>
              </div>
              <div className="relative shrink-0 w-[70.395px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-[70.395px]">
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">02. 정보 입력</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-auto relative shrink-0 w-full flex-1" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[23.99px] items-start pb-0 pt-[23.99px] px-[23.99px] relative w-full">
            {/* Title Section */}
            <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full" data-name="Container">
              {/* Icon */}
              <div className="relative shrink-0 size-[12px]">
                <div className="absolute inset-[-4.167%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                    <g id="Group 2085666190">
                      <path d="M0.5 6.32823H12.5" id="Line 55" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
                      <path d="M6.67035 0.5L6.67035 12.5" id="Line 56" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
                      <path d={svgPaths.p38bd3580} id="Line 57" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
                      <path d={svgPaths.p38bd3580} id="Line 58" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
                      <path d={svgPaths.p15dd4a80} id="Line 59" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
              </div>
              {/* Heading */}
              <div className="h-[65px] relative shrink-0 w-[277px]" data-name="Heading 2">
                <div className="absolute font-['Pretendard',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-[0.89px] tracking-[-0.48px] whitespace-pre">
                  <p className="mb-0">원활한 서비스 이용을 위해</p>
                  <p>아래 약관에 동의해 주세요</p>
                </div>
              </div>
              {/* Description */}
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                <div className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">
                  <p className="mb-0">선택 항목은 마케팅 정보 수신을 위한 것으로,</p>
                  <p>동의하지 않아도 서비스 이용에는 제한이 없습니다.</p>
                </div>
              </div>
            </div>

            {/* Agreement Checkboxes */}
            <div className="content-stretch flex flex-col gap-[15.993px] items-start relative shrink-0 w-full" data-name="Container">
              {/* All Agree Button */}
              <button 
                onClick={handleAllAgree}
                className="h-[66.189px] relative shrink-0 w-full cursor-pointer" 
                data-name="Button"
              >
                <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[11.995px] h-[66.189px] items-center pl-[21.099px] pr-[1.108px] py-[1.108px] relative w-full">
                    <div className="relative shrink-0 size-[23.99px]" data-name="Container">
                      {allChecked ? (
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g id="Container">
                            <rect fill="#F360C0" height="23.99" width="23.99" />
                            <path d="M18.6617 7.41167L9.495 16.5783L5.32834 12.4117" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                          </g>
                        </svg>
                      ) : (
                        <>
                          <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                          <div className="bg-white size-[23.99px]" />
                        </>
                      )}
                    </div>
                    <div className="h-[20.996px] relative shrink-0 w-[57.483px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[57.483px]">
                        <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">전체 동의</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Individual Agreements */}
              <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="Container">
                {/* Age 14+ */}
                <div className="content-stretch flex gap-[11.995px] h-[43.982px] items-center relative shrink-0 w-full" data-name="Button">
                  <button
                    onClick={() => handleCheckboxChange('age14')}
                    className="relative shrink-0 size-[19.992px] cursor-pointer"
                    data-name="Container"
                  >
                    {formData.age14 ? (
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="Container">
                          <rect fill="#F360C0" height="19.9917" width="19.9917" />
                          <path d="M15.4958 5.99584L7.93334 13.9958L4.49584 10.3595" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </g>
                      </svg>
                    ) : (
                      <>
                        <div aria-hidden="true" className="absolute border-[#99a1af] border-[1.108px] border-solid inset-0 pointer-events-none" />
                        <div className="bg-white size-[19.992px]" />
                      </>
                    )}
                  </button>
                  <div className="h-[20px] relative shrink-0 flex-1" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
                      <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">[필수] 만 14세 이상입니다</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setModalOpen('age14')}
                    className="relative shrink-0 size-[15.998px] cursor-pointer"
                    data-name="Icon"
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icon">
                        <path d={svgPaths.p1a26df80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
                      </g>
                    </svg>
                  </button>
                </div>

                {/* Terms of Service */}
                <div className="content-stretch flex gap-[11.995px] h-[43.982px] items-center relative shrink-0 w-full" data-name="Button">
                  <button
                    onClick={() => handleCheckboxChange('terms')}
                    className="relative shrink-0 size-[19.992px] cursor-pointer"
                    data-name="Container"
                  >
                    {formData.terms ? (
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="Container">
                          <rect fill="#F360C0" height="19.9917" width="19.9917" />
                          <path d="M15.4958 5.99584L7.93334 13.9958L4.49584 10.3595" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </g>
                      </svg>
                    ) : (
                      <>
                        <div aria-hidden="true" className="absolute border-[#99a1af] border-[1.108px] border-solid inset-0 pointer-events-none" />
                        <div className="bg-white size-[19.992px]" />
                      </>
                    )}
                  </button>
                  <div className="h-[20px] relative shrink-0 flex-1" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
                      <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">[필수] 서비스 이용약관 동의</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setModalOpen('terms')}
                    className="relative shrink-0 size-[15.998px] cursor-pointer"
                    data-name="Icon"
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icon">
                        <path d={svgPaths.p1a26df80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
                      </g>
                    </svg>
                  </button>
                </div>

                {/* Privacy Policy */}
                <div className="content-stretch flex gap-[11.995px] h-[43.982px] items-center relative shrink-0 w-full" data-name="Button">
                  <button
                    onClick={() => handleCheckboxChange('privacy')}
                    className="relative shrink-0 size-[19.992px] cursor-pointer"
                    data-name="Container"
                  >
                    {formData.privacy ? (
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="Container">
                          <rect fill="#F360C0" height="19.9917" width="19.9917" />
                          <path d="M15.4958 5.99584L7.93334 13.9958L4.49584 10.3595" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </g>
                      </svg>
                    ) : (
                      <>
                        <div aria-hidden="true" className="absolute border-[#99a1af] border-[1.108px] border-solid inset-0 pointer-events-none" />
                        <div className="bg-white size-[19.992px]" />
                      </>
                    )}
                  </button>
                  <div className="h-[20px] relative shrink-0 flex-1" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
                      <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">[필수] 개인정보 처리방침 동의</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setModalOpen('privacy')}
                    className="relative shrink-0 size-[15.998px] cursor-pointer"
                    data-name="Icon"
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icon">
                        <path d={svgPaths.p1a26df80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
                      </g>
                    </svg>
                  </button>
                </div>

                {/* Marketing */}
                <div className="content-stretch flex gap-[11.995px] h-[43.982px] items-center relative shrink-0 w-full" data-name="Button">
                  <button
                    onClick={() => handleCheckboxChange('marketing')}
                    className="relative shrink-0 size-[19.992px] cursor-pointer"
                    data-name="Container"
                  >
                    {formData.marketing ? (
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="Container">
                          <rect fill="#F360C0" height="19.9917" width="19.9917" />
                          <path d="M15.4958 5.99584L7.93334 13.9958L4.49584 10.3595" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </g>
                      </svg>
                    ) : (
                      <>
                        <div aria-hidden="true" className="absolute border-[#99a1af] border-[1.108px] border-solid inset-0 pointer-events-none" />
                        <div className="bg-white size-[19.992px]" />
                      </>
                    )}
                  </button>
                  <div className="h-[20px] relative shrink-0 flex-1" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
                      <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">[선택] 마케팅 정보 수신 동의</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setModalOpen('marketing')}
                    className="relative shrink-0 size-[15.998px] cursor-pointer"
                    data-name="Icon"
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icon">
                        <path d={svgPaths.p1a26df80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button 
              disabled={!allRequiredChecked}
              onClick={handleNext}
              className={`relative shrink-0 w-full ${allRequiredChecked ? 'bg-black' : 'bg-[#99a1af]'} transition-colors cursor-pointer disabled:cursor-not-allowed`}
              data-name="Button"
            >
              <div className="flex flex-col justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
                  <div className="content-stretch flex h-[16.616px] items-start relative shrink-0" data-name="Text">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">다음으로</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {modalOpen && (
        <>
          <div 
            className="fixed bg-[rgba(0,0,0,0.6)] inset-0 z-40"
            onClick={() => setModalOpen(null)}
          />
          <div className="fixed bg-white box-border content-stretch flex flex-col items-center left-1/2 p-px top-1/2 translate-x-[-50%] translate-y-[-50%] w-[345px] max-w-[90vw] z-50" data-name="Container">
            <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
            
            {/* Modal Header */}
            <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-[23.99px] relative w-full">
                  <div className="h-[20.996px] relative shrink-0 flex-1" data-name="Heading 2">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start relative">
                      <p className="font-['Apple_Garamond',serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">
                        {modalOpen === 'age14' && '이용 약관'}
                        {modalOpen === 'terms' && '서비스 이용약관'}
                        {modalOpen === 'privacy' && '개인정보 처리방침'}
                        {modalOpen === 'marketing' && '마케팅 정보 수신'}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setModalOpen(null)}
                    className="relative shrink-0 size-[19.992px] cursor-pointer"
                    data-name="Button"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[19.992px]">
                      <div className="h-[19.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <div className="absolute inset-1/4" data-name="Vector">
                          <div className="absolute inset-[-8.33%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                              <path d="M10.8288 0.832986L0.832986 10.8288" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-1/4" data-name="Vector">
                          <div className="absolute inset-[-8.33%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                              <path d="M0.832986 0.832986L10.8288 10.8288" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeLineWidth="1.66597" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="box-border content-stretch flex flex-col font-['Pretendard',sans-serif] gap-[6px] items-center not-italic px-0 py-[14px] relative shrink-0 max-h-[60vh] overflow-y-auto">
              <p className="h-[24px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.32px] w-[305px]">
                {modalOpen === 'age14' && '이용 약관'}
                {modalOpen === 'terms' && '서비스 이용약관'}
                {modalOpen === 'privacy' && '개인정보 처리방침'}
                {modalOpen === 'marketing' && '마케팅 정보 수신'}
              </p>
              <div className="leading-[18px] relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px] w-[305px]">
                {modalOpen === 'age14' && (
                  <>
                    <p className="mb-0">SHOWCASE 서비스는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보 보호법 등 관련 법령에 따라 만 14세 미만 아동의 개인정보를 수집하지 않으며, 회원가입을 제한하고 있습니다.</p>
                    <p className="mb-0">이에 따라, 회원가입 절차를 진행하는 사용자는 본인이 만 14세 이상임을 확인하고 동의해야만 서비스에 가입할 수 있습니다.</p>
                    <p>만약 만 14세 미만의 아동이 법정대리인의 동의 없이 본인의 정보로 가입하거나, 타인의 정보를 도용하여 가입한 사실이 확인될 경우, GAD_3은 해당 계정의 서비스 이용을 즉시 중단시키거나 계정을 삭제하는 등 필요한 조치를 취할 수 있습니다.</p>
                  </>
                )}
                {modalOpen === 'terms' && (
                  <>
                    <p className="leading-[18px] mb-0">[필수] 서비스 이용약관 동의</p>
                    <p className="leading-[18px] mb-0">본 약관은 GAD_3이 제공하는 SHOWCASE 서비스의 이용과 관련하여 GAD_3과 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
                    <p className="leading-[18px] mb-0">제1조 (목적)</p>
                    <p className="leading-[18px] mb-0">본 약관은 GAD_3(이하 "회사")이 제공하는 SHOWCASE 서비스(이하 "서비스")의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정하는 것을 목적으로 합니다.</p>
                    <p className="leading-[18px] mb-0">제2조 (정의)</p>
                    <p className="leading-[18px] mb-0">1. "서비스"라 함은 회원이 단말기(PC, 휴대폰, 스마트폰 등 포함)를 이용하여 접속할 수 있는 SHOWCASE의 모든 서비스를 의미합니다.</p>
                    <p className="leading-[18px] mb-0">2. "회원"이라 함은 본 약관에 동의하고 회사가 제공하는 서비스를 이용하는 자를 말합니다.</p>
                    <p className="leading-[18px] mb-0">3. "아이디(ID)"라 함은 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하는 문자나 숫자의 조합을 의미합니다.</p>
                    <p className="leading-[18px] mb-0">4. "비밀번호(PASSWORD)"라 함은 회원이 부여받은 아이디와 일치되는 회원임을 확인하고 비밀 보호를 위해 회원 자신이 설정한 문자 또는 숫자의 조합을 의미합니다.</p>
                    <p className="leading-[18px] mb-0">제3조 (약관의 명시, 효력 및 개정)</p>
                    <p className="leading-[18px] mb-0">1. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면 또는 연결 화면에 게시합니다.</p>
                    <p className="leading-[18px] mb-0">2. 회사는 관련 법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있습니다.</p>
                    <p className="leading-[18px] mb-0">3. 회사가 약관을 개정할 경우, 적용일자 및 개정 사유를 명시하여 현행 약관과 함께 서비스 초기 화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 회원에게 불리한 약관의 개정인 경우에는 그 적용일자 30일 이전부터 공지하며, 이메일, SMS 등의 전자적 수단을 통해 개별 통지합니다.</p>
                    <p className="leading-[18px] mb-0">4. 회사가 전항에 따라 개정 약관을 공지하면서 회원에게 약관 개정 적용일까지 거부 의사를 표시하지 않으면 약관 개정에 동의한 것으로 간주한다는 내용을 명확히 고지하였음에도 회원이 명시적으로 거부 의사를 표시하지 않은 경우, 회원이 개정 약관에 동의한 것으로 간주합니다. 회원이 개정 약관에 동의하지 않는 경우, 회원은 이용 계약을 해지할 수 있습니다.</p>
                    <p className="leading-[18px] mb-0">제4조 (회원가입)</p>
                    <p className="leading-[18px] mb-0">1. 회원가입은 이용자가 약관의 내용에 대하여 동의를 한 후 회원가입 신청을 하고, 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.</p>
                    <p className="leading-[18px] mb-0">2. 회사는 다음 각 호에 해당하는 신청에 대해서는 승낙을 거절할 수 있습니다.</p>
                    <p className="leading-[18px] mb-0">- 실명이 아니거나 타인의 명의를 도용한 경우</p>
                    <p className="leading-[18px] mb-0">- 허위의 정보를 기재하거나 회사가 요구하는 내용을 기재하지 않은 경우</p>
                    <p className="leading-[18px] mb-0">- 만 14세 미만의 아동이 법정대리인의 동의 없이 가입을 신청한 경우</p>
                    <p className="leading-[18px] mb-0">- 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 제반 사항을 위반하여 신청한 경우</p>
                    <p className="leading-[18px] mb-0">제5조 (개인정보의 보호 및 관리)</p>
                    <p className="leading-[18px] mb-0">1. 회사는 관련 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력하며, 개인정보의 보호 및 사용에 대해서는 관련 법령 및 회사의 개인정보처리방침에 따릅니다.</p>
                    <p className="leading-[18px] mb-0">2. 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보보호를 위한 보안 시스템을 갖추고 개인정보처리방침을 공시하고 준수합니다.</p>
                    <p className="leading-[18px] mb-0">3. 서비스 초기 화면 또는 연결 화면 이외에 링크된 제3자가 제공하는 서비스에는 회사의 개인정보처리방침이 적용되지 않습니다.</p>
                    <p className="leading-[18px] mb-0">제6조 (회원의 아이디 및 비밀번호 관리 의무)</p>
                    <p className="leading-[18px] mb-0">1. 회원은 아이디와 비밀번호에 관한 관리 책임이 있으며, 이를 제3자가 이용하도록 해서는 안 됩니다.</p>
                    <p className="leading-[18px] mb-0">2. 회사는 회원의 아이디가 개인정보 유출 우려가 있거나, 반사회적 또는 공서양속에 어긋나거나, 회사 또는 서비스의 운영자로 오인할 우려가 있는 경우, 해당 아이디의 사용을 제한할 수 있습니다.</p>
                    <p className="leading-[18px] mb-0">3. 회원은 아이디 및 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우, 즉시 회사에 통보하고 회사의 안내에 따라야 합니다.</p>
                    <p className="leading-[18px] mb-0">4. 제3항의 경우 해당 회원이 회사에 그 사실을 통지하지 않거나 통지한 경우에도 회사의 안내에 따르지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.</p>
                    <p className="leading-[18px] mb-0">제7조 (회원 탈퇴 및 자격 상실 등)</p>
                    <p className="leading-[18px] mb-0">1. 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며, 회사는 즉시 회원 탈퇴를 처리합니다.</p>
                    <p className="leading-[18px] mb-0">2. 회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원 자격을 제한 및 정지시킬 수 있습니다.</p>
                    <p className="leading-[18px] mb-0">- 가입 신청 시 허위 내용을 등록한 경우</p>
                    <p className="leading-[18px] mb-0">- 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</p>
                    <p className="leading-[18px] mb-0">- 서비스를 이용하여 법령 또는 본 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</p>
                    <p className="leading-[18px] mb-0">3. 회사가 회원 자격을 제한·정지시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 회사는 회원 자격을 상실시킬 수 있습니다.</p>
                    <p className="leading-[18px]">4. 회사가 회원 자격을 상실시키는 경우에는 회원 등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원 등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.</p>
                  </>
                )}
                {modalOpen === 'privacy' && (
                  <>
                    <p className="leading-[18px] mb-0">[필수] 개인정보 처리방침 동의</p>
                    <p className="leading-[18px] mb-0">GAD_3은 SHOWCASE 서비스를 제공함에 있어 개인정보 보호법 등 관련 법령을 준수하며, 회원의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
                    <p className="leading-[18px] mb-0">1. 개인정보의 수집 및 이용 목적</p>
                    <p className="leading-[18px] mb-0">회사는 다음의 목적을 위해 개인정보를 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며, 이용 목적이 변경될 시에는 사전 동의를 구합니다.</p>
                    <p className="leading-[18px] mb-0">[회원 가입 및 관리]</p>
                    <p className="leading-[18px] mb-0">회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원 자격 유지·관리, 서비스 부정 이용 방지, 각종 고지·통지 등</p>
                    <p className="leading-[18px] mb-0">[재화 또는 서비스 제공]</p>
                    <p className="leading-[18px] mb-0">콘텐츠 제공, 맞춤 서비스 제공, 본인 인증, 요금 결제·정산 등</p>
                    <p className="leading-[18px] mb-0">[마케팅 및 광고 활용]</p>
                    <p className="leading-[18px] mb-0">신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여 기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</p>
                    <p className="leading-[18px] mb-0">2. 수집하는 개인정보 항목</p>
                    <p className="leading-[18px] mb-0">회사는 회원가입, 원활한 고객 상담, 각종 서비스 제공을 위해 최초 회원가입 시 아래와 같은 개인정보를 수집하고 있습니다.</p>
                    <p className="leading-[18px] mb-0">[필수 항목]</p>
                    <p className="leading-[18px] mb-0">- 이메일 주소, 비밀번호, 이름, 휴대폰 번호</p>
                    <p className="leading-[18px] mb-0">[선택 항목]</p>
                    <p className="leading-[18px] mb-0">- 프로필 사진, 생년월일, 성별</p>
                    <p className="leading-[18px] mb-0">[서비스 이용 과정에서 자동으로 생성되어 수집될 수 있는 항목]</p>
                    <p className="leading-[18px] mb-0">- IP 주소, 쿠키, 서비스 이용 기록, 접속 로그, 기기 정보</p>
                    <p className="leading-[18px] mb-0">3. 개인정보의 보유 및 이용 기간</p>
                    <p className="leading-[18px] mb-0">회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.</p>
                    <p className="leading-[18px] mb-0">- 회원 탈퇴 시까지 (단, 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지)</p>
                    <p className="leading-[18px] mb-0">- 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지 보유합니다.</p>
                    <p className="leading-[18px] mb-0">가. 전자상거래 등에서의 소비자 보호에 관한 법률에 따른 표시·광고, 계약 내용 및 이행 등에 관한 기록: 6개월</p>
                    <p className="leading-[18px] mb-0">나. 소비자의 불만 또는 분쟁 처리에 관한 기록: 3년</p>
                    <p className="leading-[18px] mb-0">다. 부정 이용 등에 관한 기록: 5년</p>
                    <p className="leading-[18px] mb-0">4. 개인정보의 제3자 제공</p>
                    <p className="leading-[18px] mb-0">회사는 원칙적으로 회원의 개인정보를 제1조(개인정보의 수집 및 이용 목적)에서 명시한 범위 내에서 처리하며, 회원의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
                    <p className="leading-[18px] mb-0">- 회원이 사전에 공개에 동의한 경우</p>
                    <p className="leading-[18px] mb-0">- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                    <p className="leading-[18px] mb-0">5. 개인정보 처리의 위탁</p>
                    <p className="leading-[18px] mb-0">회사는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 외부 전문업체에 위탁하여 운영하고 있습니다.</p>
                    <p className="leading-[18px] mb-0">- 위탁받는 자: [업체명]</p>
                    <p className="leading-[18px] mb-0">- 위탁하는 업무의 내용: 서비스 시스템 유지보수, 고객 상담 등</p>
                    <p className="leading-[18px] mb-0">6. 정보주체의 권리·의무 및 행사 방법</p>
                    <p className="leading-[18px] mb-0">회원은 개인정보 주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
                    <p className="leading-[18px] mb-0">가. 개인정보 열람 요구</p>
                    <p className="leading-[18px] mb-0">나. 오류 등이 있을 경우 정정 요구</p>
                    <p className="leading-[18px] mb-0">다. 삭제 요구</p>
                    <p className="leading-[18px] mb-0">라. 처리 정지 요구</p>
                    <p className="leading-[18px] mb-0">7. 개인정보 보호책임자</p>
                    <p className="leading-[18px] mb-0">회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                    <p className="leading-[18px] mb-0">- 성명: [이름]</p>
                    <p className="leading-[18px] mb-0">- 직책: [직책명]</p>
                    <p className="leading-[18px] mb-0">- 연락처: [전화번호]</p>
                    <p className="leading-[18px] mb-0">8. 개인정보의 파기 절차 및 방법</p>
                    <p className="leading-[18px] mb-0">회사는 원칙적으로 개인정보 처리 목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.</p>
                    <p className="leading-[18px] mb-0">- 파기 절차: 회원이 입력한 정보는 목적 달성 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.</p>
                    <p className="leading-[18px] mb-0">- 파기 방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</p>
                    <p className="leading-[18px] mb-0">9. 개인정보 처리방침의 변경</p>
                    <p className="leading-[18px]">이 개인정보 처리방침은 2023년 2월에 제정되었으며, 법령, 정책 또는 보안 기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 변경되는 개인정보 처리방침을 시행하기 최소 7일 전에 홈페이지를 통해 변경 이유 및 내용 등을 공지하도록 하겠습니다.</p>
                  </>
                )}
                {modalOpen === 'marketing' && (
                  <>
                    <p className="leading-[18px] mb-0">GAD_3은 SHOWCASE 서비스의 신규 서비스, 이벤트, 할인 혜택 등 유용한 정보를 제공하기 위해 아래와 같이 마케팅 정보를 수신하는 데 동의를 받고자 합니다.</p>
                    <ol className="list-decimal mb-0" start="1">
                      <li className="mb-0 ms-[18px]">
                        <span className="leading-[18px]">수집·이용 목적: 신규 서비스, 이벤트, 프로모션, 할인 혜택 등 광고성 정보 제공 및 맞춤형 광고 제공</span>
                      </li>
                      <li className="mb-0 ms-[18px]">
                        <span className="leading-[18px]">수집 항목: 이메일 주소, 휴대폰 번호 (수집하는 항목에 따라 기재)</span>
                      </li>
                      <li className="mb-0 ms-[18px]">
                        <span className="leading-[18px]">수신 채널: 이메일, 문자메시지(SMS/LMS/MMS), 앱 푸시 알림</span>
                      </li>
                      <li className="ms-[18px]">
                        <span className="leading-[18px]">보유 및 이용 기간: 회원 탈퇴 시 또는 마케팅 정보 수신 동의 철회 시까지</span>
                      </li>
                    </ol>
                    <p className="leading-[18px]">※ 귀하는 본 동의를 거부할 권리가 있으며, 동의를 거부하시더라도 SHOWCASE의 기본 서비스 이용에는 제한이 없습니다. 다만, 동의 거부 시 유용한 혜택 및 정보를 제공받지 못할 수 있습니다.</p>
                  </>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="h-[99.283px] relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[1.108px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-col items-center justify-center size-full">
                <div className="box-border content-stretch flex flex-col h-[99.283px] items-center justify-center pb-0 pt-[5.1px] px-[23.99px] relative w-full">
                  <button 
                    onClick={() => setModalOpen(null)}
                    className="bg-black relative shrink-0 w-full cursor-pointer"
                    data-name="Button"
                  >
                    <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-col justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
                        <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
                          <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">닫기</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}