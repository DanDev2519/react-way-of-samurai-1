import * as axios from "axios";
import React from "react";
import style from "./Users.module.css";
import avatarExample from "../../assets/img/avatar-empty.png";

let Users = (props) => {
	let getUsers = () => {
		if (props.users.length === 0) {
			axios
				.get("https://social-network.samuraijs.com/api/1.0/users")
				.then((response) => {
					props.setUsers(response.data.items);
				});
		}
	};

  return (
    <div>
			<button onClick={getUsers}>Get users</button>
      {props.users.map((u) => (
        <div>
          <div>
            <div>
              <img
                className={style.ava}
                src={u.photos.small != null ? u.photos.small : avatarExample}
                alt="Users ava"
              />
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
              <p>{"u.location.country"}</p>
              <p>{"u.location.city"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
