import { useState } from 'react';
import svgPaths from "../imports/svg-cnim5xb21f";

interface FindPasswordProps {
  onBack: () => void;
}

function Showcase() {
  return (
    <div className="h-[15.223px] relative shrink-0 w-[86px]" data-name="SHOWCASE">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 16">
        <g id="SHOWCASE">
          <path d={svgPaths.p18193400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3e727180} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p182c5428} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p22c55700} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p2b7c4e00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p27e05300} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p15f36600} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p1673c000} fill="var(--fill-0, black)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

export default function FindPassword({ onBack }: FindPasswordProps) {
  const [step, setStep] = useState<'input' | 'sent'>('input');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = username && email && isValidEmail(email);

  const handleSubmit = () => {
    if (isFormValid) {
      // 실제로는 API 호출하여 비밀번호 재설정 이메일 발송
      setStep('sent');
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex h-[70.083px] items-center pl-[20px] pr-0 py-0 relative w-full">
            <button onClick={onBack} className="cursor-pointer">
              <Showcase />
            </button>
            <div className="h-0 shrink-0 w-[19.992px]" data-name="Container" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center w-full px-[23.99px] pb-[100px]">
        <div className="w-full max-w-[342px]">
          {step === 'input' ? (
            <>
              {/* Title */}
              <div className="mb-[40px]">
                <h1 className="font-['Pretendard',sans-serif] font-semibold leading-[32px] not-italic text-[24px] text-black tracking-[-0.48px] mb-[8px]">
                  비밀번호 찾기
                </h1>
                <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic text-[#4a5565] text-[12px] tracking-[-0.24px]">
                  가입 시 사용한 아이디와 이메일을 입력해 주세요.
                </p>
              </div>

              {/* Username Input */}
              <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full mb-[20px]" data-name="Container">
                <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">아이디</p>
                </div>
                <div className="h-[47.184px] relative shrink-0 w-full" data-name="Text Input">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="아이디를 입력하세요"
                      className="bg-transparent border-0 box-border content-stretch flex h-[47.184px] items-center px-[16px] py-[12px] relative w-full font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px] text-[#4a5565] placeholder:text-[#99a1af] outline-none"
                    />
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                </div>
              </div>

              {/* Email Input */}
              <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full mb-[24px]" data-name="Container">
                <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">이메일</p>
                </div>
                <div className="h-[47.184px] relative shrink-0 w-full" data-name="Text Input">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                      placeholder="이메일을 입력하세요"
                      className="bg-transparent border-0 box-border content-stretch flex h-[47.184px] items-center px-[16px] py-[12px] relative w-full font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px] text-[#4a5565] placeholder:text-[#99a1af] outline-none"
                    />
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                </div>
                {email && !isValidEmail(email) && (
                  <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                    <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff4444] text-[12px] tracking-[-0.24px]">올바른 이메일 형식을 입력해주세요.</p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`h-[47.184px] relative shrink-0 w-full cursor-pointer transition-colors ${
                  isFormValid 
                    ? 'bg-[#F360C0] hover:bg-[#d54aa8]' 
                    : 'bg-gray-200'
                }`}
                data-name="Button"
              >
                {isFormValid && (
                  <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                )}
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[47.184px] items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
                    <p className={`font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre ${
                      isFormValid ? 'text-white' : 'text-[#99a1af]'
                    }`}>
                      비밀번호 재설정 메일 발송
                    </p>
                  </div>
                </div>
              </button>

              {/* Back to Login */}
              <div className="mt-[24px] text-center">
                <button 
                  onClick={onBack}
                  className="font-['Pretendard',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] tracking-[-0.28px] cursor-pointer hover:text-[#F360C0] transition-colors"
                >
                  로그인으로 돌아가기
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Email Sent Success */}
              <div className="text-center">
                <div className="mb-[40px]">
                  <div className="w-[60px] h-[60px] bg-[#F360C0] rounded-full flex items-center justify-center mx-auto mb-[24px]">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h1 className="font-['Pretendard',sans-serif] font-semibold leading-[32px] not-italic text-[24px] text-black tracking-[-0.48px] mb-[16px]">
                    메일을 확인해 주세요
                  </h1>
                  <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] tracking-[-0.28px] mb-[8px]">
                    비밀번호 재설정 링크를
                  </p>
                  <div className="bg-[#f5f5f5] px-[24px] py-[16px] rounded-[4px] mb-[8px]">
                    <p className="font-['Pretendard',sans-serif] font-semibold leading-[20px] not-italic text-[16px] text-black tracking-[-0.32px] break-all">
                      {email}
                    </p>
                  </div>
                  <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] tracking-[-0.28px] mb-[16px]">
                    로 발송했습니다.
                  </p>
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic text-[#99a1af] text-[12px] tracking-[-0.24px]">
                    메일함을 확인하신 후 링크를 클릭하여<br />
                    비밀번호를 재설정해 주세요.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-[12px]">
                  <button
                    onClick={onBack}
                    className="h-[47.184px] relative shrink-0 w-full cursor-pointer bg-[#F360C0] hover:bg-[#d54aa8] transition-colors"
                    data-name="Button"
                  >
                    <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[47.184px] items-center justify-center relative w-full">
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
                        <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-white text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">
                          로그인하기
                        </p>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setStep('input');
                      setUsername('');
                      setEmail('');
                    }}
                    className="font-['Pretendard',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] tracking-[-0.28px] cursor-pointer hover:text-[#F360C0] transition-colors"
                  >
                    다시 입력하기
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
