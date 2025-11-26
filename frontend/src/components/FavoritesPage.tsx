import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-etunpzbgmu";
import ShareExhibitionModal from "./ShareExhibitionModal";

interface User {
  id: number;
  username: string;
  email: string;
  nickname: string;
  bio: string;
  exhibition_count: number;
  follower_count: number;
  following_count: number;
  total_views: number;
  total_likes: number;
  total_shares: number;
}

interface Exhibition {
  id: number;
  user_id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  is_public: boolean;
  views: number;
  likes: number;
  shares: number;
  created_at: string;
  author: string;
}

interface FavoritesPageProps {
  onBack: () => void;
  currentUser: User | null;
}

export default function FavoritesPage({ onBack, currentUser }: FavoritesPageProps) {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedExhibition, setSelectedExhibition] = useState<Exhibition | null>(null);
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExhibitions = async () => {
      if (!currentUser?.id) {
        setExhibitions([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/favorites?userId=${currentUser.id}`;
        const response = await fetch(url, { credentials: 'include' });
        if (!response.ok) {
          throw new Error('Failed to fetch favorite exhibitions');
        }
        const data = await response.json();
        setExhibitions(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExhibitions();
  }, [currentUser]);

  const handleShareClick = (exhibition: Exhibition) => {
    setSelectedExhibition(exhibition);
    setShareModalOpen(true);
  };

  const getRoomNumber = (index: number) => {
    return `${100 + (index + 1)}`;
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen max-w-[393px] mx-auto">
        <p>Loading exhibitions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen max-w-[393px] mx-auto">
        <p>Error: {error}</p>
      </div>
    );
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
              <div className="h-[20.996px] relative shrink-0 w-[121px]" data-name="Heading 1">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start justify-center relative w-[121px]">
                  <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Favorites</p>
                </div>
              </div>
              {/* Empty Container */}
              <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exhibition List */}
      <div className="relative shrink-0 w-full pb-[24px]">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[24px] pt-[24px] relative w-full">
          {/* Heading */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
            <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">즐겨찾기한 전시</p>
          </div>

          {/* Empty State or Exhibition Grid */}
          {exhibitions.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-[100px]">
              <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-nowrap">
                <p className="font-['Pretendard',sans-serif] leading-[28px] relative shrink-0 text-[18px] text-black tracking-[-0.36px] whitespace-pre">즐겨찾기한 전시가 없어요.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-[16px] w-full">
              {[...exhibitions].reverse().map((exhibition, index) => (
                <div
                  key={exhibition.id}
                  className="box-border content-stretch flex flex-col h-[206.8px] items-start p-[1.6px] relative shrink-0 w-full"
                  data-name="Container"
                >
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                  
                  {/* Room Header */}
                  <div className="bg-black relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col items-start p-[14px] relative w-full">
                        <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
                          <p className="font-['EB_Garamond',serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[37.938px]">Room</p>
                        </div>
                        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Container">
                          <p className="font-['EB_Garamond',serif] font-bold leading-[32px] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">{getRoomNumber(index)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Exhibition Info */}
                  <div className="h-[126px] relative shrink-0 w-full" data-name="Container">
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[12px] h-[126px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
                        {/* Title */}
                        <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                          <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.8px] tracking-[-0.28px] whitespace-pre">{exhibition.title}</p>
                        </div>

                        {/* Stats and Share Button */}
                        <div className="content-stretch flex h-[38px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                          {/* Stats */}
                          <div className="h-[38px] relative shrink-0 w-[92px]" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start justify-between relative w-[92px]">
                              {/* Views */}
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
                                <div className="relative shrink-0 size-[12px]" data-name="Icon">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                    <g id="Icon">
                                      <path d={svgPaths.p2ab476c0} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                                      <path d={svgPaths.p24092800} id="Vector_2" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="relative shrink-0" data-name="Text">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                                    <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">{exhibition.views}</p>
                                  </div>
                                </div>
                              </div>
                              {/* Likes */}
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
                                <div className="relative shrink-0 size-[12px]" data-name="Icon">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                    <g id="Icon">
                                      <path d={svgPaths.p2bb2e280} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="relative shrink-0" data-name="Text">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                                    <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">{exhibition.likes}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Share Button */}
                          <button 
                            onClick={() => handleShareClick(exhibition)}
                            className="relative shrink-0 size-[29.6px] cursor-pointer hover:bg-[#F360C0] transition-colors group" 
                            data-name="Button"
                          >
                            <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0.8px] pt-[8.8px] px-[8.8px] relative size-[29.6px]">
                              <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                <div className="absolute inset-[8.33%_12.5%_66.67%_62.5%]" data-name="Vector">
                                  <div className="absolute inset-[-16.67%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                                      <path d={svgPaths.peae880} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[37.5%_62.5%_37.5%_12.5%]" data-name="Vector">
                                  <div className="absolute inset-[-16.67%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                                      <path d={svgPaths.peae880} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[66.67%_12.5%_8.33%_62.5%]" data-name="Vector">
                                  <div className="absolute inset-[-16.67%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                                      <path d={svgPaths.peae880} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[56.29%_35.75%_27.12%_35.79%]" data-name="Vector">
                                  <div className="absolute inset-[-25.13%_-14.64%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
                                      <path d={svgPaths.p27b6c800} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[27.13%_35.79%_56.29%_35.79%]" data-name="Vector">
                                  <div className="absolute inset-[-25.13%_-14.67%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
                                      <path d={svgPaths.p1973d000} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors" />
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Share Modal */}
      {selectedExhibition && (
        <ShareExhibitionModal
          isOpen={shareModalOpen}
          onClose={() => setShareModalOpen(false)}
          exhibition={{
            room: selectedExhibition.room,
            title: selectedExhibition.title,
            author: 'me'
          }}
        />
      )}
    </div>
  );
}
