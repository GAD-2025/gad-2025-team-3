import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, Eye, Star, ArrowUp, Trash2, Heart, X, ChevronRight, MoreVertical } from 'react-feather';
import ShareExhibitionModal from './ShareExhibitionModal';
import EditExhibitionModal from './EditExhibitionModal.tsx'; // Import the new modal component

interface User {
  id: number;
  username: string;
  nickname: string;
}

interface ExhibitionData {
  id: number;
  user_id: number;
  title: string;
  author: string;
  room_number: string; // Changed from 'room' to 'room_number'
  room_creation_count?: number; // New field
  views: string;
  likes: string;
  shares: string;
  description: string;
  start_date: string; // Added for edit functionality
  end_date: string; // Added for edit functionality
  is_public: boolean; // Added for edit functionality
  imageUrls: string[];
  hashtags: string[];
}

interface Comment {
  id: number;
  author: string;
  content: string;
  created_at: string;
}

interface ExhibitionDetailPageProps {
  onBack: () => void;
  currentUser: User | null;
}

export default function ExhibitionDetailPage({
  onBack,
  currentUser,
}: ExhibitionDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [exhibitionData, setExhibitionData] = useState<ExhibitionData | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false); // State for image popup visibility
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for the index of the image to display in popup
  const [showOptionsMenu, setShowOptionsMenu] = useState(false); // State for the "More" options menu visibility
  const [showEditModal, setShowEditModal] = useState(false); // State for Edit Exhibition Modal visibility
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [hashtagRenderKey, setHashtagRenderKey] = useState(0); // New state to force re-render of hashtags
  const commentTextareaRef = useRef<HTMLTextAreaElement>(null); // Added useRef for textarea

  // Derived state for the current image URL
  const currentImage = exhibitionData?.imageUrls[currentImageIndex] || '';

  const loggedInUserId = currentUser?.id;
  const isOwner = exhibitionData?.user_id === loggedInUserId;
  const optionsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (optionsMenuRef.current && !optionsMenuRef.current.contains(event.target as Node)) {
        setShowOptionsMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsMenuRef]);

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  const fetchExhibitionAndComments = async () => {
    if (!id) {
      setError("Exhibition ID is missing.");
      setLoading(false);
      return;
    }
    try {
      // The backend is expected to increment the view count on this fetch.
      const [exhibitionRes, itemsRes, commentsRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}`),
        fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/items`),
        fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/comments`),
      ]);

      if (!exhibitionRes.ok) throw new Error(`Failed to fetch exhibition: ${exhibitionRes.statusText}`);
      if (!itemsRes.ok) throw new Error(`Failed to fetch exhibition items: ${itemsRes.statusText}`);
      if (!commentsRes.ok) throw new Error(`Failed to fetch comments: ${commentsRes.statusText}`);

      const exhibition = await exhibitionRes.json(); // Type inference will handle this better
      const imageUrls: string[] = await itemsRes.json();
      const fetchedComments: Comment[] = await commentsRes.json();
      
      // Convert hashtags string to array if it exists
      const processedExhibition: ExhibitionData = {
        ...exhibition,
        imageUrls,
        hashtags: exhibition.hashtags ? exhibition.hashtags.split(',') : [],
      };
      setExhibitionData(processedExhibition);
      setComments(fetchedComments);

      if (loggedInUserId) {
        const [isLikedRes, isFavoritedRes] = await Promise.all([
            fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/is-liked?userId=${loggedInUserId}`),
            fetch(`${import.meta.env.VITE_API_URL}/api/favorites/check?userId=${loggedInUserId}&exhibitionId=${id}`),
        ]);

        if (!isLikedRes.ok) throw new Error(`Failed to fetch like status: ${isLikedRes.statusText}`);
        if (!isFavoritedRes.ok) throw new Error(`Failed to fetch favorite status: ${isFavoritedRes.statusText}`);
        
        const { isLiked } = await isLikedRes.json();
        const { isFavorited } = await isFavoritedRes.json();

        setIsLiked(isLiked);
        setIsFavorited(isFavorited);
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExhibitionAndComments();
  }, [id, loggedInUserId, showEditModal]);

  const handleLikeClick = async () => {
    if (!id || !loggedInUserId || !exhibitionData) return;

    const originalIsLiked = isLiked;
    const originalLikes = parseInt(exhibitionData.likes, 10);
    const safeOriginalLikes = isNaN(originalLikes) ? 0 : originalLikes;

    const newIsLiked = !originalIsLiked;
    const newLikes = newIsLiked ? safeOriginalLikes + 1 : safeOriginalLikes - 1;
    
    setIsLiked(newIsLiked);
    setExhibitionData({ ...exhibitionData, likes: String(newLikes) });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: loggedInUserId }),
      });

      if (!response.ok) {
        setIsLiked(originalIsLiked);
        setExhibitionData({ ...exhibitionData, likes: String(originalLikes) });
      }
    } catch (error) {
      setIsLiked(originalIsLiked);
      setExhibitionData({ ...exhibitionData, likes: String(originalLikes) });
    }
  };

  const handleFavoriteClick = async () => {
    if (!id || !loggedInUserId || !exhibitionData) return;
  
    const originalIsFavorited = isFavorited;
    setIsFavorited(!originalIsFavorited); // Optimistic UI update
  
    try {
      const method = originalIsFavorited ? 'DELETE' : 'POST';
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: loggedInUserId, exhibitionId: id }),
      });
  
      if (!response.ok) {
        setIsFavorited(originalIsFavorited); // Revert on failure
        console.error(`Failed to ${method === 'POST' ? 'add to' : 'remove from'} favorites`);
      }
    } catch (error) {
      setIsFavorited(originalIsFavorited); // Revert on error
      console.error("An error occurred while toggling favorite status:", error);
    }
  };

  const handleShareSuccess = async () => {
    if (!id || !exhibitionData) return;

    const originalShares = parseInt(exhibitionData.shares, 10);
    const newShares = originalShares + 1;

    // Optimistic UI update
    setExhibitionData({ ...exhibitionData, shares: String(newShares) });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/share`, {
        method: 'POST',
      });

      if (!response.ok) {
        // Revert on failure
        setExhibitionData({ ...exhibitionData, shares: String(originalShares) });
        console.error("Failed to update share count on the server.");
      }
    } catch (error) {
      // Revert on error
      setExhibitionData({ ...exhibitionData, shares: String(originalShares) });
      console.error("An error occurred while updating share count:", error);
    }
  };

  const handleCommentSubmit = async () => {
    if (!newComment.trim() || !id || isSubmittingComment) return;
    if (!currentUser?.id) { // Ensure user is logged in
      alert('댓글을 작성하려면 로그인해야 합니다.');
      return;
    }

    setIsSubmittingComment(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment, userId: currentUser.id }), // Use userId
      });

      if (!response.ok) {
        throw new Error(`Failed to post comment: ${response.statusText}`);
      }

      const postedComment: Comment = await response.json();
      setComments((prevComments) => [postedComment, ...prevComments]);
      setNewComment('');
      if (commentTextareaRef.current) {
        commentTextareaRef.current.style.height = 'auto'; // Reset textarea height
      }
    } catch (err: any) {
      console.error('Error posting comment:', err.message);
      setError('Failed to post comment.');
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("정말로 이 전시관을 삭제하시겠습니까?")) {
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
      navigate('/myexhibition');

    } catch (err: any) {
      console.error('Deletion error:', err.message);
      setError(err.message);
      alert(`삭제 중 오류가 발생했습니다: ${err.message}`);
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    if (!window.confirm("정말로 이 댓글을 삭제하시겠습니까?")) {
      return;
    }

    try {
      if (!currentUser?.id) { // Ensure user is logged in
        alert('댓글을 삭제하려면 로그인해야 합니다.');
        return;
      }
      // Assuming a backend endpoint DELETE /api/comments/:commentId
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: currentUser.id }), // Use userId
      });

      if (!response.ok) {
        throw new Error(`Failed to delete comment: ${response.statusText}`);
      }

      // Update local state to remove the deleted comment
      setComments((prevComments) => prevComments.filter(comment => comment.id !== commentId));
      alert('댓글이 삭제되었습니다.');

    } catch (err: any) {
      console.error('Comment deletion error:', err.message);
      setError('Failed to delete comment.');
      alert(`댓글 삭제 중 오류가 발생했습니다: ${err.message}`);
    }
  };
  
  const onShare = () => setShareModalOpen(true);

  const handleSaveExhibition = async (updatedExhibition: ExhibitionData) => {
    if (!id || !currentUser?.username) {
        alert("전시회 정보를 저장할 수 없습니다. 사용자 정보가 없거나 전시회 ID가 누락되었습니다.");
        return;
    }
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...updatedExhibition,
                hashtags: updatedExhibition.hashtags.join(','), // Convert array to comma-separated string
                username: currentUser.username
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update exhibition.');
        }

                                alert('전시회 정보가 성공적으로 업데이트되었습니다.');

                                setShowEditModal(false);

                                await fetchExhibitionAndComments(); // Refresh data

                                setHashtagRenderKey(prev => prev + 1); // Increment key to force re-render of hashtags

                    } catch (err: any) {
        console.error('Save exhibition error:', err.message);
        setError('Failed to save exhibition.');
        alert(`전시회 정보 저장 중 오류가 발생했습니다: ${err.message}`);
    }
  };

  const handlePrevImage = () => {
    if (exhibitionData && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (exhibitionData && currentImageIndex < exhibitionData.imageUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading exhibition...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  if (!exhibitionData) {
    return <div className="flex justify-center items-center h-screen">No exhibition data found.</div>;
  }

  const totalImages = exhibitionData.imageUrls.length;
  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === totalImages - 1;

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="디자인 페이지 생성 (Copy)">
        <div className="box-border content-stretch flex flex-col h-[85.6px] items-start pb-[1.6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
          <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[84px] items-center justify-between px-[24px] py-0 relative w-full">
                <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors" data-name="Button">
                  <ChevronLeft className="size-5 text-black" />
                </button>
                                <div className="flex items-center gap-[8px]">
                                  <button onClick={handleFavoriteClick} className="relative shrink-0 size-[36px] flex items-center justify-center hover:bg-gray-100 rounded transition-colors cursor-pointer" data-name="Button">
                                    <Star size={24} color={isFavorited ? "#f360c0" : "black"} fill={isFavorited ? "#f360c0" : "none"} />
                                  </button>
                                  <button onClick={onShare} className="relative shrink-0 size-[36px] flex items-center justify-center hover:bg-gray-100 rounded transition-colors cursor-pointer" data-name="Button">
                                    <Share2 className="size-5 text-black" />
                                  </button>
                                  {isOwner && (
                                    <div className="relative" ref={optionsMenuRef}>
                                      <button
                                        onClick={() => setShowOptionsMenu((prev) => !prev)}
                                        className="relative shrink-0 size-[36px] flex items-center justify-center hover:bg-gray-100 rounded transition-colors cursor-pointer"
                                        aria-label="More options"
                                      >
                                        <MoreVertical className="size-5 text-black" />
                                      </button>
                                      {showOptionsMenu && (
                                        <div className="absolute top-[44px] right-0 bg-white border-[1.6px] border-black border-solid shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] z-10 w-[120px] p-[1.6px]">
                                                                                                                                          <button
                                                                                                                                            onClick={() => {
                                                                                                                                              console.log('Setting showEditModal to true');
                                                                                                                                              setShowEditModal(true);
                                                                                                                                              setShowOptionsMenu(false);
                                                                                                                                            }}
                                                                                                                                            className="w-full h-[46.6px] flex items-center justify-start hover:bg-gray-50 transition-colors"
                                                                                                                                          >
                                                                                                                                            <p className="font-['Pretendard',sans-serif] leading-[21px] not-italic text-base text-black tracking-[-0.28px] whitespace-nowrap pl-[20px]">수정</p>
                                                                                                                                          </button>
                                                                            <div className="h-[1.6px] bg-black mx-auto w-full"></div>
                                                                            <button
                                                                            onClick={() => {
                                                                              handleDelete(); // This is the exhibition delete
                                                                              setShowOptionsMenu(false);
                                                                            }}
                                                                            className="w-full h-[45px] flex items-center justify-start hover:bg-gray-50 transition-colors"
                                                                          >
                                                                            <p className="font-['Pretendard',sans-serif] leading-[21px] not-italic text-base text-black tracking-[-0.28px] whitespace-nowrap pl-[20px]">삭제</p>
                                                                          </button>                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
              </div>
            </div>
          </div>
        </div>

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
                          <p className="absolute font-['Pretendard',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-[-0.6px] tracking-[-0.48px] whitespace-pre">{truncateTitle(exhibitionData.title, 13)}</p>
                        </div>
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Paragraph">
                          <p
                            className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.3px] cursor-pointer hover:underline"
                            onClick={() => {
                              if (exhibitionData && exhibitionData.user_id) {
                                navigate(`/profile/${exhibitionData.user_id}`);
                              }
                            }}
                          >by {exhibitionData.author}</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[54.7px] relative shrink-0 w-[59.538px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[54.7px] items-center justify-center pb-[4px] pt-0 px-0 relative w-[59.538px]">
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
                          <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black">{exhibitionData.room_number}</p>
                        </div>
                        <div className="box-border content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
                          <p className="font-['EB_Garamond',serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">Room</p>
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
              {exhibitionData.hashtags && exhibitionData.hashtags.length > 0 && (
                <div key={hashtagRenderKey} className="flex flex-wrap gap-2 mt-4">
                  {exhibitionData.hashtags.map((tag, index) => (
                    <span key={index} className="bg-white border-[#f360c0] border-[1.6px] border-solid px-[13.6px] py-[5px] text-[12px] text-[#f360c0] font-['Pretendard',sans-serif]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

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
                    <div
                      key={index}
                      className="relative bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer"
                      style={{ width: '109px', height: '109px' }}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setShowImagePopup(true);
                      }}
                    >
                      <img src={imageUrl} alt={`Exhibition Image ${index + 1}`} className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[24px] pb-[24px] pt-[24px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 3">
                <p className="font-['EB_Garamond',serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Comments <span class="text-[12px]">{comments.length}</span></p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                {comments.map((comment) => (
                  <div key={comment.id} className="h-auto relative w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[0px_0px_0px_1.6px] border-black border-solid inset-0 pointer-events-none" />
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[4px] h-auto items-start pl-[17.6px] pr-0 py-0 relative w-full">
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
                        <div className="relative w-full flex justify-between" data-name="Paragraph">
                          <p className="font-['Pretendard',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] tracking-[-0.28px] break-words mr-2 flex-auto max-w-full">{comment.content}</p>
                          {currentUser && currentUser.nickname === comment.author && (
                            <button
                              onClick={() => handleDeleteComment(comment.id)}
                              className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                              aria-label="Delete comment"
                            >
                              <X size={16} color="currentColor" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative shrink-0 w-full px-[24px] pb-[24px]" data-name="Container">
          <div className="flex items-end w-full border-[1.6px] border-black overflow-hidden bg-white min-h-[59px]">
            <button
              onClick={handleLikeClick}
              className="flex items-center justify-center shrink-0 size-[59px] cursor-pointer hover:bg-gray-100 transition-colors self-start"
              aria-label="Like exhibition"
            >
              <Heart size={24} color={isLiked ? "#f360c0" : "black"} fill={isLiked ? "#f360c0" : "none"} />
            </button>
            <textarea
              ref={commentTextareaRef} // Added ref
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) { // Submit on Enter, but not on Shift+Enter
                  e.preventDefault(); // Prevent default form submission
                  if (newComment.trim()) { // Only submit if comment is not empty
                    handleCommentSubmit();
                  }
                }
              }}
              rows={1} // Initial height
              placeholder="응원 댓글을 입력해보세요."
              className="font-['Pretendard',sans-serif] leading-[20px] not-italic text-[14px] text-black placeholder:text-gray-400 tracking-[-0.28px] bg-transparent border-none outline-none resize-none overflow-hidden flex-grow px-2 py-5"
              style={{ maxHeight: '150px' }} // Optional: set a max height
            ></textarea>
            <button
              onClick={handleCommentSubmit}
              className="bg-black flex items-center justify-center self-stretch w-auto px-4 cursor-pointer hover:bg-[#f360c0] transition-colors"
              data-name="Button"
              disabled={isSubmittingComment}
            >
              <ArrowUp size={24} color="white" />
            </button>
          </div>
        </div>
      </div>

      {isShareModalOpen && exhibitionData && (
        <ShareExhibitionModal
            isOpen={isShareModalOpen}
            onClose={() => setShareModalOpen(false)}
            exhibition={{
              room: exhibitionData.room_number,
              creationCount: exhibitionData.room_creation_count,
              title: exhibitionData.title,
              author: exhibitionData.author
            }}
            onShareSuccess={handleShareSuccess}
        />
      )}

      {showImagePopup && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center z-[100] p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          onClick={() => setShowImagePopup(false)} // Close when clicking outside the image
        >
          <div
            className="relative max-w-[393px] max-h-[calc(100vh-2rem)] overflow-y-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
          >
            <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full mb-4 px-2 flex-shrink-0" data-name="Container">
              {/* Image counter */}
              <div className="bg-white border-[1.6px] border-black border-solid h-[40.2px] relative shrink-0 w-auto min-w-[70px] flex items-center justify-center px-[8px]" data-name="Container">
                <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[21px] text-[14px] text-black">{(currentImageIndex + 1)} / {totalImages}</p>
              </div>

              <button
                className="bg-white border-[1.6px] border-black border-solid relative shrink-0 size-[44px] flex items-center justify-center cursor-pointer flex-shrink-0"
                onClick={() => setShowImagePopup(false)}
                aria-label="Close image popup"
              >
                <X size={24} color="black" />
              </button>
            </div>
            
            <div className="bg-white border-[1.6px] border-black border-solid content-stretch flex flex-col items-start p-0 relative shrink-0 w-full max-w-full overflow-hidden" data-name="Container">
              <div className="bg-[rgba(0,0,0,0.6)] content-stretch flex items-center justify-center relative shrink-0 w-full h-full" data-name="Container">
                <img src={currentImage} alt="Enlarged Exhibition Image" className="w-full h-auto max-h-full" />
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="content-stretch flex gap-[12px] h-[44px] items-start justify-center relative shrink-0 w-full mt-4 flex-shrink-0" data-name="Container">
              <button
                className={`bg-white border-[1.6px] border-black border-solid relative shrink-0 size-[44px] flex items-center justify-center ${isFirstImage ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={handlePrevImage}
                disabled={isFirstImage}
              >
                <ChevronLeft size={24} color="black" />
              </button>
              <button
                className={`bg-white border-[1.6px] border-black border-solid relative shrink-0 size-[44px] flex items-center justify-center ${isLastImage ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={handleNextImage}
                disabled={isLastImage}
              >
                <ChevronRight size={24} color="black" />
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && exhibitionData && (
        <EditExhibitionModal
            isOpen={showEditModal}
            onClose={() => setShowEditModal(false)}
            exhibition={exhibitionData}
            onSave={handleSaveExhibition}
        />
      )}
    </div>
  );
}
