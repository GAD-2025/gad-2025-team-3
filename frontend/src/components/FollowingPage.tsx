import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft } from 'react-feather';
import { useParams, useNavigate } from 'react-router-dom';

interface User {
  id: number;
  nickname: string;
  bio: string;
}

interface FollowingPageProps {
  onBack: () => void;
  initialTab?: 'following' | 'followers';
}

export default function FollowingPage({ onBack, initialTab = 'followers' }: FollowingPageProps) {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(initialTab);
  
  const [followers, setFollowers] = useState<User[]>([]);
  const [following, setFollowing] = useState<User[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (!userId) {
      setError("User ID not found in URL parameters.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [followersRes, followingRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}/followers`),
          fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}/following`)
        ]);

        if (!followersRes.ok) throw new Error('Failed to fetch followers.');
        if (!followingRes.ok) throw new Error('Failed to fetch following users.');

        const followersData: User[] = await followersRes.json();
        const followingData: User[] = await followingRes.json();

        setFollowers(followersData);
        setFollowing(followingData);

      } catch (err: any) {
        console.error("Error fetching follow data:", err);
        setError(err.message || "Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const followingIds = useMemo(() => new Set(following.map(u => u.id)), [following]);

  const handleFollowToggle = (userToToggle: User) => {
    const isCurrentlyFollowing = followingIds.has(userToToggle.id);

    if (isCurrentlyFollowing) {
      setFollowing(prev => prev.filter(u => u.id !== userToToggle.id));
    } else {
      setFollowing(prev => [...prev, userToToggle]);
    }
    // Note: This is a UI-only state change as requested.
    // In a real app, you would make an API call here.
  };

  const handleUserClick = (clickedUserId: number) => {
    navigate(`/profile/${clickedUserId}`);
  };

  const renderUserList = (users: User[]) => {
    if (loading) {
      return <div className="text-center p-10 font-pretendard">로딩 중...</div>;
    }

    if (error) {
      return <div className="text-center p-10 font-pretendard text-red-500">오류: {error}</div>;
    }

    if (users.length === 0) {
      return <p className="text-center text-gray-500 mt-10 font-pretendard">{activeTab === 'following' ? '팔로우하는 사람이 없습니다.' : '팔로워가 없습니다.'}</p>;
    }

    return (
      <div className="divide-y divide-gray-200">
        {users.map((user) => {
          const isFollowing = followingIds.has(user.id);
          return (
            <div key={user.id} className="flex items-center justify-between p-4">
              <div className="flex items-center cursor-pointer" onClick={() => handleUserClick(user.id)}>
                <div className="w-12 h-12 bg-[#FF69B4] shrink-0 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-pretendard font-semibold text-black">{user.nickname}</p>
                  <p className="font-pretendard text-sm text-gray-500">{user.bio}</p>
                </div>
              </div>
              <button
                onClick={() => handleFollowToggle(user)}
                className={`font-pretendard px-3 py-1 text-sm rounded-md transition-colors shrink-0 ${
                  isFollowing
                    ? 'bg-white text-black border border-black'
                    : 'bg-black text-white border border-black'
                }`}
              >
                {isFollowing ? '팔로잉' : '팔로우'}
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  const usersToDisplay = activeTab === 'followers' ? followers : following;

  return (
    <div className="bg-white flex flex-col w-full h-screen max-w-[393px] mx-auto pb-16">
      {/* Header */}
      <div className="flex items-center justify-between h-[70.083px] border-b-[1.108px] border-black px-[20px] shrink-0">
        <button onClick={onBack} className="p-2">
          <ChevronLeft className="size-5 text-black" />
        </button>
        <h1 className="font-garamond font-bold text-[18px]">
          {activeTab === 'followers' ? 'Followers' : 'Following'}
        </h1>
        <div className="w-9"></div> {/* Spacer */}
      </div>

      {/* Tab Bar */}
      <div className="flex shrink-0">
        <button
          onClick={() => setActiveTab('followers')}
          className={`w-1/2 py-3 text-center font-pretendard text-sm font-semibold ${
            activeTab === 'followers'
              ? 'bg-black text-white'
              : 'bg-white text-black border-b'
          }`}
        >
          팔로워
        </button>
        <button
          onClick={() => setActiveTab('following')}
          className={`w-1/2 py-3 text-center font-pretendard text-sm font-semibold ${
            activeTab === 'following'
              ? 'bg-black text-white'
              : 'bg-white text-black border-b'
          }`}
        >
          팔로잉
        </button>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto">
        {renderUserList(usersToDisplay)}
      </div>
    </div>
  );
}
