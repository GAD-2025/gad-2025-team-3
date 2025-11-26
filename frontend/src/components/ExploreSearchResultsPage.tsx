import { useState } from 'react';
import svgPaths from "../imports/svg-jbhf0egdok";

interface ExploreSearchResultsPageProps {
  onBack: () => void;
  searchQuery?: string;
  onExhibitionClick?: (data: {
    id: string;
    title: string;
    author: string;
    room: string;
    views: string;
    likes: string;
    shares: string;
  }) => void;
}

export default function ExploreSearchResultsPage({
  onBack,
  searchQuery = 'BTS',
  onExhibitionClick
}: ExploreSearchResultsPageProps) {
  const [searchText, setSearchText] = useState(searchQuery);

  const results = [
    {
      id: 'bts-army-global-exhibition',
      title: 'BTS ARMY 글로벌 전시관',
      description: '전 세계 ARMY들의 추억을 모은 특별한 공간입니다.',
      author: 'army_forever',
      room: '201',
      views: '8,900',
      likes: '1,240',
      shares: '156'
    },
    {
      id: 'nct-127-fanart-gallery',
      title: 'NCT 127 팬아트 갤러리',
      description: 'NCT 127 팬들의 창작물을 모은 갤러리입니다.',
      author: 'nctzen_art',
      room: '204',
      views: '4,327',
      likes: '567',
      shares: '89'
    },
    {
      id: 'blackpink-world-tour',
      title: 'BLACKPINK 월드투어',
      description: '월드투어의 감동을 함께 나누는 공간입니다.',
      author: 'blink_official',
      room: '203',
      views: '6,543',
      likes: '892',
      shares: '123'
    }
  ];
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[97.8px] items-start pb-[1.6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[96.2px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[12px] h-[96.2px] items-center px-[24px] py-0 relative w-full">
              {/* Back Button */}
              <button 
                onClick={onBack}
                className="relative shrink-0 size-[20px] cursor-pointer" 
                data-name="Button"
              >
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

              {/* Search Input */}
              <div className="basis-0 grow h-[48.2px] min-h-px min-w-px relative shrink-0" data-name="Container">
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48.2px] items-center px-[17.6px] py-[1.6px] relative w-full">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="Icon">
                          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="basis-0 grow h-[21px] min-h-px min-w-px bg-transparent border-none outline-none font-['Pretendard',sans-serif] leading-[20px] text-[#4a5565] text-[14px] tracking-[-0.28px]"
                      data-name="Text Input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="h-[370.4px] relative shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] h-[370.4px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
            <div className="h-[18px] relative shrink-0 w-full" data-name="Heading 2">
              <p className="absolute font-['Pretendard',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-[-0.2px] tracking-[-0.24px] w-[84px]">검색 결과 {results.length}개</p>
            </div>
            
            <div className="content-stretch flex flex-col gap-[16px] h-[280.4px] items-start relative shrink-0 w-full" data-name="Container">
              {results.map((result, index) => (
                <button
                  key={index}
                  onClick={() => onExhibitionClick && onExhibitionClick(result)}
                  className="h-[82.8px] relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" 
                  data-name="Container"
                >
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col h-[82.8px] items-start p-[1.6px] relative w-full">
                      <div className="h-[79.6px] relative shrink-0 w-full" data-name="Container">
                        <div className="size-full">
                          <div className="box-border content-stretch flex flex-col gap-[8px] h-[79.6px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
                            {/* Title and Number */}
                            <div className="h-[23.1px] relative shrink-0 w-full" data-name="Container">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex h-[23.1px] items-center justify-between relative w-full">
                                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Heading 3">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center relative w-full">
                                      <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">{result.title}</p>
                                    </div>
                                  </div>
                                  <div className="h-full relative shrink-0" data-name="Container">
                                    <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[9px] py-[4px] relative">
                                      <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[0.3px] whitespace-pre">{result.room}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Author and Views */}
                            <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                              <div className="relative shrink-0" data-name="Text">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
                                  <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.3px]">by {result.author}</p>
                                </div>
                              </div>
                              <div className="relative shrink-0" data-name="Text">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
                                  <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">조회 {result.views}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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