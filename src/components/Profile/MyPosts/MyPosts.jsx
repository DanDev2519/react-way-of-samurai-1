import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postssData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 15},
    { id: 2, message: 'It\'s my first project', likesCount: 21},
  ];

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postssData[0].message} likeCount={postssData[0].likesCount} />
        <Post message={postssData[1].message} likeCount={postssData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
