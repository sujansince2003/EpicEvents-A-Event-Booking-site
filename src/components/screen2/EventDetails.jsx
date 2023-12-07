import { useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../../App";

function EventDetails() {
  const { eventdata, ticketcount, setticketcount, price, settotalprice } =
    useContext(EventContext);
  // using useCallback to prevent unnecessary re-creation of the function as we are receiving dependency array items as props
  const calculateTotalPrice = useCallback(() => {
    settotalprice(price * ticketcount);
  }, [price, ticketcount, settotalprice]);

  //   useEffect hook is used to recalculate totalprice whenever ticketcount or price changes.
  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice]);
  const navigate = useNavigate();

  //   console.log(eventdata);

  return (
    <section className="hero1">
      {eventdata.Title ? (
        <div className="card">
          <div className="postercontainer">
            <img className="poster" src={eventdata.Poster} alt="" />
          </div>
          <div className="info">
            <p className="title">{eventdata.Title}</p>
            <div className="location-time">
              <p>{eventdata.EventDate}</p>
              <img className="dot" src="/assets/dot.png" alt="" />
              <p>{eventdata.EventLocation}</p>
            </div>
          </div>
        </div>
      ) : null}

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
            <p className="info-text-2">Sat, {eventdata.EventDate} 11:30 AM</p>
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
            <p className="info-text-2">{eventdata.EventLocation}</p>
            <a href="/#">view on map</a>
          </div>
        </div>
        <hr />
        <h3>Select Tickets</h3>
        <div className="ticket">
          <TicketnCounter
            price={price}
            ticketcount={ticketcount}
            setticketcount={setticketcount}
          />

          <button className="checkout-btn" onClick={() => navigate("checkout")}>
            Checkout for ${price * ticketcount}.00
          </button>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;

function TicketnCounter({ ticketcount, setticketcount, price }) {
  function handleCounter(value) {
    if (value === "inc") setticketcount((n) => n + 1);
    if (value === "dec") setticketcount((n) => n - 1);
  }
  return (
    <div className="ticket-n-counter">
      <div className="ticket-info">
        <span className="ticket-num">{ticketcount}x tickets</span>
        <span className="ticket-price"> USD ${price * ticketcount}.00</span>
      </div>
      <div className="counter">
        <button
          disabled={ticketcount <= 1 ? true : false}
          className="counter-btn btn-dec"
          value="dec"
          onClick={(e) => handleCounter(e.target.value)}
        >
          -
        </button>
        <span className="ticket-count">{ticketcount}</span>
        <button
          disabled={ticketcount >= 10 ? true : false}
          className="counter-btn btn-inc"
          value="inc"
          onClick={(e) => handleCounter(e.target.value)}
        >
          +
        </button>
      </div>
    </div>
  );
}
