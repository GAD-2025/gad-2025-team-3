import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreHorizontal, Eye, Heart } from 'react-feather';

import RandomProfileIcon from './RandomProfileIcon';

const imgVector = "https://www.figma.com/api/mcp/asset/17230c9d-b51c-4f6c-8709-020e63dabafc";
const imgVector1 = "https://www.figma.com/api/mcp/asset/97d0d129-9271-4777-b20c-52bc716c23b6";
const imgVector2 = "https://www.figma.com/api/mcp/asset/f6ac66b0-5973-489f-9f9f-2bd2f63b3f1d";
const imgVector3 = "https://www.figma.com/api/mcp/asset/c28fc3f1-78d8-4302-b3ad-ed55ded67415";
const imgVector4 = "https://www.figma.com/api/mcp/asset/b2cfeda5-56ae-47fe-8c28-3bd6a25d57dd";
const imgVector5 = "https://www.figma.com/api/mcp/asset/fe295aee-1db6-4175-9fc4-0b5a276c1746";


interface UserProfile {
  id: number;
  username: string;
  nickname: string;
  profile_picture_url: string; // Reverted
  follower_count: number;
  following_count: number;
  // Add other relevant user profile fields as needed
}

interface UserExhibition {
  id: number;
  title: string;
  thumbnail: string; // imageUrl 대신 thumbnail 사용
  startDate: string;
  endDate: string;
  views: number;
  likes: number;
}

