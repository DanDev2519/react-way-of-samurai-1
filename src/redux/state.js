import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "It's my first project", likesCount: 21 },
    ],
    newPostText: "new post text",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Jon" },
      { id: 2, name: "Ben" },
      { id: 3, name: "Sara" },
      { id: 4, name: "Anna" },
      { id: 5, name: "Den" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Good!" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText='';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
