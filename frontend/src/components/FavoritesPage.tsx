import React from 'react';
import styles from './FavoritesPage.module.css';
import FavoriteExhibitionCard from './FavoriteExhibitionCard';
import { ChevronLeft, Star } from 'react-feather'; // Import icons

interface FavoritesPageProps {
  onBack: () => void;
}

const dummyExhibitions = [
  {
    id: 1,
    exhibitionTitle: 'BTS ARMY 글로벌 전시관',
    authorName: 'army_forever',
    views: 8900,
    likes: 1240,
    roomId: 201,
  },
  {
    id: 2,
    exhibitionTitle: 'NCT 127 팬아트 갤러리',
    authorName: 'nctzen_art',
    views: 4327,
    likes: 567,
    roomId: 204,
  },
  {
    id: 3,
    exhibitionTitle: 'BLACKPINK 월드투어',
    authorName: 'blink_official',
    views: 6543,
    likes: 892,
    roomId: 203,
  },
];

const FavoritesPage: React.FC<FavoritesPageProps> = ({ onBack }) => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          <ChevronLeft size={24} strokeWidth={2.0} color="#333333" />
        </button>
        <h1 className={styles.headerTitle}>Favorites</h1>
      </div>
      <div className={styles.headerSeparator}></div>

      {/* Status Area */}
      <div className={styles.statusArea}>
        <Star size={24} strokeWidth={2.0} color="#FF69B4" />
        <p className={styles.statusText}>저장한 전시관 {dummyExhibitions.length}개</p>
      </div>
      <div className={styles.statusSeparator}></div>

      {/* Exhibition List */}
      <div className={styles.cardList}>
        {dummyExhibitions.map((exhibition) => (
          <FavoriteExhibitionCard key={exhibition.id} {...exhibition} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
