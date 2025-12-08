import React, { useState, useEffect } from 'react';
import { ChevronLeft, Bookmark, Eye, Heart, Star } from 'lucide-react';

import FavoriteExhibitionCard from './FavoriteExhibitionCard';

interface User {
  id: number;
}

interface FavoritesPageProps {
  onBack: () => void;
  currentUser: User | null;
  onNavigateToDetail: (id: number) => void;
}

interface FavoriteExhibition {
  id: number;
  title: string; // exhibitionTitle을 title로 변경
  authorName: string;
  views: number;
  likes: number;
  roomId: number;
  imageUrls: string[]; // imageUrls 속성 추가
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ onBack, currentUser, onNavigateToDetail }) => {
  const [exhibitions, setExhibitions] = useState<FavoriteExhibition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  useEffect(() => {
    // console.log("Current user in FavoritesPage:", currentUser); // Debugging log
    if (!currentUser) {
      setError("Please log in to see your favorites.");
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${currentUser.id}/favorites`);
        // console.log("API Response Status:", response.status); // Debugging log
        if (!response.ok) {
          throw new Error(`Failed to fetch favorites: ${response.statusText}`);
        }
        const data: FavoriteExhibition[] = await response.json();
        
        const favoriteExhibitionsData: FavoriteExhibition[] = data;
        console.log("Fetched favorite exhibitions raw data:", favoriteExhibitionsData); // 추가된 로그

        // 각 전시관의 imageUrls를 가져오는 Promise 배열 생성
        const exhibitionsWithImagesPromises = favoriteExhibitionsData.map(async (exhibition) => {
          const itemsResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${exhibition.id}/items`);
          if (!itemsResponse.ok) {
            // 이미지 가져오기 실패 시 빈 배열 반환 또는 오류 처리
            console.warn(`Failed to fetch items for exhibition ${exhibition.id}: ${itemsResponse.statusText}`);
            return { ...exhibition, imageUrls: [] };
          }
          const imageUrls: string[] = await itemsResponse.json();
          return { ...exhibition, imageUrls };
        });

        const updatedExhibitions = await Promise.all(exhibitionsWithImagesPromises);
        setExhibitions(updatedExhibitions);
        console.log("Updated exhibitions data with images:", updatedExhibitions); // 추가된 로그
      } catch (err: any) {
        console.error("Error fetching favorites:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [currentUser]);

  useEffect(() => {
    if (isSelectAll) {
      setSelectedIds(exhibitions.map(ex => ex.id));
    } else {
      if (selectedIds.length === exhibitions.length && exhibitions.length > 0) {
        setIsSelectAll(false); // Only set to false if not all are selected
      }
    }
  }, [isSelectAll, exhibitions]);

  useEffect(() => {
    if (exhibitions.length > 0 && selectedIds.length === exhibitions.length) {
      setIsSelectAll(true);
    } else {
      setIsSelectAll(false);
    }
  }, [selectedIds, exhibitions]);

  const handleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  const handleDelete = async () => {
    if (!currentUser) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${currentUser.id}/favorites`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ exhibitionIds: selectedIds }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete favorites');
      }

      setExhibitions(prev => prev.filter(ex => !selectedIds.includes(ex.id)));
      setSelectedIds([]);
      setIsEditMode(false);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const toggleSelectAll = () => {
    setIsSelectAll(!isSelectAll);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setSelectedIds([]);
    setIsSelectAll(false);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen w-full">Loading favorites...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen w-full">Error: {error}</div>;
  }

  return (
    <div className="bg-white h-screen flex flex-col items-center w-full max-w-[393px] mx-auto" data-name="Favorites">
        {/* 내부 콘텐츠는 h-full로 전체 높이를 사용하도록 설정 */}
        <div className="bg-white h-full flex flex-col w-full"> 
            
            {/* Header (높이 고정) */}
            <div className="box-border content-stretch flex flex-col h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
            <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
            <div className="h-[68.976px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[68.976px] items-center justify-between px-[23.99px] py-0 relative w-full">
                    {/* Back Button */}
                    <button onClick={onBack} className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors" data-name="Button">
                    <ChevronLeft className="size-5 text-black" />
                    </button>
                    
                    {/* Heading */}
                    <div className="h-[20.996px] relative shrink-0 w-[73.545px]" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start justify-center relative w-[73.545px]">
                        <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Favorites</p>
                    </div>
                    </div>
                    <div className="h-0 w-[20px]" /> {/* Placeholder for alignment */}
                </div>
                </div>
            </div>
            </div>

            {/* Status Area */}
            <div className="border-b border-gray-200 py-4 px-[20px] flex items-center flex-shrink-0 h-[70px] w-full"> 
            {!isEditMode ? (
                <div className="flex items-center gap-2">
                <Star className="size-5" color="#f360c0" fill="#f360c0" /> {/* color 속성 추가 */}
                <p className="font-['Pretendard:Regular',sans-serif] text-[16px] text-black tracking-[-0.32px]">
                    저장한 전시관 {exhibitions.length}개
                </p>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={isSelectAll}
                    onChange={toggleSelectAll}
                    className="appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-black checked:border-white checked:ring-2 checked:ring-black cursor-pointer"
                />
                <p className="font-['Pretendard:Regular',sans-serif] text-[16px] text-black tracking-[-0.32px]">
                    {selectedIds.length}개 선택됨
                </p>
                </div>
            )}
            </div>

            {/* Exhibition List (남은 공간 모두 차지) */}
            <div className="flex-grow overflow-y-auto p-[20px] flex flex-col gap-4 w-full"> 
            {exhibitions.length > 0 ? (
                exhibitions.map((exhibition) => (
                <FavoriteExhibitionCard
                    key={exhibition.id}
                    {...exhibition}
                    onNavigateToDetail={onNavigateToDetail}
                    isEditMode={isEditMode}
                    isSelected={selectedIds.includes(exhibition.id)}
                    onSelect={handleSelect}
                />
                ))
            ) : (
                <p className="text-center text-gray-500 mt-8">아직 저장한 전시관이 없습니다.</p>
            )}
            </div>

            {/* Delete Button (Footer) (높이 고정) */}
            {isEditMode && exhibitions.length > 0 ? (
                <div className="fixed bottom-0 left-0 right-0 w-[393px] mx-auto p-6 bg-white flex-shrink-0">
                <button
                    onClick={handleDelete}
                    disabled={selectedIds.length === 0}
                    className="w-full bg-black text-white h-[48px] rounded-none font-['Pretendard:Regular',sans-serif] text-[16px] disabled:bg-gray-300"
                >
                    Delete
                </button>
                </div>
            ) : null}
            
        </div>
    </div>
  );
};

export default FavoritesPage;