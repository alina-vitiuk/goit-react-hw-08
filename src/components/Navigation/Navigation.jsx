import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={styles.navLink}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
