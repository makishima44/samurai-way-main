import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};

type MyPostsPropsType = {
  posts: Array<PostsType>;
};

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} count={p.likesCount} />
  ));
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
