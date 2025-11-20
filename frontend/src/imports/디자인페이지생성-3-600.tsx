import svgPaths from "./svg-1erc7scqu3";

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
    <div className="absolute box-border content-stretch flex flex-col h-[70.083px] items-start left-[1.63px] pb-[1.108px] pt-0 px-0 top-0 w-[389.729px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-[69.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-[69.305px]">
        <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-black tracking-[-0.24px]">01. 약관 동의</p>
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
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">02. 정보 입력</p>
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
    <div className="absolute box-border content-stretch flex flex-col h-[64px] items-start left-[1.63px] pb-[1.108px] pt-[23.99px] px-[23.99px] top-[70.08px] w-[389.729px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
      <Container3 />
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
        <p className="mb-0">원활한 서비스 이용을 위해</p>
        <p>아래 약관에 동의해 주세요</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px]">
        <p className="mb-0">선택 항목은 마케팅 정보 수신을 위한 것으로,</p>
        <p>동의하지 않아도 서비스 이용에는 제한이 없습니다.</p>
      </div>
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

function Container6() {
  return (
    <div className="relative shrink-0 size-[23.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[23.99px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20.996px] relative shrink-0 w-[57.483px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start relative w-[57.483px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">전체 동의</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[66.189px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[11.995px] h-[66.189px] items-center pl-[21.099px] pr-[1.108px] py-[1.108px] relative w-full">
          <Container6 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[19.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[1.108px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[19.992px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[263px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[263px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">[필수] 만 14세 이상입니다</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1a26df80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[11.995px] h-[43.982px] items-center relative shrink-0 w-[334.008px]" data-name="Button">
      <Container7 />
      <Text4 />
      <Icon1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[19.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[1.108px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[19.992px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[263px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[263px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">[필수] 서비스 이용약관 동의</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1a26df80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[11.995px] h-[43.982px] items-center relative shrink-0 w-[334.008px]" data-name="Button">
      <Container8 />
      <Text5 />
      <Icon2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[19.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[1.108px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[19.992px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[263px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[263px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">[필수] 개인정보 처리방침 동의</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1a26df80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[11.995px] h-[43.982px] items-center relative shrink-0 w-[334.008px]" data-name="Button">
      <Container9 />
      <Text6 />
      <Icon3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[19.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[1.108px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[19.992px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[263px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[263px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">[선택] 마케팅 정보 수신 동의</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1a26df80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[11.995px] h-[43.982px] items-center relative shrink-0 w-[334.008px]" data-name="Button">
      <Container10 />
      <Text7 />
      <Icon4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[310.087px] items-start relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Container11 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">{`다음으로 `}</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-black opacity-30 relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[23.99px] h-[570.221px] items-start left-[1.63px] pb-0 pt-[23.99px] px-[23.99px] top-[134.08px] w-[389.729px]" data-name="Container">
      <Container5 />
      <Container12 />
      <Button6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[20.996px] relative shrink-0 w-[174.784px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start relative w-[174.784px]">
        <p className="font-['Apple_Garamond:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">이용 약관</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[19.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p1be71ee0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p3d8bad80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0 size-[19.992px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[19.992px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[70.083px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-[23.99px] relative w-full">
          <Heading2 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[6px] items-center not-italic px-0 py-[14px] relative shrink-0">
      <p className="h-[24px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.32px] w-[305px]">[선택] 마케팅 정보 수신 동의</p>
      <div className="leading-[0] relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.24px] w-[305px]">
        <p className="leading-[18px] mb-0">GAD_3은 SHOWCASE의 신규 서비스, 이벤트, 할인 혜택 등 유용한 정보를 제공하기 위해 아래와 같이 마케팅 정보를 수신하는 데 동의를 받고자 합니다.</p>
        <ol className="list-decimal mb-0" start="1">
          <li className="mb-0 ms-[18px]">
            <span className="leading-[18px]">수집·이용 목적: 신규 서비스, 이벤트, 프로모션, 할인 혜택 등 광고성 정보 제공 및 맞춤형 광고 제공</span>
          </li>
          <li className="mb-0 ms-[18px]">
            <span className="leading-[18px]">수집 항목: 이메일 주소, 휴대폰 번호 (수집하는 항목에 따라 기재)</span>
          </li>
          <li className="mb-0 ms-[18px]">
            <span className="leading-[18px]">수신 채널: 이메일, 문자메시지(SMS/LMS/MMS), 앱 푸시 알림</span>
          </li>
          <li className="ms-[18px]">
            <span className="leading-[18px]">보유 및 이용 기간: 회원 탈퇴 시 또는 마케팅 정보 수신 동의 철회 시까지</span>
          </li>
        </ol>
        <p className="leading-[18px]">※ 귀하는 본 동의를 거부할 권리가 있으며, 동의를 거부하시더라도 SHOWCASE의 기본 서비스 이용에는 제한이 없습니다. 다만, 동의 거부 시 유용한 혜택 및 정보를 제공받지 못할 수 있습니다.</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">닫기</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-px py-[20px] relative w-full">
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[99.283px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.108px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[99.283px] items-center justify-center pb-0 pt-[5.1px] px-[23.99px] relative w-full">
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-center left-1/2 p-px top-[calc(50%+0.183px)] translate-x-[-50%] translate-y-[-50%] w-[345px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
      <Container14 />
      <Frame />
      <Container15 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="디자인 페이지 생성">
      <Container2 />
      <Container4 />
      <Container13 />
      <div className="absolute bg-[rgba(0,0,0,0.6)] h-[851px] left-0 top-0 w-[393px]" />
      <Container16 />
    </div>
  );
}