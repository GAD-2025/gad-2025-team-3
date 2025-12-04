import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

// This is the clean, flexbox-based version of the delete page.

export default function DeleteExhibitionPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [exhibitionName, setExhibitionName] = useState("...");
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch the exhibition name to display in the confirmation message
  useEffect(() => {
    if (!id) return;
    const fetchExhibitionTitle = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}`);
        if (!response.ok) throw new Error('Failed to fetch exhibition details.');
        const data = await response.json();
        setExhibitionName(data.title);
      } catch (err) {
        console.error(err);
        setExhibitionName("이 전시관"); // Fallback name on error
      }
    };
    fetchExhibitionTitle();
  }, [id]);

  // Navigate back to the previous page
  const handleCancel = () => {
    if (isDeleting) return;
    navigate(-1);
  };

  // Perform the deletion
  const handleDeleteConfirm = async () => {
    if (!id) return;
    setIsDeleting(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: '삭제에 실패했습니다.' }));
        throw new Error(errorData.message);
      }
      alert('전시관이 성공적으로 삭제되었습니다.');
      navigate('/myexhibition', { replace: true });
    } catch (err: any) {
      alert(`오류: ${err.message}`);
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-[393px] mx-auto bg-white">
      {/* 1. Header Area */}
      <header className="flex items-center p-4 border-b border-gray-200">
        <button onClick={handleCancel} className="p-2">
          <ArrowLeft className="size-6" />
        </button>
        <h1 className="text-lg font-semibold mx-auto">
          전시관 삭제
        </h1>
      </header>

      {/* 2. Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <div className="w-16 h-16 mb-6 flex items-center justify-center bg-pink-100 rounded-full">
            <AlertTriangle className="size-8 text-pink-500" />
        </div>
        <h2 className="text-xl font-semibold mb-2">
          '{exhibitionName}'
        </h2>
        <p className="text-gray-600 mb-4">
          전시관을 정말로 삭제하시겠습니까?
        </p>
        <p className="text-sm text-gray-500">
          이 작업은 되돌릴 수 없으며, <br/> 관련된 모든 데이터가 영구적으로 삭제됩니다.
        </p>
      </main>

      {/* 3. Footer Button Area */}
      <footer className="w-full p-4 border-t border-gray-200">
        <div className="flex flex-col gap-3">
          <button
            onClick={handleDeleteConfirm}
            disabled={isDeleting}
            className="w-full h-12 px-6 font-semibold text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isDeleting ? "삭제 중..." : "삭제 확인"}
          </button>
          <button
            onClick={handleCancel}
            disabled={isDeleting}
            className="w-full h-12 px-6 font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            취소
          </button>
        </div>
      </footer>
    </div>
  );
}
