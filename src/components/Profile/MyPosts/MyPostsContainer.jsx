import React from "react";
import StoreContext from "../../../StoreContext";
import {
  addPostActionCreater,
  updateNewPostActionCreater,
} from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  // let state = props.store.getState();

  // let addNewPost = () => {
  //   props.store.dispatch(addPostActionCreater());
  // };

  // let onPostChange = (text) => {
  //   props.store.dispatch(updateNewPostActionCreater(text));
  // };

  // return (
  //   <MyPosts
  //     updateNewPostText={onPostChange}
  //     addPost={addNewPost}
  //     posts={state.profilePage.posts}
  //     newPostText={state.profilePage.newPostText}
  //   />
  // );
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addNewPost = () => {
          store.dispatch(addPostActionCreater());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostActionCreater(text));
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addNewPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
