import { useState } from "react";

interface DeleteAccountModalProps {
  onClose: () => void;
  onDelete: () => void; // (reason: string) => void 에서 변경
}

export default function DeleteAccountModal({ onClose, onDelete }: DeleteAccountModalProps) {
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [otherReason, setOtherReason] = useState<string>("");

  const reasons = [
    "더 이상 서비스를 이용하지 않아요",
    "개인정보가 걱정돼요",
    "다른 서비스를 사용할 거예요",
    "콘텐츠가 마음에 들지 않아요",
    "기타"
  ];

  const handleConfirm = () => {
    const finalReason = selectedReason === "기타" ? otherReason : selectedReason;
    // if (finalReason) { // reason은 이제 백엔드에서 사용하지 않으므로 체크 불필요
      onDelete(); // finalReason 전달 안함
    // }
  };

  const isConfirmDisabled = !selectedReason || (selectedReason === "기타" && !otherReason.trim());

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-[343px] mx-4 border-[2px] border-black">
        {/* Header */}
        <div className="border-b-[2px] border-black px-6 py-5">
          <h2 className="font-['EB_Garamond',serif] text-[20px] text-black">
            회원 탈퇴
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <p className="font-['Pretendard',sans-serif] text-[14px] text-[#4a5565] tracking-[-0.28px] leading-[20px] mb-4">
            탈퇴하시는 이유를 알려주세요
          </p>

          {/* Reason Options */}
          <div className="flex flex-col gap-3">
            {reasons.map((reason) => (
              <label
                key={reason}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="deleteReason"
                    value={reason}
                    checked={selectedReason === reason}
                    onChange={(e) => setSelectedReason(e.target.value)}
                    className="appearance-none w-5 h-5 border-[1.6px] border-black bg-white cursor-pointer checked:bg-[#F360C0] checked:border-[#F360C0]"
                  />
                  {selectedReason === reason && (
                    <svg
                      className="absolute pointer-events-none"
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                    >
                      <path
                        d="M1 4.5L4.5 8L11 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span className="font-['Pretendard',sans-serif] text-[14px] text-black tracking-[-0.28px]">
                  {reason}
                </span>
              </label>
            ))}
          </div>

          {/* Other Reason Input */}
          {selectedReason === "기타" && (
            <div className="mt-4">
              <textarea
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
                placeholder="탈퇴 사유를 입력해주세요"
                className="w-full h-[100px] px-4 py-3 border-[1.6px] border-black font-['Pretendard',sans-serif] text-[14px] text-black tracking-[-0.28px] resize-none focus:outline-none focus:border-[#F360C0]"
              />
            </div>
          )}

          {/* Warning Message */}
          <div className="mt-6 p-4 border-[1.6px] border-[#f44336] bg-[#fff5f5]">
            <p className="font-['Pretendard',sans-serif] text-[12px] text-[#f44336] tracking-[-0.24px] leading-[18px]">
              회원 탈퇴 시 모든 데이터가 삭제되며 복구할 수 없습니다.
            </p>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="border-t-[2px] border-black flex">
          <button
            onClick={onClose}
            className="flex-1 py-4 border-r-[2px] border-black font-['Pretendard',sans-serif] text-[14px] text-black tracking-[-0.28px] hover:bg-gray-100 transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleConfirm}
            disabled={isConfirmDisabled}
            className={`flex-1 py-4 font-['Pretendard',sans-serif] text-[14px] tracking-[-0.28px] transition-colors ${
              isConfirmDisabled
                ? "text-gray-400 cursor-not-allowed"
                : "text-[#f44336] hover:bg-[#fff5f5]"
            }`}
          >
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
}