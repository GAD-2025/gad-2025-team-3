import React from 'react';
import styles from './FavoriteExhibitionCard.module.css';
import { Eye, Heart } from 'react-feather'; // Import icons

interface FavoriteExhibitionProps {
  id: number;
  exhibitionTitle: string;
  authorName: string;
  views: number;
  likes: number;
  roomId: number;
  // imageURL: string; // 나중에 이미지를 위해 추가
}

const FavoriteExhibitionCard: React.FC<FavoriteExhibitionProps> = ({
  exhibitionTitle,
  authorName,
  views,
  likes,
  roomId,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <div className={styles.roomBox}>
          <span className={styles.roomText}>{roomId}</span>
        </div>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{exhibitionTitle}</h3>
        <p className={styles.author}>by {authorName}</p>
        <div className={styles.stats}>
          <span className={styles.statItem}>
            <Eye size={16} strokeWidth={2.0} color="#999999" /> {views}
          </span>
          <span className={styles.statItem}>
            <Heart size={16} strokeWidth={2.0} color="#999999" /> {likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavoriteExhibitionCard;