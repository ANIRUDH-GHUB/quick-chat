import React, { useEffect } from "react";
import { userBgColors } from "../../constants/Constants";
import "./ProfileImg.scss";

interface ProfileImgProps {
  src: string;
  width?: string;
  height?: string;
  bgColor?: string;
}

const ProfileImg: React.FC<ProfileImgProps> = ({
  src,
  width,
  height,
  bgColor,
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
        style={{
          backgroundColor: bgColor || defaultBgColor,
        }}
      />
    </div>
  );
};

export default ProfileImg;
