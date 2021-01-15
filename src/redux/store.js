import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
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
      newMessageText: "new message text",
    },
  },
  _callSubscriber() {
    console.log("ok");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
