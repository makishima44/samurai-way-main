import s from "./Dialogs.module.css";
import { Message } from "./message/Message";
import { DialogItem } from "./dialogItem/DialogItem";

//------------------------------------------------------//

type DialogType = {
  id: number;
  name: string;
  avatar: string;
};

type MessageType = {
  message: string;
  id: number;
};

type DialogsTypeProps = {
  state: {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
  };
};

//------------------------------------------------------//

export const Dialogs: React.FC<DialogsTypeProps> = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