// URL 유효성 검사 함수
const isValidUrl = (url: string | undefined): boolean => {
  if (!url || typeof url !== 'string' || url.trim() === '') {
    return false;
  }
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

const getProfileIconType = (userId: number) => {
  const profileTypes = ['profile_1_l', 'profile_2_l', 'profile_3_l', 'profile_4_l'];
  return profileTypes[userId % profileTypes.length];
};

export default function OtherUserProfilePage() {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [userExhibitions, setUserExhibitions] = useState<UserExhibition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFollowing, setIsFollowing] = useState(false); // This would typically come from backend based on logged-in user

  useEffect(() => {
    const loggedInUserId = localStorage.getItem('userId');

    if (loggedInUserId && userId && loggedInUserId === userId) {
      navigate('/profile', { replace: true });
      return;
    }

    const fetchUserProfile = async () => {
      if (!userId) {
        setError("User ID is missing.");
        setLoading(false);
        return;
      }
      try {
        const [profileRes, exhibitionsRes, isFollowingRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`),
          fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}/exhibitions`),
          loggedInUserId ? fetch(`${import.meta.env.VITE_API_URL}/api/users/${loggedInUserId}/is-following/${userId}`) : Promise.resolve(new Response(JSON.stringify({ isFollowing: false }), { status: 200, headers: { 'Content-Type': 'application/json' } })),
        ]);

        if (!profileRes.ok) throw new Error(`Failed to fetch user profile: ${profileRes.statusText}`);
        if (!exhibitionsRes.ok) throw new Error(`Failed to fetch user exhibitions: ${exhibitionsRes.statusText}`);
        if (!isFollowingRes.ok) throw new Error(`Failed to fetch follow status: ${isFollowingRes.statusText}`);

        const userProfileData: UserProfile = await profileRes.json();
        const userExhibitionsData: UserExhibition[] = await exhibitionsRes.json();
        const { isFollowing: initialIsFollowing } = await isFollowingRes.json();
        
        setProfile(userProfileData);
        setUserExhibitions(userExhibitionsData);
        setIsFollowing(initialIsFollowing);

      } catch (err: any) {
        console.error("Error fetching user profile:", err);
        setError(err.message || "Failed to load user profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId, navigate]);

  const handleFollowToggle = async () => {
    const loggedInUserId = localStorage.getItem('userId');
    if (!loggedInUserId || !profile) {
      alert("로그인이 필요합니다.");
      return;
    }

    // Optimistic update
    setIsFollowing(prev => !prev);
    setProfile(prev => {
      if (!prev) return null;
      return {
        ...prev,
        follower_count: isFollowing ? prev.follower_count - 1 : prev.follower_count + 1
      };
    });

    try {
      const method = isFollowing ? 'DELETE' : 'POST';
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${profile.id}/follow`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ followerId: parseInt(loggedInUserId, 10) }),
      });

      if (!response.ok) {
        throw new Error('Failed to update follow status');
      }
    } catch (error) {
      console.error("Error toggling follow status:", error);
      // Revert optimistic update on error
      setIsFollowing(prev => !prev);
      setProfile(prev => {
        if (!prev) return null;
        return {
          ...prev,
          follower_count: isFollowing ? prev.follower_count + 1 : prev.follower_count - 1
        };
      });
      alert("팔로우/언팔로우 실패");
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading profile...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  if (!profile) {
    return <div className="flex justify-center items-center h-screen">No user profile found.</div>;
  }

  return (
    <div className="min-h-screen bg-white max-w-[393px] mx-auto flex flex-col pb-16">
      {/* Header */}
      <div className="relative w-full h-[70px] border-b-[0.8px] border-black flex items-center justify-between px-[20px]">
        <button onClick={() => navigate(-1)} className="size-[20px] flex items-center justify-center">
          <ChevronLeft className="size-5 text-black" />
        </button>
        <p className="font-apple-garamond font-bold text-[18px] text-black">
          Profile
        </p>
        <div className="w-5" />
      </div>

      {/* Profile Info Section */}
      <div className="flex flex-col items-center p-[24px] border-b-[1.6px] border-black">
        {/* Profile Picture Placeholder - imgVector5 from Figma output is a generic shape, I'll use profile_picture_url if available */}
        <div className="relative size-[80px] rounded-full overflow-hidden mb-[16px]">
          <RandomProfileIcon profileType={getProfileIconType(profile.id)} />
        </div>
        <p className="font-pretendard font-semibold text-[20px] text-black mb-[4px]">
          {profile.nickname}
        </p>
        <p className="font-pretendard text-[12px] text-[#4a5565] mb-[16px]">
          @{profile.username}
        </p>

        {/* Follow Button */}
        <button
          onClick={handleFollowToggle}
          className={`w-[345px] h-[47px] flex items-center justify-center rounded-[4px] ${
            isFollowing ? 'bg-black text-white' : 'bg-[#f360c0] text-white'
          } font-pretendard text-[14px]`}
        >
          {isFollowing ? 'Following' : '팔로우'}
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-[12px] p-[24px] border-b-[1.6px] border-black">
        <div className="flex flex-col items-center justify-center border-[1.6px] border-black h-[74.7px]">
          <p className="font-apple-garamond font-bold text-[20px] text-black">
            {userExhibitions.length}
          </p>
          <p className="font-pretendard text-[12px] text-[#4a5565]">
            전시관
          </p>
        </div>
        <button onClick={() => navigate(`/profile/${userId}/followers`)} className="flex flex-col items-center justify-center border-[1.6px] border-black h-[74.7px] w-full">
          <p className="font-apple-garamond font-bold text-[20px] text-black">
            {profile.follower_count}
          </p>
          <p className="font-pretendard text-[12px] text-[#4a5565]">
            팔로워
          </p>
        </button>
        <button onClick={() => navigate(`/profile/${userId}/following`)} className="flex flex-col items-center justify-center border-[1.6px] border-black h-[74.7px] w-full">
          <p className="font-apple-garamond font-bold text-[20px] text-black">
            {profile.following_count}
          </p>
          <p className="font-pretendard text-[12px] text-[#4a5565]">
            팔로잉
          </p>
        </button>
      </div>

      {/* Exhibitions Section */}
      <div className="flex flex-col gap-[12px] p-[24px]">
        <p className="font-apple-garamond text-[16px] text-[#4a5565] mb-[12px]">
          Exhibition
        </p>
        <div className="grid grid-cols-2 gap-[16px] items-start relative w-full">
          {userExhibitions.length > 0 ? (
            userExhibitions.map((ex) => (
              <button
                key={ex.id}
                onClick={() => navigate(`/exhibition/${ex.id}`)}
                className="flex flex-col relative w-full cursor-pointer hover:opacity-80 transition-opacity border-[1.6px] border-black"
              >
                {/* Image Thumbnail */}
                <div className="h-[160px] w-full bg-gray-50 flex items-center justify-center">
                  <img
                    src={isValidUrl(ex.thumbnail) ? ex.thumbnail : "https://picsum.photos/160/160?grayscale&blur=2"} // ex.thumbnail 사용
                    alt={ex.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Exhibition Details */}
                <div className="flex flex-col gap-[8px] p-[12px]">
                  <div className="h-auto overflow-clip relative w-full">
                    <p className="font-pretendard leading-[18px] text-[12px] text-black tracking-[-0.24px] whitespace-normal text-left">{ex.title}</p>
                  </div>

                  {/* Views and Likes */}
                  <div className="flex h-[13.5px] items-center relative w-full">
                    <Eye className="size-3 text-[#4a5565] mr-1" />
                    <p className="font-pretendard leading-[16px] text-[#4a5565] text-[12px] tracking-[-0.4px] mr-2">{ex.views}</p>
                    <Heart className="size-3 text-[#4a5565] mr-1" />
                    <p className="font-pretendard leading-[16px] text-[#4a5565] text-[12px] tracking-[-0.4px]">{ex.likes}</p>
                  </div>
                </div>
              </button>
            ))
          ) : (
            <p className="font-pretendard text-[12px] text-[#4a5565]">
              No exhibitions found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
