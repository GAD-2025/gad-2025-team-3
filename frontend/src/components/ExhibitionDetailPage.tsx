import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, Eye, Star, ArrowUp, Trash2, Heart } from 'react-feather';
import ShareExhibitionModal from './ShareExhibitionModal';

interface ExhibitionData {
  id: number;
  user_id: number;
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
  created_at: string;
}

interface ExhibitionDetailPageProps {
  onBack: () => void;
}

export default function ExhibitionDetailPage({
  onBack,
}: ExhibitionDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [exhibitionData, setExhibitionData] = useState<ExhibitionData | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);

  // TODO: Replace with actual authentication logic from context
  // For now, we assume a logged-in user with ID 1 for demonstration
  const loggedInUserId = 1; 
  const isOwner = exhibitionData?.user_id === loggedInUserId;

  useEffect(() => {
    const fetchExhibitionAndComments = async () => {
      if (!id) {
        setError("Exhibition ID is missing.");
        setLoading(false);
        return;
      }
      try {
        // Fetch all data in parallel
        const [exhibitionRes, itemsRes, commentsRes, isLikedRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}`),
          fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/items`),
          fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/comments`),
          fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/is-liked?userId=${loggedInUserId}`),
        ]);

        if (!exhibitionRes.ok) throw new Error(`Failed to fetch exhibition: ${exhibitionRes.statusText}`);
        if (!itemsRes.ok) throw new Error(`Failed to fetch exhibition items: ${itemsRes.statusText}`);
        if (!commentsRes.ok) throw new Error(`Failed to fetch comments: ${commentsRes.statusText}`);
        if (!isLikedRes.ok) throw new Error(`Failed to fetch like status: ${isLikedRes.statusText}`);

        const exhibition: ExhibitionData = await exhibitionRes.json();
        const imageUrls: string[] = await itemsRes.json();
        const fetchedComments: Comment[] = await commentsRes.json();
        const { isLiked } = await isLikedRes.json();

        setExhibitionData({ ...exhibition, imageUrls });
        setComments(fetchedComments);
        setIsLiked(isLiked);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExhibitionAndComments();
  }, [id, loggedInUserId]);

  const handleLikeClick = async () => {
    if (!id || !loggedInUserId || !exhibitionData) return;

    const originalIsLiked = isLiked;
    const originalLikes = parseInt(exhibitionData.likes, 10);

    // Optimistic UI update
    const newIsLiked = !originalIsLiked;
    const newLikes = newIsLiked ? originalLikes + 1 : originalLikes - 1;
    
    setIsLiked(newIsLiked);
    setExhibitionData({ ...exhibitionData, likes: String(newLikes) });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      });

      if (!response.ok) {
        // Revert on failure
        setIsLiked(originalIsLiked);
        setExhibitionData({ ...exhibitionData, likes: String(originalLikes) });
        console.error("Failed to update like status on the server.");
      }
      // No need to do anything on success, UI is already updated
    } catch (error) {
      // Revert on error
      setIsLiked(originalIsLiked);
      setExhibitionData({ ...exhibitionData, likes: String(originalLikes) });
      console.error("An error occurred while liking:", error);
    }
  };

  const handleCommentSubmit = async () => {
    if (!newComment.trim() || !id) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment, author: 'Anonymous' }), // Replace with actual user data
      });

      if (!response.ok) {
        throw new Error(`Failed to post comment: ${response.statusText}`);
      }

      const postedComment: Comment = await response.json();
      setComments((prevComments) => [postedComment, ...prevComments]);
      setNewComment('');
    } catch (err: any) {
      console.error('Error posting comment:', err.message);
      setError('Failed to post comment.');
    }
  };

  const handleDelete = async () => {
    // Direct deletion confirmation for testing
    if (!window.confirm("팝업 테스트 대신, 즉시 삭제됩니다. 정말로 이 전시관을 삭제하시겠습니까?")) {
      return;
    }

    if (!id) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        try {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete the exhibition.');
        } catch (e) {
            throw new Error(`Failed to delete exhibition. Server responded with status: ${response.status}`);
        }
      }
      
      alert('전시관이 삭제되었습니다.');
      navigate('/myexhibition'); // Redirect to user's exhibition list page after deletion

    } catch (err: any) {
      console.error('Deletion error:', err.message);
      setError(err.message);
      alert(`삭제 중 오류가 발생했습니다: ${err.message}`);
    }
  };
  
  const onShare = () => setShareModalOpen(true);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading exhibition...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  if (!exhibitionData) {
    return <div className="flex justify-center items-center h-screen">No exhibition data found.</div>;
  }

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto">
      {/* Main Content */}
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="디자인 페이지 생성 (Copy)">
        {/* Header */}
        <div className="box-border content-stretch flex flex-col h-[85.6px] items-start pb-[1.6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[84px] items-center justify-between px-[24px] py-0 relative w-full">
                <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors" data-name="Button">
                  <ChevronLeft className="size-5 text-black" />
                </button>
                <div className={`h-[36px] relative shrink-0 ${isOwner ? 'w-[116px]' : 'w-[80px]'}`} data-name="Container">
                  <div className={`bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative ${isOwner ? 'w-[116px]' : 'w-[80px]'}`}>
                    {isOwner && (
                      <button
                        onClick={handleDelete}
                        className="relative shrink-0 size-[36px] cursor-pointer hover:bg-[#f360c0] hover:text-white transition-all group"
                        data-name="Delete Button"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-center justify-center relative size-[36px]">
                          <Trash2 className="size-5 text-black group-hover:text-white transition-colors" />
                        </div>
                      </button>
                    )}
                    <button 
                      onClick={handleLikeClick}
                      className="relative shrink-0 size-[36px] flex items-center justify-center hover:bg-gray-100 rounded transition-colors cursor-pointer" 
                      data-name="Button"
                    >
                      <Star size={24} color={isLiked ? "#f360c0" : "black"} fill={isLiked ? "#f360c0" : "none"} />
                    </button>
                    <button 
                      onClick={onShare}
                      className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0 flex items-center justify-center hover:bg-gray-100 rounded transition-colors cursor-pointer" 
                      data-name="Button"
                    >
                      <Share2 className="size-5 text-black" />
                    </button>
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
                        <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.3px] whitespace-pre">{exhibitionData.views}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[16.5px] relative shrink-0 w-[38.725px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16.5px] items-center relative w-[38.725px]">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <Heart size={16} color="#4A5565" />
                    </div>
                    <div className="h-[16.5px] relative shrink-0 w-[14.725px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[14.725px]">
                        <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.3px] whitespace-pre">{exhibitionData.likes}</p>
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
                        <p className="absolute font-['EB_Garamond',serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.2px] tracking-[-0.3px] whitespace-pre">{exhibitionData.shares}</p>
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
        <div className="relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
                <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Gallery</p>
              </div>
              <div className="overflow-y-auto w-full">
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
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[24px] pb-[24px] pt-[24px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
                <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[95px]">Comments {comments.length}</p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
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
        
        {/* Comment Input Section */}
        <div className="relative shrink-0 w-full px-[24px] pb-[24px]" data-name="Container">
          <div className="flex items-center w-full h-[59px] border-[1.6px] border-black rounded-lg overflow-hidden bg-white pl-2">
            <button
              onClick={handleLikeClick}
              className="shrink-0 flex items-center justify-center cursor-pointer mx-[30px] py-2"
              data-name="Heart Button"
            >
              <Heart size={20} color={isLiked ? "#f360c0" : "black"} fill={isLiked ? "#f360c0" : "none"} />
            </button>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="응원 댓글을 입력해보세요."
              className="font-['Pretendard',sans-serif] leading-[20px] not-italic w-full h-full text-[14px] text-black placeholder:text-gray-400 tracking-[-0.28px] bg-transparent border-none outline-none"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-black flex items-center justify-center shrink-0 h-full w-[59px] cursor-pointer hover:bg-[#f360c0] transition-colors"
              data-name="Button"
            >
              <ArrowUp size={20} color="white" />
            </button>
          </div>
        </div>
      </div>

      {isShareModalOpen && exhibitionData && (
        <ShareExhibitionModal
            isOpen={isShareModalOpen}
            onClose={() => setShareModalOpen(false)}
            exhibition={exhibitionData}
        />
      )}
    </div>
  );
}
