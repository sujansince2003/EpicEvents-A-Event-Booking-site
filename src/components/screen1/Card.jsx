import { useNavigate } from "react-router-dom";
/**
 *@description
 * this component receive the single movie details one by one through .map function.these data are used to render single Card component which includes poster,title,date,location
 * 
 *  using React Router V6 for routing.here we use useNavigate for programatic navigation so that when we click on Card component we are redirect to MovieDetails page where we can see more details including price,ticketNum etc
 *
 *
 *@param {<object>} Event    data object of a single movie got by mapping through  array  of movies object received from API

 * @param {string}  EventLocation    event location string.it is set by default but if it is passed as props from parent component,that received  value will be used
 * 
 * @param {string}  EventDate    same as EventLocation which provides info about eventdate
 * 
 * @param {function} setEventdata  setter function which sets data which is send for moviedetails page
 *
 *
 *
 * * @return  {ReactNode}
 */
function Card({
  Event,
  EventLocation = "Kathmandu,Nepal",
  EventDate = "Dec 20, ",
  setEventdata,
}) {
  //   console.log(typeof );
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
        }; //using spread operator to create a object with Event object and new data so set EventData
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
