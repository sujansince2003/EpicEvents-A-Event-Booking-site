function Card({ eventTitle, eventDate, eventLocation, eventPoster }) {
  return (
    <div className="card">
      <div className="postercontainer">
        <img className="poster" src="/assets/poster.jpg" alt="" />
      </div>
      <div className="info">
        <p className="title">Ultimate Avengers: The Movie</p>
        <div className="location-time">
          <p>December 20,2023</p>
          <img className="dot" src="/assets/dot.png" alt="" />
          <p>Pokhara,Nepal</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
