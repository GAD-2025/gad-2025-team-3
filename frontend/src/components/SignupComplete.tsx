import { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import svgPaths from "../imports/svg-75d091w3ip";

interface SignupCompleteProps {
  username: string;
}

export default function SignupComplete({ username }: SignupCompleteProps) {
  const navigate = useNavigate();

  // Randomly select one of 4 profile types and save it
  const profileType = useMemo(() => {
    const types: Array<'profile_1_l' | 'profile_2_l' | 'profile_3_l' | 'profile_4_l'> = ['profile_1_l', 'profile_2_l', 'profile_3_l', 'profile_4_l'];
    const selectedType = types[Math.floor(Math.random() * types.length)];
    localStorage.setItem('profileType', selectedType); // Save to localStorage
    return selectedType;
  }, []);

  // Automatically navigate to the main page after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 3000); // 3-second delay

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  // Render profile icon based on selected type
  const renderProfileIcon = () => {
    // ... (rest of the rendering logic is the same)
    if (profileType === 'profile_1_l') {
      return (
        <div className="absolute flex inset-[-12%_-62.49%_-56.53%_-29%] items-center justify-center">
          <div className="flex-none h-[128.514px] rotate-[330deg] w-[208.835px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 129">
                <path d={svgPaths.p123d8e00} fill="var(--fill-0, #F360C0)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    if (profileType === 'profile_2_l') {
      return (
        <div className="absolute flex inset-[-68.5%_-35.49%_-0.03%_-56%] items-center justify-center">
          <div className="flex-none h-[128.514px] rotate-[330deg] w-[208.835px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 129">
                <path d={svgPaths.p123d8e00} fill="var(--fill-0, #F360C0)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    if (profileType === 'profile_3_l') {
      return (
        <div className="absolute flex inset-[-12%_15.01%_-56.53%_-106.5%] items-center justify-center">
          <div className="flex-none h-[128.514px] rotate-[330deg] w-[208.835px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 129">
                <path d={svgPaths.p123d8e00} fill="var(--fill-0, #F360C0)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    // profile_4_l
    return (
      <div className="absolute flex inset-[-68.5%_-102.99%_-0.03%_11.5%] items-center justify-center">
        <div className="flex-none h-[128.514px] rotate-[330deg] w-[208.835px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 129">
              <path d={svgPaths.p123d8e00} fill="var(--fill-0, #F360C0)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white relative w-full min-h-screen max-w-[393px] mx-auto overflow-hidden" data-name="디자인 페이지 생성">
      {/* Gradient Background */}
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.2)] h-[851px] left-0 to-[88.462%] to-[rgba(254,238,251,0.2)] top-0 w-full" />
      
      {/* Decorative Dots with Animation */}
      <motion.div 
        className="absolute left-[calc(50%-95.5px)] size-[16px] top-[196px]"
        animate={{
          y: [0, -15, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #F360C0)" id="Ellipse 6108" r="6" stroke="var(--stroke-0, #F360C0)" strokeWidth="4" />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute flex items-center justify-center left-[calc(50%+70.5px)] size-[9px] top-[181px]"
        animate={{
          y: [0, 12, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <div className="flex-none scale-y-[-100%]">
          <div className="relative size-[9px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="var(--fill-0, #F360C0)" id="Ellipse 6109" r="2.5" stroke="var(--stroke-0, #F360C0)" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[calc(50%+0.5px)] top-[219px] translate-x-[-50%]">
        {/* Profile Icon */}
        <motion.div 
          className="bg-[#fef7fc] overflow-clip relative shrink-0 size-[128px]" 
          data-name="Profile"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 0.8,
          }}
        >
          {renderProfileIcon()}
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-nowrap whitespace-pre"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="font-['Pretendard',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px]">
            <p className="mb-0">{username} 님,</p>
            <p>회원가입이 완료되었어요</p>
          </div>
          <p className="font-['Pretendard',sans-serif] leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.28px]">SHOWCASE에서 나만의 쇼케이스를 만들어 보세요.</p>
        </motion.div>
      </div>
    </div>
  );
}