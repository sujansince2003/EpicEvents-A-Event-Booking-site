import FormComp from "./FormComp";
import Breadcumb from "./BreadCumb";
import { useContext } from "react";
import { EventContext } from "../../App";

/**
 * @description
 * this component is responsible for calculating order details like normalprice,discount amount,VAT amount and TotalPrice
 * this handle the form data submission along with all datas and prices needed for building invoice pdf and checkout
 *
 *
 * @param {number} totalprice it is normal price which is multiple of ticket numebr and normal price of single ticket
 * @param {number}  price    normal price of single ticket
 * @param {object}  evendata  data object of movie which is being booked like title,poster,EventLocation,EventDate
 * @param {number}  ticketcount  total number of ticket being booked
 * @param {function}  setuserinfo  setter function which sets data of person booking ticket inlcuding name,adderss,country
 * @param {function}  setinvoicedata  setter function which sets invoice data such as price,vat,discount,totalprice etc
 *
 *
 *  */
function Ordersummary() {
  const {
    totalprice,
    price,
    eventdata,
    ticketcount,
    setuserinfo,
    setinvoicedata,
  } = useContext(EventContext);
  let normalPrice = price; //get the price which is multiple of no. of ticket and price of single ticket
  let dispercent = 0; //can be change
  let subtotal = totalprice;
  let taxamt = (13 / 100) * subtotal; //calculating VAT
  let disamt = dispercent > 0 ? (dispercent / 100) * (subtotal + taxamt) : 0;
  let total = subtotal + taxamt - disamt;

  function createOrdersummary() {
    const summary = {
      ticketcount,
      normalPrice,
      dispercent,
      subtotal,
      taxamt,
      disamt,
      total,
    };

    setinvoicedata(summary);
  }

  return (
    <section className="hero3">
      <Breadcumb eventdata={eventdata} />
      <div className="order-info">
        <div>
          <p className="order-info-confirm">Order Confirmation</p>
        </div>
        <hr className="hr-3" />
        <div className="box">
          <div className="infox">
            <h1>Information</h1>
            <FormComp
              setuserinfo={setuserinfo}
              createOrdersummary={createOrdersummary}
            />
          </div>

          <div className="summary">
            <div className="summary-text">
              <p className="summary-text-p">Checkout Summary</p>
            </div>
            <hr className="hr-4" />
            <div className="event-info-summary">
              <p className="event-info-summary-title">{eventdata.Title}</p>
              <div className="location-time">
                <p>Movie</p>
                <img className="dot" src="/assets/dot.png" alt="" />
                <p>{eventdata.EventLocation}</p>
                <img className="dot" src="/assets/dot.png" alt="" />
                <p>{eventdata.EventDate}</p>
              </div>
            </div>
            <hr className="hr-4" />
            <div className="cost">
              <div className="moneyline-div">
                <div className="moneyline">
                  <span className="money-line-txt">Normal</span>
                  <span>X{ticketcount}</span>
                  <span className="amt">${normalPrice}</span>
                </div>
                <div className="moneyline">
                  <span className="money-line-txt">Sub-total</span>

                  <span className="amt">${subtotal}</span>
                </div>
                <div className="moneyline">
                  <span className="money-line-txt">Tax( 13%)</span>

                  <span className="amt">${taxamt}</span>
                </div>
                <div className="moneyline">
                  <span className="money-line-txt">
                    Discount({dispercent}%)
                  </span>

                  <span className="amt">${disamt}</span>
                </div>
                <hr className="hr-4" />
              </div>
              <div className="moneyline">
                <span className="moneyline-total money-line-txt ">Total</span>
                <span className="currency-total">
                  <span className="currency">USD</span>
                  <span className="moneyline-total-amt amt">${total}</span>
                </span>
              </div>
            </div>
            <hr className="hr-4" />
            <button type="submit" form="a-form" className="checkout-btn">
              {" "}
              {/*handling form submission from this button which is not inside form element using id i,e a-form which is given to form element   */}
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ordersummary;
