import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 10 },
    { id: 3, message: "Bla", likesCount: 2 },
    { id: 4, message: "Hey", likesCount: 22 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} count={p.likesCount} />
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
