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
      input.setSelectionRange(0, 99999);
      
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      {/* Toast Message */}
      {message && (
        <div className="fixed top-[100px] left-1/2 -translate-x-1/2 bg-black text-white px-[24px] py-[12px] z-[60] border-[1px] border-white">
          <p className="font-['Pretendard',sans-serif] text-[14px] tracking-[-0.28px]">{message}</p>
        </div>
      )}
      
      <div className="bg-white w-[343px] max-w-[95vw] flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="h-[70px] border-b border-black px-6 flex items-center justify-between">
          <h2 className="font-['EB_Garamond',serif] text-[18px]">Share Exhibition</h2>
          <button onClick={onClose} className="w-5 h-5 flex items-center justify-center hover:opacity-70">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path d="M10.8288 0.832986L0.832986 10.8288" stroke="black" strokeWidth="1.666" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.832986 0.832986L10.8288 10.8288" stroke="black" strokeWidth="1.666" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 py-6 flex flex-col gap-8">
          {/* Exhibition Info */}
          <div className="border border-black p-4 flex flex-col gap-2">
            <p className="font-['EB_Garamond',serif] text-[14px] text-[#4a5565]">Room {exhibition.room}</p>
            <p className="font-['Pretendard',sans-serif] text-[16px] tracking-[-0.32px]">{exhibition.title}</p>
            <p className="font-['Pretendard',sans-serif] text-[12px] text-[#4a5565] tracking-[-0.24px]">by {exhibition.author}</p>
          </div>

          {/* Link Section */}
          <div className="flex flex-col gap-2">
            <label className="font-['Pretendard',sans-serif] text-[12px] text-[#4a5565] tracking-[-0.24px]">전시관 링크</label>
            <div className="flex gap-2">
              <input 
                id="share-url-input"
                type="text" 
                value={shareUrl} 
                readOnly 
                onClick={(e) => (e.target as HTMLInputElement).select()}
                className="flex-1 h-[44px] px-4 bg-gray-50 border border-black font-['Pretendard',sans-serif] text-[12px] tracking-[-0.24px] cursor-pointer"
              />
              <button 
                onClick={handleCopy} 
                className="w-[62px] h-[44px] border border-black hover:bg-[#F360C0] transition-colors group flex items-center justify-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 14 14" fill="none">
                  <path d={svgPaths.p383b4ad0} stroke="black" strokeWidth="1.666" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors" />
                  <path d={svgPaths.p258b8b00} stroke="black" strokeWidth="1.666" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors" />
                </svg>
              </button>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="border border-black p-6 h-[180px] flex items-center justify-center">
            <div className="bg-gray-50 border border-gray-200 w-full h-full flex flex-col items-center justify-center gap-2">
              <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                <path d={svgPaths.p2c152b80} stroke="#99A1AF" strokeWidth="2.666" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p35f97940} stroke="#99A1AF" strokeWidth="2.666" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['Pretendard',sans-serif] text-[14px] text-[#4a5565] tracking-[-0.28px]">QR 코드</p>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={handleKakaoShare} 
              className="h-[50px] border border-black hover:bg-[#F360C0] transition-colors group flex items-center px-3"
            >
              <span className="font-['Pretendard',sans-serif] text-[14px] tracking-[-0.28px] group-hover:text-white transition-colors">카카오톡으로 공유</span>
            </button>
            <button 
              onClick={handleXShare} 
              className="h-[50px] border border-black hover:bg-[#F360C0] transition-colors group flex items-center px-3"
            >
              <span className="font-['Pretendard',sans-serif] text-[14px] tracking-[-0.28px] group-hover:text-white transition-colors">x로 공유</span>
            </button>
          </div>
        </div>

        {/* Close Button */}
        <div className="px-6 pb-6">
          <button 
            onClick={onClose} 
            className="w-full h-[56px] bg-black border border-black hover:bg-[#F360C0] transition-colors flex items-center px-6"
          >
            <span className="font-['Pretendard',sans-serif] text-[14px] text-white tracking-[-0.28px]">닫기</span>
          </button>
        </div>
      </div>
    </div>
  );
}