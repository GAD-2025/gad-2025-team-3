import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CreateExhibitionCompletePageProps {
  onNavigateToGallery: () => void;
  uploadedImages?: string[];
  exhibitionTitle?: string;
}

interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function CreateExhibitionCompletePage({

  onNavigateToGallery,

  uploadedImages = [],

  exhibitionTitle = ''

}: CreateExhibitionCompletePageProps) {

  const [circles, setCircles] = useState<Circle[]>([]);



  const count = uploadedImages.length;

  const topCount = Math.ceil(count / 2);



  const displayImagesTop = uploadedImages.slice(0, topCount);

  const displayImagesBottom = uploadedImages.slice(topCount);



  // Duplicate images for seamless loop if there are images

  const scrollingImagesTop = displayImagesTop.length > 0 ? [...displayImagesTop, ...displayImagesTop] : [];

  const scrollingImagesBottom = displayImagesBottom.length > 0 ? [...displayImagesBottom, ...displayImagesBottom] : [];



  useEffect(() => {

    // Generate random circles with wider spread

    const generateCircles = () => {

      const newCircles: Circle[] = [];

      const circleCount = 8; // More circles



      for (let i = 0; i < circleCount; i++) {

        newCircles.push({

          id: i,

          x: Math.random() * 85 + 7.5, // 7.5-92.5% of width (wider spread)

          y: Math.random() * 90 + 5, // 5-95% of height (wider spread)

          size: Math.random() * 8 + 6, // 6-14px

          duration: Math.random() * 4 + 3, // 3-7 seconds

          delay: Math.random() * 2.5,

        });

      }



      setCircles(newCircles);

    };



    generateCircles();

  }, []);



  // Calculate total width for continuous scroll dynamically

  const imageWidth = 140;

  const gap = 18;

  const totalWidthTop = (imageWidth + gap) * displayImagesTop.length;

  const totalWidthBottom = (imageWidth + gap) * displayImagesBottom.length;



  return (

    <div className="bg-white relative w-full min-h-screen max-w-[393px] mx-auto overflow-hidden" data-name="디자인 페이지 생성">

      {/* Background Gradient */}

      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.2)] h-full left-0 to-[88.462%] to-[rgba(254,238,251,0.2)] top-0 w-full pointer-events-none" />



      {/* Animated Pink Circles - More spread out */}

      {circles.map((circle) => (

        <motion.div

          key={circle.id}

          className="absolute"

          style={{

            left: `${circle.x}%`,

            top: `${circle.y}%`,

            width: `${circle.size}px`,

            height: `${circle.size}px`,

          }}

          animate={{

            y: [0, -40, 0],

            x: [0, Math.random() * 30 - 15, 0],

            opacity: [0.5, 1, 0.5],

          }}

          transition={{

            duration: circle.duration,

            repeat: Infinity,

            delay: circle.delay,

            ease: "easeInOut",

          }}

        >

          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">

            <circle

              cx="4.5"

              cy="4.5"

              fill="#F360C0"

              r="2.5"

              stroke="#F360C0"

              strokeWidth="4"

            />

          </svg>

        </motion.div>

      ))}



      {/* Image Grid - Top Section with continuous horizontal scroll */}

      <div className="absolute left-1/2 top-[153px] translate-x-[-50%] w-[800px] overflow-hidden">

        <motion.div

          className="flex gap-[18px] items-center"

          animate={{

            x: [-totalWidthTop, 0],

          }}

          transition={{

            duration: 20,

            repeat: Infinity,

            ease: "linear",

          }}

        >

                    {scrollingImagesTop.map((img, index) => (

                      <div

                        key={`top-${index}`}

                        className="relative shrink-0 size-[140px]"

                      >

                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[140px]">

                          {img ? (

                            <div className="absolute left-0 size-[140px] top-0">

                              <img

                                alt="Uploaded content"

                                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"

                                src={img}

                              />

                            </div>

                          ) : (

                            <div className="absolute left-0 size-[140px] top-0 bg-[#E5E7EB]" />

                          )}

                        </div>

                      </div>

                    ))}

        </motion.div>

      </div>



      {/* Image Grid - Bottom Section with continuous horizontal scroll (opposite direction) */}

      <div className="absolute left-1/2 top-[313px] translate-x-[-50%] w-[800px] overflow-hidden">

        <motion.div

          className="flex gap-[18px] items-center"

          animate={{

            x: [0, -totalWidthBottom],

          }}

          transition={{

            duration: 25,

            repeat: Infinity,

            ease: "linear",

          }}

        >

                    {scrollingImagesBottom.map((img, index) => (

                      <div

                        key={`bottom-${index}`}

                        className="relative shrink-0 size-[140px]"

                      >

                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[140px]">

                          {img ? (

                            <div className="absolute left-0 size-[140px] top-0">

                              <img

                                alt="Uploaded content"

                                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"

                                src={img}

                              />

                            </div>

                          ) : (

                            <div className="absolute left-0 size-[140px] top-0 bg-[#E5E7EB]" />

                          )}

                        </div>

                      </div>

                    ))}

        </motion.div>

      </div>



      {/* Title and Description */}

      <motion.div

        className="absolute content-stretch flex flex-col gap-[16px] items-center left-1/2 top-[498px] translate-x-[-50%]"

        initial={{ y: 20, opacity: 0 }}

        animate={{ y: 0, opacity: 1 }}

        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}

      >

        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0">

                    <p className="w-[320px] font-['Pretendard',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] whitespace-pre-wrap break-all">

                      {exhibitionTitle || '나의 전시관'}

                    </p>

          <p className="font-['Pretendard',sans-serif] leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.28px]">{exhibitionTitle} 쇼케이스를 성공적으로 업로드했어요</p>

        </div>

      </motion.div>



      {/* Button */}

      <motion.button

        onClick={onNavigateToGallery}

        className="absolute bg-black box-border content-stretch flex flex-col gap-[10px] items-start justify-center left-[calc(50%-163.5px)] pl-[24px] pr-px py-[20px] top-[636px] w-[327px] cursor-pointer transition-colors hover:bg-[#F360C0]"

        data-name="Button"

        initial={{ y: 20, opacity: 0 }}

        animate={{ y: 0, opacity: 1 }}

        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}

      >

        <div className="content-stretch flex h-[16.616px] items-start relative shrink-0 w-[26.794px]" data-name="Text">

          <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">나의 쇼케이스 보러 가기</p>

        </div>

      </motion.button>

    </div>

  );

}
