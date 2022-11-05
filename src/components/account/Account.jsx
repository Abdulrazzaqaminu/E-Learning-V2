import { Link } from "react-router-dom";
import classes from "./Account.module.css";

export default function Account() {
  // const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {false ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          {/* <span>{currentUser.displayName}</span> */}
          <span className="material-icons-outlined" title="Logout">
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
