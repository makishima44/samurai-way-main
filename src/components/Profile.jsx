import s from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
          alt=""
        />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New posts</div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
};
