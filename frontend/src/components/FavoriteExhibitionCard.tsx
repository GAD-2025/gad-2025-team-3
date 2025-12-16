import React from 'react';
import { Eye, Heart } from 'lucide-react'; // Import Eye and Heart from lucide-react
import { ImageWithFallback } from './figma/ImageWithFallback'; // ImageWithFallback 컴포넌트 임포트 (named import로 변경)

interface FavoriteExhibitionCardProps {
  id: number;
  title: string; // exhibitionTitle을 title로 변경
  authorName: string;
  views: number;
  likes: number;
  roomId: number;
  room_number: string;
  imageUrls: string[]; // imageUrls 속성 추가
  onNavigateToDetail: (id: number) => void;
  isEditMode: boolean;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const FavoriteExhibitionCard: React.FC<FavoriteExhibitionCardProps> = ({
  id,
  title, // exhibitionTitle을 title로 변경
  authorName,
  views,
  likes,
  roomId,
  room_number,
  imageUrls,
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
        className={`relative w-full border-[1.6px] border-black overflow-hidden flex flex-row cursor-pointer h-40 flex-shrink-0
                    ${isEditMode && isSelected ? 'border-blue-500 shadow-md' : 'transition-all duration-200'}`}
        onClick={handleClick}
      >
        {/* Image Placeholder */}
        <div className="w-[100px] flex-shrink-0 bg-gray-100 h-full border-r border-black overflow-hidden">
          {imageUrls && imageUrls.length > 0 ? (
            <ImageWithFallback src={imageUrls[0]} alt={title} className="object-cover w-full h-full" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
          )}
        </div>
  
        {/* Content Area */}
        <div className="flex flex-col flex-grow p-3 justify-between">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-0.5 flex-grow pr-2"> {/* Added pr-2 for spacing */}
              {/* Title and Author */}
              <p className="font-['Pretendard:Regular',sans-serif] text-xs leading-tight text-black overflow-hidden whitespace-nowrap text-ellipsis">
                {title}
              </p>
              <p className="font-['EB_Garamond:Regular',serif] font-normal text-xs leading-tight text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis">
                by {authorName}
              </p>
            </div>
            {/* Room Number Box - Integrated into flex layout */}
            <div className="border-2 border-black px-2 py-1 text-xs font-['EB_Garamond:Regular',serif] flex-shrink-0">
              {room_number}
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