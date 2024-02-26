import React from "react";
import s from "./Friend.module.css";
import { FriendsType } from "./../../../../redux/State";

export const Friend: React.FC<FriendsType> = (props) => {
  return (
    <div className={s.friendContainer}>
      <img className={s.friendsAvatar} src={props.avatar} alt="" />
      <div className={s.friendsName}>{props.name}</div>
    </div>
  );
};
