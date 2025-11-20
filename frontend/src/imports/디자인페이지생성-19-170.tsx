import svgPaths from "./svg-cnim5xb21f";

function Showcase() {
  return (
    <div className="h-[15.223px] relative shrink-0 w-[86px]" data-name="SHOWCASE">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 16">
        <g id="SHOWCASE">
          <path d={svgPaths.p18193400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3e727180} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p182c5428} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p22c55700} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p2b7c4e00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p27e05300} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p15f36600} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p1673c000} fill="var(--fill-0, black)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return <div className="h-0 shrink-0 w-[19.992px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[70.083px] items-center pl-[20px] pr-0 py-0 relative w-full">
          <Showcase />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[65px] relative shrink-0 w-[277px]" data-name="Heading 2">
      <div className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-[0.89px] tracking-[-0.48px] whitespace-pre">
        <p className="mb-0">쇼케이스에 오신 것을</p>
        <p>환영합니다</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">
        <p className="mb-0">로그인 / 회원가입을 통해</p>
        <p>나만의 쇼케이스를 열어 보세요.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[105.982px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">아이디</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[56.2px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[56.2px] items-center p-[16px] relative w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">아이디를 입력하세요</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[79.2px] items-start left-0 top-0 w-[342px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">비밀번호</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="h-[56.2px] relative shrink-0 w-full" data-name="Password Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[56.2px] items-center p-[16px] relative w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">비밀번호를 입력하세요</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[79.2px] items-start left-0 top-[95.2px] w-[342px]" data-name="Container">
      <Label1 />
      <PasswordInput />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">로그인하기</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#99a1af] box-border content-stretch flex gap-[12px] h-[53.2px] items-center justify-center left-0 pl-0 pr-[0.013px] py-0 top-[206.4px] w-[342px]" data-name="Button">
      <Text />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">아이디 찾기</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[0.3px] w-full">|</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">비밀번호 찾기</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">회원가입</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[calc(50%-0.17px)] top-[24px] translate-x-[-50%] w-[326.9px]">
      <Button1 />
      <Text1 />
      <Button2 />
      <Text1 />
      <Button3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[48px] left-0 top-[275.6px] w-[342px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[323.6px] relative shrink-0 w-[342px]" data-name="Form">
      <Container3 />
      <Container4 />
      <Button />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[23.99px] items-start pb-0 pt-[89px] px-[23.99px] relative w-full">
          <Container2 />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="디자인 페이지 생성">
      <Container1 />
      <Container6 />
    </div>
  );
}