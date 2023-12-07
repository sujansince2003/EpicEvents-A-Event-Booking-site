import { useNavigate } from "react-router-dom";

function Card({
  Event,
  EventLocation = "Kathmandu,Nepal",
  EventDate = "Dec 20, ",
  setEventdata,
}) {
  //   console.log(Event);
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        const eventdetail = {
          ...Event,
          EventLocation,
          EventDate,
          data: true,
        };
        setEventdata(() => eventdetail);
        navigate("details");
      }}
    >
      <div className="postercontainer">
        <img className="poster" src={Event.Poster} alt="" />
      </div>
      <div className="info">
        <p className="title">{Event.Title}</p>
        <div className="location-time">
          <p>{EventDate}</p>
          <img className="dot" src="/assets/dot.png" alt="" />
          <p>{EventLocation}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
