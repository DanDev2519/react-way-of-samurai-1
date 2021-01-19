import React from "react";
import style from "./Users.module.css";

let Users = (props) => {
	// это исправить
	if (props.users.length === 0){
  props.setUsers([
    {
      id: 1,
      followed: true,
      photoUrl:
        "https://raskrasil.com/wp-content/uploads/Raskrasil-smayliki-27.jpg",
      fullName: "Dan",
      status: "The life is good",
      location: { country: "Russia", city: "Moscow" },
    },
    {
      id: 2,
      followed: true,
      photoUrl:
        "https://raskrasil.com/wp-content/uploads/Raskrasil-smayliki-27.jpg",
      fullName: "Kuk",
      status: "I'm a boss",
      location: { country: "USA", city: "Cupertino" },
    },
    {
      id: 3,
      followed: true,
      photoUrl:
        "https://raskrasil.com/wp-content/uploads/Raskrasil-smayliki-27.jpg",
      fullName: "Sasha",
      status: "Just smile)))))",
      location: { country: "Russia", city: "St. Petersburg" },
    },
    {
      id: 4,
      followed: false,
      photoUrl:
        "https://raskrasil.com/wp-content/uploads/Raskrasil-smayliki-27.jpg",
      fullName: "Anton",
      status: "SSS",
      location: { country: "Ukraine", city: "Kiev" },
    },
  ]);
	}

  return (
    <div>
      {/* <div>Users will be here</div> */}
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <img className={style.ava} src={u.photoUrl} alt="Users ava" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div>
            <div>
              <p>{u.fullName}</p>
              <p>{u.status}</p>
            </div>
            <div>
              <p>{u.location.country}</p>
              <p>{u.location.city}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
