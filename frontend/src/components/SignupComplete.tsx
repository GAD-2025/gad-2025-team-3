import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import RandomProfileIcon from './RandomProfileIcon';

interface SignupCompleteProps {
  username: string;
  userId: number;
}

const getProfileIconType = (userId: number) => {
  const profileTypes = ['profile_1_l', 'profile_2_l', 'profile_3_l', 'profile_4_l'];
  return profileTypes[userId % profileTypes.length];
};

export default function SignupComplete({ username, userId }: SignupCompleteProps) {
  const navigate = useNavigate();

  // Automatically navigate to the main page after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 3000); // 3-second delay

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-white relative w-full min-h-screen max-w-[393px] mx-auto overflow-hidden pb-16" data-name="디자인 페이지 생성">
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
      <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Profile Icon */}
        <motion.div 
          className="bg-[#fef7fc] overflow-clip relative shrink-0 size-[128px] rounded-full" 
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
          <RandomProfileIcon profileType={getProfileIconType(userId)} />
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