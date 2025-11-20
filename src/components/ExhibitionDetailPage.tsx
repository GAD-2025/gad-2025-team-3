import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import svgPaths from "../imports/svg-0is11x6gea";

interface ExhibitionDetailPageProps {
  onBack: () => void;
  exhibitionData: {
    title: string;
    author: string;
    room: string;
    views: string;
    likes: string;
    shares: string;
  };
}

interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function ExhibitionDetailPage({ 
  onBack,
  exhibitionData
}: ExhibitionDetailPageProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    if (isLiked) {
      const newCircles: Circle[] = [];
      const circleCount = 15;
      
      for (let i = 0; i < circleCount; i++) {
        newCircles.push({
          id: i,
          x: Math.random() * 90 + 5,
          y: Math.random() * 90 + 5,
          size: Math.random() * 12 + 8,
          duration: Math.random() * 6 + 4,
          delay: Math.random() * 2,
        });
      }
      
      setCircles(newCircles);
    } else {
      setCircles([]);
    }
  }, [isLiked]);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[34px] items-start relative w-full min-h-screen max-w-[393px] mx-auto overflow-x-hidden" data-name="메인 홈">
      {/* Animated Pink Circles */}
      {isLiked && circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute z-50 pointer-events-none"
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            delay: circle.delay,
            ease: "easeInOut",
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <circle cx="4.5" cy="4.5" fill="#F360C0" r="2.5" stroke="#F360C0" strokeWidth="4" />
          </svg>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="디자인 페이지 생성 (Copy)">
        {/* Header */}
        <div className="box-border content-stretch flex flex-col h-[85.6px] items-start pb-[1.6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[84px] items-center justify-between px-[24px] py-0 relative w-full">
                <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer" data-name="Button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
                        <div className="absolute inset-[-7.14%_-14.29%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
                            <path d={svgPaths.p37c3e100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
                        <div className="absolute inset-[-0.83px_-7.14%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                            <path d="M12.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="h-[36px] relative shrink-0 w-[80px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-[80px]">
                    <div className="relative shrink-0 size-[36px]" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
                        <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                          <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
                            <div className="absolute inset-[-5.24%_-5%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
                                <path d={svgPaths.p31c92d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Button">
                      <div className="size-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start pb-0 pt-[8px] px-[8px] relative w-full">
                          <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <div className="absolute inset-[8.33%_12.5%_66.67%_62.5%]" data-name="Vector">
                              <div className="absolute inset-[-16.67%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                                  <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[37.5%_62.5%_37.5%_12.5%]" data-name="Vector">
                              <div className="absolute inset-[-16.67%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                                  <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[66.67%_12.5%_8.33%_62.5%]" data-name="Vector">
                              <div className="absolute inset-[-16.67%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                                  <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[56.29%_35.75%_27.12%_35.79%]" data-name="Vector">
                              <div className="absolute inset-[-25.13%_-14.64%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5">
                                  <path d={svgPaths.p159ed400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[27.13%_35.79%_56.29%_35.79%]" data-name="Vector">
                              <div className="absolute inset-[-25.13%_-14.67%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5">
                                  <path d={svgPaths.p93d600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="bg-gray-100 h-[390px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="h-[390px] w-full" />
          </div>
        </div>

        {/* Title Section */}
        <div className="h-[159.9px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[16px] h-[159.9px] items-start pb-[1.6px] pt-[24px] px-[24px] relative w-full">
              <div className="h-[61px] relative shrink-0 w-full" data-name="Container">
                <div className="size-full">
                  <div className="content-stretch flex h-[61px] items-start justify-between relative w-full">
                    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-start relative w-full">
                        <div className="h-[35px] relative shrink-0 w-full" data-name="Heading 1">
                          <p className="absolute font-['Pretendard',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-[-0.6px] tracking-[-0.48px] whitespace-pre">{exhibitionData.title}</p>
                        </div>
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Paragraph">
                          <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.3px]">by {exhibitionData.author}</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[54.7px] relative shrink-0 w-[59.538px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[54.7px] items-center justify-center pb-[4px] pt-0 px-0 relative w-[59.538px]">
                        <div className="box-border content-stretch flex items-start justify-center mb-[-4px] relative shrink-0 w-full" data-name="Container">
                          <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">Room</p>
                        </div>
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center mb-[-4px] relative shrink-0 w-full" data-name="Container">
                          <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">{exhibitionData.room}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[24px] h-[33.3px] items-center pb-0 pt-[0.8px] px-0 relative shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
                <div className="h-[16.5px] relative shrink-0 w-[51.4px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16.5px] items-center relative w-[51.4px]">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="Icon">
                          <path d={svgPaths.pb43a980} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </svg>
                    </div>
                    <div className="h-[16.5px] relative shrink-0 w-[27.4px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[27.4px]">
                        <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[0.3px] whitespace-pre">{exhibitionData.views}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[16.5px] relative shrink-0 w-[38.725px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16.5px] items-center relative w-[38.725px]">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="Icon">
                          <path d={svgPaths.p133d9800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </svg>
                    </div>
                    <div className="h-[16.5px] relative shrink-0 w-[14.725px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[14.725px]">
                        <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[0.3px] whitespace-pre">{exhibitionData.likes}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[16.5px] relative shrink-0 w-[35.325px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16.5px] items-center relative w-[35.325px]">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="Icon">
                          <path d={svgPaths.p185fb780} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p30ca5e80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.pac25b80} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M5.72668 9.00667L10.28 11.66" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p39b18600} id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </svg>
                    </div>
                    <div className="h-[16.5px] relative shrink-0 w-[11.325px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[11.325px]">
                        <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[0.3px] whitespace-pre">{exhibitionData.shares}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full" data-name="Heading 3">
                <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">About</p>
              </div>
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Paragraph">
                <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black tracking-[-0.24px] w-[336px]">이 전시관은 팬들의 추억과 사랑을 담은 특별한 공간입니다. 콘서트, 팬미팅, 그리고 일상의 순간들을 함께 나누고 있습니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="h-[308.925px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[16px] h-[308.925px] items-start pb-[1.6px] pt-[24px] px-[24px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
                <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Gallery</p>
              </div>
              <div className="h-[225.325px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute bg-gray-100 left-0 size-[108.662px] top-0" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
                </div>
                <div className="absolute bg-gray-100 left-[116.66px] size-[108.662px] top-0" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
                </div>
                <div className="absolute bg-gray-100 left-[233.32px] size-[108.662px] top-0" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
                </div>
                <div className="absolute bg-gray-100 left-0 size-[108.662px] top-[116.66px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
                </div>
                <div className="absolute bg-gray-100 left-[116.66px] size-[108.662px] top-[116.66px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
                </div>
                <div className="absolute bg-gray-100 left-[233.32px] size-[108.662px] top-[116.66px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="h-[234px] relative shrink-0 w-full" data-name="Container">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[16px] h-[234px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
                <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[95px]">Comments 3</p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] h-[152px] items-start relative shrink-0 w-full" data-name="Container">
                {/* Comment 1 */}
                <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col gap-[4px] h-[40px] items-start pl-[17.6px] pr-0 py-0 relative w-full">
                      <div className="content-stretch flex gap-[8px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="h-[16.5px] relative shrink-0 w-[64.775px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[64.775px]">
                            <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[12px] text-black text-nowrap top-[-0.2px] tracking-[0.3px] whitespace-pre">fan_user_123</p>
                          </div>
                        </div>
                        <div className="h-[16.5px] relative shrink-0 w-[2.913px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[2.913px]">
                            <p className="absolute font-['Playfair_Display',serif] font-normal leading-[16.5px] left-0 text-[#99a1af] text-[11px] text-nowrap top-[-0.2px] whitespace-pre">·</p>
                          </div>
                        </div>
                        <div className="h-[16.5px] relative shrink-0 w-[39.888px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[39.888px]">
                            <p className="absolute font-['Pretendard',sans-serif] leading-[18px] left-0 not-italic text-[#99a1af] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.24px] whitespace-pre">2시간 전</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">정말 멋진 전시관이에요! 👏</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Comment 2 */}
                <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col gap-[4px] h-[40px] items-start pl-[17.6px] pr-0 py-0 relative w-full">
                      <div className="content-stretch flex gap-[8px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="h-[16.5px] relative shrink-0 w-[60.875px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[60.875px]">
                            <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[12px] text-black text-nowrap top-[-0.2px] tracking-[0.3px] whitespace-pre">music_lover</p>
                          </div>
                        </div>
                        <div className="h-[16.5px] relative shrink-0 w-[2.913px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[2.913px]">
                            <p className="absolute font-['Playfair_Display',serif] font-normal leading-[16.5px] left-0 text-[#99a1af] text-[11px] text-nowrap top-[-0.2px] whitespace-pre">·</p>
                          </div>
                        </div>
                        <div className="h-[16.5px] relative shrink-0 w-[39.188px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[39.188px]">
                            <p className="absolute font-['Pretendard',sans-serif] leading-[18px] left-0 not-italic text-[#99a1af] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.24px] whitespace-pre">5시간 전</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">추억이 가득하네요 ❤️</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Comment 3 */}
                <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col gap-[4px] h-[40px] items-start pl-[17.6px] pr-0 py-0 relative w-full">
                      <div className="content-stretch flex gap-[8px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="h-[16.5px] relative shrink-0 w-[47.063px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[47.063px]">
                            <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[12px] text-black text-nowrap top-[-0.2px] tracking-[0.3px] whitespace-pre">kpop_fan</p>
                          </div>
                        </div>
                        <div className="h-[16.5px] relative shrink-0 w-[2.913px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[2.913px]">
                            <p className="absolute font-['Playfair_Display',serif] font-normal leading-[16.5px] left-0 text-[#99a1af] text-[11px] text-nowrap top-[-0.2px] whitespace-pre">·</p>
                          </div>
                        </div>
                        <div className="h-[16.5px] relative shrink-0 w-[28.063px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[28.063px]">
                            <p className="absolute font-['Pretendard',sans-serif] leading-[18px] left-0 not-italic text-[#99a1af] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.24px] whitespace-pre">1일 전</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">저도 가보고 싶어요!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="h-[107.2px] relative shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex gap-[12px] h-[107.2px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
            <button onClick={() => setIsLiked(!isLiked)} className={`basis-0 grow h-[59.2px] min-h-px min-w-px relative shrink-0 cursor-pointer transition-all ${isLiked ? 'bg-[#f360c0]' : ''}`} data-name="Button">
              {!isLiked && <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />}
              <div className="size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[59.2px] items-start pb-[1.6px] pt-[19.6px] px-[72.5px] relative w-full">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
                      {isLiked ? (
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
                          <path d={svgPaths.p2e5bda00} fill="var(--fill-0, white)" id="Vector" />
                        </svg>
                      ) : (
                        <div className="absolute inset-[-5.88%_-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
                            <path d={svgPaths.p12f1f900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button className="basis-0 bg-black grow h-[59px] min-h-px min-w-px relative shrink-0 cursor-pointer hover:bg-[#f360c0] transition-colors" data-name="Button">
              <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] h-[59px] items-center justify-center relative w-full">
                <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Text">
                  <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">코멘트 작성</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}