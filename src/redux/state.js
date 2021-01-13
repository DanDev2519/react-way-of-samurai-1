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
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log("ok");
	},
	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0,
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText='';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	updateNewMessageText(newText) {
		this._state.dialogsPage.newMessageText = newText;
		this._callSubscriber(this._state);
	},
	subscriber(observer) {
		this._callSubscriber = observer;
	}
};

// let rerenderEntireTree = () => {
// 	console.log("ok");
// };

// export const subscriber = (observer) => {
// 	rerenderEntireTree = observer;
// };

// let state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: "Hi, how are you?", likesCount: 15 },
//       { id: 2, message: "It's my first project", likesCount: 21 },
//     ],
//     newPostText: "new post text",
//   },
//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: "Jon" },
//       { id: 2, name: "Ben" },
//       { id: 3, name: "Sara" },
//       { id: 4, name: "Anna" },
//       { id: 5, name: "Den" },
//     ],
//     messages: [
//       { id: 1, message: "Hi" },
//       { id: 2, message: "How are you?" },
//       { id: 3, message: "Good!" },
// 		],
// 		newMessageText: "new message text",
//   },
// };

// export const addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0,
//   };
// 	state.profilePage.posts.push(newPost);
// 	state.profilePage.newPostText='';
//   rerenderEntireTree(state);
// };

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// };

// export const updateNewMessageText = (newText) => {
//   state.dialogsPage.newMessageText = newText;
//   rerenderEntireTree(state);
// };


export default store;
