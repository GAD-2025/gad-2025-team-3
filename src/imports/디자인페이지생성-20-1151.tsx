import svgPaths from "./svg-etunpzbgmu";

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
    <div className="relative shrink-0 size-[19.992px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[19.992px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20.996px] relative shrink-0 w-[73.545px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start justify-center relative w-[73.545px]">
        <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">My Exhibition</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[68.976px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[68.976px] items-center justify-between px-[23.99px] py-0 relative w-full">
          <Button />
          <Heading />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M5 12H19" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px] whitespace-pre">새로 만들기</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[71.2px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[71.2px] items-center justify-center p-[1.6px] relative w-full">
          <Icon1 />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[120.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[120.8px] items-start pb-[1.6px] pt-[24px] px-[24px] relative w-full">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">내가 만든 쇼케이스</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[37.938px]">Room</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">101</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[14px] relative w-full">
          <Text1 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.8px] tracking-[-0.28px] whitespace-pre">BTS 월드 투어 2024</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2ab476c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">1234</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Icon2 />
      <Text2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bb2e280} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">567</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Icon3 />
      <Text3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[38px] relative shrink-0 w-[92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start justify-between relative w-[92px]">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.5%_66.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_62.5%_37.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_12.5%_8.33%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[56.29%_35.75%_27.12%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
            <path d={svgPaths.p27b6c800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.13%_35.79%_56.29%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
            <path d={svgPaths.p1973d000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[29.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0.8px] pt-[8.8px] px-[8.8px] relative size-[29.6px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[38px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Button2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[126px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[126px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading2 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="box-border content-stretch flex flex-col h-[206.8px] items-start p-[1.6px] relative shrink-0 w-[163px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Container5 />
      <Container10 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[37.938px]">Room</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">102</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[14px] relative w-full">
          <Text4 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.8px] tracking-[-0.28px] whitespace-pre">아이유 콘서트 추억</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2ab476c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">890</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Icon5 />
      <Text5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bb2e280} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">234</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Icon6 />
      <Text6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[38px] relative shrink-0 w-[92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start justify-between relative w-[92px]">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.5%_66.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_62.5%_37.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_12.5%_8.33%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[56.29%_35.75%_27.12%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
            <path d={svgPaths.p27b6c800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.13%_35.79%_56.29%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
            <path d={svgPaths.p1973d000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 size-[29.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0.8px] pt-[8.8px] px-[8.8px] relative size-[29.6px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[38px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Button3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[126px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[126px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading3 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="box-border content-stretch flex flex-col h-[206.8px] items-start p-[1.6px] relative shrink-0 w-[163px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container18 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[37.938px]">Room</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">103</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[14px] relative w-full">
          <Text7 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.8px] tracking-[-0.28px] whitespace-pre">Seventeen 팬미팅</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2ab476c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">2345</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Icon8 />
      <Text8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bb2e280} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">890</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Icon9 />
      <Text9 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[38px] relative shrink-0 w-[92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start justify-between relative w-[92px]">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.5%_66.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_62.5%_37.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_12.5%_8.33%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[56.29%_35.75%_27.12%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
            <path d={svgPaths.p27b6c800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.13%_35.79%_56.29%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
            <path d={svgPaths.p1973d000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[29.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0.8px] pt-[8.8px] px-[8.8px] relative size-[29.6px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[38px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Button4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[126px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[126px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading4 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="box-border content-stretch flex flex-col h-[206.8px] items-start p-[1.6px] relative shrink-0 w-[163px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Container21 />
      <Container26 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[37.938px]">Room</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Container">
      <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">104</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[14px] relative w-full">
          <Text10 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.8px] tracking-[-0.28px] whitespace-pre">NewJeans 컬렉션</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2ab476c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">1567</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Icon11 />
      <Text11 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bb2e280} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">432</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Icon12 />
      <Text12 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[38px] relative shrink-0 w-[92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start justify-between relative w-[92px]">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.5%_66.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_62.5%_37.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_12.5%_8.33%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[56.29%_35.75%_27.12%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
            <path d={svgPaths.p27b6c800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.13%_35.79%_56.29%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
            <path d={svgPaths.p1973d000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 size-[29.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0.8px] pt-[8.8px] px-[8.8px] relative size-[29.6px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[38px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Button5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[126px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[126px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading5 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="box-border content-stretch flex flex-col h-[206.8px] items-start p-[1.6px] relative shrink-0 w-[163px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Container29 />
      <Container34 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[16px] items-start left-0 top-0 w-[342px]">
      <Container11 />
      <Container19 />
      <Container27 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[429.6px] relative shrink-0 w-full" data-name="Container">
      <Frame />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[519.6px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[519.6px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Heading1 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="디자인 페이지 생성">
      <Container2 />
      <Container3 />
      <Container37 />
    </div>
  );
}