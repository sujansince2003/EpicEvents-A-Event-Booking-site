import "./App.css";

function App() {
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
      {/* <section className="hero">
        <div className="card">
          <div className="postercontainer">
            <img className="poster" src="/assets/poster.jpg" alt="" />
          </div>
          <div className="info">
            <p className="title">Ultimate Avengers: The Movie</p>
            <div className="location-time">
              <p>December 20,2023</p>
              <img className="dot" src="/assets/dot.png" alt="" />
              <p>Pokhara,Nepal</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="postercontainer">
            <img className="poster" src="/assets/poster.jpg" alt="" />
          </div>
          <div className="info">
            <span className="title">Ultimate Avengers: The Movie</span>
            <div className="location-time">
              <span>December 20,2023</span>
              <img className="dot" src="/assets/dot.png" alt="" />
              <span>Pokhara,Nepal</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="postercontainer">
            <img className="poster" src="/assets/poster.jpg" alt="" />
          </div>
          <div className="info">
            <span className="title">Ultimate Avengers: The Movie</span>
            <div className="location-time">
              <span>December 20,2023</span>
              <img className="dot" src="/assets/dot.png" alt="" />
              <span>Pokhara,Nepal</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="postercontainer">
            <img className="poster" src="/assets/poster.jpg" alt="" />
          </div>
          <div className="info">
            <span className="title">Ultimate Avengers: The Movie</span>
            <div className="location-time">
              <span>December 20,2023</span>
              <img className="dot" src="/assets/dot.png" alt="" />
              <span>Pokhara,Nepal</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="postercontainer">
            <img className="poster" src="/assets/poster.jpg" alt="" />
          </div>
          <div className="info">
            <span className="title">Ultimate Avengers: The Movie</span>
            <div className="location-time">
              <span>December 20,2023</span>
              <img className="dot" src="/assets/dot.png" alt="" />
              <span>Pokhara,Nepal</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="postercontainer">
            <img className="poster" src="/assets/poster.jpg" alt="" />
          </div>
          <div className="info">
            <span className="title">Ultimate Avengers: The Movie</span>
            <div className="location-time">
              <span>December 20,2023</span>
              <img className="dot" src="/assets/dot.png" alt="" />
              <span>Pokhara,Nepal</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="postercontainer">
            <img className="poster" src="/assets/poster.jpg" alt="" />
          </div>
          <div className="info">
            <span className="title">Ultimate Avengers: The Movie</span>
            <div className="location-time">
              <span>December 20,2023</span>
              <img className="dot" src="/assets/dot.png" alt="" />
              <span>Pokhara,Nepal</span>
            </div>
          </div>
        </div>
      </section> */}
      <section className="hero1">
        <div className="event-detail ">
          <h1>Event Details</h1>
          <div className="event-info">
            <div className="icon-container">
              <img
                className="event-info-icon"
                src="assets/eventicon.png"
                alt=""
              />
            </div>
            <div className="info-text">
              <p className="info-text-1">Date & Time</p>
              <p className="info-text-2">Sat, Dec 30, 2023 11:30 AM</p>
            </div>
          </div>
          <hr />
          <div className="event-info">
            <div className="icon-container">
              <img
                className="event-info-icon"
                src="assets/locationicon.png"
                alt=""
              />
            </div>
            <div className="info-text">
              <p className="info-text-1">Location</p>
              <p className="info-text-2">Kathmandu,Nepal</p>
              <a href="/#">view on map</a>
            </div>
          </div>
          <hr />
          <h3>Select Tickets</h3>
          <div className="ticket">
            <div className="ticket-n-counter">
              <div className="ticket-info">
                <span className="ticket-num">1x tickets</span>
                <span className="ticket-price"> USD $500.00</span>
              </div>
              <div className="counter">
                <button className="counter-btn btn-dec">-</button>
                <span className="ticket-count">2</span>
                <button className="counter-btn btn-inc">+</button>
              </div>
            </div>

            <button className="checkout-btn">Checkout for $1000.00</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
