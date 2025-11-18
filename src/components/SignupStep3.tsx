import { useState } from 'react';
import svgPaths from "../imports/svg-qgj2slx6tc";

interface SignupStep3Props {
  onNext: (nickname: string, bio: string) => void;
  onBack: () => void;
}

export default function SignupStep3({ onNext, onBack }: SignupStep3Props) {
  const [nickname, setNickname] = useState('');
  const [bio, setBio] = useState('');
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);
  const [nicknameError, setNicknameError] = useState('');

  // 닉네임 유효성 검사 함수
  const isValidNickname = (name: string) => {
    // 2-12자 길이 체크
    if (name.length < 2 || name.length > 12) {
      return { valid: false, message: '닉네임은 2-12자로 입력해주세요.' };
    }
    // 한글/영문/숫자만 허용
    const regex = /^[가-힣a-zA-Z0-9]+$/;
    if (!regex.test(name)) {
      return { valid: false, message: '한글, 영문, 숫자만 사용 가능합니다.' };
    }
    return { valid: true, message: '' };
  };

  const handleNicknameCheck = () => {
    const validation = isValidNickname(nickname);
    if (!validation.valid) {
      setNicknameError(validation.message);
      setIsNicknameChecked(false);
      setNicknameValid(false);
      return;
    }
    
    // 유효성 검사 통과 시 중복 확인
    setNicknameError('');
    setIsNicknameChecked(true);
    setNicknameValid(true);
  };

  const isFormValid = nickname && isNicknameChecked && nicknameValid;

  const handleNext = () => {
    if (isFormValid) {
      onNext(nickname, bio);
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[70.083px] items-start pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[68.976px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[68.976px] items-center justify-between px-[23.99px] py-0 relative w-full">
              {/* Back Button */}
              <button className="relative shrink-0 size-[19.992px]" data-name="Button" onClick={onBack}>
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
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[-0.24px]">01. 약관 동의</p>
                </div>
              </div>
              <div className="h-[15.007px] relative shrink-0 w-[11.493px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.007px] items-start relative w-[11.493px]">
                  <p className="basis-0 font-['Playfair_Display',serif] font-normal grow leading-[15px] min-h-px min-w-px relative shrink-0 text-[10px] text-gray-200 tracking-[1.5px] uppercase">→</p>
                </div>
              </div>
              <div className="relative shrink-0 w-[70.395px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-[70.395px]">
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">02. 정보 입력</p>
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
                  <p className="mb-0">쇼케이스에서 사용할</p>
                  <p>프로필을 설정해 주세요</p>
                </div>
              </div>
              {/* Description */}
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">본인의 프로필을 개성있게 꾸며 보세요.</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
              {/* Nickname */}
              <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">닉네임</p>
                </div>
                <div className="h-[47.184px] relative shrink-0 w-full" data-name="Container">
                  <div className="size-full">
                    <div className="content-stretch flex gap-[7.997px] h-[47.184px] items-start relative w-full">
                      <div className="basis-0 grow h-[47.184px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <input
                            type="text"
                            value={nickname}
                            onChange={(e) => {
                              setNickname(e.target.value);
                              setIsNicknameChecked(false);
                              setNicknameValid(false);
                              setNicknameError('');
                            }}
                            placeholder="닉네임을 입력하세요"
                            className="bg-transparent border-0 box-border content-stretch flex h-[47.184px] items-center px-[16px] py-[12px] relative w-full font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px] text-[#4a5565] placeholder:text-[#99a1af] outline-none"
                          />
                        </div>
                        <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                      </div>
                      <button
                        onClick={handleNicknameCheck}
                        disabled={!nickname}
                        className={`h-[47.184px] relative shrink-0 w-[85.765px] cursor-pointer ${nickname ? 'bg-black' : 'bg-gray-200'}`}
                        data-name="Button"
                      >
                        {nickname && (
                          <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                        )}
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[47.184px] items-center justify-center relative w-[85.765px]">
                          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
                            <p className={`font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre ${nickname ? 'text-white' : 'text-[#99a1af]'}`}>중복확인</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                {isNicknameChecked && nicknameValid ? (
                  <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                    <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#15c440] text-[12px] tracking-[-0.24px]">사용할 수 있는 닉네임입니다.</p>
                  </div>
                ) : nicknameError ? (
                  <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                    <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff4444] text-[12px] tracking-[-0.24px]">{nicknameError}</p>
                  </div>
                ) : (
                  <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Paragraph">
                    <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">2-12자, 한글/영문/숫자 가능</p>
                  </div>
                )}
              </div>

              {/* Bio */}
              <div className="content-stretch flex flex-col gap-[7.997px] h-[162.391px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">자기소개</p>
                </div>
                <div className="h-[110.119px] relative shrink-0 w-full" data-name="Text Area">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <textarea
                      value={bio}
                      onChange={(e) => {
                        if (e.target.value.length <= 100) {
                          setBio(e.target.value);
                        }
                      }}
                      placeholder="자신을 소개해주세요 (선택)"
                      className="bg-transparent border-0 box-border content-stretch flex h-[110.119px] items-start px-[16px] py-[12px] relative w-full font-['Pretendard',sans-serif] leading-[20px] not-italic resize-none text-[14px] tracking-[-0.28px] text-[#4a5565] placeholder:text-[#99a1af] outline-none"
                    />
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                </div>
                <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Paragraph">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-right tracking-[-0.24px]">{bio.length} / 100</p>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button 
              disabled={!isFormValid}
              onClick={handleNext}
              className={`relative shrink-0 w-full ${isFormValid ? 'bg-black' : 'bg-[#99a1af]'} transition-colors cursor-pointer disabled:cursor-not-allowed`}
              data-name="Button"
            >
              <div className="flex flex-col justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
                  <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">{`다음으로 `}</p>
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