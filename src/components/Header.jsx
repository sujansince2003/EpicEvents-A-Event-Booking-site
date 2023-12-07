import { NavLink } from "react-router-dom";

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
