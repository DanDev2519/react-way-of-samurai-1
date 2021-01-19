const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   photoUrl: "https://raskrasil.com/wp-content/uploads/Raskrasil-smayliki-27.jpg",
    //   fullName: "Dan",
    //   status: "The life is good",
    //   location: { country: "Russia", city: "Moscow" },
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   photoUrl: "https://raskrasil.com/wp-content/uploads/Raskrasil-smayliki-27.jpg",
    //   fullName: "Kuk",
    //   status: "I'm a boss",
    //   location: { country: "USA", city: "Cupertino" },
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   photoUrl: "https://raskrasil.com/wp-content/uploads/Raskrasil-smayliki-27.jpg",
    //   fullName: "Sasha",
    //   status: "Just smile)))))",
    //   location: { country: "Russia", city: "St. Petersburg" },
    // },
    // {
    //   id: 4,
    //   followed: false,
    //   photoUrl: "https://raskrasil.com/wp-content/uploads/Raskrasil-smayliki-27.jpg",
    //   fullName: "Anton",
    //   status: "SSS",
    //   location: { country: "Ukraine", city: "Kiev" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          } else {
            return u;
          }
        }),
      };

    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
