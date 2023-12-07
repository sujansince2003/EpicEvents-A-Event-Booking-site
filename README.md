                                     # EpicEvents-A Event Booking Site
#### Date of completion: 7 Dec 2023 |
<div id="top"></div>

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router)
![React-Hook=Form](https://img.shields.io/badge/-React%20Hook%20Form-CA4245?)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://epicevents-suzancodes.netlify.app/">
    <img src="/public/assets/logo.png" alt="Logo" height="80"  >
  </a>
  <h1 align="center">EpicEvents</h1>

  <p align="center">
    <a href="https://epicevents-suzancodes.netlify.app/">View Demo</a>
    ·

  </p>
</div>

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

To run this app in ypur local machine, follow these steps:

Sure, here's a step-by-step README for running a React app built with Create React App on a local machine:

### Prerequisites:

- Node.js installed on your machine. You can download it from [Node.js website](https://nodejs.org/).
- npm or Yarn package manager installed (npm comes with Node.js installation).

### Steps:

1. **Clone or download the project from a repository**:

   - If the project is hosted on GitHub, you can clone it using `git clone` command:
     ```bash
     git clone https://github.com/sujansince2003/Epic-Events-assignment.git
     ```
   - Alternatively, you can download and extract the project ZIP file from its repository.

2. **Navigate to the project directory**:

   - Open a terminal or command prompt and navigate to the root directory of the project using the `cd` command:
     ```bash
     cd project-name
     ```

3. **Install dependencies**:

   - Use npm or Yarn to install the required dependencies for the project:
     - If using npm:
       ```bash
       npm install
       ```
     - If using Yarn:
       `bash
yarn install
`
       This will install all the necessary packages mentioned in the `package.json` file.

4. **Start the development server**:

   - After installing dependencies, start the development server:
     - If using npm:
       ```bash
       npm start
       ```
     - If using Yarn:
       `bash
yarn start
`
       This command will start the development server and open the app in your default web browser at `http://localhost:3000`. Any changes you make in the code will automatically refresh the app in the browser.

5. **View the React app**:

   - Open a web browser and navigate to `http://localhost:3000` if it doesn't automatically open after starting the development server. You should see your React app running locally.

6. **Stopping the development server**:

   - To stop the development server, go to the terminal where the server is running and press `Ctrl + C`.

7. **Build the app for production (optional)**:
   - When you're ready to deploy the app, you can create an optimized production build using:
     - If using npm:
       ```bash
       npm run build
       ```
     - If using Yarn:
       `bash
yarn build
`
       This command will create a `build` folder containing optimized static files ready to be deployed to a web server.

That's it! You should now have your React app up and running on your local machine.

## Usage

To use this app, follow these steps:

1. Browse the results of movies received from omdbAPI and click on a movie to view more details.
2. Select the number of tickets you want to purchase and click "Buy Tickets".
3. Enter your personal information and click "Submit".
4. Review your order summary and click "Confirm Order".
5. Generate the Invoice PDF .
