import s from "./Profile.module.css";
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { PostsType } from "./../../redux/State";

type ProfilePropsType = {
  state: {
    posts: Array<PostsType>;
  };
};

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>
  );
};
