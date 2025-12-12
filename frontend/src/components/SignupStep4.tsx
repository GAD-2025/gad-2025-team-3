import React, { useState } from 'react'; // useState 임포트 추가
import { ChevronLeft, Search } from 'react-feather'; // Search 아이콘 임포트 추가
import { SignupData } from '../App';
import ARTISTS from '../constants/artists'; // ARTISTS 배열 임포트

interface SignupStep4Props {
  username: string;
  onNext: () => void;
  onBack: () => void;
  formData: SignupData;
  handleArtistToggle: (artistId: string) => void;
}

export default function SignupStep4({ username, onNext, onBack, formData, handleArtistToggle }: SignupStep4Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'group' | 'solo'>('all');

  const filteredArtists = ARTISTS.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || artist.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const isFormValid = formData.selectedArtists.length > 0;

  const handleNext = () => {
    if (isFormValid) {
      onNext();
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[70.083px] items-start pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
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
                  <p className="font-['Apple_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Sign Up</p>
                </div>
              </div>
              {/* Empty Container */}
              <div className="h-0 relative shrink-0 w-[19.992px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[19.992px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col h-[64px] items-start pb-[1.108px] pt-[23.99px] px-[23.99px] relative w-full">
            <div className="content-stretch flex gap-[15.993px] h-[15.007px] items-center relative shrink-0 w-full" data-name="Container">
              <div className="relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[-0.24px]">01. 아티스트 등록</p>
                </div>
              </div>
              <div className="h-[15.007px] relative shrink-0 w-[11.493px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.007px] items-start relative w-[11.493px]">
                  <p className="basis-0 font-['Playfair_Display',serif] font-normal grow leading-[15px] min-h-px min-w-px relative shrink-0 text-[10px] text-gray-200 tracking-[1.5px] uppercase">→</p>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">02. 정보 입력</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative shrink-0 w-full flex-1" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[23.99px] items-start pb-[100px] pt-[23.99px] px-[23.99px] relative w-full">
            {/* Title Section */}
            <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full" data-name="Container">
              {/* Icon */}
              <div className="relative shrink-0 size-[12px]">
                <div className="absolute inset-[-4.167%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                    <g id="Group 2085666190">
                      <path d="M0.5 6.32823H12.5" id="Line 55" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
                      <path d="M6.67035 0.5L6.67035 12.5" id="Line 56" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
                      <path d="M11.0539 10.8121L2.56866 2.32686" id="Line 57" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
                      <path d="M11.0539 10.8121L2.56866 2.32686" id="Line 58" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
                      <path d="M2.57634 10.5689L11.0616 2.08365" id="Line 59" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
              </div>
              {/* Heading */}
              <div className="relative shrink-0 w-full" data-name="Heading 2">
                <div className="font-['Pretendard',sans-serif] font-semibold leading-[32px] not-italic text-[24px] text-black tracking-[-0.48px]">
                  <p className="mb-0">{username} 님이</p>
                  <p>좋아하는 아티스트는?</p>
                </div>
              </div>
              {/* Description */}
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">본인이 좋아하는 아티스트를 최대 5개 선택해 주세요.</p>
              </div>
            </div>



            {/* Search and Add Artist Input */}
            <div className="flex gap-[8px] w-full mt-[23.99px]"> {/* gap-[23.99px]는 기존 Title Section과 Artist Grid 사이 간격*/}
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                
                placeholder="아티스트 이름을 검색하세요"
                className="flex-1 h-[47.184px] px-[16px] py-[12px] font-['Pretendard',sans-serif] text-[14px] text-black tracking-[-0.28px] outline-none border-[0.8px] border-black border-solid placeholder:text-[#99a1af]"
              />
              <button
                onClick={() => {
                  // 검색 기능만 필요하므로, 아티스트 추가 로직은 제거합니다.
                  // 검색은 input의 onChange 이벤트로 실시간으로 처리됩니다.
                }}
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
              {filteredArtists.map((artist) => { // ARTISTS 대신 filteredArtists 사용
                const isSelected = formData.selectedArtists.includes(artist.id);
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

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[393px] mx-auto px-[23.99px] pb-[23.99px] bg-white">
        <button 
          disabled={!isFormValid}
          onClick={handleNext}
          className={`relative w-full ${isFormValid ? 'bg-black' : 'bg-[#99a1af]'} transition-colors cursor-pointer disabled:cursor-not-allowed`}
          data-name="Button"
        >
          <div className="flex flex-col justify-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
              <div className="content-stretch flex h-[16.616px] items-start relative shrink-0" data-name="Text">
                <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">다음으로</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}