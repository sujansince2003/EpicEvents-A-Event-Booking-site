import { useEffect, useCallback, useContext } from "react";

import { EventContext } from "../../App";
import Detail from "./Detail";
import TicketnCounter from "./TicketCounter";
import SelectedCard from "./SelectedCard";

/**
 * @description
 * this component is responsible for rendering a selected movie and movie details
 * 
 * @param  {object} eventdata   data object passed to SelectedCard to render Movie card component of selected movie
 * @param {number}   ticketcount   Number of ticket
 * @param {Function}   setticketcount  setter function which sets number of tickets each time it is incremented or decremented
 * @param {number}   price    Price of movies,calculated based on ticket number and price of single movie 
*@param  {function}  settotalprice  setter function which set price according to  ticket number and price of single movie 
* @returns {ReactNode}
 
 */
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

  return (
    <section className="hero1">
      {eventdata.Title ? <SelectedCard eventdata={eventdata} /> : null}

      <Detail eventdata={eventdata} ticketcount={ticketcount} price={price}>
        <TicketnCounter
          price={price}
          ticketcount={ticketcount}
          setticketcount={setticketcount}
        />
      </Detail>
    </section>
  );
}

export default EventDetails;
