import s from "./Profile.module.css";
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};

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
