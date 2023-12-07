import { useContext } from "react";
import { EventContext } from "../../App";

import Card from "./Card";

/**
 * @description
 * this component is responsible for rendering the error message incase of any error while fetching data and renders Movie components into Ui
 * for n number of movie data received from API individual Card component are rendered using .map function
 * using EventContext as part of ContextAPI to manage global state and avoiding props drilling
 *
 * @param {object} events          array of objects of movies received from API
 * @param {function} setEventdata  this sets eventdata which is used to render the individual card when user select a movie component
 * @param {string}   error         To show error message when we get any errors when Fetching Data
 *
 * @returns {ReactNode}  renders Error message and Events card components in the homepage Ui
 */
function Home() {
  const { events, setEventdata, error } = useContext(EventContext);

  return (
    <>
      <section className="hero">
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
        {events.length > 0 &&
          events.map((Event) => (
            <Card
              key={Event.imdbID}
              Event={Event}
              EventDate={`Dec 14, ${Event.Year}`}
              EventLocation="Butwal,Nepal"
              setEventdata={setEventdata}
            />
          ))}
      </section>
    </>
  );
}

export default Home;
