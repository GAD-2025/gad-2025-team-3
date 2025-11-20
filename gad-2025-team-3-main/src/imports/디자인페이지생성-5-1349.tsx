import svgPaths from "./svg-o0sibkl9wq";

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
        <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Sign Up</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-0 relative shrink-0 w-[19.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[19.992px]" />
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
    <div className="box-border content-stretch flex flex-col h-[70.083px] items-start pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-[69.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-[69.305px]">
        <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[-0.24px]">01. 약관 동의</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[11.493px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.007px] items-start relative w-[11.493px]">
        <p className="basis-0 font-['Playfair_Display:Regular',sans-serif] font-normal grow leading-[15px] min-h-px min-w-px relative shrink-0 text-[10px] text-gray-200 tracking-[1.5px] uppercase">→</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-[70.395px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-[70.395px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">02. 정보 입력</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[15.993px] h-[15.007px] items-center relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[64px] items-start pb-[1.108px] pt-[23.99px] px-[23.99px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <div className="absolute inset-[-4.167%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <g id="Group 2085666190">
            <path d="M0.5 6.32823H12.5" id="Line 55" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
            <path d="M6.67035 0.5L6.67035 12.5" id="Line 56" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
            <path d={svgPaths.p38bd3580} id="Line 57" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
            <path d={svgPaths.p38bd3580} id="Line 58" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
            <path d={svgPaths.p15dd4a80} id="Line 59" stroke="var(--stroke-0, #F360C0)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[65px] relative shrink-0 w-[277px]" data-name="Heading 2">
      <div className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-[0.89px] tracking-[-0.48px] whitespace-pre">
        <p className="mb-0">user_name 님이</p>
        <p>좋아하는 아티스트는?</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">본인이 관심있는 아티스트를 최대 5개 선택해 주세요.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-full" data-name="Container">
      <Group />
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[23.713px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[23.713px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">BTS</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f360c0] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[117.509px] py-[1.108px] relative w-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[37.664px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[37.664px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">아이유</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_2] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[103.576px] py-[1.108px] relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[72.385px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[72.385px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">BLACKPINK</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:2_/_1] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[68.837px] py-[1.108px] relative w-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[26.448px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[26.448px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">NCT</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="[grid-area:2_/_2] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[114.792px] py-[1.108px] relative w-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[74.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[74.359px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">SEVENTEEN</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="[grid-area:3_/_1] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[66.864px] py-[1.108px] relative w-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[56.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[56.375px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">NewJeans</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="[grid-area:3_/_2] bg-[#f360c0] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[84.865px] py-[1.108px] relative w-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[59.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[59.75px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">Stray Kids</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="[grid-area:4_/_1] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[81.473px] py-[1.108px] relative w-full">
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[25.046px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[25.046px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">TXT</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="[grid-area:4_/_2] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[116.194px] py-[1.108px] relative w-full">
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[41.818px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[41.818px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">TWICE</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="[grid-area:5_/_1] bg-[#f360c0] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[99.404px] py-[1.108px] relative w-full">
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[60.892px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[60.892px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">Red Velvet</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="[grid-area:5_/_2] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[80.347px] py-[1.108px] relative w-full">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[33.198px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[33.198px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">aespa</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="[grid-area:6_/_1] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[108.024px] py-[1.108px] relative w-full">
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[81.698px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[81.698px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">LE SSERAFIM</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="[grid-area:6_/_2] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[59.542px] py-[1.108px] relative w-full">
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[20.944px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[20.944px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">IVE</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="[grid-area:7_/_1] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[120.279px] py-[1.108px] relative w-full">
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[28.404px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[28.404px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">ITZY</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="[grid-area:7_/_2] bg-[#f360c0] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[112.836px] py-[1.108px] relative w-full">
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[60.183px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[60.183px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">ENHYPEN</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="[grid-area:8_/_1] bg-[#f360c0] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[81.04px] py-[1.108px] relative w-full">
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[25.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[25.115px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">태연</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="[grid-area:8_/_2] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[116.125px] py-[1.108px] relative w-full">
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[25.998px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[25.998px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">EXO</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="[grid-area:9_/_1] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[115.225px] py-[1.108px] relative w-full">
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[32.904px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[32.904px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">GOT7</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="[grid-area:9_/_2] h-[54px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center pl-[17.101px] pr-[108.336px] py-[1.108px] relative w-full">
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[65.999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[65.999px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">TREASURE</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="[grid-area:10_/_1] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[75.224px] py-[1.108px] relative w-full">
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="[grid-area:10_/_2] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="[grid-area:11_/_1] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="[grid-area:11_/_2] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="[grid-area:12_/_1] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text25 />
        </div>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="[grid-area:12_/_2] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text26 />
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="[grid-area:13_/_1] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text27 />
        </div>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="[grid-area:13_/_2] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text28 />
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="[grid-area:14_/_1] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text29 />
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="[grid-area:14_/_2] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text30 />
        </div>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="[grid-area:15_/_1] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text31 />
        </div>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[19.49px] relative shrink-0 w-[70.62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.49px] items-start relative w-[70.62px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">(여자)아이들</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="[grid-area:15_/_2] h-[53px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center pl-[17.101px] pr-[70.62px] py-[1.108px] relative w-full">
          <Text32 />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(15,_minmax(0px,_1fr))] h-[997.301px] relative shrink-0 w-full" data-name="(여자)아이들">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">{`다음으로 `}</p>
    </div>
  );
}

function Button31() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
          <Text33 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[23.99px] items-start pb-0 pt-[23.99px] px-[23.99px] relative w-full">
          <Container5 />
          <Component />
          <Button31 />
        </div>
      </div>
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start pb-[80px] pt-0 px-0 relative size-full" data-name="디자인 페이지 생성">
      <Container2 />
      <Container4 />
      <Container6 />
    </div>
  );
}