import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronLeft, Eye, Heart, Search } from 'react-feather';

interface ExploreMainPageProps {
  onBack: () => void;
  onExhibitionClick: (id: string) => void;
  onSearch: (searchQuery: string) => void;
}

// Define the type for a single exhibition based on the backend response
interface Exhibition {
  id: number;
  title: string;
  author: string;
  views: number;
  likes: number;
  createdAt: string;
  thumbnail: string;
}

export default function ExploreMainPage({ onBack, onExhibitionClick, onSearch }: ExploreMainPageProps) {
  const [selectedTag, setSelectedTag] = useState('인기 쇼케이스');
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState({ value: 'views', text: '조회수 순' }); // Default sort option
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchExhibitions(selectedTag);
  }, [selectedTag, sortOption]);


  const tags = [
    '인기 쇼케이스',
    '#nct 127',
    '#New jeans',
    '#exo',
    '#red velvet',
    '#아이유',
    '#seventeen'
  ];

  const fetchExhibitions = async (tagToSearch: string) => {
    try {
      setLoading(true);
      let url = `${import.meta.env.VITE_API_URL}/api/exhibitions?sort=${sortOption.value}`;

      if (tagToSearch !== '인기 쇼케이스') {
        const formattedTag = tagToSearch.startsWith('#') ? tagToSearch : `#${tagToSearch}`;
        url += `&hashtag=${encodeURIComponent(formattedTag)}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch exhibitions');
      }
      const data: Exhibition[] = await response.json();
      setExhibitions(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExhibitions(selectedTag);
  }, [selectedTag, sortOption]);


  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[68.976px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[68.976px] items-center justify-between px-[23.99px] py-0 relative w-full">
              {/* Back Button */}
              <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors" data-name="Button">
                <ChevronLeft className="size-5 text-black" />
              </button>
              
              {/* Heading */}
              <div className="h-[20.996px] relative shrink-0 w-[73.545px]" data-name="Heading 1">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start justify-center relative w-[73.545px]">
                  <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Explore</p>
                </div>
              </div>
              
              <button onClick={() => onSearch('')} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                <Search className="size-5 text-black" />
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
                <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-black text-[18px] w-[345px]">★ Featured</p>
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
      <div className="relative shrink-0 w-full pb-[24px] z-0" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[18px] items-start pb-0 pt-[20px] px-[24px] relative w-full">
            <div className="content-stretch flex justify-between items-center relative shrink-0 w-full" data-name="Heading 2">
              <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-black text-[18px] text-nowrap whitespace-pre">Exhibition Archive</p>
              
              {/* Filter Button */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-white border border-black px-4 py-2 flex items-center gap-2 cursor-pointer"
                >
                  <span className="font-['Pretendard',sans-serif] text-[14px] text-black">
                    {sortOption.text}
                  </span>
                  <ChevronDown className="size-4" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-[120px] bg-white border border-black shadow-lg z-10">
                    <div className="bg-[#FF69B4] text-white px-4 py-2 font-['Pretendard',sans-serif] text-[14px]">
                      {sortOption.text}
                    </div>
                    {sortOption.value !== 'views' && (
                      <button
                        onClick={() => { setSortOption({ value: 'views', text: '조회수 순' }); setIsDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 font-['Pretendard',sans-serif] text-[14px] text-black"
                      >
                        조회수 순
                      </button>
                    )}
                    {sortOption.value !== 'likes' && (
                      <button
                        onClick={() => { setSortOption({ value: 'likes', text: '좋아요 순' }); setIsDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 font-['Pretendard',sans-serif] text-[14px] text-black"
                      >
                        좋아요 순
                      </button>
                    )}
                    {sortOption.value !== 'latest' && (
                      <button
                        onClick={() => { setSortOption({ value: 'latest', text: '최신 순' }); setIsDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 font-['Pretendard',sans-serif] text-[14px] text-black"
                      >
                        최신 순
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-[16px] items-start relative shrink-0 w-full">
              {exhibitions.map((exhibition) => (
                <button
                  key={exhibition.id} 
                  onClick={() => onExhibitionClick(String(exhibition.id))} 
                  className="flex flex-col relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity border-[1.6px] border-black" 
                  data-name="Container"
                >
                  {/* Image Placeholder */}
                  <div className="h-[160px] w-full bg-gray-50">
                    <img src={exhibition.thumbnail} alt={exhibition.title} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Title and Author */}
                  <div className="flex flex-col gap-[8px] p-[12px]">
                    <div className="h-auto overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                      <div className="font-['Pretendard',sans-serif] leading-[18px] not-italic text-[12px] text-black tracking-[-0.24px] whitespace-normal text-left">{exhibition.title}</div>
                    </div>
                    <div className="content-stretch flex h-[13.5px] items-start relative shrink-0 w-full" data-name="Container">
                      <p className="font-['EB_Garamond',serif] leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.4px]">by {exhibition.author}</p>
                    </div>
                    <div className="content-stretch flex h-[13.5px] items-center relative shrink-0 w-full" data-name="Container">
                      <Eye className="size-3 text-[#4a5565] mr-1" />
                      <p className="font-['EB_Garamond',serif] leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.4px] mr-2">{exhibition.views}</p>
                      <Heart className="size-3 text-[#4a5565] mr-1" />
                      <p className="font-['EB_Garamond',serif] leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.4px]">{exhibition.likes}</p>
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


