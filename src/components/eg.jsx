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

//            <div>
// <View
//                 style={{
//                   borderTop: "2px dotted black",
//                   marginTop: "50px",
//                 }}
//               >
//                 {/* ticket design */}
//                 <View
//                   style={{
//                     display: "flex",
//                     width: "60%",
//                     flexDirection: "row",
//                     backgroundColor: "white",
//                     gap: "15px",
//                     padding: "40px 20px",
//                     margin: "40px 0px",
//                     borderRadius: "10px",
//                   }}
//                 >
//                   <View
//                     style={{
//                       width: "70px",
//                       height: "85px",
//                       borderRadius: "10px",
//                       overflow: "hidden",
//                     }}
//                   >
//                     <Image
//                       style={{
//                         width: "100%",

//                         objectFit: "cover",
//                       }}
//                       src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
//                     />
//                   </View>
//                   <View
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",

//                       gap: "10px",
//                     }}
//                   >
//                     <View>
//                       <Text
//                         style={{
//                           fontSize: "14px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         Ant man and quantamania
//                       </Text>
//                     </View>
//                     <View>
//                       <Text style={styles.tickettext}>
//                         Sat, Apr 30, 2022 11:30 AM
//                       </Text>
//                     </View>
//                     <View
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                         gap: "10px",
//                       }}
//                     >
//                       <Image
//                         style={{
//                           width: "15px",
//                           height: "auto",
//                         }}
//                         src="assets/ticketicon.png"
//                       />
//                       <Text style={styles.tickettext}>X1</Text>
//                     </View>
//                     <View
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                         gap: "1px",
//                       }}
//                     >
//                       <Text style={styles.tickettext}>Total: </Text>
//                       <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
//                         $5000
//                       </Text>
//                     </View>
//                   </View>
//                 </View>

//                 {/* ticket design end here */}
//               </View>
//            </div>

//             </EventDetails>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
