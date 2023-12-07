import React from "react";
import BillPDF from "./Bill";

const BillingComponent = ({ userinfo }) => {
  // Sample movie details, billing info, and total amount
  const movieDetails = [
    { title: "Movie 1", quantity: 2 },
    { title: "Movie 2", quantity: 1 },
    // Add more movie details
  ];

  const billingInfo = {
    name: "John Doe",
    email: "john@example.com",
    // Add more billing info
  };

  const totalAmount = 150; // Total amount

  return (
    <div>
      <h1>Billing Details</h1>
      {/* Other billing components */}
      <BillPDF
        movieDetails={movieDetails}
        billingInfo={billingInfo}
        totalAmount={totalAmount}
      />
    </div>
  );
};

export default BillingComponent;
