import React, { useState, useEffect } from 'react';
import { ChevronLeft, Search } from 'react-feather';
import ARTISTS from '../constants/artists';

interface User {
  id: number;
  username: string;
  email: string;
  nickname: string;
  bio: string;
  user_artists: string[];
}

interface EditProfilePageProps {
  onBack: () => void;
  currentUser: User | null;
  onUpdateUser: (updatedUser: User) => void;
}

export default function EditProfilePage({ onBack, currentUser, onUpdateUser }: EditProfilePageProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'artists'>('profile');
  const [nickname, setNickname] = useState('');
  const [bio, setBio] = useState('');
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);
  const [nicknameError, setNicknameError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'group' | 'solo'>('all');
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

  useEffect(() => {
    if (currentUser) {
      setNickname(currentUser.nickname);
      setBio(currentUser.bio);
      setSelectedArtists(currentUser.user_artists || []);
      setIsNicknameChecked(true); // Assume initial nickname is valid
      setNicknameValid(true);
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
          alert('최대 5개까지 선택할 수 있습니다.');
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nickname,
          bio,
          username: currentUser.username,
          user_artists: selectedArtists,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update profile');
      }

      const updatedUser = await response.json();
      onUpdateUser(updatedUser);
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
    if (nickname === currentUser?.nickname) {
        setNicknameError('');
        setIsNicknameChecked(true);
        setNicknameValid(true);
        alert("현재 사용하고 있는 닉네임입니다.");
        return;
    }
    
    const validation = isValidNickname(nickname);
    if (!validation.valid) {
      setNicknameError(validation.message);
      setIsNicknameChecked(false);
      setNicknameValid(false);
      return;
    }

    setIsNicknameChecked(false);
    setNicknameError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/check-nickname`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname }),
      });

      setIsNicknameChecked(true);
      const data = await response.json();
      
      if (data.isDuplicate) {
        setNicknameValid(false);
        setNicknameError('이미 사용 중인 닉네임입니다.');
      } else {
        setNicknameValid(true);
        setNicknameError('사용할 수 있는 닉네임입니다.');
      }
    } catch (error) {
      console.error('Nickname check failed:', error);
      setIsNicknameChecked(true);
      setNicknameValid(false);
      setNicknameError('네트워크 오류로 확인에 실패했습니다.');
    }
  };

  return (
    <div className="bg-white flex flex-col w-full h-screen max-w-[393px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between h-[70.083px] border-b-[1.108px] border-black px-[20px] shrink-0">
        <button onClick={onBack} className="p-2">
          <ChevronLeft className="size-5 text-black" />
        </button>
        <h1 className="font-garamond font-bold text-[18px]">Edit Profile</h1>
        <div className="w-9"></div> {/* Spacer */}
      </div>

      {/* Tab Bar */}
      <div className="flex shrink-0">
        <button
          onClick={() => setActiveTab('profile')}
          className={`w-1/2 py-3 text-center font-pretendard text-sm font-semibold ${
            activeTab === 'profile'
              ? 'bg-black text-white'
              : 'bg-white text-black border-b'
          }`}
        >
          프로필 정보
        </button>
        <button
          onClick={() => setActiveTab('artists')}
          className={`w-1/2 py-3 text-center font-pretendard text-sm font-semibold ${
            activeTab === 'artists'
              ? 'bg-black text-white'
              : 'bg-white text-black border-b'
          }`}
        >
          좋아하는 아티스트
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'profile' && (
          <div className="flex flex-col gap-6">
            {/* Nickname Section */}
            <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full">
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
                          onChange={(e) => {
                            setNickname(e.target.value);
                            setIsNicknameChecked(false);
                            setNicknameValid(false);
                            setNicknameError('');
                          }}
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
              <p className={`text-xs mt-1 ${nicknameValid ? 'text-green-500' : 'text-red-500'}`}>
                {nicknameError || '2-12자, 한글/영문/숫자만 사용 가능합니다.'}
              </p>
            </div>

            {/* Bio Section */}
            <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full">
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
          </div>
        )}

        {activeTab === 'artists' && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <p className="font-['Pretendard',sans-serif] text-xs text-gray-600">좋아하는 아티스트</p>
                <p className="text-xs text-gray-500">본인이 좋아하는 아티스트를 최대 5개 선택해 주세요.</p>
            </div>
            {/* Search and Add Artist Input */}
            <div className="flex gap-2 w-full">
                <div className="basis-0 grow h-[47.184px] min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="아티스트 이름을 검색하세요"
                            className="bg-transparent border-0 box-border content-stretch flex h-[47.184px] items-center px-[16px] py-[12px] relative w-full font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px] text-[#4a5565] placeholder:text-[#99a1af] outline-none"
                        />
                    </div>
                    <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </div>
              <button className="h-[47.184px] w-[47.184px] bg-white border border-black flex items-center justify-center">
                <Search size={20} color="black" />
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 w-full">
              <button
                onClick={() => setFilterType('all')}
                className={`h-9 px-4 py-2 text-xs border border-black ${
                  filterType === 'all' ? 'bg-[#f360c0] text-white' : 'bg-white text-black'
                }`}
              >
                전체
              </button>
              <button
                onClick={() => setFilterType('group')}
                className={`h-9 px-4 py-2 text-xs border border-black ${
                  filterType === 'group' ? 'bg-[#f360c0] text-white' : 'bg-white text-black'
                }`}
              >
                그룹
              </button>
              <button
                onClick={() => setFilterType('solo')}
                className={`h-9 px-4 py-2 text-xs border border-black ${
                  filterType === 'solo' ? 'bg-[#f360c0] text-white' : 'bg-white text-black'
                }`}
              >
                솔로
              </button>
            </div>

            {/* Artist Grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {filteredArtists.map((artist) => {
                const isSelected = selectedArtists.includes(artist.id);
                return (
                  <button
                    key={artist.id}
                    onClick={() => handleArtistToggle(artist.id)}
                    className={`h-[47.184px] relative shrink-0 cursor-pointer transition-colors ${
                      isSelected ? 'bg-[#F360C0]' : 'bg-white'
                    }`}
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
        )}
      </div>

      {/* Footer Buttons */}
      <div className="w-full px-6 py-4 shrink-0 border-t">
        <div className="flex flex-col gap-2">
            <button onClick={handleSave} className="relative shrink-0 w-full bg-black transition-colors cursor-pointer h-14">
              <div className="flex flex-col justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
                  <div className="content-stretch flex h-[16.616px] items-start relative shrink-0">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">저장</p>
                  </div>
                </div>
              </div>
            </button>
            <button onClick={handleCancel} className="relative shrink-0 w-full bg-white border border-black transition-colors cursor-pointer h-14">
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
    </div>
  );
}
