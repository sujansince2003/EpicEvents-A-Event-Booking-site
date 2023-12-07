import { NavLink } from "react-router-dom";
/**
 *@description
 *this renders the breadcumb Navigation based on componenets
 *NavLink is used to route between components on click
 * @param {object} eventdata  movie title is extract from data of movie which is need to render title in breadcumb
 * @returns
 */
function Breadcumb({ eventdata }) {
  return (
    <div className="breadcumb">
      <p className="breadcumb-text">
        <span>
          <NavLink to="/">Home</NavLink>
        </span>{" "}
        /
        <span>
          <NavLink to="/">Explore events</NavLink>
        </span>{" "}
        /
        <span>
          <NavLink to="/details">
            {eventdata.Title || "Select from Home"}
          </NavLink>
        </span>
        /<span className="checkout-txt">Checkout</span>
      </p>
    </div>
  );
}

export default Breadcumb;
