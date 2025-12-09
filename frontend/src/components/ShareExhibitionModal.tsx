import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Copy, X } from 'react-feather';

interface ShareExhibitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  exhibition: {
    room: string;
    title: string;
    author: string;
    creationCount?: number;
  };
  onShareSuccess: () => void;
}

export default function ShareExhibitionModal({ isOpen, onClose, exhibition, onShareSuccess }: ShareExhibitionModalProps) {
  const [message, setMessage] = useState('');

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  if (!isOpen) return null;

  const shareUrl = `https://showcase.hotel/room/${exhibition.room}${exhibition.creationCount ? `/${exhibition.creationCount}` : ''}`;

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      showMessage('링크가 복사되었습니다!');
    }, () => {
      showMessage('링크 복사에 실패했습니다.');
    });
  };

  const handleKakaoShare = () => {
    showMessage('카카오톡 공유 기능은 준비중입니다.');
  };

  const handleXShare = () => {
    const text = `${exhibition.title} - Exhibition Room ${exhibition.room}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
    onShareSuccess();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      {message && (
        <div className="fixed top-[100px] left-1/2 -translate-x-1/2 bg-black text-white px-[24px] py-[12px] z-[60] border-[1px] border-white">
          <p className="font-['Pretendard',sans-serif] text-[14px] tracking-[-0.28px]">{message}</p>
        </div>
      )}
      <div className="bg-white border-[1.6px] border-black border-solid content-stretch flex flex-col w-[345px] max-w-[95vw] max-h-[90vh] overflow-y-auto gap-[10px] pt-[2px] pb-[0px]" onClick={(e) => e.stopPropagation()}>
                  <div className="border-b-[1.6px] border-black border-l-0 border-r-0 border-solid border-t-0 content-stretch flex h-[60px] items-center justify-between pb-0 pt-0 px-[24px] relative shrink-0 w-full">          <h2 className="font-['Pretendard',sans-serif] font-bold leading-[30px] text-[20px] text-black">
            Share Exhibition
          </h2>
          <button onClick={onClose} className="relative shrink-0 size-[36px] flex items-center justify-center hover:opacity-70">
            <X size={20} color="black" />
          </button>
        </div>
        <div className="px-[24px] py-[10px] flex flex-col gap-[12px]">
          <div className="border-[1.108px] border-black border-solid flex flex-col gap-[2px] pb-[0px] pt-[8px] text-start">
            <p className="font-['EB_Garamond',serif] text-[14px] text-[#4a5565] pl-[10px]">
              Room {exhibition.room}
            </p>
            <p className="font-['Pretendard',sans-serif] text-[16px] tracking-[-0.32px]  pl-[10px]">
              {truncateTitle(exhibition.title, 13)}
            </p>
            <p className="font-['Pretendard',sans-serif] text-[12px] text-[#4a5565] tracking-[-0.24px] pb-[8px] pl-[10px]">
              by {exhibition.author}
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="font-['Pretendard',sans-serif] text-[12px] text-[#4a5565] tracking-[-0.24px]">
              전시관 링크
            </label>
            <div className="flex gap-[8px] w-full">
              <input
                id="share-url-input"
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 h-[40px] px-4 bg-gray-50 border border-black font-['Pretendard',sans-serif] text-[12px] tracking-[-0.24px]"
                style={{ paddingLeft: '10px' }}
              />
              <button onClick={handleCopy} className="w-[80px] h-[44px] border border-black flex items-center justify-center shrink-0">
                <Copy size={20} />
              </button>
            </div>
          </div>
          <div className="border-[1.108px] border-black border-solid p-4 min-h-[140px] flex items-center justify-center pt-[12px] pb-[12px]">
            <div className="bg-gray-50 w-full p-4 flex flex-col items-center justify-center gap-[6px]">
              <QRCodeCanvas
                value={shareUrl}
                size={120}
                bgColor={"#f9fafb"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
              />
              <p className="font-['Pretendard',sans-serif] text-[14px] text-[#4a5565] tracking-[-0.28px] mt-2">
                QR 코드
              </p>
               <div className="h-[8px] w-full shrink-0"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] mb-4">
            <button onClick={handleKakaoShare} className="h-[54px] border border-black text-left px-3">
              <span className="font-['Pretendard',sans-serif] text-[14px] tracking-[-0.28px]">
                카카오톡으로 공유
              </span>
            </button>
            <button onClick={handleXShare} className="h-[54px] border border-black text-left px-3">
              <span className="font-['Pretendard',sans-serif] text-[14px] tracking-[-0.28px]">
                x로 공유
              </span>
            </button>
          </div>
        </div>
        <div className="px-[24px] pb-[15px] pt-[15px] border-t-[1.108px] border-black">
          <button onClick={onClose} className="w-full h-[56px] bg-black text-white flex items-center">
            <span 
              className="font-['Pretendard',sans-serif] text-[14px] tracking-[-0.28px]" 
              style={{ paddingLeft: '20px' }}
            >
              닫기
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}