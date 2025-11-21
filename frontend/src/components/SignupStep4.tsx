import { useState } from 'react';
import svgPaths from "../imports/svg-q1ym24wvoh";

interface SignupStep4Props {
  username: string;
  onNext: (selectedArtists: string[]) => void;
  onBack: () => void;
}

const ARTISTS = [
  { id: 'bts', name: 'BTS' },
  { id: 'iu', name: '아이유' },
  { id: 'blackpink', name: 'BLACKPINK' },
  { id: 'nct', name: 'NCT' },
  { id: 'seventeen', name: 'SEVENTEEN' },
  { id: 'newjeans', name: 'NewJeans' },
  { id: 'straykids', name: 'Stray Kids' },
  { id: 'txt', name: 'TXT' },
  { id: 'twice', name: 'TWICE' },
  { id: 'redvelvet', name: 'Red Velvet' },
  { id: 'aespa', name: 'aespa' },
  { id: 'lesserafim', name: 'LE SSERAFIM' },
  { id: 'ive', name: 'IVE' },
  { id: 'itzy', name: 'ITZY' },
  { id: 'enhypen', name: 'ENHYPEN' },
  { id: 'taeil', name: '태일' },
  { id: 'exo', name: 'EXO' },
  { id: 'got7', name: 'GOT7' },
  { id: 'treasure', name: 'TREASURE' },
  { id: 'artist1', name: '(아티스트)들' },
  { id: 'artist2', name: '(아티스트)들' },
  { id: 'artist3', name: '(아티스트)들' },
  { id: 'artist4', name: '(아티스트)들' },
  { id: 'artist5', name: '(아티스트)들' },
  { id: 'artist6', name: '(아티스트)들' },
  { id: 'artist7', name: '(아티스트)들' },
  { id: 'artist8', name: '(아티스트)들' },
  { id: 'artist9', name: '(아티스트)들' },
];

export default function SignupStep4({ username, onNext, onBack }: SignupStep4Props) {
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

  const toggleArtist = (artistId: string) => {
    if (selectedArtists.includes(artistId)) {
      setSelectedArtists(selectedArtists.filter(id => id !== artistId));
    } else {
      if (selectedArtists.length < 5) {
        setSelectedArtists([...selectedArtists, artistId]);
      }
    }
  };

  const isFormValid = selectedArtists.length > 0;

  const handleNext = () => {
    if (isFormValid) {
      onNext(selectedArtists);
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
              <button className="relative shrink-0 size-[19.992px]" data-name="Button" onClick={onBack}>
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[19.992px]">
                  <div className="h-[19.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
                      <div className="absolute inset-[-7.14%_-14.29%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
                          <path d={svgPaths.p63e1620} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
                      <div className="absolute inset-[-0.83px_-7.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                          <path d="M12.4948 0.832986H0.832986" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
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

            {/* Artist Grid */}
            <div className="grid grid-cols-2 gap-[12px] w-full" data-name="Artist Grid">
              {ARTISTS.map((artist) => {
                const isSelected = selectedArtists.includes(artist.id);
                return (
                  <button
                    key={artist.id}
                    onClick={() => toggleArtist(artist.id)}
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
