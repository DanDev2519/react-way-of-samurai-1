import React from "react";
import style from "./Users.module.css";
import avatarExample from "../../assets/img/avatar-empty.png";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul className={style.breadCrumbs}>
        {pages.map((p) => {
          return (
            <li
              className={`${style.crumb} ${
                props.currentPage === p ? style.currentCrumb : ""
              }`}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </li>
          );
        })}
      </ul>
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
