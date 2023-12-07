import BillingComponent from "../Billcomp";

import Card from "./Card";
function Home({ events, setEventdata }) {
  return (
    <>
      {/* <section className="hero">
        {events.map((Event) => (
          <Card
            key={Event.imdbID}
            Event={Event}
            EventDate={`Dec 14, ${Event.Year}`}
            EventLocation="Butwal,Nepal"
            setEventdata={setEventdata}
          />
        ))}
      </section> */}
      <BillingComponent />
    </>
  );
}

export default Home;
