import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

export const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Viktor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Valera</NavLink>
         </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your it-kamasutra</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};
