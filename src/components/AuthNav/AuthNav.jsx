import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink to="/register" className={`${styles.btn} ${styles.btnPrimary}`}>
        Register
      </NavLink>
      <NavLink to="/login" className={`${styles.btn} ${styles.btnSecondary}`}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
