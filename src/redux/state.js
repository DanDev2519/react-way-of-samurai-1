let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 15},
			{ id: 2, message: 'It\'s my first project', likesCount: 21},
		]
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
		]
	}
};

export default state;