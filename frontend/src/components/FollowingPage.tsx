import { useState, useEffect } from 'react';
import { ChevronLeft } from 'react-feather';
import { useParams } from 'react-router-dom';

interface Following {
  id: number;
  nickname: string;
  bio: string;
}

interface FollowingPageProps {
  onBack: () => void;
}

export default function FollowingPage({ onBack }: FollowingPageProps) {
  const { userId } = useParams<{ userId: string }>();
  const [following, setFollowing] = useState<Following[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setError("User ID not found in URL parameters.");
      setLoading(false);
      return;
    }

    const fetchFollowing = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}/following`);
        if (!response.ok) {
          throw new Error('Failed to fetch following users.');
        }
        const data: Following[] = await response.json();
        setFollowing(data);
      } catch (err: any) {
        console.error("Error fetching following users:", err);
        setError(err.message || "Failed to load following users.");
      } finally {
        setLoading(false);
      }
    };

    fetchFollowing();
  }, [userId]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">로딩 중...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">오류: {error}</div>;
  }

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full">
      <div className="border-b-[1.108px] border-black border-l-0 border-r-0 border-solid border-t-0 content-stretch flex flex-col h-[70.083px] items-start pb-[1.108px] pt-0 px-0 relative shrink-0 w-full">
        <div className="content-stretch flex h-[68.976px] items-center justify-between px-[23.99px] py-0 relative shrink-0 w-full">
          <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
            <ChevronLeft className="size-5 text-black" />
          </button>
          <div className="h-[20.996px] relative shrink-0 w-[73.545px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
              <p className="font-['Cormorant_Garamond:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-1px]">
                Following
              </p>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-[19.992px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[781px] items-start pb-0 pt-[23.99px] px-[23.99px] relative shrink-0 w-full">
        <div className="h-[24px] relative shrink-0 w-[68px]">
          <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-[-0.5px] tracking-[-0.24px]">
            내가 팔로우한 사람들
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
          {following.length > 0 ? (
            following.map((user) => (
              <div key={user.id} className="border border-black border-solid content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[8px] h-[49px] items-center not-italic px-[14px] py-0 relative shrink-0 w-[345px]">
                <p className="leading-[20px] relative shrink-0 text-[14px] text-black tracking-[-0.28px]">
                  {user.nickname}
                </p>
                <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#99a1af] text-[12px] tracking-[-0.24px] whitespace-nowrap">
                  {user.bio}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">팔로우하는 사람이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
