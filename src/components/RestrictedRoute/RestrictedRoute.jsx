import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import styles from "./RestrictedRoute.module.css";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingMessage}>Loading...</div>
      </div>
    );
  }
  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};

export default RestrictedRoute;
