import { useEffect, useState } from "react";
import { ChevronLeft, Edit } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import DeleteAccountModal from "./DeleteAccountModal";

import ARTISTS from '../constants/artists';

const imgVector = "https://www.figma.com/api/mcp/asset/e8366257-d3f7-496c-ba98-71a545e4dc82";
const imgVector1 = "https://www.figma.com/api/mcp/asset/99b7134c-b0b4-4e4e-a71c-b1c4312b788c";
const imgVector2 = "https://www.figma.com/api/mcp/asset/cb0a7f1b-62a6-47b5-a237-362fe7cc1897";
const imgVector3 = "https://www.figma.com/api/mcp/asset/9499547c-84d7-44d9-a4e4-33d989ba1e04";
const imgVector5 = "https://www.figma.com/api/mcp/asset/fe295aee-1db6-4175-9fc4-0b5a276c1746"; // OtherUserProfilePage와 통일된 기본 이미지

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
  profile_picture_url: string; // 필수로 변경
  favorite_idols: string[];
}

interface ProfilePageProps {
  onBack: () => void;
  onNavigateToBadges: () => void;
  onNavigateToMyExhibition: () => void;
  onNavigateToEditProfile: () => void;
}

export default function ProfilePage({ onBack, onNavigateToBadges, onNavigateToMyExhibition, onNavigateToEditProfile }: ProfilePageProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      const loggedInUserId = localStorage.getItem('userId');
      if (!loggedInUserId) {
        setError("로그인된 사용자 정보가 없습니다.");
        setLoading(false);
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${loggedInUserId}`);
        if (!response.ok) {
          throw new Error('사용자 정보를 가져오는데 실패했습니다.');
        }
        const userData: User = await response.json();
        const favoriteIdolsArray = userData.favorite_idol ? userData.favorite_idol.split(',').map((idol: string) => idol.trim()) : [];
        setUser({ ...userData, favorite_idols: favoriteIdolsArray });
      } catch (err: any) {
        console.error("사용자 정보 fetch 오류:", err);
        setError(err.message || "사용자 정보를 가져오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchLoggedInUser();
  }, [navigate]);

  const handleDeleteAccount = async () => {
    if (!user || !user.id || !user.username) {
      alert("사용자 정보가 없어 탈퇴를 진행할 수 없습니다.");
      setIsDeleteModalOpen(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${user.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: user.username }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '회원 탈퇴에 실패했습니다.');
      }

      alert('회원 탈퇴가 완료되었습니다.');
      setIsDeleteModalOpen(false);
      localStorage.removeItem('userId');
      navigate('/login', { replace: true });
    } catch (error: any) {
      console.error('회원 탈퇴 오류:', error);
      alert(`회원 탈퇴 중 오류가 발생했습니다: ${error.message}`);
      setIsDeleteModalOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login', { replace: true });
  };

  const handleFeatureClick = (featureName: string) => {
    alert(`${featureName} 기능은 아직 구현되지 않았습니다.`);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">로딩 중...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">오류: {error}</div>;
  }

  if (!user) {
    return <div className="flex justify-center items-center h-screen">사용자 프로필을 찾을 수 없습니다.</div>;
  }

  const renderProfileImage = () => {
    return (
        <img
                    src={user.profile_picture_url || imgVector5} // Fallback image
                    alt="Profile"
                    className="object-cover size-full rounded-full"
                />    );
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex h-[70.083px] items-center justify-between px-[20px] py-[0] relative w-full">
            {/* Back Button */}
            <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors" data-name="Button">
              <ChevronLeft className="size-5 text-black" />
            </button>
            <p className="font-garamond font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Profile</p>
            {/* Empty Container to balance the header */}
            <div className="h-[0] shrink-0 w-[20px]" data-name="Container" />
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="h-auto relative shrink-0 w-full pb-[24px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] h-[110px] items-start pb-[1.6px] pt-[24px] px-[24px] relative w-full">
            {/* Profile Info */}
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
              {/* Profile Image */}
              <div className="relative shrink-0 size-[80px] bg-[#fef7fc] overflow-clip rounded-full" data-name="profile">
                {renderProfileImage()}
              </div>

              {/* Profile Details */}
              <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 w-[246px]" data-name="Container">
                {/* Username and Bio */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[30px] relative shrink-0" data-name="Heading 2" style={{ maxWidth: '200px' }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative">
                        <p className="font-pretendard font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.4px] whitespace-pre overflow-hidden text-ellipsis">{user.nickname || 'fan_user_123'}</p>
                      </div>
                    </div>
                    {/* Edit Icon */}
                    <button onClick={onNavigateToEditProfile} className="relative shrink-0 size-[24px]" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0] pt-[4px] px-[4px] relative size-[24px]">
                        <Edit className="size-4 text-gray-500" />
                      </div>
                    </button>
                  </div>
                  {/* Bio */}
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Paragraph">
                    <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px] overflow-hidden text-ellipsis whitespace-nowrap">{user.bio || 'K-POP을 사랑하는 팬입니다🩷'}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
                  {/* 전시관 */}
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
                        <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px] w-[31.888px]">전시관</p>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
                        <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">{user.exhibition_count}</p>
                      </div>
                    </div>
                  </div>
                  {/* 팔로워 */}
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
                        <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px] w-[31.888px]">팔로워</p>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
                        <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">{user.follower_count}</p>
                      </div>
                    </div>
                  </div>
                  {/* 팔로잉 */}
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
                        <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px] w-[31.888px]">팔로잉</p>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
                        <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">{user.following_count}</p>
                      </div>
                    </div>
                  </div>
                  {/* 최애 아이돌 해시태그 */}
                  <div className="content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="FavoriteIdolHashtags">
                    {user.favorite_idols && user.favorite_idols.length > 0 ? (
                      user.favorite_idols.map((idolId, index) => {
                        const artist = ARTISTS.find(a => a.id === idolId);
                        return (
                          <div key={index} className="bg-white border-[#f360c0] border-[1.6px] border-solid rounded-[4px] px-[11.6px] pt-[5.6px] pb-[1.6px] relative flex items-center justify-center">
                            <p className="font-pretendard font-medium leading-[18px] not-italic text-[#f360c0] text-[12px] tracking-[-0.24px] whitespace-pre-wrap">
                              #{artist ? artist.name : idolId}
                            </p>
                          </div>
                        );
                      })
                    ) : (
                      <div className="bg-white border-[#99a1af] border-[1.6px] border-solid rounded-[4px] px-[11.6px] pt-[5.6px] pb-[1.6px] relative flex items-center justify-center">
                        <p className="font-pretendard font-medium leading-[18px] not-italic text-[#99a1af] text-[12px] tracking-[-0.24px] whitespace-pre-wrap">
                          #N/A
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Favorite Idol Hashtags */}
            {user.favorite_idols && user.favorite_idols.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 px-6" data-name="FavoriteIdolHashtags">
                {user.favorite_idols.map((idol, index) => (
                  <div key={index} className="bg-white border-[#f360c0] border-[1.6px] border-solid rounded-full px-3 py-1 flex items-center justify-center">
                    <p className="font-pretendard font-medium leading-[18px] not-italic text-[#f360c0] text-[12px] tracking-[-0.24px]">
                      #{idol}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Account Section */}
      <div className="relative shrink-0 w-full mt-[0px] pb-[8px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
              <p className="font-garamond leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Account</p>
            </div>
            {/* 비밀번호 변경 */}
            <button
              onClick={() => handleFeatureClick('비밀번호 변경')}
              className="h-[56.2px] relative shrink-0 w-full cursor-pointer"
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between px-[17.6px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[116.638px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[116.638px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={settingsSvgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d={settingsSvgPaths.p1bf79e00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                          <p className="font-pretendard leading-[20px] left-0 not-italic relative shrink-0 text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">비밀번호 변경</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
            {/* 이메일 변경 */}
            <button
              onClick={() => handleFeatureClick('이메일 변경')}
              className="h-[56.2px] relative shrink-0 w-full cursor-pointer"
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between px-[17.6px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[103.113px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[103.113px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={settingsSvgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d={settingsSvgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeLineWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                          <p className="font-pretendard leading-[20px] left-0 not-italic relative shrink-0 text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">이메일 변경</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="relative shrink-0 w-full mt-[0px] pb-[8px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[12px] h-auto items-start pb-[24px] pt-[24px] px-[24px] relative w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
              <p className="font-garamond leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Privacy</p>
            </div>
            {/* 개인정보 처리방침 */}
            <button
              onClick={() => window.open('https://www.notion.so/SHOWCASE-2c7c35f1b1398051af53ee5d9bf45e18', '_blank')}
              className="h-[56.2px] relative shrink-0 w-full cursor-pointer"
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between px-[17.6px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[143.688px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[143.688px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={settingsSvgPaths.p337986c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                          <p className="font-pretendard leading-[20px] left-0 not-italic relative shrink-0 text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">개인정보 처리방침</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
            {/* 서비스 이용약관 */}
            <button
              onClick={() => window.open('https://www.notion.so/SHOWCASE-2c7c35f1b13980898e82d244731bc957?source=copy_link', '_blank')}
              className="h-[56.2px] relative shrink-0 w-full cursor-pointer"
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[56.2px] items-center justify-between px-[17.6px] py-[1.6px] relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[130.163px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[130.163px]">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={settingsSvgPaths.p3b957700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="h-[21px] relative shrink-0 w-[98.162px]" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                          <p className="font-pretendard leading-[20px] left-0 not-italic relative shrink-0 text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">서비스 이용약관</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="h-[268.2px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24.32px] w-[342px]" data-name="Heading 2">
          <p className="font-garamond leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Support</p>
        </div>
        {/* 자주 묻는 질문 */}
        <button
          onClick={() => window.open('https://www.notion.so/SHOWCASE-FAQ-2c7c35f1b13980caaf67f2f1b98ff25d?source=copy_link', '_blank')}
          className="absolute box-border content-stretch flex h-[56.2px] items-center justify-between left-[24px] px-[17.6px] py-[1.6px] top-[58px] w-[342px] cursor-pointer"
          data-name="Button"
        >
          <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="h-[21px] relative shrink-0 w-[120.125px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[120.125px]">
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_20_770)" id="Icon">
                    <path d={settingsSvgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={settingsSvgPaths.p31d9b780} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_20_770">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                  <p className="font-pretendard leading-[20px] left-0 not-italic relative shrink-0 text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">자주 묻는 질문</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Icon">
                <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
        </button>
        {/* 문의하기 */}
        <button
          onClick={() => window.open('https://forms.gle/jYZJprEb7hNwHtum7', '_blank')}
          className="absolute box-border content-stretch flex h-[56.2px] items-center justify-between left-[24px] px-[17.6px] py-[1.6px] top-[122.2px] w-[342px] cursor-pointer"
          data-name="Button"
        >
          <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="h-[21px] relative shrink-0 w-[86.1px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[86.1px]">
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Icon">
                    <path d={settingsSvgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={settingsSvgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeLineWidth="1.66667" />
                  </g>
                </svg>
              </div>
              <div className="h-[21px] relative shrink-0 w-[54.1px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[54.1px]">
                  <p className="font-pretendard leading-[20px] left-0 not-italic relative shrink-0 text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">문의하기</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Icon">
                <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
        </button>
        {/* Design System */}
        <button
          onClick={() => handleFeatureClick('Design System')}
          className="absolute box-border content-stretch flex h-[56.2px] items-center justify-between left-[24px] px-[17.6px] py-[1.6px] top-[186.4px] w-[342px] cursor-pointer"
          data-name="Button"
        >
          <div aria-hidden="true" className="absolute border-[#f360c0] border-[1.6px] border-solid inset-0 pointer-events-none" />
          <div className="h-[21px] relative shrink-0 w-[124.05px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[124.05px]">
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Icon">
                    <path d={settingsSvgPaths.p2898e700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
              <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                  <p className="font-pretendard leading-[20px] left-0 not-italic relative shrink-0 text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">Design System</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Icon">
                <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
        </button>
      </div>

      {/* Danger Zone Section */}
      <div className="h-auto relative shrink-0 w-full mb-8 pt-[24px] pd-[24px]" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[12px] h-[178.4px] items-start px-[24px] py-[0] relative w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
              <p className="font-garamond leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Danger Zone</p>
            </div>
            {/* 로그아웃 */}
            <button
              onClick={handleLogout}
              className="h-[56.2px] relative shrink-0 w-full cursor-pointer"
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border-[1.6px] border-[#f44336] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[12px] h-[56.2px] items-center pl-[17.6px] pr-[1.6px] py-[1.6px] relative w-full">
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d={settingsSvgPaths.p14ca9100} id="Vector" stroke="#f44336" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M17.5 10H7.5" id="Vector_2" stroke="#f44336" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={settingsSvgPaths.p38966ca0} id="Vector_3" stroke="#f44336" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                  <div className="h-[21px] relative shrink-0 w-[54.1px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                      <p className="font-pretendard leading-[20px] left-0 not-italic relative shrink-0 text-[14px] text-[#f44336] text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">로그아웃</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            {/* 회원 탈퇴 */}
            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className="h-[56.2px] relative shrink-0 w-full cursor-pointer"
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border-[1.6px] border-[#f44336] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[12px] h-[56.2px] items-center pl-[17.6px] pr-[1.6px] py-[1.6px] relative w-full">
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d="M2.5 5.83333H17.5" stroke="#f44336" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M8.33333 9.16667V14.1667" stroke="#f44336" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M11.6667 9.16667V14.1667" stroke="#f44336" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M3.33333 5.83333L4.16667 15.8333C4.16667 16.2754 4.34226 16.6993 4.65482 17.0118C4.96738 17.3244 5.39131 17.5 5.83333 17.5H14.1667C14.6087 17.5 15.0326 17.3244 15.3452 17.0118C15.6577 16.6993 15.8333 16.2754 15.8333 15.8333L16.6667 5.83333" stroke="#f44336" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333" stroke="#f44336" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                  <div className="h-[21px] relative shrink-0 w-[57.588px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                      <p className="font-pretendard leading-[20px] left-0 not-italic relative shrink-0 text-[14px] text-[#f44336] text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">회원 탈퇴</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Delete Account Modal */}
      {isDeleteModalOpen && (
        <DeleteAccountModal
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={handleDeleteAccount}
        />
      )}
    </div>
  );
}