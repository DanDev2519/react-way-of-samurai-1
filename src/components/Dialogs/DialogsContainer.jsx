import React from "react";
import { connect } from "react-redux";
// import StoreContext from "../../StoreContext";
import {
  addMessageActionCreater,
  updateNewMessageActionCreater,
} from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   // let state = props.store.getState().dialogsPage;

//   // let addNewMessage = () => {
//   //   props.store.dispatch(addMessageActionCreater());
//   // };

//   // let onNewMessageChange = (text) => {
//   //   props.store.dispatch(updateNewMessageActionCreater(text));
//   // };

//   // return (
//   //   <Dialogs
//   //     state={state}
//   //     addMessage={addNewMessage}
//   //     updateNewMessageText={onNewMessageChange}
//   //   />
//   // );

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogsPage;

//         let addNewMessage = () => {
//           store.dispatch(addMessageActionCreater());
//         };

//         let onNewMessageChange = (text) => {
//           store.dispatch(updateNewMessageActionCreater(text));
//         };
//         return (
//           <Dialogs
//             dialogsPage={store.getState().dialogsPage}
//             addMessage={addNewMessage}
//             updateNewMessageText={onNewMessageChange}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreater());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageActionCreater(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
