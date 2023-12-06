import "./App.css";

import Header from "./components/screen1/Header";
import Home from "./components/screen1/Home";
import EventDetails from "./components/screen2/EventDetails";

function App() {
  return (
    <>
      <Header />
      <Home />

      <EventDetails />
      <section className="hero3">
        <div className="breadcumb">
          <p className="breadcumb-text">
            hello/hello/hello/hello/hello/hello/hello/
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
                  <label for="fname" className="label-text">
                    Full name*
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    class="full-width-input"
                    placeholder="eg:john doe"
                  />
                </div>
                <div className="form-half">
                  <div className="form-1">
                    <label for="fname" className="label-text">
                      E-mail*
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="half-width-input"
                      placeholder="eg:john doe"
                    />
                  </div>
                  <div className="form-1">
                    <label for="fname" className="label-text">
                      Address*
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="half-width-input"
                      placeholder="eg:john doe"
                    />
                  </div>
                </div>
                <div className="form-half">
                  <div className="form-1">
                    <label for="fname" className="label-text">
                      Country*
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="half-width-input"
                      placeholder="eg:john doe"
                    />
                  </div>
                  <div className="form-1">
                    <label for="fname" className="label-text">
                      State
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="half-width-input"
                      placeholder="eg:john doe"
                    />
                  </div>
                </div>
                <div className="form-half">
                  <div className="form-1">
                    <label for="fname" className="label-text">
                      City
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="half-width-input"
                      placeholder="eg:john doe"
                    />
                  </div>
                  <div className="form-1">
                    <label for="fname" className="label-text">
                      Zip/Postal Code *
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="half-width-input"
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
                <p className="event-info-summary-title">
                  Intersellar the dawn of worls
                </p>
                <div className="location-time">
                  <p>Movie</p>
                  <img className="dot" src="/assets/dot.png" alt="" />
                  <p>Pokhara,Nepal</p>
                </div>
              </div>
              <hr className="hr-4" />
              <div className="cost">
                <div className="moneyline-div">
                  <div className="moneyline">
                    <span className="money-line-txt">Normal</span>
                    <span>X2</span>
                    <span className="amt">$5000</span>
                  </div>
                  <div className="moneyline">
                    <span className="money-line-txt">Sub-total</span>

                    <span className="amt">$5000</span>
                  </div>
                  <div className="moneyline">
                    <span className="money-line-txt">Tax( 13%)</span>

                    <span className="amt">$5000</span>
                  </div>
                  <div className="moneyline">
                    <span className="money-line-txt">Discunt(0%)</span>

                    <span className="amt">$5000</span>
                  </div>
                  <hr className="hr-4" />
                </div>
                <div className="moneyline">
                  <span className="moneyline-total money-line-txt ">Total</span>
                  <span className="currency-total">
                    <span className="currency">USD</span>
                    <span className="moneyline-total-amt amt">$5000</span>
                  </span>
                </div>
              </div>
              <hr className="hr-4" />
              <button className="checkout-btn">Confirm & Pay</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
