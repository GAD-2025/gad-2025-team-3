import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, Eye, Star, ArrowUp, Trash2, Heart } from 'react-feather';
import ShareExhibitionModal from './ShareExhibitionModal';

// A simple, dependency-free modal component provided by the user.
const DeleteConfirmationModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onConfirmDelete: () => void;
}> = ({ isOpen, onClose, onConfirmDelete }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-80 text-center border-2 border-black">
                <div className="mb-4">
                    <p className="text-3xl font-bold mb-4">⚠️</p>
                    <p className="font-semibold text-lg mb-2">전시관 삭제</p>
                    <p className="text-gray-600">전시관을 정말로 삭제하시겠습니까?</p>
                    <p className="text-gray-600 text-sm mt-1">이 작업은 되돌릴 수 없으며, 관련 모든 데이터가 영구적으로 삭제됩니다.</p>
                </div>
                <div className="flex justify-around gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-gray-200 text-black border-2 border-black hover:bg-gray-300 transition-colors font-bold rounded-md"
                    >
                        취소
                    </button>
                    <button
                        onClick={onConfirmDelete}
                        className="w-full py-3 bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 transition-colors font-bold rounded-md"
                    >
                        네, 삭제합니다
                    </button>
                </div>
            </div>
        </div>
    );
};

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

