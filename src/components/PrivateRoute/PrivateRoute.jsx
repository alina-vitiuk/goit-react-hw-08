import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import styles from "./PrivateRoute.module.css";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingMessage}>Loading...</div>
      </div>
    );
  }
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
