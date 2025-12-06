import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'react-feather';
import FavoriteExhibitionCard from './FavoriteExhibitionCard';

const imgVector = "https://www.figma.com/api/mcp/asset/545e3b9c-df95-4aaf-8afb-da7d9c237ef4"; // Back button icon
const imgIcon = "https://www.figma.com/api/mcp/asset/9da527eb-a72f-4306-a93e-ce005fc54f3b"; // Star icon for status

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
  exhibitionTitle: string;
  authorName: string;
  views: number;
  likes: number;
  roomId: number;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ onBack, currentUser, onNavigateToDetail }) => {
  const [exhibitions, setExhibitions] = useState<FavoriteExhibition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setError("Please log in to see your favorites.");
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${currentUser.id}/favorites`);
        if (!response.ok) {
          throw new Error('Failed to fetch favorites');
        }
        const data: FavoriteExhibition[] = await response.json();
        setExhibitions(data);
      } catch (err: any) {
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
    return <div className="flex justify-center items-center h-screen">Loading favorites...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  return (
    <div className="bg-[#fbfaf9] flex justify-center min-h-screen">
      <div className="w-[390px] bg-white flex flex-col">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col h-[70.083px] items-center justify-between pb-[1.108px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[68.976px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[68.976px] items-center justify-between px-[23.99px] py-0 relative w-full">
              {/* Back Button */}
              <button onClick={onBack} className="relative shrink-0 w-[20px] h-[20px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded transition-colors" data-name="Button">
                <ChevronLeft className="size-5 text-black" />
              </button>
              {/* Heading */}
              <div className="h-[20.996px] relative shrink-0 w-[99.525px]" data-name="Heading 1">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.996px] items-start justify-center relative w-[99.525px]">
                  <p className="font-['EB_Garamond',serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Favorites</p>
                </div>
              </div>
              {/* Empty Container */}
              <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Status Area */}
        <div className="border-b-[1.6px] border-black flex items-center h-[69.6px] px-[24px] gap-[12px] flex-shrink-0">
          {!isEditMode ? (
            <>
              <img src={imgIcon} alt="Favorites" className="w-[20px] h-[20px]" />
              <p className="font-['Pretendard:Regular',sans-serif] text-[16px] leading-[24px] tracking-[-0.32px]">
                저장한 전시관 {exhibitions.length}개
              </p>
            </>
          ) : (
            <div className="flex items-center gap-[8px]">
              <input
                type="checkbox"
                checked={isSelectAll}
                onChange={toggleSelectAll}
                className="appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-black checked:border-white checked:ring-2 checked:ring-black"
              />
              <p className="font-['Pretendard:Regular',sans-serif] text-[16px] leading-[24px] tracking-[-0.32px]">
                {selectedIds.length}개 선택됨
              </p>
            </div>
          )}
        </div>

        {/* Exhibition List */}
        <div className="flex-grow p-[24px] flex flex-col gap-[16px] overflow-y-auto">
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

        {/* Delete Button */}
        {isEditMode && (
          <div className="p-[24px] flex-shrink-0">
            <button
              onClick={handleDelete}
              disabled={selectedIds.length === 0}
              className="w-full bg-black text-white h-[48px] rounded-none font-['Pretendard:Regular',sans-serif] text-[16px] disabled:bg-gray-300"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;