import s from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.onthebus.com.ua/wa-data/public/shop/products/81/72/7281/images/24747/24747.0x970.jpg" />
      {props.message}
      <div>
        <span>like:</span>
        {props.count}
      </div>
    </div>
  );
};
