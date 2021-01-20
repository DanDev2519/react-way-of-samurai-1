const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

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
  pageSize: 4,
  // totalUsersCount: 0,
  totalUsersCount: 10,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        // users: [...state.users, ...action.users],
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
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
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

export default usersReducer;
