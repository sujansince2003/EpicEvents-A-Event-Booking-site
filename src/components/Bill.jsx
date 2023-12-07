import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const BillPDF = ({ userinfo, eventdata }) => {
  console.log(userinfo);
  console.log(eventdata);
  let num = 5;
  const renderTickets = () => {
    return Array.from({ length: num }, (_, index) => (
      <View
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
              src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
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
                Ant man and quantamania
              </Text>
            </View>
            <View>
              <Text style={styles.tickettext}>Sat, Apr 30, 2022 11:30 AM</Text>
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
                src="assets/ticketicon.png"
              />
              <Text style={styles.tickettext}>X1</Text>
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
                $5000
              </Text>
            </View>
          </View>
        </View>

        {/* ticket design end here */}
      </View>
    ));
  };

  return (
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
                <Text style={styles.invoicetext}>Invoice Id:4324523423</Text>
                <Text style={styles.invoicetext}>Invoice Id:4324523423</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.invoicetext}>Invoice Id:4324523423</Text>
                <Text style={styles.invoicetext}>Invoice Id:4324523423</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.invoicetext}>Invoice Id:4324523423</Text>
                {/* <Text style={styles.invoicetext}>Invoice Id:4324523423</Text> */}
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
                    <Text>Ant man and quantamania</Text>
                  </View>
                  <View style={{ ...styles.column, ...{ width: "80px" } }}>
                    <Text>movie</Text>
                  </View>
                  <View style={{ ...styles.column, ...{ width: "60px" } }}>
                    <Text>X2</Text>
                  </View>
                  <View style={{ ...styles.column, ...{ width: "70px" } }}>
                    <Text>$500</Text>
                  </View>
                  <View style={{ ...styles.column, ...{ width: "70px" } }}>
                    <Text>00</Text>
                  </View>
                  <View style={{ ...styles.column, ...{ width: "80px" } }}>
                    <Text>1130</Text>
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
                      Invoice Total :USD $11120
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

    // borderBottomWidth: 1,
    // borderBottomColor: "transparent",
    // borderBottomStyle: "solid",
    fontSize: "10px",
    textAlign: "center",
    padding: "10px 0px",
  },
  column: {
    // width: "16.67%", // 100% divided by 6 columns
    // borderRightWidth: 1,
    // borderRightColor: "#000",
    // borderRightStyle: "solid"
    padding: 5,
    textAlign: "center",
  },
  movieDetails: {
    marginTop: 10,
    marginBottom: 20,
  },
  movieDetail: {
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default BillPDF;
