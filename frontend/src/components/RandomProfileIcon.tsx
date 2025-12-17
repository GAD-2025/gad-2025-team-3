import React from 'react';
import svgPaths from "../imports/svg-75d091w3ip";

interface RandomProfileIconProps {
  profileType: 'profile_1_l' | 'profile_2_l' | 'profile_3_l' | 'profile_4_l' | string;
  className?: string;
}

const RandomProfileIcon: React.FC<RandomProfileIconProps> = ({ profileType, className }) => {
  const baseClasses = "relative size-full flex items-center justify-center";
  const combinedClassName = `${baseClasses} ${className || ''}`;

  const getStyle = () => {
    const pinkColor = '#F360C0'; // Always pink
    if (profileType.startsWith('profile_1')) {
      return { transform: 'rotate(330deg)', color: pinkColor };
    } else if (profileType.startsWith('profile_2')) {
      return { transform: 'rotate(30deg)', color: pinkColor };
    } else if (profileType.startsWith('profile_3')) {
      return { transform: 'rotate(120deg)', color: pinkColor };
    } else if (profileType.startsWith('profile_4')) {
      return { transform: 'rotate(210deg)', color: pinkColor };
    } else {
      return { transform: 'rotate(0deg)', color: pinkColor };
    }
  };

  const style = getStyle();

  return (
    <div className={combinedClassName} style={{ backgroundColor: style.color }}>
      <svg
        className="block w-2/3 h-2/3"
        viewBox="0 0 209 129"
        preserveAspectRatio="xMidYMid meet"
        style={{ transform: style.transform }}
      >
        <path d={svgPaths.p123d8e00} fill="white" />
      </svg>
    </div>
  );
};

export default RandomProfileIcon;
