import { useState } from 'react';
import svgPaths from "../imports/svg-eycs1wfpjn";

interface ShareExhibitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  exhibition: {
    room: string;
    title: string;
    author: string;
  };
}

export default function ShareExhibitionModal({ isOpen, onClose, exhibition }: ShareExhibitionModalProps) {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  
  if (!isOpen) return null;

  const shareUrl = `https://exhibition.hotel/room/${exhibition.room}`;

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2000);
  };

  const handleCopy = () => {
    const input = document.getElementById('share-url-input') as HTMLInputElement;
    if (input) {
      input.select();
      input.setSelectionRange(0, 99999); // For mobile devices
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopied(true);
          showMessage('링크가 복사되었습니다!');
          setTimeout(() => setCopied(false), 2000);
        } else {
          showMessage('Ctrl+C 를 눌러 복사해주세요.');
        }
      } catch (err) {
        showMessage('Ctrl+C 를 눌러 복사해주세요.');
      }
    }
  };

  const handleKakaoShare = () => {
    showMessage('카카오톡 공유 기능은 준비중입니다.');
  };

  const handleXShare = () => {
    const text = `${exhibition.title} - Exhibition Room ${exhibition.room}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Toast Message */}
      {message && (
        <div className="fixed top-[100px] left-1/2 -translate-x-1/2 bg-black text-white px-[24px] py-[12px] z-[60] border-[1px] border-white">
          <p className="font-['Pretendard',sans-serif] text-[14px] tracking-[-0.28px]">{message}</p>
        </div>
      )}
      
      <div className="bg-white relative w-[343.061px] max-w-[95vw]" data-name="Share Exhibition Modal">
        {/* Header */}
        <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-[23.99px] relative w-full">
              <div className="h-[20.996px] relative shrink-0 w-[174.784px]" data-name="Heading 2">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start relative w-[174.784px]">
                  <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Share Exhibition</p>
                </div>
              </div>
              <button onClick={onClose} className="relative shrink-0 size-[19.992px] cursor-pointer" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[19.992px]">
                  <div className="h-[19.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-1/4" data-name="Vector">
                      <div className="absolute inset-[-8.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <path d={svgPaths.p1be71ee0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-1/4" data-name="Vector">
                      <div className="absolute inset-[-8.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <path d={svgPaths.p3d8bad80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="h-[692.318px] relative shrink-0 w-full" data-name="Container">
          {/* Exhibition Info */}
          <div className="absolute box-border content-stretch flex flex-col gap-[7.997px] h-[101.707px] items-start left-[23.99px] pb-[1.108px] pt-[17.101px] px-[17.101px] top-[23.99px] w-[295.081px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
            <div className="h-[15.007px] relative shrink-0 w-full" data-name="Container">
              <p className="absolute font-['EB_Garamond',serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px]">Room {exhibition.room}</p>
            </div>
            <div className="content-stretch flex h-[23.99px] items-start relative shrink-0 w-full" data-name="Heading 3">
              <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px]">{exhibition.title}</p>
            </div>
            <div className="h-[16.513px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Pretendard',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-1px] tracking-[-0.24px] whitespace-pre">by {exhibition.author}</p>
            </div>
          </div>

          {/* Link Section */}
          <div className="absolute content-stretch flex flex-col gap-[7.997px] h-[67.193px] items-start left-[23.99px] top-[149.69px] w-[295.081px]" data-name="Container">
            <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
              <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">전시관 링크</p>
            </div>
            <div className="content-stretch flex gap-[7.997px] h-[44.189px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="basis-0 bg-gray-50 grow h-[44.189px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[44.189px] items-center px-[16px] py-[12px] relative w-full">
                    <input 
                      id="share-url-input"
                      type="text" 
                      value={shareUrl} 
                      readOnly 
                      onClick={(e) => (e.target as HTMLInputElement).select()}
                      className="font-['Pretendard',sans-serif] leading-[18px] not-italic text-[12px] text-black tracking-[-0.24px] bg-transparent border-none outline-none w-full cursor-pointer"
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
              </div>
              <button onClick={handleCopy} className="h-[44.189px] relative shrink-0 w-[62.191px] cursor-pointer hover:bg-[#F360C0] transition-colors group" data-name="Button">
                <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44.189px] items-start pb-[1.108px] pt-[12.099px] px-[21.099px] relative w-[62.191px]">
                  <div className="h-[19.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[33.33%_8.33%_8.33%_33.33%]" data-name="Vector">
                      <div className="absolute inset-[-7.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <path d={svgPaths.p383b4ad0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" className="group-hover:stroke-white transition-colors" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[8.33%_33.33%_33.33%_8.33%]" data-name="Vector">
                      <div className="absolute inset-[-7.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <path d={svgPaths.p258b8b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" className="group-hover:stroke-white transition-colors" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="absolute box-border content-stretch flex flex-col items-start left-[23.99px] pb-[1.108px] pt-[33.094px] px-[33.094px] size-[295.081px] top-[240.87px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
            <div className="bg-gray-50 h-[228.892px] relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[1.108px] border-gray-200 border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex h-[228.892px] items-center justify-center p-[1.108px] relative w-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-center relative">
                      <div className="relative shrink-0 size-[31.987px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <g id="Icon">
                            <path d={svgPaths.p2c152b80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66556" />
                            <path d={svgPaths.p35f97940} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66556" />
                          </g>
                        </svg>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                        <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap tracking-[-0.28px] whitespace-pre">QR 코드</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="absolute content-stretch flex flex-col gap-[7.997px] h-[108.388px] items-start left-[23.99px] top-[559.94px] w-[295.081px]" data-name="Container">
            <button onClick={handleKakaoShare} className="h-[50.196px] relative shrink-0 w-full cursor-pointer hover:bg-[#F360C0] transition-colors group" data-name="Button">
              <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
              <div className="absolute content-stretch flex items-center left-[13.1px] top-[calc(50%-0.28px)] translate-y-[-50%]" data-name="Text">
                <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre group-hover:text-white transition-colors">카카오톡으로 공유</p>
              </div>
            </button>
            <button onClick={handleXShare} className="h-[50.196px] relative shrink-0 w-full cursor-pointer hover:bg-[#F360C0] transition-colors group" data-name="Button">
              <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
              <div className="absolute content-stretch flex items-start left-[13.1px] top-[calc(50%-0.47px)] translate-y-[-50%]" data-name="Text">
                <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.28px] w-[74.566px] group-hover:text-white transition-colors">x로 공유</p>
              </div>
            </button>
          </div>
        </div>

        {/* Close Button */}
        <div className="h-[99.283px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[1.108px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="box-border content-stretch flex h-[99.283px] items-center pb-[1.108px] pt-[24.099px] px-[23.99px] relative w-full">
              <button onClick={onClose} className="bg-black relative shrink-0 w-full cursor-pointer hover:bg-[#F360C0] transition-colors group" data-name="Button">
                <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                <div className="flex flex-col justify-center size-full">
                  <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
                    <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
                      <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">닫기</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
