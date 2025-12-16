import React, { useState } from 'react';
import { ChevronLeft } from 'react-feather';
import svgPaths from "../imports/svg-cs3z6bunx5";

interface ExploreTrendingPageProps {
  onBack: () => void;
  onSearch: (searchQuery: string) => void;
  onKeywordClick?: (keyword: string) => void;
}

export default function ExploreTrendingPage({
  onBack,
  onSearch,
  onKeywordClick
}: ExploreTrendingPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const keywords = [
    {
      rank: '01',
      text: 'BTS'
    },
    {
      rank: '02',
      text: '아이유'
    },
    {
      rank: '03',
      text: 'BLACKPINK'
    },
    {
      rank: '04',
      text: 'NCT'
    },
    {
      rank: '05',
      text: 'SEVENTEEN'
    },
    {
      rank: '06',
      text: 'NewJeans'
    },
    {
      rank: '07',
      text: '콘서트'
    },
    {
      rank: '08',
      text: '팬미팅'
    },
    {
      rank: '09',
      text: '앨범'
    },
    {
      rank: '10',
      text: '포토카드'
    },
  ];

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto pb-16" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[97.8px] items-start pb-[1.6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[96.2px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[12px] h-[96.2px] items-center px-[24px] py-0 relative w-full">
              {/* Back Button */}
              <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors" data-name="Button">
                <ChevronLeft className="size-5 text-black" />
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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && searchQuery.trim()) {
                          onSearch(searchQuery);
                        }
                      }}
                      placeholder="전시관, 아티스트 검색"
                      className="basis-0 grow min-h-px min-w-px bg-transparent border-none outline-none font-['Pretendard',sans-serif] leading-[20px] text-[14px] tracking-[-0.28px] placeholder:text-[#99a1af] text-black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Keywords */}
      <div className="h-[627.2px] relative shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[20px] h-[627.2px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
              <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-nowrap whitespace-pre">Trending Keywords</p>
            </div>
            
            <div className="h-[537.2px] relative shrink-0 w-full" data-name="Container">
              {keywords.map((keyword, index) => (
                <button
                  key={keyword.rank}
                  onClick={() => onKeywordClick?.(keyword.text)}
                  className={`absolute box-border content-stretch flex gap-[16px] h-[53.8px] items-center left-0 px-0 w-[342px] cursor-pointer hover:bg-gray-50 transition-colors ${
                    index === keywords.length - 1 
                      ? 'pb-0 pt-0' 
                      : 'pb-[0.8px] pt-0'
                  }`}
                  style={{ top: `${index * 53.8}px` }}
                  data-name="Button"
                >
                  {index < keywords.length - 1 && (
                    <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
                  )}
                  <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
                      <p className="absolute font-['EB_Garamond',serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">{keyword.rank}</p>
                    </div>
                  </div>
                  <div className="h-[21px] relative shrink-0" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative">
                      <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">{keyword.text}</p>
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