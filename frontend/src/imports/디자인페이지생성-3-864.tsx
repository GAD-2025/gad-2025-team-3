import svgPaths from "./svg-tsuwfqrjtp";

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
        <p className="mb-0">SHOWCASE를 이용하기 전,</p>
        <p>본인의 정보를 입력해 주세요</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">계정 생성을 위해 간단한 정보가 필요해요.</p>
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

function Label() {
  return (
    <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">아이디</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 grow h-[47.184px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[47.184px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">아이디를 입력하세요</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">중복확인</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black h-[47.184px] relative shrink-0 w-[85.765px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[47.184px] items-center justify-center relative w-[85.765px]">
        <Text3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[47.184px] items-start relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Button1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[70.187px] items-start relative shrink-0 w-[342.005px]" data-name="Container">
      <Label />
      <Container6 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">비밀번호</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="h-[47.184px] relative shrink-0 w-full" data-name="Password Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[47.184px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">비밀번호를 입력하세요</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[70.187px] items-start relative shrink-0 w-[342.005px]" data-name="Container">
      <Label1 />
      <PasswordInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">비밀번호 확인</p>
    </div>
  );
}

function PasswordInput1() {
  return (
    <div className="h-[47.184px] relative shrink-0 w-full" data-name="Password Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[47.184px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">비밀번호를 다시 입력하세요</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[70.187px] items-start relative shrink-0 w-[342.005px]" data-name="Container">
      <Label2 />
      <PasswordInput1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex h-[15.007px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">이메일</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[47.184px] relative shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[47.184px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">example@email.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[70.187px] items-start relative shrink-0 w-[342.005px]" data-name="Container">
      <Label3 />
      <EmailInput />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">{`다음으로 `}</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#99a1af] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[23.99px] items-start pb-0 pt-[23.99px] px-[23.99px] relative w-full">
          <Container5 />
          <Container11 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="디자인 페이지 생성">
      <Container2 />
      <Container4 />
      <Container12 />
    </div>
  );
}