export default function ExhibitionDetailPage({ onBack }: ExhibitionDetailPageProps) {
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
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const loggedInUserId = 1; // TODO: Replace with actual auth logic
    const isOwner = exhibitionData?.user_id === loggedInUserId;

    useEffect(() => {
        const fetchExhibitionAndComments = async () => {
            if (!id) {
                setError("Exhibition ID is missing.");
                setLoading(false);
                return;
            }
            try {
                const [exhibitionRes, itemsRes, commentsRes] = await Promise.all([
                    fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}`),
                    fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/items`),
                    fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/comments`),
                ]);

                if (!exhibitionRes.ok) throw new Error(`Exhibition fetch failed: ${exhibitionRes.statusText}`);
                if (!itemsRes.ok) throw new Error(`Items fetch failed: ${itemsRes.statusText}`);
                if (!commentsRes.ok) throw new Error(`Comments fetch failed: ${commentsRes.statusText}`);

                const exhibition: ExhibitionData = await exhibitionRes.json();
                const imageUrls: string[] = await itemsRes.json();
                const fetchedComments: Comment[] = await commentsRes.json();

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

    const handleCommentSubmit = async () => {
        if (!newComment.trim() || !id) return;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}/comments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: newComment, author: 'Anonymous' }),
            });
            if (!response.ok) throw new Error(`Comment post failed: ${response.statusText}`);
            const postedComment: Comment = await response.json();
            setComments((prevComments) => [postedComment, ...prevComments]);
            setNewComment('');
        } catch (err: any) {
            console.error('Error posting comment:', err.message);
        }
    };

    const handleConfirmDelete = async () => {
        if (!id) return;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}`, { method: 'DELETE' });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: '삭제에 실패했습니다.' }));
                throw new Error(errorData.message);
            }
            alert('전시관이 삭제되었습니다.');
            setDeleteModalOpen(false);
            navigate('/myexhibition', { replace: true });
        } catch (err: any) {
            alert(`오류: ${err.message}`);
            setDeleteModalOpen(false);
        }
    };

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
    if (!exhibitionData) return <div className="flex justify-center items-center h-screen">No data found.</div>;

    return (
        <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen max-w-[393px] mx-auto">
            <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                {/* Header */}
                <div className="box-border content-stretch flex flex-col h-[85.6px] items-start pb-[1.6px] pt-0 px-0 relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-b-[1.6px] border-black border-solid inset-0 pointer-events-none" />
                    <div className="h-[84px] relative shrink-0 w-full">
                        <div className="flex flex-row items-center size-full">
                            <div className="box-border content-stretch flex h-[84px] items-center justify-between px-[24px] py-0 relative w-full">
                                <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                                    <ChevronLeft className="size-5 text-black" />
                                </button>
                                <div className={`h-[36px] relative shrink-0 ${isOwner ? 'w-[116px]' : 'w-[80px]'}`}>
                                    <div className={`flex gap-[8px] h-[36px] items-center relative ${isOwner ? 'w-[116px]' : 'w-[80px]'}`}>
                                        {isOwner && (
                                            <button
                                                onClick={() => setDeleteModalOpen(true)}
                                                className="relative shrink-0 size-[36px] flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all group cursor-pointer rounded-md"
                                            >
                                                <Trash2 className="size-5 text-black group-hover:text-white transition-colors" />
                                            </button>
                                        )}
                                        <button 
                                            onClick={() => setIsFavorited(!isFavorited)}
                                            className="relative shrink-0 size-[36px] flex items-center justify-center hover:bg-gray-100 rounded-md transition-colors cursor-pointer" 
                                        >
                                            <Star size={24} color={isFavorited ? "#f360c0" : "black"} fill={isFavorited ? "#f360c0" : "none"} />
                                        </button>
                                        <button 
                                            onClick={() => setShareModalOpen(true)}
                                            className="relative shrink-0 size-[36px] flex items-center justify-center hover:bg-gray-100 rounded-md transition-colors cursor-pointer" 
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
                <div className="bg-gray-100 h-[390px] relative shrink-0 w-full overflow-hidden border-b-[1.6px] border-black">
                    {exhibitionData.imageUrls.length > 0 ? (
                        <img src={exhibitionData.imageUrls[0]} alt="Exhibition" className="object-cover w-full h-full" />
                    ) : <div className="flex items-center justify-center h-full text-gray-500">No Image</div>}
                </div>
                
                {/* All other sections are now included */}
                <div className="p-6 w-full border-b-[1.6px] border-black">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h1 className="text-2xl font-semibold">{exhibitionData.title}</h1>
                            <p className="text-sm text-gray-500">by {exhibitionData.author}</p>
                        </div>
                        <div className="text-center border-[1.6px] border-black p-2">
                            <p className="text-xs text-gray-500">Room</p>
                            <p className="text-lg font-bold">{exhibitionData.room || 'N/A'}</p>
                        </div>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-500 pt-4 border-t-[0.8px] border-gray-200">
                        <span className="flex items-center gap-2"><Eye size={16} /> {exhibitionData.views}</span>
                        <span className="flex items-center gap-2"><Star size={16} /> {exhibitionData.likes}</span>
                        <span className="flex items-center gap-2"><Share2 size={16} /> {exhibitionData.shares}</span>
                    </div>
                </div>

                <div className="p-6 w-full border-b-[1.6px] border-black">
                    <h3 className="text-lg font-semibold mb-2 text-gray-600">About</h3>
                    <p className="text-sm text-gray-800">{exhibitionData.description}</p>
                </div>

                <div className="p-6 w-full border-b-[1.6px] border-black">
                    <h3 className="text-lg font-semibold mb-4 text-gray-600">Gallery</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {exhibitionData.imageUrls.map((url, index) => (
                            <img key={index} src={url} alt={`Gallery item ${index + 1}`} className="aspect-square object-cover w-full" />
                        ))}
                    </div>
                </div>

                <div className="p-6 w-full">
                    <h3 className="text-lg font-semibold mb-4 text-gray-600">Comments ({comments.length})</h3>
                    <div className="flex flex-col gap-4">
                        {comments.map((comment) => (
                            <div key={comment.id} className="border-l-2 border-black pl-4">
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span className="font-semibold text-black">{comment.author}</span>
                                    <span>·</span>
                                    <span>{new Date(comment.created_at).toLocaleString()}</span>
                                </div>
                                <p className="text-sm text-gray-800 mt-1">{comment.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="sticky bottom-0 bg-white p-4 w-full border-t-[1.6px] border-black">
                    <div className="flex items-center w-full h-[59px] border-[1.6px] border-black rounded-lg overflow-hidden">
                        <button onClick={() => setIsLiked(!isLiked)} className="px-4 flex items-center justify-center cursor-pointer">
                            <Heart size={20} color={isLiked ? "#f360c0" : "black"} fill={isLiked ? "#f360c0" : "none"} />
                        </button>
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="응원 댓글을 입력해보세요."
                            className="flex-grow h-full text-sm bg-transparent border-none outline-none" 
                        />
                        <button onClick={handleCommentSubmit} className="bg-black flex items-center justify-center shrink-0 h-full w-[59px] cursor-pointer hover:bg-pink-500 transition-colors">
                            <ArrowUp size={20} color="white" />
                        </button>
                    </div>
                </div>
            </div>
            
            {isShareModalOpen && exhibitionData && (
                <ShareExhibitionModal
                    isOpen={isShareModalOpen}
                    onClose={() => setShareModalOpen(false)}
                    exhibition={exhibitionData as any} // Cast to any to avoid type conflicts for now
                />
            )}
            
            <DeleteConfirmationModal 
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirmDelete={handleConfirmDelete}
            />
        </div>
    );
}