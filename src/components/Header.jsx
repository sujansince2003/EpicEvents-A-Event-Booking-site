import { NavLink } from "react-router-dom";
/**
 * This component renders Nav Bar along with auth-buttons i.e login and register
 * @description

 * @returns {ReactNode} A React element that renders nav bar and auth buttons
 */
export default function Header() {
  return (
    <>
      <header>
        <NavLink to="/">
          <img className="logo" src="/assets/logo.png" alt="" />
        </NavLink>

        <nav>
          <ul>
            <li>
              <NavLink to="./">Home</NavLink>
            </li>
            <li>
              <a href="/#">Concerts</a>
            </li>
            <li>
              <a href="/#">Movies</a>
            </li>
            <li>
              <a href="/#">Threater shows</a>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-register">Register</button>
        </div>
      </header>
    </>
  );
}
