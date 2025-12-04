import React, { useState, useEffect } from 'react';
import styles from './FavoritesPage.module.css';
import FavoriteExhibitionCard from './FavoriteExhibitionCard';
import { ChevronLeft, Star } from 'react-feather';

// Define the type for the user object passed as a prop
interface User {
  id: number;
  // Add other user properties if available and needed
}

interface FavoritesPageProps {
  onBack: () => void;
  currentUser: User | null; // Receive the current user
  onNavigateToDetail: (id: number) => void; // Receive navigation function
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
  }, [currentUser]); // Refetch if the user changes

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading favorites...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

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
        <p className={styles.statusText}>저장한 전시관 {exhibitions.length}개</p>
      </div>
      <div className={styles.statusSeparator}></div>

      {/* Exhibition List */}
      <div className={styles.cardList}>
        {exhibitions.length > 0 ? (
          exhibitions.map((exhibition) => (
            <FavoriteExhibitionCard 
              key={exhibition.id} 
              {...exhibition} 
              onNavigateToDetail={onNavigateToDetail}
            />
          ))
        ) : (
          <p className={styles.noFavoritesText}>아직 저장한 전시관이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
