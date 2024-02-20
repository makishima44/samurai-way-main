import s from "./Profile.module.css";
import { MyPosts } from "./myPosts/MyPosts";

export const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
          alt=""
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
