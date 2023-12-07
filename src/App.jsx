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
const API_URL = "https://www.omdbapi.com/?apikey=35f704b1"; //API URL with kEy to fetch data

/**
 * @description
 * The App component acts as the central hub for your React application, managing routing, global state, and rendering different screens/components based on user interactions and defined routes. It demonstrates the integration of React Router for navigation and Context API for state management in a movie event booking application.
 *
 * Dependencies
 * :::React: Provides the fundamental library for building the user interface.
 *:::React Router DOM: Allows  routing
 *:::OMDb API: Utilizes the OMDb API  to fetch movie data.
 *:::node-sass: for installing packages
 *:::React-Hook-form: for handling form and form validation
 *:::react-to-pdf: for generating pdf 
  
 *  ****  Global State Management ****
     - Context Creation: Utilizes createContext() to establish a global context (EventContext) for managing shared state across components, preventing prop drilling.

 *   *** State variables *****
      -error: Manages error messages during API fetch or data processing.
      -events: Stores fetched movie data from the OMDb API.
      -eventdata: Stores individual event details and ticketing information for screen 2 (EventDetails).
      -userinfo: Holds user-related information.
      -invoicedata: Stores data for generating invoices.
      -price, ticketcount, totalprice: Control pricing and ticket-related calculations.
 *    
 *    **** API Interaction ****
         - API Fetching: Uses fetch() within useEffect() to retrieve movie data from the OMDb API (API_URL) based on the movie title ("avengers" in this case).
         -Error Handling: Manages errors during API fetch and updates the error state accordingly.
 *
 *   ****  Routing and Components  ***
     React Router: Utilizes <BrowserRouter> and <Routes> from React Router DOM to define routes for different components:
            /: Renders the Home component.
            /details: Renders the EventDetails component.
            /details/checkout: Renders the Ordersummary component.  :::linking between routes::::
             /details/checkout/invoice: Renders the BillPDF component for generating invoices.   :::linking between routes::::
 *
 *
 * @returns
 */

function App() {
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]); //events i.e movie here are fetched from API
  const [eventdata, setEventdata] = useState({}); //setting state for screen 2 i.e for individual eventdetails and ticketing
  const [userinfo, setuserinfo] = useState({});
  const [invoicedata, setinvoicedata] = useState({});
  let price = 500;
  const [ticketcount, setticketcount] = useState(1);
  const [totalprice, settotalprice] = useState(price);

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
