import * as axios from "axios";
import React from "react";
import style from "./Users.module.css";
import avatarExample from "../../assets/img/avatar-empty.png";

class Users extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios
  //       .get("https://social-network.samuraijs.com/api/1.0/users")
  //       .then((response) => {
  //         this.props.setUsers(response.data.items);
  //       });
  //   }
  // };
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users&page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users&page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
                  this.props.currentPage === p ? style.currentCrumb : ""
                }`}
                onClick={() => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </li>
            );
          })}

          {/* <li className={`${style.crumb} ${style.currentCrumb}`}>1</li> */}
        </ul>
        {/* <button onClick={this.getUsers}>Get users</button> */}
        {this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default Users;
