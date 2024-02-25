import React from "react";
import s from "./Friends.module.css";
import { Friend } from "./friend/Friend";


type FriendTypeProps = {
  name: string;
  avatar: string;
};

type FriendsArrayTypeProps = {
  friends: Array<FriendTypeProps>;
};

export const Friends: React.FC<FriendsArrayTypeProps> = (props) => {
  let friendsElements = props.friends.map((f) => (
    <Friend name={f.name} avatar={f.avatar} />
  ));
  return (
    <div className={s.navFriends}>
      <h2 className={s.navFriendsTitle}>Friends</h2>
      <div className={s.navFriendsContainer}>{friendsElements}</div>
    </div>
  );
};
