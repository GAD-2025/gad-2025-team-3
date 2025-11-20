import svgPaths from "./svg-0l1y3hgd5b";

function Icon() {
  return (
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
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[19.992px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.41%_12.68%]" data-name="Vector">
        <div className="absolute inset-[-5.01%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
            <path d={svgPaths.p2322a380} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[70.083px] items-center justify-between px-[20px] py-0 relative w-full">
          <Button />
          <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Profile</p>
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_47_170)" id="profile">
          <rect fill="#FEF7FC" height="80" width="80" />
          <path d={svgPaths.p21590100} fill="var(--fill-0, #F360C0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_47_170">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-[117.763px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[117.763px]">
        <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-[0.6px] tracking-[-0.4px] whitespace-pre">fan_user_123</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p4290a20} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-[24px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Button2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">K-POP을 사랑하는 팬입니다 ❤️</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Container1 />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px] w-[31.888px]">전시관</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">12</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px] w-[31.888px]">팔로워</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">156</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px] w-[31.888px]">팔로잉</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">89</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 w-[246px]" data-name="Container">
      <Frame />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Profile />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[18px] py-px relative w-full">
          <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">2,847</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center tracking-[-0.24px] w-[78.8px]">전체 조회수</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[74.7px] items-center justify-center relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[25px] py-px relative w-full">
          <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">567</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center tracking-[-0.24px] w-[78.8px]">전체 좋아요수</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col h-[74.7px] items-center justify-center relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-px relative w-full">
          <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">89</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-start opacity-90 relative shrink-0" data-name="Container">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center tracking-[-0.24px] w-[78.8px]">전체 공유수</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_3] bg-white content-stretch flex flex-col h-[74.7px] items-center justify-center relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[74.7px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container13 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[232.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[232.8px] items-start pb-[1.6px] pt-[24px] px-[24px] relative w-full">
          <Container7 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[23.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[24px] top-[24.12px] w-[342px]" data-name="Heading 3">
      <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Menu</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2ac52300} fill="var(--stroke-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">나의 전시관</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-[181.9px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] items-center relative w-[181.9px]">
        <Icon3 />
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">12개</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex h-[56.2px] items-center justify-between left-[24px] px-[17.6px] py-[1.6px] top-[58px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <Text7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p27e2e0c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p809b580} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">받은 배지</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[56.2px] items-center left-[24px] pl-[17.6px] pr-[1.6px] py-[1.6px] top-[122.2px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Icon4 />
      <Text8 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p391f8480} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">활동 통계</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[56.2px] items-center left-[24px] pl-[17.6px] pr-[266.812px] py-[1.6px] top-[186.4px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Icon5 />
      <Text9 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p28ca6b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">즐겨찾기</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-[176.9px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] items-center relative w-[176.9px]">
        <Icon6 />
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.28px] w-full">3개</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute box-border content-stretch flex h-[56.2px] items-center justify-between left-[24px] px-[17.6px] py-[1.6px] top-[250.6px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <Text11 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[330.8px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Settings</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1f78d2b0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[57.588px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[57.588px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">계정 설정</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[56.2px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56.2px] items-center pl-[17.6px] pr-[1.6px] py-[1.6px] relative w-full">
          <Icon7 />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p14ca9100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 10H7.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p38966ca0} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[54.1px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[54.1px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">로그아웃</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[56.2px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56.2px] items-center pl-[17.6px] pr-[1.6px] py-[1.6px] relative w-full">
          <Icon8 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[178.4px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[178.4px] items-start px-[24px] py-0 relative w-full">
          <Heading2 />
          <Button7 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="디자인 페이지 생성">
      <Container />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}