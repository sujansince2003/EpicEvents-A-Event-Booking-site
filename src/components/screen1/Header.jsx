export default function Header() {
  return (
    <>
      <header>
        <img className="logo" src="/assets/logo4.png" alt="" />
        <nav>
          <ul>
            <li>
              <a href="/#">Home</a>
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
