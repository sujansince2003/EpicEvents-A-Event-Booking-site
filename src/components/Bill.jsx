import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../App";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
/**
 * @description
 * this one was challenging  and something i tried for first time.for generating PDF i am using react-pdf library
 * it has rendering components that includes
 * PDF Rendering Components
 *    - <Document>: Defines the root component for the PDF document.
 *    - <Page>: Represents a single page within the PDF document.
 *    - <Text>: Component to render text content within a PDF page.
 *    - <View>: General-purpose component for layout and structuring within a page.
 *    - <Image>: Renders images within the PDF document.
 * for styling we use css styles object.text, images, and other elements can be added dynamically based on application data.
 *
 *  a button with Home icon is placed in top of component which redirect to home page by reloading the page so that all states are reset to initial value
 * if user want to maintain same state then user can redirect to homepage from home button on nav bar or clicking in logo
 *
 * with this library i was able to generate pdf based on the data i have
 *   this includes customer details along with order date which is updated acording to current date
 *   billing detail including price,VAT,discount,totalAmount
 *   number of ticket based on number of ticket for eg if 3 tickets are booked 3 tickets are generated
 *   if user direcly visit this component without visting previous page,blank or dummy data is rendered
 *
 * @param {object}  userinfo  includes data related to user i.e name,address,country,etc which was received from form
 * @param {object}  evendata  includes data related to movie i.e title,poster,event date,event location etc which was selected by user received from API
 * @param {object}  invoicedata  includes data related to billing i.e price,number of ticket,VAT,discount etc which was received from orderSummary component
 *
 * @returns Invoice pdf
 *
 *
 *
 *
 */
const BillPDF = () => {
  const { userinfo, eventdata, invoicedata } = useContext(EventContext);
  const navigate = useNavigate();

  const redirectToHome = () => {
    const confirm = window.confirm(
      "Are you sure want to get back to HomePage? All data will be reset to initial values"
    );
    if (!confirm) return;
    // Redirect to the home page
    navigate("/");
    // Reload the home page so that all states are reset to initial values

    window.location.reload();
  };

  console.log(userinfo);
  console.log(eventdata);

  let numoftickets = invoicedata.ticketcount;
  const renderTickets = () => {
    return Array.from({ length: numoftickets }, (_, index) => (
      <View
        key={index}
        style={{
          borderTop: "2px dotted black",
          marginTop: "50px",
        }}
      >
        {/* ticket design */}
        <View
          style={{
            display: "flex",
            width: "60%",
            flexDirection: "row",
            backgroundColor: "white",
            gap: "15px",
            padding: "40px 20px",
            margin: "40px 0px",
            borderRadius: "10px",
          }}
        >
          <View
            style={{
              width: "70px",
              height: "85px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                width: "100%",

                objectFit: "cover",
              }}
              src={eventdata.Poster || "/assets/ticketicon.png"}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              gap: "10px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {eventdata.Title || "select from home page"}
              </Text>
            </View>
            <View>
              <Text style={styles.tickettext}>
                Sat, {eventdata.EventDate} 11:30 AM
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image
                style={{
                  width: "15px",
                  height: "auto",
                }}
                src="/assets/ticketicon.png"
              />
              <Text style={styles.tickettext}>X 1</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Text style={styles.tickettext}>Total: </Text>
              <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                ${invoicedata.normalPrice || 0.0}
              </Text>
            </View>
          </View>
        </View>

        {/* ticket design end here */}
      </View>
    ));
  };

  return (
    <>
      <div className="gotohome">
        <img
          title="Cliking on this will redirect to homepage and reset all data to initial values"
          onClick={redirectToHome}
          src="/assets/home.png"
          alt=""
        />
      </div>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <Page size={{ width: 595, height: 1000 }} style={styles.page}>
            <View
              style={{
                backgroundColor: "red",
              }}
            >
              <Text
                style={{
                  fontSize: "20px",
                  padding: "20px",
                  letterSpacing: "1px",
                }}
              >
                Epic Events
              </Text>
            </View>

            <View
              style={{
                padding: "20px ",
              }}
            >
              {/*Container  */}
              <Text
                style={{
                  paddingBottom: "20px",
                }}
              >
                Invoice
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.invoicetext}>
                    Invoice to {userinfo.fname || "--------------"}
                  </Text>
                  <Text style={styles.invoicetext}>
                    Invoice ID : {eventdata.imdbID || "---------"}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.invoicetext}>
                    {userinfo.address || "--------"},
                    {userinfo.city || "----------"}
                  </Text>
                  <Text style={styles.invoicetext}>
                    Order Date: {userinfo.currentDate || "--------------"}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.invoicetext}>
                    {userinfo.state},{userinfo.country || "--------------"}
                  </Text>
                </View>

                {/* form */}
                <View style={styles.table}>
                  {/* First row */}
                  <View
                    style={{
                      ...styles.row,
                      ...{ borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                    }}
                  >
                    <View style={{ ...styles.column, ...{ width: "30px" } }}>
                      <Text>#</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "160px" } }}>
                      <Text>Event detail</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "80px" } }}>
                      <Text>Event-type</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "60px" } }}>
                      <Text>Ticket</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "70px" } }}>
                      <Text>Unit Price</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "70px" } }}>
                      <Text>Discount</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "80px" } }}>
                      <Text>Total</Text>
                    </View>
                  </View>
                  {/* Second row */}
                  <View
                    style={{
                      ...styles.row,
                      ...{ backgroundColor: "white" },
                    }}
                  >
                    <View style={{ ...styles.column, ...{ width: "30px" } }}>
                      <Text>1</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "160px" } }}>
                      <Text>{eventdata.Title || "-----"}</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "80px" } }}>
                      <Text>{eventdata.Type || "-----"}</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "60px" } }}>
                      <Text>X{invoicedata.ticketcount || "----"}</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "70px" } }}>
                      <Text>${invoicedata.normalPrice || "----"}</Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "70px" } }}>
                      <Text>
                        ${invoicedata.disamt} (
                        {invoicedata.dispercent || "----"}
                        %)
                      </Text>
                    </View>
                    <View style={{ ...styles.column, ...{ width: "80px" } }}>
                      <Text>${invoicedata.total || "----"}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      ...styles.row,
                      ...{
                        display: "flex",
                        justifyContent: "flex-end",
                        backgroundColor: "white",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTop: "0.5px solid rgba(85, 105, 135, 1)",
                      },
                    }}
                  >
                    <View style={{ ...styles.column, ...{ width: "200px" } }}>
                      <Text
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          padding: "15px 0",
                        }}
                      >
                        Invoice Total :USD $
                        {invoicedata.total || "--------------"}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* main ticket container */}
              <View>
                {/* ticket */}

                {renderTickets()}
                {/* ticket end here */}
              </View>
              {/* main ticket container ends here */}
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "rgba(247, 248, 249, 1)",
  },
  container: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
  billingInfo: {
    marginBottom: 10,
  },
  invoicetext: {
    fontSize: 14,
    color: "rgba(85, 105, 135, 1)",
  },
  tickettext: {
    fontSize: 10,
    color: "rgba(85, 105, 135, 1)",
  },
  table: {
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "rgba(85, 105, 135, 1)",
    borderStyle: "solid",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgba(247, 248, 249, 1)",
    fontSize: "10px",
    textAlign: "center",
    padding: "10px 0px",
  },
  column: {
    padding: 5,
    textAlign: "center",
  },
});

export default BillPDF;
