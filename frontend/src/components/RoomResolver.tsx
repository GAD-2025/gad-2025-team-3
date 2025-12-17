import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function RoomResolver() {
  const { roomNumber, generationCount } = useParams<{ roomNumber: string; generationCount?: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const resolveRoomToExhibitionId = async () => {
      if (!roomNumber) {
        setError("Room number is missing.");
        return;
      }

      try {
        // Construct the API URL based on whether generationCount is present
        const apiUrl = generationCount
          ? `${import.meta.env.VITE_API_URL}/api/exhibitions/by-room/${roomNumber}/${generationCount}`
          : `${import.meta.env.VITE_API_URL}/api/exhibitions/by-room/${roomNumber}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          if (response.status === 404) {
            setError("Exhibition not found for this room number.");
          } else {
            throw new Error(`Failed to resolve room: ${response.statusText}`);
          }
          return;
        }

        const data = await response.json();
        const exhibitionId = data.exhibitionId; // Assuming backend returns { exhibitionId: number }

        if (exhibitionId) {
          navigate(`/exhibition/${exhibitionId}`, { replace: true });
        } else {
          setError("Exhibition ID not found in response.");
        }

      } catch (err: any) {
        console.error("Error resolving room to exhibition ID:", err);
        setError(err.message || "An unexpected error occurred.");
      }
    };

    resolveRoomToExhibitionId();
  }, [roomNumber, generationCount, navigate]);

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
  }

  return <div className="flex justify-center items-center h-screen">Loading exhibition...</div>;
}
