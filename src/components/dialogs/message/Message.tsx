import React from "react";
import s from "./../Dialogs.module.css";

type MessageTypeProps = {
  message: string;
  id: number;
};

export const Message: React.FC<MessageTypeProps> = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
