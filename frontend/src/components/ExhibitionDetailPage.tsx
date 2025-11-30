import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, Heart, Share2, Eye, Star } from 'react-feather';
import { motion } from 'framer-motion';
interface ExhibitionData {
  title: string;
  author: string;
  room: string;
  views: string;
  likes: string;
  shares: string;
  description: string;
  imageUrls: string[];
}

interface Comment {
  id: number;
  author: string;
  content: string;
  created_at: string; // Changed from timestamp to created_at
}

interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ExhibitionDetailPageProps {
  onBack: () => void;
}

export default function ExhibitionDetailPage({
  onBack,
}: ExhibitionDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const [exhibitionData, setExhibitionData] = useState<ExhibitionData | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const fetchExhibitionAndComments = async () => {
      if (!id) {
        setError("Exhibition ID is missing.");
        setLoading(false);
        return;
      }
      try {
        const exhibitionResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}`);
        if (!exhibitionResponse.ok) {
          throw new Error(`Failed to fetch exhibition: ${exhibitionResponse.statusText}`);
        }
        const exhibition: ExhibitionData = await exhibitionResponse.json();

        const itemsResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/items`);
        if (!itemsResponse.ok) {
          throw new Error(`Failed to fetch exhibition items: ${itemsResponse.statusText}`);
        }
        const imageUrls: string[] = await itemsResponse.json();

        const commentsResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/comments`);
        if (!commentsResponse.ok) {
          throw new Error(`Failed to fetch comments: ${commentsResponse.statusText}`);
        }
        const fetchedComments: Comment[] = await commentsResponse.json();

        setExhibitionData({ ...exhibition, imageUrls });
        setComments(fetchedComments);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExhibitionAndComments();
  }, [id]);

  useEffect(() => {
    if (isLiked) {
      const newCircles: Circle[] = [];
      const circleCount = 15;
      
      for (let i = 0; i < circleCount; i++) {
        newCircles.push({
          id: i,
          x: Math.random() * 90 + 5,
          y: Math.random() * 90 + 5,
          size: Math.random() * 12 + 8,
          duration: Math.random() * 6 + 4,
          delay: Math.random() * 2,
        });
      }
      
      setCircles(newCircles);
    } else {
      setCircles([]);
    }
  }, [isLiked]);

  const handleCommentSubmit = async () => {
    if (!newComment.trim() || !id) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment, author: 'Anonymous' }), // You might want to replace 'Anonymous' with actual user data
      });

      if (!response.ok) {
        throw new Error(`Failed to post comment: ${response.statusText}`);
      }

      const postedComment: Comment = await response.json();
      setComments((prevComments) => [...prevComments, postedComment]);
      setNewComment('');
    } catch (err: any) {
      console.error('Error posting comment:', err.message);
      setError('Failed to post comment.');
    }
  };

  if (loading) {
    return <div>Loading exhibition...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!exhibitionData) {
    return <div>No exhibition data found.</div>;
  }

  return (
    <div className="bg-white content-stretch flex flex-col gap-[34px] items-start relative w-full min-h-screen max-w-[393px] mx-auto overflow-x-hidden" data-name="메인 홈">      {/* Animated Pink Circles */}
      {isLiked && circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute z-50 pointer-events-none"
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            delay: circle.delay,
            ease: "easeInOut",
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <circle cx="4.5" cy="4.5" fill="#F360C0" r="2.5" stroke="#F360C0" strokeWidth="4" />
          </svg>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="디자인 페이지 생성 (Copy)">
        {/* Header */}
        <div className="box-border content-stretch flex flex-col h-[85.6px] items-start pb-[1.6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[84px] items-center justify-between px-[24px] py-0 relative w-full">
                <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer" data-name="Button">
                  <ChevronLeft size={20} />
                </button>
                <div className="h-[36px] relative shrink-0 w-[80px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-[80px]">
                    <div className="relative shrink-0 size-[36px]" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
                        <Heart size={20} />
                      </div>
                    </div>
                    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Button">
                      <div className="size-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start pb-0 pt-[8px] px-[8px] relative w-full">
                          <Share2 size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="bg-gray-100 h-[390px] relative shrink-0 w-full overflow-hidden" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            {exhibitionData.imageUrls && exhibitionData.imageUrls.length > 0 ? (
              <img src={exhibitionData.imageUrls[0]} alt="Exhibition Hero" className="object-cover w-full h-full" style={{ width: '100%', height: '100%' }} />
            ) : (
              <div className="h-[390px] w-full flex items-center justify-center text-gray-500">No hero image available</div>
            )}
          </div>
        </div>

        {/* Title Section */}
        <div className="h-[159.9px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[16px] h-[159.9px] items-start pb-[1.6px] pt-[24px] px-[24px] relative w-full">
              <div className="h-[61px] relative shrink-0 w-full" data-name="Container">
                <div className="size-full">
                  <div className="content-stretch flex h-[61px] items-start justify-between relative w-full">
                    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-start relative w-full">
                        <div className="h-[35px] relative shrink-0 w-full" data-name="Heading 1">
                          <p className="absolute font-['Pretendard',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-[-0.6px] tracking-[-0.48px] whitespace-pre">{exhibitionData.title}</p>
                        </div>
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Paragraph">
                          <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.3px]">by {exhibitionData.author}</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[54.7px] relative shrink-0 w-[59.538px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[54.7px] items-center justify-center pb-[4px] pt-0 px-0 relative w-[59.538px]">
                        <div className="box-border content-stretch flex items-start justify-center mb-[-4px] relative shrink-0 w-full" data-name="Container">
                          <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">Room</p>
                        </div>
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center mb-[-4px] relative shrink-0 w-full" data-name="Container">
                          <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black">{exhibitionData.room}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[24px] h-[33.3px] items-center pb-0 pt-[0.8px] px-0 relative shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
                <div className="h-[16.5px] relative shrink-0 w-[51.4px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16.5px] items-center relative w-[51.4px]">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <Eye size={16} color="#4A5565" />
                    </div>
                    <div className="h-[16.5px] relative shrink-0 w-[27.4px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[27.4px]">
                        <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[0.3px] whitespace-pre">{exhibitionData.views}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[16.5px] relative shrink-0 w-[38.725px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16.5px] items-center relative w-[38.725px]">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <Star size={16} color="#4A5565" />
                    </div>
                    <div className="h-[16.5px] relative shrink-0 w-[14.725px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[14.725px]">
                        <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[0.3px] whitespace-pre">{exhibitionData.likes}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[16.5px] relative shrink-0 w-[35.325px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16.5px] items-center relative w-[35.325px]">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <Share2 size={16} color="#4A5565" />
                    </div>
                    <div className="h-[16.5px] relative shrink-0 w-[11.325px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[11.325px]">
                        <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[0.3px] whitespace-pre">{exhibitionData.shares}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full" data-name="Heading 3">
                <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">About</p>
              </div>
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Paragraph">
                <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black tracking-[-0.24px] w-[336px]">{exhibitionData.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="h-[308.925px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[16px] h-[308.925px] items-start pb-[1.6px] pt-[24px] px-[24px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
                <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Gallery</p>
              </div>
              <div className="h-[225.325px] relative shrink-0 w-full overflow-y-auto" data-name="Container">
                <div className="flex flex-wrap gap-[8px] w-full h-full">
                  {exhibitionData.imageUrls.map((imageUrl, index) => (
                    <div key={index} className="relative bg-gray-100 flex items-center justify-center overflow-hidden" style={{ width: '109px', height: '109px' }}>
                      <img src={imageUrl} alt={`Exhibition Image ${index + 1}`} className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
                <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[95px]">Comments {comments.length}</p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                {comments.map((comment) => (
                  <div key={comment.id} className="h-[40px] relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[0px_0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[4px] h-[40px] items-start pl-[17.6px] pr-0 py-0 relative w-full">
                        <div className="content-stretch flex gap-[8px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="h-[16.5px] relative shrink-0 flex-shrink-0 max-w-full" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative">
                              <p className="font-['EB_Garamond',serif] leading-[16px] not-italic text-[12px] text-black text-nowrap top-[-0.2px] tracking-[0.3px] whitespace-pre">{comment.author}</p>
                            </div>
                          </div>
                          <div className="h-[16.5px] relative shrink-0 w-[2.913px] flex-shrink-0" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[2.913px]">
                              <p className="font-['Playfair_Display',serif] font-normal leading-[16.5px] text-[#99a1af] text-[11px] text-nowrap top-[-0.2px] whitespace-pre">·</p>
                            </div>
                          </div>
                          <div className="h-[16.5px] relative shrink-0 flex-shrink-0" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative">
                              <p className="font-['Pretendard',sans-serif] leading-[18px] not-italic text-[#99a1af] text-[12px] top-[-0.2px] tracking-[-0.24px] whitespace-pre">{new Date(comment.created_at).toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                        <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
                          <p className="absolute font-['Pretendard',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.2px] tracking-[-0.28px] whitespace-pre">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="h-[107.2px] relative shrink-0 w-full" data-name="Container">
          <div className="size-full">
            <div className="box-border content-stretch flex gap-[12px] h-[107.2px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
              <button onClick={() => setIsLiked(!isLiked)} className={`basis-0 grow h-[59.2px] min-h-px min-w-px relative shrink-0 cursor-pointer transition-all ${isLiked ? 'bg-[#f360c0]' : ''}`} data-name="Button">
                {!isLiked && <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />}
                <div className="size-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[59.2px] items-center justify-center relative w-full">
                    <div className="h-[20px] overflow-clip relative shrink-0" data-name="Icon">
                      <Heart size={20} color={isLiked ? 'white' : 'black'} fill={isLiked ? 'white' : 'none'} />
                    </div>
                  </div>
                </div>
              </button>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="코멘트를 작성해주세요..."
                className="basis-0 grow h-[59px] min-h-px min-w-px relative shrink-0 border border-black p-2 rounded"
              />
              <button onClick={handleCommentSubmit} className="basis-0 bg-black grow h-[59px] min-h-px min-w-px relative shrink-0 cursor-pointer hover:bg-[#f360c0] transition-colors" data-name="Button">
                <div aria-hidden="true" className="absolute border-[1.108px] border-black border-solid inset-0 pointer-events-none" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] h-[59px] items-center justify-center relative w-full">
                  <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Text">
                    <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">코멘트 작성</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
