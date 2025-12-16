import { useState, useEffect } from 'react';

// 아이콘 직접 그리기 (라이브러리 제거로 에러 방지)
const Icons = {
  Back: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Chart: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

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
  currentUser, // 이걸 받긴 하지만, 없으면 직접 찾을 겁니다.
}: StatisticsPageProps) {

  // 1. 변수 선언
  const [statistics, setStatistics] = useState<UserStatistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 2. 활동 로그 데이터 (고정값)
  const activityLog = [
    { date: '2024.10.15', number: 101, title: 'BTS 월드 투어 전시관 공개', subtitle: '조회수 +450' },
    { date: '2024.10.12', number: 102, title: '아이유 콘서트 추억 업데이트', subtitle: '좋아요 +120' },
    { date: '2024.10.08', number: 103, title: 'SEVENTEEN 팬미팅 전시관 생성', subtitle: '첫 전시관!' }
  ];

  // 3. 데이터 가져오기 로직 (핵심 수정)
  useEffect(() => {
    const fetchStatistics = async () => {
      setLoading(true);
      setError(null);

      // 🔥 [핵심] 1차 시도: props로 받은 유저 정보 확인
      let targetUserId = currentUser?.id;

      // 🔥 [핵심] 2차 시도: 없으면 로컬 스토리지 직접 뒤짐 (여기서 해결됨)
      if (!targetUserId) {
        console.log("⚠️ props에 유저 정보 없음. 로컬 스토리지 탐색 시작...");
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            targetUserId = parsedUser.id;
            console.log("✅ 로컬 스토리지에서 유저 ID 찾음:", targetUserId);
          } catch (e) {
            console.error("❌ 로컬 스토리지 파싱 실패");
          }
        }
      }

      // 3차: 그래도 없으면 진짜 로그인이 안 된 것
      if (!targetUserId) {
        console.error("🚨 유저 ID를 찾을 수 없음. 로그인 필요.");
        setError('로그인 정보가 없습니다.');
        setLoading(false);
        return;
      }

      // 4차: ID가 있으면 데이터 요청
      try {
        console.log(`📡 서버 요청: /api/users/${targetUserId}/statistics`);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${targetUserId}/statistics`);
        
        if (!response.ok) {
          throw new Error('통계 데이터를 불러오지 못했습니다.');
        }
        
        const data = await response.json();
        console.log("✅ 데이터 수신 완료:", data);
        setStatistics(data);
      } catch (err: any) {
        console.error("통계 로딩 에러:", err);
        setError(err.message || '데이터 로딩 중 오류 발생');
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [currentUser]); 

  // 4. 화면 렌더링 (흰 화면 방지용 배경색 적용)

  // 로딩 중일 때
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
        <p className="font-bold text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  // 에러 발생 시 (흰 화면 대신 메시지 출력)
  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  // 데이터가 없을 때
  if (!statistics) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
        <p>표시할 데이터가 없습니다.</p>
        <button onClick={onBack} className="mt-4 px-4 py-2 bg-black text-white text-sm rounded">
          돌아가기
        </button>
      </div>
    );
  }

  // 정상 화면 (디자인 원본 유지)
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto pb-16">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[70px] items-center justify-between pb-[1px] relative w-full border-b border-black">
        <div className="flex flex-row items-center w-full h-full px-6 justify-between">
          <button onClick={onBack} className="flex items-center justify-center">
            <Icons.Back />
          </button>
          <div className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic text-[18px] text-black">Statistics</div>
          <div className="w-6"></div> {/* 밸런스용 빈 공간 */}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex-1 overflow-y-auto pb-10">
        
        {/* Total Views Section */}
        <div className="p-6 border-b border-black">
          <p className="text-sm text-gray-500 mb-2">이번 달</p>
          <p className="font-['EB_Garamond',serif] font-bold text-[48px] leading-tight">{(statistics.total_views || 0).toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">총 조회수</p>
        </div>

        {/* Stats Grid */}
        <div className="p-6 border-b border-black h-[280px] relative">
          {/* Views */}
          <div className="absolute top-6 left-6 w-[163px] h-[106px] border-2 border-black p-4 flex flex-col justify-between">
            <p className="text-sm text-gray-500">조회수</p>
            <p className="font-['EB_Garamond',serif] font-bold text-3xl">{(statistics.total_views || 0).toLocaleString()}</p>
          </div>
          
          {/* Likes */}
          <div className="absolute top-6 right-6 w-[163px] h-[106px] border-2 border-black p-4 flex flex-col justify-between">
            <p className="text-sm text-gray-500">좋아요</p>
            <p className="font-['EB_Garamond',serif] font-bold text-3xl">{(statistics.total_likes || 0).toLocaleString()}</p>
          </div>

          {/* Shares */}
          <div className="absolute bottom-6 left-6 w-[163px] h-[106px] border-2 border-black p-4 flex flex-col justify-between">
            <p className="text-sm text-gray-500">공유</p>
            <p className="font-['EB_Garamond',serif] font-bold text-3xl">{(statistics.total_shares || 0).toLocaleString()}</p>
          </div>

          {/* Count (White bg) */}
          <div className="absolute bottom-6 right-6 w-[163px] h-[106px] border-2 border-black p-4 flex flex-col justify-between bg-white bg-opacity-90">
            <p className="text-sm text-gray-500">전시관 수</p>
            <p className="font-['EB_Garamond',serif] font-bold text-3xl">{statistics.exhibition_count || 0}</p>
          </div>
        </div>

        {/* Activity Log */}
        <div className="p-6">
          <h2 className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic text-[18px] text-[#4a5565] mb-6">Activity Log</h2>
          {/* Activity items will be rendered here once data is available */}
        </div>

      </div>
    </div>
  );
}