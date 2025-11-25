import { useState } from 'react';
import svgPaths from "../imports/svg-cnim5xb21f";

interface LoginProps {
  onLogin: (user: any) => void; // Allow passing user data on login
  onSignup: () => void;
  onFindId: () => void;
  onFindPassword: () => void;
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

export default function Login({ onLogin, onSignup, onFindId, onFindPassword }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = username && password;

  const handleLogin = async () => {
    if (!isFormValid) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        alert('로그인에 성공했습니다!');
        onLogin(data); // Pass user data to the parent component
      } else {
        // 백엔드에서 보낸 에러 메시지를 표시
        alert(data.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('Login request failed:', error);
      alert('로그인 요청 중 오류가 발생했습니다. 서버 상태를 확인해주세요.');
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex h-[70.083px] items-center pl-[20px] pr-0 py-0 relative w-full">
            <Showcase />
            <div className="h-0 shrink-0 w-[19.992px]" data-name="Container" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[23.99px] items-start pb-0 pt-[89px] px-[23.99px] relative w-full">
            {/* Heading */}
            <div className="content-stretch flex flex-col gap-[7.997px] h-[105.982px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[65px] relative shrink-0 w-[277px]" data-name="Heading 2">
                <div className="absolute font-['Pretendard',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-[0.89px] tracking-[-0.48px] whitespace-pre">
                  <p className="mb-0">쇼케이스에 오신 것을</p>
                  <p>환영합니다</p>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                <div className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">
                  <p className="mb-0">로그인 또는 회원가입을 통해</p>
                  <p>나만의 쇼케이스를 열어 보세요.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="h-[323.6px] relative shrink-0 w-[342px]" data-name="Form">
              {/* ID Input */}
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[79.2px] items-start left-0 top-0 w-[342px]" data-name="Container">
                <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">아이디</p>
                </div>
                <div className="h-[56.2px] relative shrink-0 w-full" data-name="Text Input">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex h-[56.2px] items-center p-[16px] relative w-full">
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="아이디를 입력하세요"
                        className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.28px] w-full outline-none bg-transparent"
                        style={{ color: username ? '#4a5565' : '#99a1af' }}
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </div>
              </div>

              {/* Password Input */}
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[79.2px] items-start left-0 top-[95.2px] w-[342px]" data-name="Container">
                <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">비밀번호</p>
                </div>
                <div className="h-[56.2px] relative shrink-0 w-full" data-name="Password Input">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex h-[56.2px] items-center p-[16px] relative w-full">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력하세요"
                        className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.28px] w-full outline-none bg-transparent"
                        style={{ color: password ? '#4a5565' : '#99a1af' }}
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </div>
              </div>

              {/* Login Button */}
              <button 
                onClick={handleLogin}
                disabled={!isFormValid}
                className={`absolute box-border content-stretch flex gap-[12px] h-[53.2px] items-center justify-center left-0 pl-0 pr-[0.013px] py-0 top-[206.4px] w-[342px] cursor-pointer disabled:cursor-not-allowed ${isFormValid ? 'bg-black' : 'bg-[#99a1af]'}`}
                data-name="Button"
              >
                {isFormValid && <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />}
                <div className="relative shrink-0" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">로그인하기</p>
                  </div>
                </div>
              </button>

              {/* Bottom Links */}
              <div className="absolute h-[48px] left-0 top-[275.6px] w-[342px]" data-name="Container">
                <div className="absolute content-stretch flex items-center justify-between left-[calc(50%-0.17px)] top-[24px] translate-x-[-50%] w-[326.9px]">
                  <button onClick={onFindId} className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-name="Button">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">아이디 찾기</p>
                  </button>
                  <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
                    <p className="font-['Apple_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[0.3px] w-full">|</p>
                  </div>
                  <button onClick={onFindPassword} className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-name="Button">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">비밀번호 찾기</p>
                  </button>
                  <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
                    <p className="font-['Apple_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[0.3px] w-full">|</p>
                  </div>
                  <button onClick={onSignup} className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-name="Button">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">회원가입</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
