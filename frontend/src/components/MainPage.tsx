import { useState } from 'react';
import { motion } from 'framer-motion';
import svgPaths from "../imports/svg-hpi4lmxewj";

interface MainPageProps {
  onNavigateToProfile: () => void;
  onNavigateToMyExhibition: () => void;
  onNavigateToStatistics?: () => void;
  onNavigateToExplore?: () => void;
  onNavigateToFavorites?: () => void;
}

export default function MainPage({ 
  onNavigateToProfile, 
  onNavigateToMyExhibition, 
  onNavigateToStatistics,
  onNavigateToExplore,
  onNavigateToFavorites
}: MainPageProps) {
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex h-[70.083px] items-center justify-between px-[20px] py-0 relative w-full">
            {/* SHOWCASE Logo */}
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
            {/* Empty Container */}
            <div className="h-0 shrink-0 w-[19.992px]" data-name="Container" />
            {/* User Icon Button */}
            <button 
              onClick={onNavigateToProfile}
              className="content-stretch flex flex-col items-start relative shrink-0 size-[20px] cursor-pointer" 
              data-name="Button"
            >
              <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-7.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
                      <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
                  <div className="absolute inset-[-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                      <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[23.99px] items-start pb-0 pt-[48px] px-[23.99px] relative w-full">
            {/* Decorative Icon */}
            <div className="h-[48.917px] relative shrink-0 w-[40.648px]" data-name="Group">
              <div className="absolute bottom-0 left-[-2.46%] right-0 top-[-2.04%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 50">
                  <g id="Group">
                    <path d={svgPaths.p1baecc00} fill="var(--stroke-0, #F360C0)" id="Union" />
                    <path d={svgPaths.pa03f080} id="Ellipse 6108" stroke="var(--stroke-0, #F360C0)" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Heading */}
            <div className="content-stretch flex flex-col gap-[7.997px] h-[105.982px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[49px] relative shrink-0 w-[277px]" data-name="Heading 2">
                <p className="absolute font-['EB_Garamond',serif] font-bold leading-[48px] left-0 not-italic text-[48px] text-black text-nowrap top-[0.89px] whitespace-pre">SHOWCASE</p>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">나만의 팬 쇼케이스를 만들어 보세요 !</p>
              </div>
            </div>

            {/* Grid Container */}
            <div className="h-[460px] relative shrink-0 w-[342px]" data-name="Container">
              {/* 04 둘러보기 - Large Box */}
              <motion.button 
                onClick={() => onNavigateToExplore && onNavigateToExplore()}
                onHoverStart={() => setHoveredMenu(4)}
                onHoverEnd={() => setHoveredMenu(null)}
                className="absolute box-border content-stretch flex flex-col items-start left-[119.38px] p-[1.6px] size-[224px] top-[-0.05px] cursor-pointer overflow-hidden"
                data-name="Button"
                animate={{ 
                  backgroundColor: hoveredMenu === 4 ? '#f360c0' : '#ffffff'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none z-10" />
                <div className="h-[220.8px] relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex gap-[8px] h-[220.8px] items-center justify-center pl-0 pr-[0.013px] py-0 relative w-full">
                      <div className="relative shrink-0 w-[30.638px]" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center relative w-[30.638px]">
                          <motion.p 
                            className="font-['EB_Garamond',serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] w-full"
                            animate={{ color: hoveredMenu === 4 ? '#ffffff' : '#000000' }}
                            transition={{ duration: 0.3 }}
                          >04</motion.p>
                        </div>
                      </div>
                      <div className="h-[18px] relative shrink-0 w-[47.575px]" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[47.575px]">
                          <motion.p 
                            className="absolute font-['Pretendard',sans-serif] leading-[18px] left-[-0.14px] not-italic text-[12px] text-nowrap top-[0.04px] tracking-[-0.24px] whitespace-pre"
                            animate={{ color: hoveredMenu === 4 ? '#ffffff' : '#000000' }}
                            transition={{ duration: 0.3 }}
                          >둘러보기</motion.p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>

              {/* Black Box */}
              <div className="absolute bg-black left-[119.38px] size-[106px] top-[235.95px]" data-name="Container">
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              </div>

              {/* Empty Box Bottom Left */}
              <div className="absolute h-[106px] left-[0.38px] top-[353.95px] w-[226px]" data-name="Container">
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              </div>

              {/* Empty Box Right */}
              <div className="absolute h-[224px] left-[236.38px] top-[235.95px] w-[106px]" data-name="Container">
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              </div>

              {/* 01 나의 전시관 */}
              <motion.button 
                onClick={() => onNavigateToMyExhibition()}
                onHoverStart={() => setHoveredMenu(1)}
                onHoverEnd={() => setHoveredMenu(null)}
                className="absolute box-border content-stretch flex flex-col items-start left-0 p-[1.6px] size-[106px] top-0 cursor-pointer overflow-hidden"
                data-name="Button"
                animate={{ 
                  backgroundColor: selectedMenu === 1 || hoveredMenu === 1 ? '#f360c0' : '#ffffff'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none z-10" />
                <div className="box-border content-stretch flex flex-col h-[102.8px] items-center justify-center pb-[6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
                  <div className="h-[42px] mb-[-6px] relative shrink-0 w-[27.163px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] relative w-[27.163px]">
                      <motion.p 
                        className="absolute font-['EB_Garamond',serif] font-bold leading-[36px] left-0 not-italic text-[30px] text-nowrap top-[-1.4px] whitespace-pre"
                        animate={{ color: selectedMenu === 1 || hoveredMenu === 1 ? '#ffffff' : '#000000' }}
                        transition={{ duration: 0.3 }}
                      >01</motion.p>
                    </div>
                  </div>
                  <div className="mb-[-6px] relative shrink-0" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
                      <motion.div 
                        className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-center tracking-[-0.24px]"
                        animate={{ color: selectedMenu === 1 || hoveredMenu === 1 ? '#ffffff' : '#000000' }}
                        transition={{ duration: 0.3 }}
                      >
                        나의<br/>전시관
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.button>

              {/* 02 팬 활동 통계 */}
              <motion.button 
                onClick={() => onNavigateToStatistics && onNavigateToStatistics()}
                onHoverStart={() => setHoveredMenu(2)}
                onHoverEnd={() => setHoveredMenu(null)}
                className="absolute box-border content-stretch flex flex-col items-start left-[0.38px] p-[1.6px] size-[106px] top-[117.95px] cursor-pointer overflow-hidden"
                data-name="Button"
                animate={{ 
                  backgroundColor: selectedMenu === 2 || hoveredMenu === 2 ? '#f360c0' : '#ffffff'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none z-10" />
                <div className="box-border content-stretch flex flex-col h-[102.8px] items-center justify-center pb-[6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
                  <div className="h-[42px] mb-[-6px] relative shrink-0 w-[30.212px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] relative w-[30.212px]">
                      <motion.p 
                        className="absolute font-['EB_Garamond',serif] font-bold leading-[36px] left-0 not-italic text-[30px] text-nowrap top-[-1.4px] whitespace-pre"
                        animate={{ color: selectedMenu === 2 || hoveredMenu === 2 ? '#ffffff' : '#000000' }}
                        transition={{ duration: 0.3 }}
                      >02</motion.p>
                    </div>
                  </div>
                  <div className="mb-[-6px] relative shrink-0" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
                      <motion.div 
                        className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-center tracking-[-0.24px]"
                        animate={{ color: selectedMenu === 2 || hoveredMenu === 2 ? '#ffffff' : '#000000' }}
                        transition={{ duration: 0.3 }}
                      >
                        팬 활동<br/>통계
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.button>

              {/* 03 전시관 즐겨찾기 */}
              <motion.button 
                onClick={() => onNavigateToFavorites && onNavigateToFavorites()}
                onHoverStart={() => setHoveredMenu(3)}
                onHoverEnd={() => setHoveredMenu(null)}
                className="absolute box-border content-stretch flex flex-col items-start left-[0.38px] p-[1.6px] size-[106px] top-[235.95px] cursor-pointer overflow-hidden"
                data-name="Button"
                animate={{ 
                  backgroundColor: selectedMenu === 3 || hoveredMenu === 3 ? '#f360c0' : '#ffffff'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none z-10" />
                <div className="box-border content-stretch flex flex-col h-[102.8px] items-center justify-center pb-[6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
                  <div className="h-[42px] mb-[-6px] relative shrink-0 w-[29.438px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] relative w-[29.438px]">
                      <motion.p 
                        className="absolute font-['EB_Garamond',serif] font-bold leading-[36px] left-0 not-italic text-[30px] text-nowrap top-[-1.4px] whitespace-pre"
                        animate={{ color: selectedMenu === 3 || hoveredMenu === 3 ? '#ffffff' : '#000000' }}
                        transition={{ duration: 0.3 }}
                      >03</motion.p>
                    </div>
                  </div>
                  <div className="mb-[-6px] relative shrink-0" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
                      <motion.div 
                        className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-center tracking-[-0.24px]"
                        animate={{ color: selectedMenu === 3 || hoveredMenu === 3 ? '#ffffff' : '#000000' }}
                        transition={{ duration: 0.3 }}
                      >
                        전시관<br/>즐겨찾기
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}