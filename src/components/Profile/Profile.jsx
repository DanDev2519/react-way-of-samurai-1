import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <img
        className={s.content__img}
        src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
        alt="top"
      />
      <div>
        <img
          className={s.content__img}
          scr="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
          alt="avatar"
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
