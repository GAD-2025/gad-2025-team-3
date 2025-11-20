import svgPaths from "../imports/svg-menh3de8oj";

interface SettingsPageProps {
  onBack: () => void;
  onLogout: () => void;
}

export default function SettingsPage({ onBack, onLogout }: SettingsPageProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex h-[70.083px] items-center justify-between px-[20px] py-0 relative w-full">
            {/* Back Button */}
            <button 
              onClick={onBack}
              className="content-stretch flex flex-col items-start relative shrink-0 size-[19.992px] cursor-pointer" 
              data-name="Button"
            >
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
            </button>
            <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Settings</p>
            <div className="h-0 shrink-0 w-[20px]" data-name="Container" />
          </div>
        </div>
      </div>

      {/* Account Section */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
              <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Account</p>
            </div>
            {/* 비밀번호 변경 */}
            <div className="h-[56.2px] relative shrink-0 w-full" data-name="Button">
              <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between px-[17.6px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[116.638px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[116.638px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={svgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d={svgPaths.p1bf79e00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                          <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">비밀번호 변경</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* 이메일 변경 */}
            <div className="h-[56.2px] relative shrink-0 w-full" data-name="Button">
              <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between px-[17.6px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[103.113px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[103.113px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                          <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">이메일 변경</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
              <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Notifications</p>
            </div>
            {/* 알림 설정 */}
            <div className="h-[56.2px] relative shrink-0 w-full" data-name="Button">
              <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between px-[17.6px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[89.588px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[89.588px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={svgPaths.p3b7be120} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d={svgPaths.p1f3d9f80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                          <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">알림 설정</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="h-[204px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] h-[204px] items-start pb-[1.6px] pt-[24px] px-[24px] relative w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
              <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Privacy</p>
            </div>
            {/* 개인정보 처리방침 */}
            <div className="h-[56.2px] relative shrink-0 w-full" data-name="Button">
              <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between px-[17.6px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[143.688px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[143.688px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={svgPaths.p337986c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                          <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">개인정보 처리방침</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* 서비스 이용약관 */}
            <div className="h-[56.2px] relative shrink-0 w-full" data-name="Button">
              <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between px-[17.6px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[130.163px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[130.163px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={svgPaths.p3b957700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="h-[21px] relative shrink-0 w-[98.162px]" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[98.162px]">
                          <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">서비스 이용약관</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="h-[268.2px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="absolute content-stretch flex gap-[10px] items-center left-[24px] top-[24.32px] w-[342px]" data-name="Heading 2">
          <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Support</p>
        </div>
        {/* 자주 묻는 질문 */}
        <div className="absolute box-border content-stretch flex h-[56.2px] items-center justify-between left-[24px] px-[17.6px] py-[1.6px] top-[58px] w-[342px]" data-name="Button">
          <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="h-[21px] relative shrink-0 w-[120.125px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[120.125px]">
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_20_770)" id="Icon">
                    <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p31d9b780} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_20_770">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                  <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">자주 묻는 질문</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Icon">
                <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
        </div>
        {/* 문의하기 */}
        <div className="absolute box-border content-stretch flex h-[56.2px] items-center justify-between left-[24px] px-[17.6px] py-[1.6px] top-[122.2px] w-[342px]" data-name="Button">
          <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="h-[21px] relative shrink-0 w-[86.1px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[86.1px]">
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Icon">
                    <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
              <div className="h-[21px] relative shrink-0 w-[54.1px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[54.1px]">
                  <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">문의하기</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Icon">
                <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
        </div>
        {/* Design System */}
        <div className="absolute box-border content-stretch flex h-[56.2px] items-center justify-between left-[24px] px-[17.6px] py-[1.6px] top-[186.4px] w-[342px]" data-name="Button">
          <div aria-hidden="true" className="absolute border-[#f360c0] border-[1.6px] border-solid inset-0 pointer-events-none" />
          <div className="h-[21px] relative shrink-0 w-[124.05px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[124.05px]">
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Icon">
                    <path d={svgPaths.p2898e700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
              <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                  <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">Design System</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Icon">
                <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Danger Zone Section */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
              <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#eb210f] text-[16px] text-nowrap whitespace-pre">Danger Zone</p>
            </div>
            {/* 로그아웃 */}
            <button 
              onClick={onLogout}
              className="h-[56.2px] relative shrink-0 w-full cursor-pointer" 
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between pl-[17.6px] pr-[238.3px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[86.1px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[86.1px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={svgPaths.p14ca9100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d="M17.5 10H7.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d={svgPaths.p38966ca0} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="h-[21px] relative shrink-0 w-[54.1px]" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[54.1px]">
                          <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">로그아웃</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            {/* 회원 탈퇴 */}
            <button 
              className="h-[56.2px] relative shrink-0 w-full cursor-pointer" 
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border-[#eb210f] border-[1.6px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between pl-[17.6px] pr-[234.812px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[89.588px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[89.588px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={svgPaths.pe595f00} id="Vector" stroke="var(--stroke-0, #EB210F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #EB210F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #EB210F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                          <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[#eb210f] text-[14px] text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">회원 탈퇴</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="box-border content-stretch flex flex-col gap-[4px] h-[58px] items-start px-[24px] py-0 relative shrink-0 w-[390px]" data-name="Container">
        <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Paragraph">
          <p className="basis-0 font-['EB_Garamond',serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center tracking-[0.3px]">Exhibition Hotel v1.0.0</p>
        </div>
        <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Paragraph">
          <p className="basis-0 font-['EB_Garamond',serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center tracking-[0.3px]">© 2024 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}