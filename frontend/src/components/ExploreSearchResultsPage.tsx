import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Eye, Heart } from 'react-feather';
import svgPaths from "../imports/svg-jbhf0egdok";

// Define the type for a single exhibition based on the backend response
interface Exhibition {
  id: number;
  title: string;
  author: string;
  room_number: string; // Adjusted to match backend `room_number`
  views: string; // Backend returns number, but UI displays formatted string
  likes: string; // Backend returns number, but UI displays formatted string
  shares: string; // Backend returns number, but UI displays formatted string
  description: string;
  hashtags: string; // Backend returns comma-separated string
}

interface ExploreSearchResultsPageProps {
  onBack: () => void;
  onExhibitionClick?: (exhibition: Exhibition) => void; // Updated to pass full exhibition object
}

export default function ExploreSearchResultsPage({
  onBack,
  onExhibitionClick
}: ExploreSearchResultsPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Read tag from URL query params
  const queryParams = new URLSearchParams(location.search);
  const tagFromUrl = queryParams.get('tag');

  // Prioritize tag from URL, then searchQuery from state, then empty string
  const initialSearchQuery = tagFromUrl ? `#${tagFromUrl}` : (location.state as { searchQuery?: string })?.searchQuery || '';

  const [inputSearchText, setInputSearchText] = useState(initialSearchQuery);
  const [submittedSearchText, setSubmittedSearchText] = useState(initialSearchQuery);
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Effect to redirect if submittedSearchText becomes empty
  useEffect(() => {
    console.log('ExploreSearchResultsPage useEffect triggered.');
    console.log('submittedSearchText:', submittedSearchText);
    if (submittedSearchText === '') {
      console.log('submittedSearchText is empty, navigating to /explore/trending');
      navigate('/explore/trending');
    }
  }, [submittedSearchText, navigate]);

  const fetchSearchResults = async (query: string) => {
    if (!query) {
      setExhibitions([]);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      let url = `${import.meta.env.VITE_API_URL}/api/exhibitions?`;
      
      const params = new URLSearchParams();

      if (query.startsWith('#')) {
        // If query starts with '#', search only by hashtag (remove '#' for backend)
        params.append('hashtag', query.substring(1));
      } else {
        // Otherwise, search by title OR hashtag
        params.append('title', query);
        params.append('hashtag', query); // Send the same query as a hashtag as well
      }
      
      url += params.toString();
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      // Adjust backend data to match Exhibition interface for 'room' and numeric values if necessary
      const processedExhibitions = data.map((ex: any) => {
        return {
          ...ex,
          room_number: String(ex.room_number),
          views: String(ex.views),
          likes: String(ex.likes),
          shares: String(ex.shares),
        };
      });
      setExhibitions(processedExhibitions);
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching search results.');
      setExhibitions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults(submittedSearchText);
  }, [submittedSearchText]);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSubmittedSearchText(inputSearchText);
    }
  };

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
                      value={inputSearchText}
                      onChange={(e) => setInputSearchText(e.target.value)}
                      onKeyDown={handleKeyDown}
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
            {loading && <p className="text-center w-full text-gray-500">검색 중...</p>}
            {error && <p className="text-center w-full text-red-500">오류: {error}</p>}
            {!loading && !error && (
              <>
                <div className="h-[18px] relative shrink-0 w-full" data-name="Heading 2">
                  <p className="absolute font-['Pretendard',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-[-0.2px] tracking-[-0.24px] w-[84px]">검색 결과 {exhibitions.length}개</p>
                </div>
                
                <div className="content-stretch flex flex-col gap-[16px] h-[280.4px] items-start relative shrink-0 w-full" data-name="Container">
                  {exhibitions.map((exhibition, index) => (
                    <button
                      key={exhibition.id || index} // Use exhibition.id for key
                      onClick={() => onExhibitionClick && onExhibitionClick(exhibition)}
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
                                          <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.28px] truncate">{exhibition.title}</p>
                                        </div>
                                      </div>
                                      <div className="h-full relative shrink-0" data-name="Container">
                                        <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[9px] py-[4px] relative">
                                          <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[0.3px] whitespace-pre">{exhibition.room_number}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Author and Views */}
                                <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                                  <div className="relative shrink-0" data-name="Text">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
                                      <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.3px]">by {exhibition.author}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3"> {/* 아이콘과 텍스트를 묶는 컨테이너 */}
                                    <div className="flex items-center gap-1"> {/* 조회수 아이콘과 텍스트 */}
                                      <Eye size={12} color="#4A5565" />
                                      <p className="font-['EB_Garamond',serif] leading-[16px] not-italic text-[#4a5565] text-[12px] tracking-[0.3px] whitespace-pre">{exhibition.views}</p>
                                    </div>
                                    <div className="flex items-center gap-1"> {/* 좋아요 아이콘과 텍스트 */}
                                      <Heart size={12} color="#4A5565" />
                                      <p className="font-['EB_Garamond',serif] leading-[16px] not-italic text-[#4a5565] text-[12px] tracking-[0.3px] whitespace-pre">{exhibition.likes}</p>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}