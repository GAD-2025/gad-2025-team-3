import svgPaths from "./svg-zz12363dhv";

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

function Container() {
  return <div className="h-0 shrink-0 w-[20px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[70.083px] items-center justify-between px-[20px] py-0 relative w-full">
          <Button />
          <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Badges</p>
          <Container />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Apple_Garamond:Bold',sans-serif] gap-[6px] items-center leading-[32px] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">
      <p className="relative shrink-0">3</p>
      <p className="relative shrink-0">/</p>
      <p className="relative shrink-0">6</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.24px] whitespace-pre">획득한 배지</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[55.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative w-[55.875px]">
        <Frame />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] relative shrink-0 w-[20px]" data-name="Union">
        <div className="absolute inset-[-4.17%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 26">
            <path d={svgPaths.p21dba400} fill="var(--stroke-0, #F360C0)" id="Union" />
          </svg>
        </div>
      </div>
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[94.1px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[94.1px] items-start justify-center px-[24px] py-0 relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">Unlocked</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Container">
          <mask fill="white" id="path-1-inside-1_20_735">
            <path d="M0 0H48V48H0V0Z" />
          </mask>
          <path d="M0 0H48V48H0V0Z" fill="var(--fill-0, #F360C0)" />
          <path d={svgPaths.p3e311500} fill="var(--stroke-0, #F360C0)" mask="url(#path-1-inside-1_20_735)" />
          <path d={svgPaths.p379d5700} fill="var(--stroke-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">첫 전시관</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.24px] whitespace-pre">첫 전시관을 만들었습니다</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[-0.24px]">2024.10.08</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[63px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[63px] items-start relative w-full">
        <Frame1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] h-[63px] items-start relative w-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#fef7fc] h-[98.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f360c0] border-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[98.2px] items-start pb-[1.6px] pt-[17.6px] px-[17.6px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Container">
          <mask fill="white" id="path-1-inside-1_20_735">
            <path d="M0 0H48V48H0V0Z" />
          </mask>
          <path d="M0 0H48V48H0V0Z" fill="var(--fill-0, #F360C0)" />
          <path d={svgPaths.p3e311500} fill="var(--stroke-0, #F360C0)" mask="url(#path-1-inside-1_20_735)" />
          <path d={svgPaths.p379d5700} fill="var(--stroke-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">인기 전시관</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.24px] whitespace-pre">조회수 1,000 달성</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Heading2 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[-0.24px]">2024.10.12</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 grow h-[63px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[63px] items-start relative w-full">
        <Frame2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] h-[63px] items-start relative w-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#fef7fc] h-[98.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f360c0] border-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[98.2px] items-start pb-[1.6px] pt-[17.6px] px-[17.6px] relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Container">
          <mask fill="white" id="path-1-inside-1_20_735">
            <path d="M0 0H48V48H0V0Z" />
          </mask>
          <path d="M0 0H48V48H0V0Z" fill="var(--fill-0, #F360C0)" />
          <path d={svgPaths.p3e311500} fill="var(--stroke-0, #F360C0)" mask="url(#path-1-inside-1_20_735)" />
          <path d={svgPaths.p379d5700} fill="var(--stroke-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">활발한 활동</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.24px] whitespace-pre">전시관 10개 생성</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Heading3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[-0.24px]">2024.10.15</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow h-[63px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[63px] items-start relative w-full">
        <Frame3 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] h-[63px] items-start relative w-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#fef7fc] h-[98.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f360c0] border-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[98.2px] items-start pb-[1.6px] pt-[17.6px] px-[17.6px] relative w-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[318.6px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container13 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[402.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[402.2px] items-start pb-[1.6px] pt-[24px] px-[24px] relative w-full">
          <Heading />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">Locked</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1bf79e00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-gray-50 relative shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[1.6px] relative size-[48px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">슈퍼스타</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">조회수 10,000 달성</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 grow h-[41.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[41.5px] items-start relative w-full">
        <Heading5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] h-[48px] items-start relative w-full">
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[83.2px] opacity-60 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[83.2px] items-start justify-center px-[17.6px] py-0 relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1bf79e00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-gray-50 relative shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[1.6px] relative size-[48px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">컬렉터</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">전시관 50개 생성</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="basis-0 grow h-[41.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[41.5px] items-start relative w-full">
        <Heading6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] h-[48px] items-start relative w-full">
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[83.2px] opacity-60 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[83.2px] items-start justify-center px-[17.6px] py-0 relative w-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1bf79e00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-gray-50 relative shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[1.6px] relative size-[48px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">인플루언서</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">팔로워 1,000명 달성</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="basis-0 grow h-[41.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[41.5px] items-start relative w-full">
        <Heading7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] h-[48px] items-start relative w-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[83.2px] opacity-60 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[83.2px] items-start justify-center px-[17.6px] py-0 relative w-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[273.6px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container27 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Heading4 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="디자인 페이지 생성">
      <Container1 />
      <Container5 />
      <Container19 />
      <Container33 />
    </div>
  );
}