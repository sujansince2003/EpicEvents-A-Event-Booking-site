import { useNavigate } from "react-router-dom";
/**
 * @description
 *this component shows the date,time,location,price of movie.this also facilates setting ticket number and calculating price
 *when users set ticketnumber and click on checkout page is redirected to summary page where they can fill form and confirm booking
 *
 * @param {jsx} children this recieves TicketCunter component as children prop.component compostion is used to avoid props drilling
 * @param {object} evendata this data is used to render details about movie
 * @param {numbers}  ticketcount & price   used for showing total price in checkout button
 *
 *
 */
function Detail({ children, eventdata, ticketcount, price }) {
  const navigate = useNavigate();
  return (
    <div className="event-detail ">
      <h1>Event Details</h1>
      <div className="event-info">
        <div className="icon-container">
          <img className="event-info-icon" src="assets/eventicon.png" alt="" />
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
        {children}

        <button className="checkout-btn" onClick={() => navigate("checkout")}>
          Checkout for ${price * ticketcount}.00
        </button>
      </div>
    </div>
  );
}

export default Detail;
