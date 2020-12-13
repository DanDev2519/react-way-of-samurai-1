import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        className={s.content__img-top}
        src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
        alt="top"
      />
      <div>
        <img
          className={s.content__img-top}
          scr="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
          alt="avatar"
        />
        <div></div>
      </div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
          <div className={s.item}>Post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
