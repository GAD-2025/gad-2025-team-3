import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'react-feather';
import Profile from '../imports/Profile';

interface User {
  id: number;
  username: string;
  email: string;
  nickname: string;
  bio: string;
  profileIcon: string;
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
  const [selectedIcon, setSelectedIcon] = useState('profile_1_s');
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);
  const [nicknameError, setNicknameError] = useState('');

  useEffect(() => {
    if (currentUser) {
      setNickname(currentUser.nickname);
      setBio(currentUser.bio);
      setSelectedIcon(currentUser.profileIcon || 'profile_1_s');
    }
  }, [currentUser]);

  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
  };

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
          profileIcon: selectedIcon,
          username: currentUser.username,
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
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
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
            {/* Profile Icon Section */}
            <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
                <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">프로필 아이콘</p>
              </div>
              <div className="flex justify-around w-full">
                {['profile_1_s', 'profile_2_s', 'profile_3_s', 'profile_4_s'].map((icon) => (
                  <div
                    key={icon}
                    className={`w-16 h-16 overflow-hidden cursor-pointer border-2 ${selectedIcon === icon ? 'border-pink-500' : 'border-transparent'}`}
                    onClick={() => handleIconSelect(icon)}
                  >
                    <Profile prop1={icon as any} className="w-full h-full" />
                  </div>
                ))}
              </div>
            </div>

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
                    maxLength={100}
                  ></textarea>
                </div>
                <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
              </div>
              <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-right tracking-[-0.24px]">{bio.length} / 100</p>
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
