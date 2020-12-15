import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg" alt="Аватар пользователя"/>
      <p>{props.message}</p>
      <div>Like {props.likeCount}</div>
    </div>
  );
};

export default Post;
