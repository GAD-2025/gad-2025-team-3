import React from 'react';
import { Eye, Heart } from 'lucide-react'; // Import Eye and Heart from lucide-react

interface FavoriteExhibitionCardProps {
  id: number;
  exhibitionTitle: string;
  authorName: string;
  views: number;
  likes: number;
  roomId: number;
  onNavigateToDetail: (id: number) => void;
  isEditMode: boolean;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const FavoriteExhibitionCard: React.FC<FavoriteExhibitionCardProps> = ({
  id,
  exhibitionTitle,
  authorName,
  views,
  likes,
  roomId,
  onNavigateToDetail,
  isEditMode,
  isSelected,
  onSelect,
}) => {
    const handleClick = () => {
      if (isEditMode) {
        onSelect(id);
      } else {
        onNavigateToDetail(id);
      }
    };
  
    return (
      <div
        className={`relative w-full border border-gray-200 rounded-lg overflow-hidden flex flex-row cursor-pointer h-40
                    ${isEditMode && isSelected ? 'border-blue-500 shadow-md' : 'hover:shadow-md transition-all duration-200'}`}
        onClick={handleClick}
      >
        {/* Image Placeholder */}
        <div className="w-[100px] flex-shrink-0 bg-gray-100 h-full border-r border-gray-100">
          {/* 실제 이미지가 있다면 여기에 img 태그를 넣습니다 */}
        </div>
  
        {/* Content Area */}
        <div className="flex flex-col flex-grow p-3 justify-between">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-0.5 flex-grow pr-2"> {/* Added pr-2 for spacing */}
              {/* Title and Author */}
              <h3 className="font-['Pretendard:SemiBold',sans-serif] text-base leading-tight text-black overflow-hidden line-clamp-2">
                {exhibitionTitle}
              </h3>
              <p className="font-['EB_Garamond:Regular',serif] font-normal text-xs leading-tight text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis">
                by {authorName}
              </p>
            </div>
            {/* Room ID Box - Integrated into flex layout */}
            <div className="border border-black px-2 py-1 text-xs font-['EB_Garamond:Regular',serif] flex-shrink-0">
              {roomId}
            </div>
          </div>
  
          {/* Views and Likes */}
          <div className="border-t border-gray-100 pt-2 mt-2 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4 text-gray-500" />
              <p className="font-['EB_Garamond:Regular',sans-serif] font-normal text-xs leading-tight text-gray-500">
                {views.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-gray-500" />
              <p className="font-['EB_Garamond:Regular',sans-serif] font-normal text-xs leading-tight text-gray-500">
                {likes.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        {isEditMode && (
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(id)}
            className="absolute top-2 right-2 z-10 appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-black checked:border-white checked:ring-2 checked:ring-black cursor-pointer"
          />
        )}
      </div>
    );
  };

export default FavoriteExhibitionCard;