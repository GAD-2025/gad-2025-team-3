import React from 'react';

const imgIcon1 = "https://www.figma.com/api/mcp/asset/145044ef-da44-4c1f-b251-dfedcacfd17d"; // Views icon
const imgIcon2 = "https://www.figma.com/api/mcp/asset/3f7565ae-eca4-4ece-ba6c-2d8f059a56fe"; // Likes icon

interface FavoriteExhibitionCardProps {
  id: number;
  exhibitionTitle: string;
  authorName: string;
  views: number;
  likes: number;
  roomId: number;
  onNavigateToDetail: (id: number) => void;

}

const FavoriteExhibitionCard: React.FC<FavoriteExhibitionCardProps> = ({
  id,
  exhibitionTitle,
  authorName,
  views,
  likes,
  roomId,
  onNavigateToDetail,
}) => {
  const handleClick = () => {
    onNavigateToDetail(id);
  };

  return (
    <div
      className={`border-[1.6px] border-black border-solid w-full p-[1.6px] relative`}
      onClick={handleClick}
    >
      <div>
        <div className="bg-gray-100 border-b-[1.6px] border-black h-[190.575px] w-full" />
        <div className="flex flex-col gap-[8px] h-[109.3px] pt-[16px] px-[16px]">
          <div className="flex h-[41.5px] justify-between items-start w-full">
            <div className="flex flex-col gap-[4px]">
              <h3 className="font-['Pretendard:Regular',sans-serif] text-[12px] leading-[18px] tracking-[-0.24px] text-black h-[21px]">
                {exhibitionTitle}
              </h3>
              <p className="font-['Apple_Garamond:Regular',sans-serif] text-[12px] leading-[16px] tracking-[0.3px] text-[#4a5565] h-[16.5px]">
                by {authorName}
              </p>
            </div>
            <div className="border-[0.8px] border-black h-[23.1px] w-[34.7px] flex items-center justify-center">
              <p className="font-['Apple_Garamond:Regular',sans-serif] text-[12px] leading-[16px] tracking-[0.3px] text-[#4a5565]">
                {roomId}
              </p>
            </div>
          </div>
          <div className="border-t-[0.8px] border-gray-100 flex gap-[16px] h-[27.8px] items-center w-full pt-[0.8px]">
            <div className="flex items-center gap-[4px] h-[15px]">
              <img alt="views" src={imgIcon1} className="w-[12px] h-[12px]" />
              <p className="font-['Apple_Garamond:Regular',sans-serif] text-[12px] leading-[16px] tracking-[0.3px] text-[#4a5565]">
                {views.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-[4px] h-[15px]">
              <img alt="likes" src={imgIcon2} className="w-[12px] h-[12px]" />
              <p className="font-['Apple_Garamond:Regular',sans-serif] text-[12px] leading-[16px] tracking-[0.3px] text-[#4a5565]">
                {likes.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteExhibitionCard;