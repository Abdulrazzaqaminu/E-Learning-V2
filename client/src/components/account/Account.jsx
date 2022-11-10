import { Link } from "react-router-dom";
import classes from "./Account.module.css";

export default function Account() {
  // const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
          <span>
            account_circle
          </span>
          {/* <span>{currentUser.displayName}</span> */}
          <span>
            logout
          </span>
    </div>
  );
}
