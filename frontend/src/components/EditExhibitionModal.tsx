import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";

// Helper functions defined outside the component for proper hoisting and reusability
const formatDate = (date: Date | undefined) => {
  if (!date) return '';
  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
};

const normalizeDateToMidnight = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

interface ExhibitionData {
  id: number;
  user_id: number;
  title: string;
  author: string;
  room_number: string;
  room_creation_count?: number;
  views: string;
  likes: string;
  shares: string;
  description: string;
  start_date: string;
  end_date: string;
  is_public: boolean;
  imageUrls: string[];
  hashtags: string[]; // Added hashtags property
}

interface EditExhibitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  exhibition: ExhibitionData;
  onSave: (updatedExhibition: ExhibitionData) => void;
}

export default function EditExhibitionModal({ isOpen, onClose, exhibition, onSave }: EditExhibitionModalProps) {
  const [title, setTitle] = useState(exhibition.title || '');
  const [description, setDescription] = useState(exhibition.description || '');
  // Start date should be fixed to today's date and uneditable
  const [startDate] = useState<Date | undefined>(normalizeDateToMidnight(new Date()));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date(exhibition.end_date));
  const [isPublic, setIsPublic] = useState(exhibition.is_public);
  const [hashtags, setHashtags] = useState<string[]>(exhibition.hashtags || []); // New state for hashtags
  const [newHashtagInput, setNewHashtagInput] = useState(''); // State for new hashtag input

  // Update state if exhibition prop changes (only for editable fields)
  useEffect(() => {
    setTitle(exhibition.title || '');
    setDescription(exhibition.description || '');
    setEndDate(new Date(exhibition.end_date));
    setIsPublic(exhibition.is_public);
    setHashtags(exhibition.hashtags || []); // Update hashtags from prop
  }, [exhibition]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!title || !startDate || !endDate) {
      alert("제목과 전시 기간은 필수 항목입니다.");
      return;
    }
    // Compare normalized dates to ignore time component
    if (normalizeDateToMidnight(startDate) > normalizeDateToMidnight(endDate)) {
      alert("시작일은 종료일보다 늦을 수 없습니다.");
      return;
    }

    const updatedExhibition: ExhibitionData = {
      ...exhibition, // Keep other properties from original exhibition
      title,
      description,
      start_date: startDate.toISOString().split('T')[0], // Convert Date object back to string for backend
      end_date: endDate.toISOString().split('T')[0],     // Convert Date object back to string for backend
      is_public: isPublic,
      hashtags: hashtags, // Include hashtags in the updated exhibition
    };
    onSave(updatedExhibition);
    onClose();
  };

  const handleRemoveHashtag = (tagToRemove: string) => {
    setHashtags(hashtags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmedInput = newHashtagInput.trim();
      if (trimmedInput) {
        // Ensure hashtag starts with '#'
        const formattedTag = trimmedInput.startsWith('#') ? trimmedInput : `#${trimmedInput}`;
        if (!hashtags.includes(formattedTag)) {
          setHashtags((prevTags) => [...prevTags, formattedTag]); // Use functional update
          setNewHashtagInput('');
        }
      }
    } else if (e.key === 'Backspace' && newHashtagInput === '') {
      setHashtags(hashtags.slice(0, -1));
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-[100] p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="bg-white border-[1.6px] border-black border-solid h-auto relative shrink-0 w-[345px] max-w-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-auto items-start p-[1.6px] relative w-full">
          {/* Header */}
          <div className="border-b-[1.6px] border-black border-l-0 border-r-0 border-solid border-t-0 content-stretch flex h-[77.6px] items-center justify-between pb-[1.6px] pt-0 px-[24px] relative shrink-0 w-full">
            <h2 className="font-['Pretendard',sans-serif] font-bold leading-[30px] text-[20px] text-black">전시 정보 수정</h2>
            <button onClick={onClose} className="relative shrink-0 size-[36px] flex items-center justify-center hover:opacity-70">
              <X size={20} color="black" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="h-auto relative shrink-0 w-full p-[24px] flex flex-col gap-[20px]">
            {/* Exhibition Title */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="title" className="font-['Pretendard',sans-serif] text-[12px] tracking-[-0.24px] text-[#4a5565]">제목</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-[1.6px] border-black border-solid h-[48.2px] px-[16px] py-[12px] font-['Pretendard',sans-serif] text-[14px] text-black tracking-[-0.28px] w-full"
                placeholder="전시 제목을 입력하세요"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="description" className="font-['Pretendard',sans-serif] text-[12px] tracking-[-0.24px] text-[#4a5565]">설명</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-[1.6px] border-black border-solid h-[111.2px] px-[16px] py-[12px] font-['Pretendard',sans-serif] text-[14px] text-black tracking-[-0.28px] w-full resize-none"
                placeholder="전시 설명을 입력하세요"
              />
            </div>



            {/* Exhibition Period - Calendar Selection */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Pretendard',sans-serif] text-[12px] tracking-[-0.24px] text-[#4a5565]">전시 기간</label>
              <div className="flex gap-[12px] w-full">
                {/* Start Date */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button" // Prevent form submission
                      disabled // Disable the start date
                      className="flex-1 h-[48.2px] relative opacity-50 cursor-not-allowed" // Add disabled styling
                    >
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="box-border content-stretch flex h-[48.2px] items-center justify-between px-[16px] py-[12px] relative w-full">
                          <span className={`font-['Pretendard',sans-serif] leading-[18px] not-italic text-[12px] tracking-[-0.28px] ${!startDate ? 'text-[#99a1af]' : 'text-[#4a5565]'}`}>
                            {startDate ? formatDate(startDate) : '시작일'}
                          </span>
                          <CalendarIcon className={`size-4 ${!startDate ? 'text-[#99a1af]' : 'text-[#4a5565]'}`} />
                        </div>
                      </div>
                      <div aria-hidden="true" className={`absolute border-[1.6px] ${!startDate ? 'border-[#99a1af]' : 'border-black'} border-solid inset-0 pointer-events-none`} />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white z-[100]" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      // onSelect={setStartDate} // Removed onSelect to make it uneditable
                      initialFocus
                      disabled // Disable the calendar itself
                    />
                  </PopoverContent>
                </Popover>
                
                {/* End Date */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button" // Prevent form submission
                      className="flex-1 h-[48.2px] relative"
                    >
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="box-border content-stretch flex h-[48.2px] items-center justify-between px-[16px] py-[12px] relative w-full">
                          <span className={`font-['Pretendard',sans-serif] leading-[18px] not-italic text-[12px] tracking-[-0.28px] ${!endDate ? 'text-[#99a1af]' : 'text-[#4a5565]'}`}>
                            {endDate ? formatDate(endDate) : '종료일'}
                          </span>
                          <CalendarIcon className={`size-4 ${!endDate ? 'text-[#99a1af]' : 'text-[#4a5565]'}`} />
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white z-[100]" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      disabled={(date) => {
                        // 시작일이 선택되어 있으면, 시작일보다 이른 날짜는 비활성화
                        if (startDate) {
                          return normalizeDateToMidnight(date) < normalizeDateToMidnight(startDate);
                        }
                        return false;
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Public Exhibition Toggle */}
            <div className="flex flex-col gap-[8px] w-full">
              <label className="font-['Pretendard',sans-serif] text-[12px] tracking-[-0.24px] text-[#4a5565]">공개 범위</label>
              <div className="flex gap-[12px] w-full">
                <button
                  type="button" // Prevent form submission
                  onClick={() => setIsPublic(true)}
                  className={`flex-1 h-[48.2px] relative transition-all ${
                    isPublic ? 'bg-[#f360c0] text-white' : 'bg-white text-[#4a5565]'
                  }`}
                >
                  <div className="flex items-center justify-center size-full">
                    <span className="font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px]">공개</span>
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </button>
                
                <button
                  type="button" // Prevent form submission
                  onClick={() => setIsPublic(false)}
                  className={`flex-1 h-[48.2px] relative transition-all ${
                    !isPublic ? 'bg-[#f360c0] text-white' : 'bg-white text-[#4a5565]'
                  }`}
                >
                  <div className="flex items-center justify-center size-full">
                    <span className="font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px]">비공개</span>
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </button>
              </div>
            </div>

            {/* Hashtags */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="hashtags" className="font-['Pretendard',sans-serif] text-[12px] tracking-[-0.24px] text-[#4a5565]">해시태그</label>
              <div className="flex items-center gap-[8px] flex-wrap border-[1.6px] border-black border-solid p-[12px] min-h-[48.2px]">
                {hashtags.map((tag, index) => (
                  <span key={index} className="flex items-center bg-[#eee] px-[8px] py-[4px] rounded-full text-[12px]">
                    {tag}
                    <button type="button" onClick={() => handleRemoveHashtag(tag)} className="ml-[4px] text-gray-500 hover:text-gray-700">
                      &times;
                    </button>
                  </span>
                ))}
                <input
                  id="hashtags"
                  type="text"
                  value={newHashtagInput}
                  onChange={(e) => setNewHashtagInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 min-w-[100px] font-['Pretendard',sans-serif] text-[14px] text-black tracking-[-0.28px] outline-none"
                  placeholder="해시태그는 최대 10개까지 추가할 수 있습니다."
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[12px] w-full mt-[20px]">
              <button type="submit" className="bg-black border-[1.6px] border-black border-solid w-full h-[52.2px] text-white font-['Pretendard',sans-serif] text-[14px] tracking-[-0.28px] hover:bg-[#f360c0] transition-colors">
                저장
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}