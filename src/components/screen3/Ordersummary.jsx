function Ordersummary({ totalprice, price, eventdata }) {
  console.log(eventdata);
  let normalPrice = price;
  let dispercent = 5;
  let subtotal = totalprice;
  let taxamt = (13 / 100) * subtotal;
  let disamt = dispercent > 0 ? (dispercent / 100) * (subtotal + taxamt) : 0;
  let total = subtotal + taxamt - disamt;

  return (
    <section className="hero3">
      <div className="breadcumb">
        <p className="breadcumb-text">
          Home / Explore Event / {eventdata.Title}/{" "}
          <span className="checkout-txt">Checkout</span>
        </p>
      </div>
      <div className="order-info">
        <div>
          <p className="order-info-confirm">Order Confirmation</p>
        </div>
        <hr className="hr-3" />
        <div className="box">
          <div className="infox">
            <h1>Information</h1>
            <form>
              <div className="form-1">
                <label className="label-text">Full name*</label> <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="full-width-input"
                  placeholder="eg:john doe"
                />
              </div>
              <div className="form-half">
                <div className="form-1">
                  <label className="label-text">E-mail*</label> <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="half-width-input"
                    placeholder="eg:john doe"
                  />
                </div>
                <div className="form-1">
                  <label className="label-text">Address*</label> <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="half-width-input"
                    placeholder="eg:john doe"
                  />
                </div>
              </div>
              <div className="form-half">
                <div className="form-1">
                  <label className="label-text">Country*</label> <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="half-width-input"
                    placeholder="eg:john doe"
                  />
                </div>
                <div className="form-1">
                  <label className="label-text">State</label> <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="half-width-input"
                    placeholder="eg:john doe"
                  />
                </div>
              </div>
              <div className="form-half">
                <div className="form-1">
                  <label className="label-text">City</label> <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="half-width-input"
                    placeholder="eg:john doe"
                  />
                </div>
                <div className="form-1">
                  <label className="label-text">Zip/Postal Code *</label> <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="half-width-input"
                    placeholder="eg:john doe"
                  />
                </div>
              </div>
            </form>
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
              </div>
            </div>
            <hr className="hr-4" />
            <div className="cost">
              <div className="moneyline-div">
                <div className="moneyline">
                  <span className="money-line-txt">Normal</span>
                  <span>X2</span>
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
            <button className="checkout-btn">Confirm & Pay</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ordersummary;
