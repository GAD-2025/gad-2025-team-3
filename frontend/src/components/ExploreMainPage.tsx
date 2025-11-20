import { useState } from 'react';
import svgPaths from "../imports/svg-6lwitwjk3d";

interface ExploreMainPageProps {
  onBack: () => void;
  onSearch: () => void;
}

export default function ExploreMainPage({ onBack, onSearch }: ExploreMainPageProps) {
  const [selectedTag, setSelectedTag] = useState('인기 쇼케이스');

  const tags = [
    '인기 쇼케이스',
    'nct 127',
    'New jeans',
    'exo',
    'red velvet',
    '아이유',
    'seventeen'
  ];

  const exhibitions = [
    {
      room: '202',
      title: '아이유 콘서트 메모리',
      author: 'uaena_love'
    },
    {
      room: '203',
      title: 'BLACKPINK 월드투어',
      author: 'blink_official'
    },
    {
      room: '204',
      title: 'NCT 127 팬아트 갤러리',
      author: 'nctzen_art'
    },
    {
      room: '205',
      title: 'SEVENTEEN 캐럿랜드',
      author: 'carat_world'
    }
  ];

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
                  <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Explore</p>
                </div>
              </div>
              
              {/* Search Button */}
              <button 
                onClick={onSearch}
                className="relative shrink-0 size-[20px] cursor-pointer" 
                data-name="Button"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[69.42%_12.5%_12.5%_69.42%]" data-name="Vector">
                      <div className="absolute inset-[-23.04%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                          <path d="M4.45 4.45L0.833333 0.833333" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
                      <div className="absolute inset-[-6.25%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                          <path d={svgPaths.p32110270} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tags Section */}
      <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[16px] px-[24px] relative w-full">
              <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
                <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] w-[345px]">★ Featured</p>
              </div>
              
              <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-[349px]">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`box-border content-stretch flex gap-[10px] h-[28px] items-center justify-center ${
                      tag === '인기 쇼케이스' ? 'px-[12px] py-[4px]' : 'px-[14px] py-[5px]'
                    } relative shrink-0 transition-colors cursor-pointer ${
                      selectedTag === tag 
                        ? 'bg-black hover:bg-[#F360C0]' 
                        : 'bg-white hover:bg-[#F360C0] hover:text-white'
                    }`}
                    data-name="Text"
                  >
                    <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
                    <p className={`font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre ${
                      selectedTag === tag ? 'text-white' : 'text-black'
                    }`}>{tag}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exhibition Archive Section */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[18px] items-start pb-0 pt-[20px] px-[24px] relative w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
              <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-nowrap whitespace-pre">Exhibition Archive</p>
            </div>
            
            <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-[342px]">
              {exhibitions.map((exhibition) => (
                <button
                  key={exhibition.room}
                  className="h-[305.1px] relative shrink-0 w-[163px] cursor-pointer hover:opacity-80 transition-opacity" 
                  data-name="Container"
                >
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                  
                  {/* Room Number */}
                  <div className="absolute bg-white box-border content-stretch flex flex-col h-[64.6px] items-start justify-center left-[1.6px] pb-[4px] pt-0 px-[12px] top-[1.6px] w-[159.8px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
                    <div className="box-border content-stretch flex items-start mb-[-4px] opacity-60 relative shrink-0 w-full" data-name="Container">
                      <p className="basis-0 font-['EB_Garamond',serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-black tracking-[0.3px]">Room</p>
                    </div>
                    <div className="box-border content-stretch flex gap-[10px] items-center mb-[-4px] relative shrink-0 w-full" data-name="Container">
                      <p className="font-['EB_Garamond',serif] font-bold leading-[32px] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">{exhibition.room}</p>
                    </div>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="absolute bg-gray-50 left-[1.6px] size-[159.8px] top-[66.2px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
                  </div>
                  
                  {/* Title and Author */}
                  <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[77.5px] items-start left-[1.6px] pb-0 pt-[12px] px-[12px] top-[226px] w-[159.8px]" data-name="Container">
                    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                      <p className="absolute font-['Pretendard',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-black text-nowrap top-[0.2px] tracking-[-0.24px] whitespace-pre">{exhibition.title}</p>
                    </div>
                    <div className="content-stretch flex h-[13.5px] items-start relative shrink-0 w-full" data-name="Container">
                      <p className="basis-0 font-['EB_Garamond',serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.3px]">{exhibition.author}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
