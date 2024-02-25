import React from "react";
import s from "./Friend.module.css";
import state from "./../../../../redux/State";

type FriendTypeProps = {
  avatar: string;
  name: string;
};

export const Friend: React.FC<FriendTypeProps> = (props) => {
  return (
    <div className={s.friendContainer}>
      <img className={s.friendsAvatar} src={props.avatar} alt="" />
      <div className={s.friendsName}>{props.name}</div>
    </div>
  );
};
