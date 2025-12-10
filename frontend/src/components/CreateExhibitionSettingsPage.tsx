import { useState, useEffect } from 'react';
import { ChevronLeft, X } from 'react-feather'; // X 아이콘 임포트
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";

interface CreateExhibitionSettingsPageProps {
  onBack: () => void;
  onComplete: () => void;
  exhibitionTitle: string;
  setExhibitionTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
  isPublic: boolean;
  setIsPublic: (isPublic: boolean) => void;
  hashtags: string[]; // 추가
  setHashtags: React.Dispatch<React.SetStateAction<string[]>>; // 추가
}

export default function CreateExhibitionSettingsPage({
  onBack,
  onComplete,
  exhibitionTitle,
  setExhibitionTitle,
  description,
  setDescription,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  isPublic,
  setIsPublic,
  hashtags,
  setHashtags,
}: CreateExhibitionSettingsPageProps) {
  const [newHashtag, setNewHashtag] = useState(''); // newHashtag 상태 추가
  
  useEffect(() => {
    setStartDate(normalizeDateToMidnight(new Date()));
  }, [setStartDate]);

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const normalizeDateToMidnight = (date: Date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  };

  const handleTagAdd = () => {
    const trimmedTag = newHashtag.trim();
    if (trimmedTag === '') {
      alert('해시태그를 입력해주세요.');
      return;
    }
    // '#' 기호로 시작하지 않으면 자동으로 추가
    const formattedTag = trimmedTag.startsWith('#') ? trimmedTag : `#${trimmedTag}`;

    // 띄어쓰기 및 '_' 외 특수문자 검사 로직 추가
    const tagContent = formattedTag.substring(1); // # 제거 후 내용만 검사
    if (/\s/.test(tagContent)) {
      alert('해시태그에는 띄어쓰기를 사용할 수 없습니다.');
      return;
    }
    if (/[^a-zA-Z0-9가-힣_]/.test(tagContent)) {
      alert('해시태그에는 영문, 숫자, 한글, 언더바(_)만 사용할 수 있습니다.');
      return;
    }

    if (hashtags.includes(formattedTag)) {
      alert('이미 추가된 해시태그입니다.');
      return;
    }
    if (hashtags.length >= 10) {
      alert('해시태그는 최대 10개까지 추가할 수 있습니다.');
      return;
    }
    setHashtags(prev => [...prev, formattedTag]);
    setNewHashtag('');
  };

  const handleTagRemove = (tagToRemove: string) => {
    setHashtags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const isButtonEnabled =
    exhibitionTitle.trim() !== '' &&
    description.trim() !== '' &&
    startDate !== undefined &&
    endDate !== undefined &&
    normalizeDateToMidnight(startDate) <= normalizeDateToMidnight(endDate); // 시작일이 종료일보다 이르거나 같아야 함

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto" data-name="디자인 페이지 생성">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
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
                  <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Create New</p>
                </div>
              </div>
              {/* Empty Container */}
              <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
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
            <div className="content-stretch flex gap-[36px] h-[15.007px] items-center relative shrink-0 w-full" data-name="Container">
              <div className="relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                  <div className="relative shrink-0" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                      <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">01. 템플릿</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">02. 업로드</p>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                  <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">03. 설정</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[23.99px] items-start pb-0 pt-[23.99px] px-[23.99px] relative w-full">
            {/* Heading and Description */}
            <div className="content-stretch flex flex-col gap-[7.997px] h-[105.982px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[65px] relative shrink-0 w-[277px]" data-name="Heading 2">
                <div className="absolute font-['Pretendard',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-[0.89px] tracking-[-0.48px] whitespace-pre">
                  <p className="mb-0">쇼케이스의 정보를</p>
                  <p>입력하세요</p>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">쇼케이스의 제목과 설명을 입력하세요</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
              {/* Title Field */}
              <div className="content-stretch flex flex-col gap-[8px] h-[71.2px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">제목</p>
                </div>
                <div className="h-[48.2px] relative shrink-0 w-full" data-name="Text Input">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex h-[48.2px] items-center px-[16px] py-[12px] relative w-full">
                      <input
                        type="text"
                        value={exhibitionTitle}
                        onChange={(e) => setExhibitionTitle(e.target.value)}
                        placeholder="전시관 제목을 입력하세요"
                        className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] tracking-[-0.28px] bg-transparent border-none outline-none placeholder:text-[#99a1af] text-[#4a5565]"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </div>
              </div>

              {/* Description Field */}
              <div className="content-stretch flex flex-col gap-[8px] h-[139.8px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">설명</p>
                </div>
                <div className="h-[111.2px] relative shrink-0 w-full" data-name="Text Area">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex h-[111.2px] items-start px-[16px] py-[12px] relative w-full">
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="전시관에 대한 설명을 입력하세요"
                        className="basis-0 font-['Pretendard',sans-serif] grow leading-[20px] h-[85px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] tracking-[-0.28px] bg-transparent border-none outline-none resize-none placeholder:text-[#99a1af] text-[#4a5565]"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                </div>
              </div>

              {/* Period Field - Calendar Selection */}
              <div className={`content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full transition-opacity ${!isPublic ? 'opacity-50 cursor-not-allowed' : ''}`} data-name="Container">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
                  <p className={`basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] tracking-[-0.24px] ${!isPublic ? 'text-[#99a1af]' : 'text-[#4a5565]'}`}>전시 기간</p>
                </div>
                <div className="flex gap-[8px] w-full">
                  {/* Start Date */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        disabled
                        className="flex-1 h-[48.2px] relative cursor-not-allowed"
                        data-name="Date Picker"
                      >
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex h-[48.2px] items-center justify-between px-[16px] py-[12px] relative w-full">
                            <span className={`font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px] ${!isPublic || !startDate ? 'text-[#99a1af]' : 'text-[#99a1af]'}`}>
                              {startDate ? formatDate(startDate) : '시작일'}
                            </span>
                            <CalendarIcon className={`size-4 ${!isPublic ? 'text-[#99a1af]' : 'text-[#4a5565]'}`} />
                          </div>
                        </div>
                        <div aria-hidden="true" className={`absolute border-[1.6px] ${!isPublic ? 'border-[#99a1af]' : 'border-black'} border-solid inset-0 pointer-events-none`} />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white z-[100]" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  
                  {/* End Date */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        disabled={!isPublic}
                        className="flex-1 h-[48.2px] relative"
                        data-name="Date Picker"
                      >
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex h-[48.2px] items-center justify-between px-[16px] py-[12px] relative w-full">
                            <span className={`font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px] ${!isPublic || !endDate ? 'text-[#99a1af]' : 'text-[#4a5565]'}`}>
                              {endDate ? formatDate(endDate) : '종료일'}
                            </span>
                            <CalendarIcon className={`size-4 ${!isPublic ? 'text-[#99a1af]' : 'text-[#4a5565]'}`} />
                          </div>
                        </div>
                        <div aria-hidden="true" className={`absolute border-[1.6px] ${!isPublic ? 'border-[#99a1af]' : 'border-black'} border-solid inset-0 pointer-events-none`} />
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

              {/* Visibility Field - Toggle */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
                  <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">공개 범위</p>
                </div>
                <div className="flex gap-[12px] w-full">
                  <button
                    onClick={() => setIsPublic(true)}
                    className={`flex-1 h-[48.2px] relative transition-all ${
                      isPublic ? 'bg-[#f360c0]' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-center size-full">
                      <span className={`font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px] ${
                        isPublic ? 'text-white' : 'text-[#4a5565]'
                      }`}>
                        공개
                      </span>
                    </div>
                    <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                  </button>
                  
                  <button
                    onClick={() => setIsPublic(false)}
                    className={`flex-1 h-[48.2px] relative transition-all ${
                      !isPublic ? 'bg-[#f360c0]' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-center size-full">
                      <span className={`font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] tracking-[-0.28px] ${
                        !isPublic ? 'text-white' : 'text-[#4a5565]'
                      }`}>
                        비공개
                      </span>
                    </div>
                    <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                  </button>
                </div>
              </div>

              {/* Hashtag Field */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
                    <p className="basis-0 font-['Pretendard',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">관련 해시태그 (선택)</p>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
                    <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">{hashtags.length}/10</p>
                  </div>
                </div>
                
                <div className="flex gap-[8px] w-full">
                  <input
                    type="text"
                    value={newHashtag}
                    onChange={(e) => setNewHashtag(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleTagAdd();
                      }
                    }}
                    placeholder="해시태그 입력 (최대 10개)"
                    className="flex-1 h-[48.2px] px-[16px] py-[12px] font-['Pretendard',sans-serif] text-[14px] text-black tracking-[-0.28px] outline-none border-[1.6px] border-black border-solid placeholder:text-[#99a1af]"
                  />
                  <button
                    onClick={handleTagAdd}
                    className="h-[48.2px] relative shrink-0 w-[48.2px] cursor-pointer bg-black flex items-center justify-center"
                    data-name="Button"
                  >
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] text-white text-nowrap tracking-[-0.28px] whitespace-pre">+</p>
                  </button>
                </div>

                {/* Display added hashtags */}
                <div className="flex flex-wrap gap-[8px] mt-[8px]">
                  {hashtags.map((tag, index) => (
                    <div 
                      key={tag} 
                      className="flex items-center bg-white border-[0.8px] border-black border-solid rounded-[20px] pl-[12.8px] pr-[10px] py-[0.8px] h-[33.6px]"
                    >
                      <p className="font-['Pretendard',sans-serif] leading-[20px] text-[#4a5565] text-[14px] tracking-[-0.28px] whitespace-nowrap">
                        {tag}
                      </p>
                      <button
                        onClick={() => handleTagRemove(tag)}
                        className="ml-[8px] size-[14px] flex items-center justify-center cursor-pointer"
                      >
                        <X size={14} color="#4a5565" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={onComplete}
              disabled={!isButtonEnabled}
              className={`relative shrink-0 w-full cursor-pointer transition-colors ${
                isButtonEnabled ? 'bg-black' : 'bg-[#99a1af]'
              }`}
              data-name="Button"
            >
              {isButtonEnabled && <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />}
              <div className="flex flex-col justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
                  <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">쇼케이스 만들기</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}