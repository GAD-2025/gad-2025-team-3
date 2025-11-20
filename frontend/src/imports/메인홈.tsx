import svgPaths from "./svg-jbhf0egdok";

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p37c3e100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M12.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[21px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">BTS</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[48.2px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48.2px] items-center px-[17.6px] py-[1.6px] relative w-full">
          <Icon1 />
          <TextInput />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[96.2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[96.2px] items-center px-[24px] py-0 relative w-full">
          <Button />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[97.8px] items-start pb-[1.6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-[-0.2px] tracking-[-0.24px] w-[84px]">검색 결과 3개</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center relative w-full">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">BTS ARMY 글로벌 전시관</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[9px] py-[4px] relative">
        <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[0.3px] whitespace-pre">201</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[23.1px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[23.1px] items-center justify-between relative w-full">
          <Heading1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[81.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[81.625px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#4a5565] text-[11px] top-[-0.2px] w-[82px]">by army_forever</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">조회 12,340</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[79.6px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[79.6px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[82.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82.8px] items-start p-[1.6px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center relative w-full">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">BTS 월드 투어 2024</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[9px] py-[4px] relative">
        <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[0.3px] whitespace-pre">101</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[23.1px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container8 />
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.3px] w-[69px]">by bts_fan_kr</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">조회 9,800</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[79.6px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[79.6px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[82.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82.8px] items-start p-[1.6px] relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center relative w-full">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">BTS 포토카드 컬렉션</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[9px] py-[4px] relative">
        <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[0.3px] whitespace-pre">305</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[23.1px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[23.1px] items-center justify-between relative w-full">
          <Heading3 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center relative">
        <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.3px] w-[86px]">by card_collector</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">조회 7,600</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[16.5px] items-center justify-between relative w-full">
          <Text4 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[79.6px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[79.6px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[82.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82.8px] items-start p-[1.6px] relative w-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[280.4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container12 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[370.4px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[370.4px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Heading />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[844px] items-start left-[calc(50%+0.5px)] px-[380.6px] py-0 top-0 translate-x-[-50%] w-[1151px]" data-name="디자인 페이지 생성 (Copy)">
      <Container2 />
      <Container19 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fbfaf9] relative size-full" data-name="메인 홈">
      <Copy />
    </div>
  );
}