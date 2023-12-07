import { useState, useEffect } from "react";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/screen1/Home";
import EventDetails from "./components/screen2/EventDetails";
import Ordersummary from "./components/screen3/Ordersummary";
import BillPDF from "./components/Bill";
// Creating a new context for global state management and avoiding prop drilling
export const EventContext = createContext();
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
  }, []); // Empty dependency array ensures the effect runs only once on mount preventing infinite request to API

  // Context provider values
  const contextValue = {
    error,
    setError,
    events,
    setEvents,
    eventdata,
    setEventdata,
    userinfo,
    setuserinfo,
    invoicedata,
    setinvoicedata,
    price,
    ticketcount,
    setticketcount,
    totalprice,
    settotalprice,
  };

  return (
    <EventContext.Provider value={contextValue}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<EventDetails />} />
          <Route path="details/checkout" element={<Ordersummary />} />
          <Route path="details/checkout/invoice" element={<BillPDF />} />
        </Routes>
      </BrowserRouter>
    </EventContext.Provider>
  );
}

export default App;
