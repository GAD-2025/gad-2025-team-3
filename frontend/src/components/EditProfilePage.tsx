import React, { useState, useEffect } from 'react';
import { ChevronLeft, Search } from 'react-feather'; // Search 아이콘 임포트 추가
import Profile from '../imports/Profile';
import ARTISTS from '../constants/artists'; // ARTISTS 배열 임포트

interface User {
  id: number;
  username: string;
  email: string;
  nickname: string;
  bio: string;
  user_artists: string[]; // user_artists 필드 추가
}

interface EditProfilePageProps {
  onBack: () => void;
  currentUser: User | null;
  onUpdateUser: (updatedUser: User) => void; // Add onUpdateUser prop
  // Add other props as needed
}

export default function EditProfilePage({ onBack, currentUser, onUpdateUser }: EditProfilePageProps) {
  const [nickname, setNickname] = useState('');
  const [bio, setBio] = useState('');
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);
  const [nicknameError, setNicknameError] = useState('');

  // 아티스트 선택 관련 상태
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'group' | 'solo'>('all');
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]); // 선택된 아티스트 ID 배열

  useEffect(() => {
    if (currentUser) {
      console.log("currentUser in EditProfilePage:", currentUser); // Debug log
      console.log("currentUser.user_artists in EditProfilePage:", currentUser.user_artists); // Debug log
      setNickname(currentUser.nickname);
      setBio(currentUser.bio);
      setSelectedArtists(currentUser.user_artists || []); // user_artists 초기값 설정
    }
  }, [currentUser]);



  const handleArtistToggle = (artistId: string) => {
    setSelectedArtists(prevSelected => {
      if (prevSelected.includes(artistId)) {
        return prevSelected.filter(id => id !== artistId);
      } else {
        if (prevSelected.length < 5) {
          return [...prevSelected, artistId];
        } else {
          alert('최대 5개까지 선택할 수 있습니다.'); // 제한 초과 시 알림
          return prevSelected;
        }
      }
    });
  };

  const filteredArtists = ARTISTS.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || artist.type === filterType;
    return matchesSearch && matchesFilter;
  }).sort((a, b) => a.name.localeCompare(b.name));

  const handleSave = async () => {
    if (!currentUser) {
      alert('User not logged in.');
      return;
    }

    if (nickname !== currentUser.nickname && (!isNicknameChecked || !nicknameValid)) {
      alert('닉네임 중복 확인을 해주세요.');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${currentUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname,
          bio,
          username: currentUser.username,
          user_artists: selectedArtists, // user_artists 데이터 함께 전송
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update profile');
      }

      const updatedUser = await response.json();
      onUpdateUser(updatedUser); // Call onUpdateUser to update currentUser in App.tsx
      onBack();
    } catch (error: any) {
      console.error('Error updating profile:', error);
      alert(error.message);
    }
  };

  const handleCancel = () => {
    onBack();
  };

  const isValidNickname = (name: string) => {
    if (name.length < 2 || name.length > 12) {
      return { valid: false, message: '닉네임은 2-12자로 입력해주세요.' };
    }
    const regex = /^[가-힣a-zA-Z0-9]+$/;
    if (!regex.test(name)) {
      return { valid: false, message: '한글, 영문, 숫자만 사용 가능합니다.' };
    }
    return { valid: true, message: '' };
  };

  const handleNicknameCheck = async () => {
    const validation = isValidNickname(nickname);
    if (!validation.valid) {
      setNicknameError(validation.message);
      setIsNicknameChecked(false);
      setNicknameValid(false);
      return;
    }

    setIsNicknameChecked(false); // Reset while checking
    setNicknameError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/check-nickname`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname }),
      });

      setIsNicknameChecked(true);
      const data = await response.json();
      
      if (data.isDuplicate) {
        setNicknameValid(false);
        setNicknameError('이미 사용 중인 닉네임입니다.');
      } else {
        setNicknameValid(true);
        setNicknameError('');
      }
    } catch (error) {
      console.error('Nickname check failed:', error);
      setIsNicknameChecked(true);
      setNicknameValid(false);
      setNicknameError('네트워크 오류로 확인에 실패했습니다.');
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto pb-16" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[68.976px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[68.976px] items-center justify-between px-[23.99px] py-0 relative w-full">
              <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                <ChevronLeft className="size-5 text-black" />
              </button>
              <div className="h-[20.996px] relative shrink-0">
                <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic text-[18px] text-black text-center">Edit Profile</p>
              </div>
              <div className="w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[23.99px] items-start pb-0 pt-[23.99px] px-[23.99px] relative w-full">


            {/* Nickname Section */}
            <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">닉네임</p>
              </div>
              <div className="h-[47.184px] relative shrink-0 w-full" data-name="Container">
                <div className="size-full">
                  <div className="content-stretch flex gap-[7.997px] h-[47.184px] items-start relative w-full">
                    <div className="basis-0 grow h-[47.184px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <input
                          type="text"
                          value={nickname}
                          onChange={(e) => setNickname(e.target.value)}
                          placeholder="닉네임을 입력하세요"
                          className="bg-transparent border-0 box-border content-stretch flex h-[47.184px] items-center px-[16px] py-[12px] relative w-full font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px] text-[#4a5565] placeholder:text-[#99a1af] outline-none"
                        />
                      </div>
                      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                    </div>
                    <button
                      onClick={handleNicknameCheck}
                      className="h-[47.184px] relative shrink-0 w-[85.765px] cursor-pointer bg-black"
                      data-name="Button"
                    >
                      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[47.184px] items-center justify-center relative w-[85.765px]">
                        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
                          <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre text-white">중복확인</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">2-12자, 한글/영문/숫자 가능</p>
              {isNicknameChecked && nicknameValid ? (
                <p className="text-xs text-green-500 mt-1">사용할 수 있는 닉네임입니다.</p>
              ) : nicknameError ? (
                <p className="text-xs text-red-500 mt-1">{nicknameError}</p>
              ) : null}
            </div>

            {/* Bio Section */}
            <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">자기소개</p>
              </div>
              <div className="h-[110.119px] relative shrink-0 w-full" data-name="Text Area">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="자신을 소개해주세요 (선택)"
                    className="bg-transparent border-0 box-border content-stretch flex h-[110.119px] items-start px-[16px] py-[12px] relative w-full font-['Pretendard',sans-serif] leading-[20px] not-italic resize-none text-[14px] tracking-[-0.28px] text-[#4a5565] placeholder:text-[#99a1af] outline-none"
                    maxLength={20}
                  ></textarea>
                </div>
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              </div>
              <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-right tracking-[-0.24px]">{bio.length} / 20</p>
              </div>
            </div>
            {/* 구분선 */}
            <div className="w-full border-b-[1.6px] border-gray-300 my-[23.99px]"></div>

            {/* 아티스트 선택 섹션 - 여기에 SignupStep4 UI 로직 및 디자인 통합 */}
            <div className="content-stretch flex flex-col gap-[23.99px] items-start relative shrink-0 w-full">
                {/* Title Section from SignupStep4 */}
                <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                        <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">좋아하는 아티스트</p>
                    </div>
                                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                                    <p className="text-xs text-gray-500 mt-1">본인이 좋아하는 아티스트를 최대 5개 선택해 주세요.</p>
                                </div>                </div>

                {/* Search and Add Artist Input */}
                <div className="flex gap-[8px] w-full mt-[23.99px]">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="아티스트 이름을 검색하세요"
                        className="flex-1 h-[47.184px] px-[16px] py-[12px] font-['Pretendard',sans-serif] text-[14px] text-black tracking-[-0.28px] outline-none border-[0.8px] border-black border-solid placeholder:text-[#99a1af]"
                    />
                    <button
                        onClick={() => {}} // 검색 기능만 필요하므로, 아티스트 추가 로직은 제거
                        className="h-[47.184px] relative shrink-0 w-[47.175px] cursor-pointer bg-white border-[0.8px] border-black border-solid flex items-center justify-center"
                        data-name="Button"
                    >
                        <Search size={24} color="black" />
                    </button>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-[8px] w-full mt-[12px]">
                    <button
                        onClick={() => setFilterType('all')}
                        className={`h-[36px] px-[16px] py-[9px] relative shrink-0 cursor-pointer border-[0.8px] border-black border-solid ${
                        filterType === 'all' ? 'bg-[#f360c0] text-white' : 'bg-white text-black'
                        } font-['Pretendard',sans-serif] text-[12px] tracking-[-0.24px]`}
                    >
                        전체
                    </button>
                    <button
                        onClick={() => setFilterType('group')}
                        className={`h-[36px] px-[16px] py-[9px] relative shrink-0 cursor-pointer border-[0.8px] border-black border-solid ${
                        filterType === 'group' ? 'bg-[#f360c0] text-white' : 'bg-white text-black'
                        } font-['Pretendard',sans-serif] text-[12px] tracking-[-0.24px]`}
                    >
                        그룹
                    </button>
                    <button
                        onClick={() => setFilterType('solo')}
                        className={`h-[36px] px-[16px] py-[9px] relative shrink-0 cursor-pointer border-[0.8px] border-black border-solid ${
                        filterType === 'solo' ? 'bg-[#f360c0] text-white' : 'bg-white text-black'
                        } font-['Pretendard',sans-serif] text-[12px] tracking-[-0.24px]`}
                    >
                        솔로
                    </button>
                </div>

                {/* Artist Grid */}
                <div className="grid grid-cols-2 gap-[12px] w-full mt-[23.99px]" data-name="Artist Grid">
                    {filteredArtists.map((artist) => {
                        const isSelected = selectedArtists.includes(artist.id);
                        console.log(`Comparing Artist ID: ${artist.id} with Selected Artists:`, selectedArtists, `Is Selected: ${isSelected}`);
                        return (
                        <button
                            key={artist.id}
                            onClick={() => handleArtistToggle(artist.id)}
                            className={`h-[47.184px] relative shrink-0 cursor-pointer transition-colors ${
                            isSelected ? 'bg-[#F360C0]' : 'bg-white'
                            }`}
                            data-name="Artist Button"
                        >
                            <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                            <div className="flex items-center justify-center size-full px-[16px] py-[12px]">
                            <p className={`font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px] ${
                                isSelected ? 'text-white' : 'text-black'
                            }`}>
                                {artist.name}
                            </p>
                            </div>
                        </button>
                        );
                    })}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="w-full px-6 py-4 mt-auto">
        <button onClick={handleSave} className="relative shrink-0 w-full cursor-pointer transition-colors bg-black text-white h-[56.8px]">
          <div className="flex flex-col justify-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
              <div className="content-stretch flex h-[16.616px] items-start relative shrink-0">
                <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">저장</p>
              </div>
            </div>
          </div>
        </button>
        <button onClick={handleCancel} className="relative shrink-0 w-full cursor-pointer transition-colors bg-white text-black h-[56.8px] border-[1.6px] border-black mt-2">
          <div className="flex flex-col justify-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
              <div className="content-stretch flex h-[16.616px] items-start relative shrink-0">
                <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-black tracking-[-0.28px] whitespace-pre">취소</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}