import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        className={s.content__imgTop}
        src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
        alt="top"
      />
      <div className={s.description}>
        <img
					className={s.content__imgAvatar}
					src="https://www.meme-arsenal.com/memes/4e4e3eca35797638c567d55e62dc392e.jpg"
          alt="avatar"
        />
				info
      </div>
    </div>
  );
};

export default ProfileInfo;
