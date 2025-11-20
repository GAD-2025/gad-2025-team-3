import svgPaths from "./svg-cs3z6bunx5";

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
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">전시관, 아티스트 검색</p>
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
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Apple_Garamond:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-nowrap whitespace-pre">Trending Keywords</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
        <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">01</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24.888px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24.888px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">BTS</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[53.8px] items-center left-0 pb-[0.8px] pt-0 px-0 top-0 w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
        <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">02</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[40.575px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[40.575px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">아이유</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[53.8px] items-center left-0 pb-[0.8px] pt-0 px-0 top-[53.8px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
        <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">03</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[76.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[76.338px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">BLACKPINK</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[53.8px] items-center left-0 pb-[0.8px] pt-0 px-0 top-[107.6px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
        <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">04</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[28.113px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[28.113px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">NCT</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[53.8px] items-center left-0 pb-[0.8px] pt-0 px-0 top-[161.4px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
        <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">05</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[78.95px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[78.95px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">SEVENTEEN</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[53.8px] items-center left-0 pb-[0.8px] pt-0 px-0 top-[215.2px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
        <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">06</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[60.237px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[60.237px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">NewJeans</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[53.8px] items-center left-0 pb-[0.8px] pt-0 px-0 top-[269px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
        <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">07</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[40.575px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[40.575px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">콘서트</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[53.8px] items-center left-0 pb-[0.8px] pt-0 px-0 top-[322.8px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
        <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">08</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[21px] relative shrink-0 w-[40.575px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[40.575px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">팬미팅</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[53.8px] items-center left-0 pb-[0.8px] pt-0 px-0 top-[376.6px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
        <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">09</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[21px] relative shrink-0 w-[27.05px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[27.05px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">앨범</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[53.8px] items-center left-0 pb-[0.8px] pt-0 px-0 top-[430.4px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[24px]">
        <p className="absolute font-['Apple_Garamond:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[21px] relative shrink-0 w-[54.1px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[54.1px]">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">포토카드</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[53px] items-center left-0 top-[484.2px] w-[342px]" data-name="Button">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[537.2px] relative shrink-0 w-full" data-name="Container">
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
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[627.2px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[627.2px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Heading />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[844px] items-start left-[calc(50%+0.5px)] px-[380.6px] py-0 top-0 translate-x-[-50%] w-[1151px]" data-name="디자인 페이지 생성 (Copy)">
      <Container2 />
      <Container4 />
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