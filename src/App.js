import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/screen1/Header";
import Home from "./components/screen1/Home";
import EventDetails from "./components/screen2/EventDetails";
import Ordersummary from "./components/screen3/Ordersummary";
// import BillingComponent from "./components/Billcomp";
import BillPDF from "./components/Bill";

const API_URL = "https://www.omdbapi.com/?apikey=35f704b1";
function App() {
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]); //events i.e movie here are fetched from API
  const [eventdata, setEventdata] = useState({}); //setting state for screen 2 i.e for individual eventdetails and ticketing
  const [userinfo, setuserinfo] = useState({});
  const [invoicedata, setinvoicedata] = useState({});
  let price = 500;
  const [ticketcount, setticketcount] = useState(1);
  const [totalprice, settotalprice] = useState(price);
  console.log(totalprice);

  useEffect(() => {
    const searchEvents = async (title) => {
      try {
        const response = await fetch(`${API_URL}&s=${title}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEvents(data.Search || []); // Update events state with fetched data
        setError(null); // Reset error state if the fetch is successful
      } catch (error) {
        setError(
          "Failed to fetch data. Please try again.Trying reloading the page or Check your connection"
        ); // Set error message
        setEvents([]); // Reset events state in case of an error
      }
    };

    searchEvents("avengers"); // Trigger API request on component mount
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // console.log(userinfo);
  // console.log(eventdata);
  console.log(ticketcount);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home events={events} setEventdata={setEventdata} error={error} />
            }
          />
          <Route
            path="/details"
            element={
              <EventDetails
                eventdata={eventdata}
                ticketcount={ticketcount}
                price={price}
                setticketcount={setticketcount}
                settotalprice={settotalprice}
              />
            }
          />

          <Route
            path="details/checkout"
            element={
              <Ordersummary
                price={price}
                totalprice={totalprice}
                eventdata={eventdata}
                ticketcount={ticketcount}
                setuserinfo={setuserinfo}
                invoicedata={invoicedata}
                setinvoicedata={setinvoicedata}
                userinfo={userinfo}
              />
            }
          />
          <Route
            path="details/checkout/invoice"
            element={
              <BillPDF
                userinfo={userinfo}
                eventdata={eventdata}
                invoicedata={invoicedata}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <section className="hero3">
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
      </section> */}
    </>
  );
}

export default App;

//
