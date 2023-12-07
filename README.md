## Introduction

This is a React app that allows users to search for movies and purchase tickets for upcoming events. The app includes the following features:

1. **Movie Selection Interface**: Displays a list of available movies with details (title, description, price, etc.) and allows users to select the quantity of tickets for each movie they want to purchase. Users can select only one card at a time.
2. **Price Calculation**: Calculates the total price based on the selected quantity of tickets for each movie with tax vat and discount.
3. **Billing Information Form**: Creates a form where users can enter their billing information (fullname, email, address, etc.). The form includes form validation to ensure proper input.
4. **Generation of Bill**: Generates a bill in PDF format containing the details of the selected movies, quantity, total price, and billing information.
5. **Integration and UI Design**: Integrates all components and ensures seamless functionality between movie selection, billing form, and bill generation. The app has a user-friendly interface for smooth navigation and a pleasing user experience.

## Libraries Used

- React Library for UI Functionality
- React Router for routing between pages and components
- node-sass for installing packages
- -React-Hook-form for handling form and form validation
- react-to-pdf for generating pdf

## Installation

To install this app, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Start the app by running `npm start`.

## Usage

To use this app, follow these steps:

1. Browse the results of movies received from omdbAPI and click on a movie to view more details.
2. Select the number of tickets you want to purchase and click "Buy Tickets".
3. Enter your personal information and click "Submit".
4. Review your order summary and click "Confirm Order".
5. Generate the Invoice PDF .
