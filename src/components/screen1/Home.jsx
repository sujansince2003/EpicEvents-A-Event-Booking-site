import { useContext } from "react";
import { EventContext } from "../../App";

import Card from "./Card";
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
