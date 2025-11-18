import svgPaths from "./svg-ozt2ojvf67";

function Container() {
  return (
    <div className="absolute h-[70.078px] left-0 top-0 w-[393px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[13.328px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[5.95%_16.7%_10.75%_10.41%]" data-name="Vector">
        <div className="absolute inset-[-7.08%_-14.4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 13">
            <path d={svgPaths.p2b21d900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.57306" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13.328px] items-start left-[3.33px] top-[3.33px] w-[7.492px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[1.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.65%_10.75%_58.35%_5.95%]" data-name="Vector">
        <div className="absolute inset-[-0.74px_-6.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 2">
            <path d="M11.8417 0.739615H0.739615" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47923" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.656px] items-start left-[3.33px] top-[9.16px] w-[13.328px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[19.984px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[23.98px] size-[19.984px] top-[24.49px]" data-name="Button">
      <Container3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-[7.06px] top-0 w-[106.875px]" data-name="Paragraph">
      <p className="absolute font-['EB_Garamond:Bold',sans-serif] font-bold leading-[28px] left-[53px] text-[18px] text-black text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">My Exhibition</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[20.992px] left-[135.99px] top-[23.98px] w-[121px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container5() {
  return <div className="absolute h-0 left-[349.02px] top-[34.48px] w-[20px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute h-[68.969px] left-0 top-0 w-[393px]" data-name="Container">
      <Button />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[70.078px] left-[899px] top-0 w-[393px]" data-name="Container">
      <Container />
      <Container6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute contents inset-[20.83%]" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
            <path d="M0.833335 0.833335H14.8333" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector_2">
        <div className="absolute inset-[-5.95%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 16">
            <path d="M0.833335 0.833335V14.8333" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[118.88px] size-[24px] top-[23.59px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[154.88px] top-[23.59px] w-[71.242px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] tracking-[-0.32px] whitespace-pre">새로 만들기</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[71.195px] left-0 top-0 w-[345px]" data-name="Container">
      <Container8 />
      <Paragraph1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[71.195px] left-0 top-0 w-[345px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[71.195px] left-[24px] top-[24px] w-[345px]" data-name="Button">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[120.797px] left-0 top-0 w-[393px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[120.797px] left-[899px] top-[70.08px] w-[393px]" data-name="Container">
      <Button1 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[206.797px] left-0 top-0 w-[164.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-[14px] top-[14px] w-[37.938px]" data-name="Paragraph">
      <p className="absolute font-['EB_Garamond:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-0 whitespace-pre">Room</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[32px] left-[14px] top-[34px] w-[36.938px]" data-name="Paragraph">
      <p className="absolute font-['EB_Garamond:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-nowrap text-white top-[-0.5px] whitespace-pre">101</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[161.313px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[161.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-black h-[80px] left-[1.59px] top-[1.59px] w-[161.313px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.5px] tracking-[-0.28px] whitespace-pre">BTS 월드 투어 2024</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[32px] items-start left-[16px] overflow-clip pb-0 pl-0 pr-[15.258px] top-[16px] w-[129.313px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute contents inset-[20.84%_8.33%]" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
            <path d={svgPaths.p39632680} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector_2">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[3px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[18px] left-[20px] top-0 w-[26.242px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] tracking-[-0.24px] whitespace-pre">1234</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[46.242px]" data-name="Container">
      <Container18 />
      <Paragraph5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute contents inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
            <path d={svgPaths.p3323860} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon6 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[3px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[18px] left-[20px] top-0 w-[20.422px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] tracking-[-0.24px] whitespace-pre">567</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[18px] left-0 top-[20px] w-[40.422px]" data-name="Container">
      <Container20 />
      <Paragraph6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[38px] left-0 top-0 w-[92px]" data-name="Container">
      <Container19 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute left-0 size-[29.594px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[4.008px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-16.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p7532480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.00098" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.008px] items-start left-[7px] top-[0.49px] w-[4px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-px size-[4px] top-[4px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[4.008px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-16.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p7532480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.00098" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.008px] items-start left-[7px] top-[7.5px] w-[4px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[3px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_21.7%_17%_10%]" data-name="Vector">
        <div className="absolute inset-[-23.63%_-15.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.pa0b3ac0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.940412" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3px] items-start left-[3.79px] top-[6.25px] w-[4.422px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[3px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_21.8%_17%_10%]" data-name="Vector">
        <div className="absolute inset-[-23.63%_-15.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.p13d06000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.940412" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3px] items-start left-[3.79px] top-[2.75px] w-[4.422px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute left-[8.8px] overflow-clip size-[12px] top-[8.8px]" data-name="Container">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute left-0 size-[29.594px] top-0" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute left-[99.72px] size-[29.594px] top-[4.2px]" data-name="Container">
      <Container23 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[38px] left-[16px] top-[60px] w-[129.313px]" data-name="Container">
      <Container22 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[126px] left-[1.59px] top-[81.59px] w-[161.313px]" data-name="Container">
      <Container17 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[206.797px] left-0 top-0 w-[164.5px]" data-name="Container">
      <Container13 />
      <Container16 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[206.797px] left-0 top-0 w-[164.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20px] left-[14px] top-[14px] w-[37.938px]" data-name="Paragraph">
      <p className="absolute font-['EB_Garamond:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-0 whitespace-pre">Room</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[32px] left-[14px] top-[34px] w-[36.938px]" data-name="Paragraph">
      <p className="absolute font-['EB_Garamond:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-nowrap text-white top-[-0.5px] whitespace-pre">102</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[161.313px]" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[161.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-black h-[80px] left-[1.59px] top-[1.59px] w-[161.313px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.5px] tracking-[-0.28px] whitespace-pre">아이유 콘서트 추억</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[32px] items-start left-[16px] overflow-clip pb-0 pl-0 pr-[28.281px] top-[16px] w-[129.313px]" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute contents inset-[20.84%_8.33%]" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
            <path d={svgPaths.p39632680} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector_2">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon13 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[3px]" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[18px] left-[20px] top-0 w-[21.07px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] tracking-[-0.24px] whitespace-pre">890</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[41.07px]" data-name="Container">
      <Container40 />
      <Paragraph10 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute contents inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
            <path d={svgPaths.p3323860} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon15 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[3px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[18px] left-[20px] top-0 w-[21.219px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] tracking-[-0.24px] whitespace-pre">234</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[18px] left-0 top-[20px] w-[41.219px]" data-name="Container">
      <Container42 />
      <Paragraph11 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[38px] left-0 top-0 w-[92px]" data-name="Container">
      <Container41 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute left-0 size-[29.594px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[4.008px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-16.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p7532480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.00098" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.008px] items-start left-[7px] top-[0.49px] w-[4px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-px size-[4px] top-[4px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[4.008px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-16.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p7532480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.00098" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.008px] items-start left-[7px] top-[7.5px] w-[4px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[3px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_21.7%_17%_10%]" data-name="Vector">
        <div className="absolute inset-[-23.63%_-15.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.pa0b3ac0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.940412" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3px] items-start left-[3.79px] top-[6.25px] w-[4.422px]" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[3px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_21.8%_17%_10%]" data-name="Vector">
        <div className="absolute inset-[-23.63%_-15.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.p13d06000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.940412" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3px] items-start left-[3.79px] top-[2.75px] w-[4.422px]" data-name="Container">
      <Icon21 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute left-[8.8px] overflow-clip size-[12px] top-[8.8px]" data-name="Container">
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute left-0 size-[29.594px] top-0" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute left-[99.72px] size-[29.594px] top-[4.2px]" data-name="Container">
      <Container45 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[38px] left-[16px] top-[60px] w-[129.313px]" data-name="Container">
      <Container44 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[126px] left-[1.59px] top-[81.59px] w-[161.313px]" data-name="Container">
      <Container39 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[206.797px] left-[180.5px] top-0 w-[164.5px]" data-name="Container">
      <Container35 />
      <Container38 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[206.797px] left-0 top-0 w-[164.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20px] left-[14px] top-[14px] w-[37.938px]" data-name="Paragraph">
      <p className="absolute font-['EB_Garamond:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-0 whitespace-pre">Room</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[32px] left-[14px] top-[34px] w-[36.938px]" data-name="Paragraph">
      <p className="absolute font-['EB_Garamond:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-nowrap text-white top-[-0.5px] whitespace-pre">103</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[161.313px]" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[161.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-black h-[80px] left-[1.59px] top-[1.59px] w-[161.313px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.5px] tracking-[-0.28px] whitespace-pre">Seventeen 팬미팅</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[32px] items-start left-[16px] overflow-clip pb-0 pl-0 pr-[26.508px] top-[16px] w-[129.313px]" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute contents inset-[20.84%_8.33%]" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
            <path d={svgPaths.p39632680} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector_2">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon22 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[3px]" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[18px] left-[20px] top-0 w-[28.141px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] tracking-[-0.24px] whitespace-pre">2345</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[48.141px]" data-name="Container">
      <Container62 />
      <Paragraph15 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute contents inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
            <path d={svgPaths.p3323860} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon24 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[3px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[18px] left-[20px] top-0 w-[21.07px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] tracking-[-0.24px] whitespace-pre">890</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[18px] left-0 top-[20px] w-[41.07px]" data-name="Container">
      <Container64 />
      <Paragraph16 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[38px] left-0 top-0 w-[92px]" data-name="Container">
      <Container63 />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute left-0 size-[29.594px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[4.008px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-16.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p7532480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.00098" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.008px] items-start left-[7px] top-[0.49px] w-[4px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-px size-[4px] top-[4px]" data-name="Container">
      <Icon27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[4.008px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-16.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p7532480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.00098" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.008px] items-start left-[7px] top-[7.5px] w-[4px]" data-name="Container">
      <Icon28 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[3px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_21.7%_17%_10%]" data-name="Vector">
        <div className="absolute inset-[-23.63%_-15.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.pa0b3ac0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.940412" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3px] items-start left-[3.79px] top-[6.25px] w-[4.422px]" data-name="Container">
      <Icon29 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[3px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_21.8%_17%_10%]" data-name="Vector">
        <div className="absolute inset-[-23.63%_-15.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.p13d06000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.940412" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3px] items-start left-[3.79px] top-[2.75px] w-[4.422px]" data-name="Container">
      <Icon30 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute left-[8.8px] overflow-clip size-[12px] top-[8.8px]" data-name="Container">
      <Container68 />
      <Container69 />
      <Container70 />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute left-0 size-[29.594px] top-0" data-name="Container">
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute left-[99.72px] size-[29.594px] top-[4.2px]" data-name="Container">
      <Container67 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[38px] left-[16px] top-[60px] w-[129.313px]" data-name="Container">
      <Container66 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[126px] left-[1.59px] top-[81.59px] w-[161.313px]" data-name="Container">
      <Container61 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[206.797px] left-0 top-[222.8px] w-[164.5px]" data-name="Container">
      <Container57 />
      <Container60 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[206.797px] left-0 top-0 w-[164.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[20px] left-[14px] top-[14px] w-[37.938px]" data-name="Paragraph">
      <p className="absolute font-['EB_Garamond:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-0 whitespace-pre">Room</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[32px] left-[14px] top-[34px] w-[36.938px]" data-name="Paragraph">
      <p className="absolute font-['EB_Garamond:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-nowrap text-white top-[-0.5px] whitespace-pre">104</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[161.313px]" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[161.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute bg-black h-[80px] left-[1.59px] top-[1.59px] w-[161.313px]" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.5px] tracking-[-0.28px] whitespace-pre">NewJeans 컴백선</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[32px] items-start left-[16px] overflow-clip pb-0 pl-0 pr-[27.773px] top-[16px] w-[129.313px]" data-name="Container">
      <Paragraph19 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute contents inset-[20.84%_8.33%]" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
            <path d={svgPaths.p39632680} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector_2">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon31 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[3px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[18px] left-[20px] top-0 w-[25.445px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] tracking-[-0.24px] whitespace-pre">1567</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[45.445px]" data-name="Container">
      <Container84 />
      <Paragraph20 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute contents inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
            <path d={svgPaths.p3323860} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon33 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[3px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[18px] left-[20px] top-0 w-[21.219px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] tracking-[-0.24px] whitespace-pre">432</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[18px] left-0 top-[20px] w-[41.219px]" data-name="Container">
      <Container86 />
      <Paragraph21 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-[38px] left-0 top-0 w-[92px]" data-name="Container">
      <Container85 />
      <Container87 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute left-0 size-[29.594px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[4.008px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-16.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p7532480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.00098" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.008px] items-start left-[7px] top-[0.49px] w-[4px]" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-px size-[4px] top-[4px]" data-name="Container">
      <Icon36 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[4.008px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-16.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p7532480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.00098" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.008px] items-start left-[7px] top-[7.5px] w-[4px]" data-name="Container">
      <Icon37 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="h-[3px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_21.7%_17%_10%]" data-name="Vector">
        <div className="absolute inset-[-23.63%_-15.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.pa0b3ac0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.940412" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3px] items-start left-[3.79px] top-[6.25px] w-[4.422px]" data-name="Container">
      <Icon38 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="h-[3px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_21.8%_17%_10%]" data-name="Vector">
        <div className="absolute inset-[-23.63%_-15.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.p13d06000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.940412" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3px] items-start left-[3.79px] top-[2.75px] w-[4.422px]" data-name="Container">
      <Icon39 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute left-[8.8px] overflow-clip size-[12px] top-[8.8px]" data-name="Container">
      <Container90 />
      <Container91 />
      <Container92 />
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute left-0 size-[29.594px] top-0" data-name="Container">
      <Container95 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute left-[99.72px] size-[29.594px] top-[4.2px]" data-name="Container">
      <Container89 />
      <Container96 />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute h-[38px] left-[16px] top-[60px] w-[129.313px]" data-name="Container">
      <Container88 />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute h-[126px] left-[1.59px] top-[81.59px] w-[161.313px]" data-name="Container">
      <Container83 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-[206.797px] left-[180.5px] top-[222.8px] w-[164.5px]" data-name="Container">
      <Container79 />
      <Container82 />
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute h-[429.594px] left-[24px] top-[60px] w-[345px]" data-name="Container">
      <Container34 />
      <Container56 />
      <Container78 />
      <Container100 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[24px] w-[101.031px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.5px] tracking-[-0.28px] whitespace-pre">내가 만든 쇼케이스</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[489.594px] left-[899px] top-[190.88px] w-[393px]" data-name="Container">
      <Container101 />
      <Paragraph22 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="생성형인공지능디자인">
      <Container7 />
      <Container12 />
      <Container102 />
    </div>
  );
}