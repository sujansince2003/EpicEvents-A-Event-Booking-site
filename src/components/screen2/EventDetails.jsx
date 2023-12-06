import Card from "../screen1/Card";
function EventDetails() {
  return (
    <section className="hero1">
      <Card />
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
          <TicketnCounter />

          <button className="checkout-btn">Checkout for $1000.00</button>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;

function TicketnCounter() {
  return (
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
  );
}
