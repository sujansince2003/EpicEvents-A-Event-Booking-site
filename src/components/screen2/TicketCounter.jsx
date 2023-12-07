/**
 *@description
 this component is responsible for handling the increment and decrement of ticket which also dynamically change price and ticketnumer in UI 
 *the minimum value for ticket is 1 and maximum is 10
 * 
 * @param {number} ticketcount ticket number which is shown in Ui and dynamically change when incremented or decremented
 * @param {function} setticketcount setter function which sets ticket number when user increment or decrment
 * @param  {number}  price  price to show in Ui and dynamically change every time ticket number changes
 * 
 */
export default function TicketnCounter({ ticketcount, setticketcount, price }) {
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
