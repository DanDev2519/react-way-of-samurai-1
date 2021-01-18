const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = { id: 4, message: state.newMessageText };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreater = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
