import imgRectangle240655372 from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function Icon() {
  return (
    <div className="absolute left-[111.5px] size-[20px] top-[7.95px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M15 5L5 15" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
          <path d="M5 5L15 15" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[140px]">
      <div className="absolute left-0 size-[140px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle240655372} />
      </div>
      <Icon />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0 w-[709px]">
      {[...Array(4).keys()].map((_, i) => (
        <Frame2 key={i} />
      ))}
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[111.5px] size-[20px] top-[7.95px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M15 5L5 15" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
          <path d="M5 5L15 15" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33314" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[140px]">
      <div className="absolute left-0 size-[140px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle240655372} />
      </div>
      <Icon1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[709px]">
      {[...Array(4).keys()].map((_, i) => (
        <Frame6 key={i} />
      ))}
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-1/2 top-[153px] translate-x-[-50%] w-[709px]">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px]">BTS 월드 투어 2024</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.28px]">쇼케이스를 성공적으로 업로드했어요</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-1/2 top-[498px] translate-x-[-50%]">
      <Frame />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">나의 쇼케이스 보러 가기</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-black box-border content-stretch flex flex-col gap-[10px] items-start justify-center left-[calc(50%-163.5px)] pl-[24px] pr-px py-[20px] top-[636px] w-[327px]" data-name="Button">
      <Text />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="디자인 페이지 생성">
      <Frame5 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.2)] h-[851px] left-0 to-[88.462%] to-[rgba(254,238,251,0.2)] top-0 w-[393px]" />
      <Frame1 />
      <Button />
      <div className="absolute left-[calc(50%-158.5px)] size-[16px] top-[482px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #F360C0)" id="Ellipse 6108" r="6" stroke="var(--stroke-0, #F360C0)" strokeWidth="4" />
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+134.5px)] size-[9px] top-[116px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative size-[9px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="var(--fill-0, #F360C0)" id="Ellipse 6109" r="2.5" stroke="var(--stroke-0, #F360C0)" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-142.5px)] size-[9px] top-[505px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative size-[9px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="var(--fill-0, #F360C0)" id="Ellipse 6109" r="2.5" stroke="var(--stroke-0, #F360C0)" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}