import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import { Friends } from "./friends/Friends";
import SitebarType from "./../../redux/State";
//-----------------------------------------------------------------//

type FriendsType = {
  name: string;
  avatar: string;
};

type NavbarPropsType = {
  state: {
    friends: Array<FriendsType>;
  };
};

//-----------------------------------------------------------------//

export const Navbar: React.FC<NavbarPropsType> = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={s.friendsBlock}>
        <Friends friends={props.state.friends} />
      </div>
    </nav>
  );
};
