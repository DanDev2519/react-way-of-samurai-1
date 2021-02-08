import React from "react";
import { connect } from "react-redux";
// import StoreContext from "../../../StoreContext";
import {
  addPostActionCreater,
  updateNewPostActionCreater,
} from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   // let state = props.store.getState();

//   // let addNewPost = () => {
//   //   props.store.dispatch(addPostActionCreater());
//   // };

//   // let onPostChange = (text) => {
//   //   props.store.dispatch(updateNewPostActionCreater(text));
//   // };

//   // return (
//   //   <MyPosts
//   //     updateNewPostText={onPostChange}
//   //     addPost={addNewPost}
//   //     posts={state.profilePage.posts}
//   //     newPostText={state.profilePage.newPostText}
//   //   />
//   // );
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addNewPost = () => {
//           store.dispatch(addPostActionCreater());
//         };

//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostActionCreater(text));
//         };
//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addNewPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      
      dispatch(addPostActionCreater())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreater(text))
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
