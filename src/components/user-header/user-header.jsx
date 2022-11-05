import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import Account from "../account/Account";

export default function UserHeader() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <h3>CourseLine</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
