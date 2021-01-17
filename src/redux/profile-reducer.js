const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first project", likesCount: 21 },
  ],
  newPostText: "new post text",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      let storCopy = { ...state };
      storCopy.posts = [...state.posts];
      storCopy.posts.push(newPost);
      storCopy.newPostText = "";
      return storCopy;
    }

    case UPDATE_NEW_POST_TEXT: {
      let storCopy = { ...state };
      storCopy.newPostText = action.newText;
      return storCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreater = () => ({ type: ADD_POST });

export const updateNewPostActionCreater = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
