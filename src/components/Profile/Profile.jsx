import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      {/* <MyPostsContainer store={props.store}/> */}
      <MyPostsContainer />
      {/* <MyPosts
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      /> */}
    </div>
  );
};

export default Profile;
