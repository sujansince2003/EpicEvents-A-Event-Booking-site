/**
 *
 *@description
  this renders a single movie card component with evendata received as props
  
 * @param {object}  eventdata this is movie data object recived when user select a movie.this is used to render a Movie card component in side of movieDetails
 * @returns {ReactNode}
 */
function SelectedCard({ eventdata }) {
  console.log(typeof eventdata);
  console.log(eventdata);
  return (
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
  );
}

export default SelectedCard;
