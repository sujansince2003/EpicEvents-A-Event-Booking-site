// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route
//           path="/"
//           element={<Home events={events} setEventdata={setEventdata} />}
//         />
//         <Route
//           path="/detail"
//           element={
//             <EventDetails
//               eventdata={eventdata}
//               ticketcount={ticketcount}
//               price={price}
//               setticketcount={setticketcount}
//               settotalprice={settotalprice}
//             >
//               {/* Nested Route for checkout under EventDetails */}
//               <Route
//                 path="checkout"
//                 element={
//                   <Ordersummary
//                     price={price}
//                     totalprice={totalprice}
//                     eventdata={eventdata}
//                   />
//                 }
//               />
//             </EventDetails>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
