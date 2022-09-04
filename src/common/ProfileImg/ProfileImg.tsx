import React from "react";
import "./ProfileImg.scss";

interface ProfileImgProps {
  src: string;
  width?: string;
  height?: string;
  bgColor?: string;
  badge?: string;
}

const ProfileImg: React.FC<ProfileImgProps> = ({
  src,
  width,
  height,
  bgColor,
  badge,
}) => {
  const defaultWidth = "80px";
  const defaultHeight = "80px";
  const defaultBgColor = "#35BDD0";
  return (
    <div
      className="profile-img"
      style={{
        width: width || defaultWidth,
        height: height || defaultHeight,
      }}
    >
      <img
        src={src}
        alt="profile-pic"
        style={{
          backgroundColor: bgColor || defaultBgColor,
        }}
      />
      {badge && (
        <div className="user-badge" style={{ backgroundColor: badge }}>
          <div className="user-icon"></div>
        </div>
      )}
    </div>
  );
};

export default ProfileImg;
