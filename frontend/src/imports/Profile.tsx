import { imgVector, imgVector1 } from "./svg-43sg0";
type ProfileProps = {
  className?: string;
  prop1?: "profile_1_l" | "profile_2_l" | "profile_3_l" | "profile_4_l" | "profile_4_s" | "profile_3_s" | "profile_2_s" | "profile_1_s";
};

/**
 * @figmaAssetKey 9fd9e6040d6038d169976cb484581f223d7910c5
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
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
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
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
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
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
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
            <img alt="" className="block max-w-none size-full" src={imgVector1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Profile1() {
  return <Profile prop1="profile_2_l" className="bg-[#fef7fc] relative size-full" />;
}