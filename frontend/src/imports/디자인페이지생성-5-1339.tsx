import svgPaths from "./svg-75d091w3ip";
import { imgVector } from "./svg-g5878";
type ProfileProps = {
  className?: string;
  prop1?: "profile_1_l" | "profile_2_l" | "profile_3_l" | "profile_4_l" | "profile_4_s" | "profile_3_s" | "profile_2_s" | "profile_1_s";
};

/**
 * @figmaAssetKey f47ec0e1cd149b02420bfc32a7bcc424be420b17
 */
function Profile({ className, prop1 = "profile_1_l" }: ProfileProps) {
  if (prop1 === "profile_1_s") {
    return (
      <div className={className} data-name="속성 1=profile_1_s">
        <div className="absolute flex inset-[-12%_-62.49%_-56.53%_-29%] items-center justify-center">
          <div className="flex-none h-[80.321px] rotate-[330deg] w-[130.522px]">
            <div className="relative size-full" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (prop1 === "profile_2_l") {
    return (
      <div className={className} data-name="속성 1=profile_2_l">
        <div className="absolute flex inset-[-68.5%_-35.49%_-0.03%_-56%] items-center justify-center">
          <div className="flex-none h-[128.514px] rotate-[330deg] w-[208.835px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 129">
                <path d={svgPaths.p123d8e00} fill="var(--fill-0, #F360C0)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (prop1 === "profile_2_s") {
    return (
      <div className={className} data-name="속성 1=profile_2_s">
        <div className="absolute flex inset-[-68.5%_-35.49%_-0.03%_-56%] items-center justify-center">
          <div className="flex-none h-[80.321px] rotate-[330deg] w-[130.522px]">
            <div className="relative size-full" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (prop1 === "profile_3_l") {
    return (
      <div className={className} data-name="속성 1=profile_3_l">
        <div className="absolute flex inset-[-12%_15.01%_-56.53%_-106.5%] items-center justify-center">
          <div className="flex-none h-[128.514px] rotate-[330deg] w-[208.835px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 129">
                <path d={svgPaths.p123d8e00} fill="var(--fill-0, #F360C0)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (prop1 === "profile_3_s") {
    return (
      <div className={className} data-name="속성 1=profile_3_s">
        <div className="absolute flex inset-[-12%_15.01%_-56.53%_-106.5%] items-center justify-center">
          <div className="flex-none h-[80.321px] rotate-[330deg] w-[130.522px]">
            <div className="relative size-full" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (prop1 === "profile_4_l") {
    return (
      <div className={className} data-name="속성 1=profile_4_l">
        <div className="absolute flex inset-[-68.5%_-102.99%_-0.03%_11.5%] items-center justify-center">
          <div className="flex-none h-[128.514px] rotate-[330deg] w-[208.835px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 129">
                <path d={svgPaths.p123d8e00} fill="var(--fill-0, #F360C0)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (prop1 === "profile_4_s") {
    return (
      <div className={className} data-name="속성 1=profile_4_s">
        <div className="absolute flex inset-[-68.5%_-102.99%_-0.03%_11.5%] items-center justify-center">
          <div className="flex-none h-[80.321px] rotate-[330deg] w-[130.522px]">
            <div className="relative size-full" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="속성 1=profile_1_l">
      <div className="absolute flex inset-[-12%_-62.49%_-56.53%_-29%] items-center justify-center">
        <div className="flex-none h-[128.514px] rotate-[330deg] w-[208.835px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 129">
              <path d={svgPaths.p123d8e00} fill="var(--fill-0, #F360C0)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px]">
        <p className="mb-0">user_name 님,</p>
        <p>회원가입이 완료되었어요</p>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.28px]">SHOWCASE에서 나만의 쇼케이스를 만들어 보세요.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[calc(50%+0.5px)] top-[219px] translate-x-[-50%]">
      <Profile className="bg-[#fef7fc] overflow-clip relative shrink-0 size-[128px]" />
      <Frame />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">SHOWCASE 시작하기</p>
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
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.2)] h-[851px] left-0 to-[88.462%] to-[rgba(254,238,251,0.2)] top-0 w-[393px]" />
      <Frame1 />
      <Button />
      <div className="absolute left-[calc(50%-95.5px)] size-[16px] top-[196px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #F360C0)" id="Ellipse 6108" r="6" stroke="var(--stroke-0, #F360C0)" strokeWidth="4" />
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+70.5px)] size-[9px] top-[181px]">
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