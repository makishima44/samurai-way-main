import s from "./Friend.module.css";

export const Friend = (props) => {
  return (
    <div className={s.friendContainer}>
      <img className={s.friendsAvatar} src={props.avatar} alt="" />
      <div className={s.friendsName}>{props.name}</div>
    </div>
  );
};
