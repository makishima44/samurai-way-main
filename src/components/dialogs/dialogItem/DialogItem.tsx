import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";

type DialogTypeProps = {
  id: number;
  avatar: string;
  name: string;
};

export const DialogItem: React.FC<DialogTypeProps> = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>
        <img className={s.avatar} src={props.avatar} alt="" />
        {props.name}
      </NavLink>
    </div>
  );
};
