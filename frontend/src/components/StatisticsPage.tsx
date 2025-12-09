import { useState, useEffect } from 'react';
import { ChevronLeft } from 'react-feather';

interface User {
  id: number;
}

interface StatisticsPageProps {
  onBack: () => void;
  currentUser: User | null;
}

interface UserStatistics {
  exhibition_count: number;
  total_views: number;
  total_likes: number;
  total_shares: number;
}

export default function StatisticsPage({ 
  onBack,
  currentUser,
}: StatisticsPageProps) {

  useEffect(() => {
    if (!currentUser?.id) {
      setLoading(false);
      setError('User not logged in.');
      return;
    }

    const fetchStatistics = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${currentUser.id}/statistics`);
        if (!response.ok) {
          throw new Error('Failed to fetch statistics');
        }
        const data: UserStatistics = await response.json();
        setStatistics(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [currentUser]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading statistics...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: Failed to edit, 0 occurrences found for old_string (  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: Failed to edit, 0 occurrences found for old_string (  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: Failed to edit, 0 occurrences found for old_string (  ] 
}: StatisticsPageProps) {). Original old_string was (  ] 
}: StatisticsPageProps) {) in /Users/parkjibin/Desktop/gad new/gad-2025-team-3/frontend/src/components/StatisticsPage.tsx. No edits made. The exact text in old_string was not found. Ensure you're not escaping content incorrectly and check whitespace, indentation, and context. Use read_file tool to verify.</div>;
  }). Original old_string was (  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: Failed to edit, 0 occurrences found for old_string (  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: Failed to edit, 0 occurrences found for old_string (  ] 
}: StatisticsPageProps) {). Original old_string was (  ] 
}: StatisticsPageProps) {) in /Users/parkjibin/Desktop/gad new/gad-2025-team-3/frontend/src/components/StatisticsPage.tsx. No edits made. The exact text in old_string was not found. Ensure you're not escaping content incorrectly and check whitespace, indentation, and context. Use read_file tool to verify.</div>;
  }) in /Users/parkjibin/Desktop/gad new/gad-2025-team-3/frontend/src/components/StatisticsPage.tsx. No edits made. The exact text in old_string was not found. Ensure you're not escaping content incorrectly and check whitespace, indentation, and context. Use read_file tool to verify.</div>;
  }

  if (!statistics) {
    return <div className="flex justify-center items-center h-screen">No statistics data found.</div>;
  }
  const [statistics, setStatistics] = useState<UserStatistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hardcoded activityLog for now, will be replaced by dynamic data later if needed
  const activityLog = [
    {
      date: '2024.10.15',
      number: 101,
      title: 'BTS 월드 투어 전시관 공개',
      subtitle: '조회수 +450'
    },
    {
      date: '2024.10.12',
      number: 102,
      title: '아이유 콘서트 추억 업데이트',
      subtitle: '좋아요 +120'
    },
    {
      date: '2024.10.08',
      number: 103,
      title: 'SEVENTEEN 팬미팅 전시관 생성',
      subtitle: '첫 전시관!'
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
              <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors" data-name="Button">
                <ChevronLeft className="size-5 text-black" />
              </button>
              {/* Heading */}
              <div className="h-[20.996px] relative shrink-0 w-[73.545px]" data-name="Heading 1">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start justify-center relative w-[73.545px]">
                  <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Statistics</p>
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

      {/* Total Views Section */}
      <div className="box-border content-stretch flex flex-col gap-[8px] h-[154.6px] items-start pb-[1.6px] pt-[24px] px-[24px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
          <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.28px]">이번 달</p>
        </div>
        <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
          <p className="absolute font-['EB_Garamond',serif] font-bold leading-[48px] left-0 not-italic text-[48px] text-black text-nowrap top-[0.4px] whitespace-pre">{statistics.total_views.toLocaleString()}</p>
        </div>
        <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
          <p className="absolute font-['Pretendard',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.24px] whitespace-pre">총 조회수</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="box-border content-stretch flex flex-col h-[278px] items-start pb-[1.6px] pt-[24px] px-[24px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[228.4px] relative shrink-0 w-full" data-name="Container">
          {/* 조회수 */}
          <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[106.2px] items-start justify-center left-0 px-[25.6px] py-0 top-0 w-[163px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
              <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.28px]">조회수</p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
              <p className="font-['EB_Garamond',serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">{statistics.total_views.toLocaleString()}</p>
            </div>
          </div>

          {/* 좋아요 */}
          <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[106.2px] items-start justify-center left-[179px] px-[25.6px] py-0 top-0 w-[163px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
              <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.28px]">좋아요</p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
              <p className="font-['EB_Garamond',serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">{statistics.total_likes.toLocaleString()}</p>
            </div>
          </div>

          {/* 공유 */}
          <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[106.2px] items-start justify-center left-0 px-[25.6px] py-0 top-[122.2px] w-[163px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
              <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.28px]">공유</p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
              <p className="font-['EB_Garamond',serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">{statistics.total_shares.toLocaleString()}</p>
            </div>
          </div>

          {/* 전시관 수 (White) */}
          <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[106.2px] items-start justify-center left-[179px] px-[25.6px] py-0 top-[122.2px] w-[163px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-start opacity-90 relative shrink-0 w-full" data-name="Container">
              <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.28px]">전시관 수</p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
              <p className="font-['EB_Garamond',serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">{statistics.exhibition_count}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="box-border content-stretch flex flex-col gap-[14px] h-[405.4px] items-start pb-0 pt-[20px] px-[24px] relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
          <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-nowrap whitespace-pre">Activity Log</p>
        </div>
        
        <div className="content-stretch flex flex-col h-[315.4px] items-start relative shrink-0 w-full" data-name="Container">
          {activityLog.map((activity, index) => (
            <div 
              key={index}
              className={`box-border content-stretch flex flex-col gap-[8px] items-start px-0 relative shrink-0 w-full ${
                index === activityLog.length - 1 
                  ? 'h-[104.6px] pb-0 pt-[16px]' 
                  : 'h-[105.4px] pb-[0.8px] pt-[16px]'
              }`}
              data-name="Container"
            >
              {index < activityLog.length - 1 && (
                <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
              )}
              
              {/* Date and Number */}
              <div className="content-stretch flex h-[23.1px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                <div className="relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                    <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">{activity.date}</p>
                  </div>
                </div>
                <div className="h-full relative shrink-0" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-full items-center justify-end px-[8px] py-[2px] relative">
                    <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[0.3px] whitespace-pre">{activity.number}</p>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
                <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">{activity.title}</p>
              </div>

              {/* Subtitle */}
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
                <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">{activity.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}