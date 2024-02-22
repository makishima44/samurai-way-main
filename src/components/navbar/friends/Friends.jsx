import s from "./Friends.module.css";
import { Friend } from "./friend/Friend";

export const Friends = (props) => {
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
