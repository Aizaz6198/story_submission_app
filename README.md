Story Submission App
This is a simple web application built with Node.js and Express that allows users to submit and view stories. The application uses MongoDB as its database to store submitted stories.

Prerequisites
Before running the application, make sure you have the following installed:
-Node.js
-MongoDB


Installation:
-Clone the repository
-bash
-Copy code
-git clone <repository-url>


Install dependencies:
-bash
-Copy code
-npm install
-Update MongoDB connection details:

Open the app.js file and update the mongoUrl and dbName variables with your MongoDB connection string and desired database name.

Usage
Start the MongoDB server:

bash
Copy code
# Start MongoDB (replace <path-to-mongod> with your MongoDB installation path)
<path-to-mongod>


Run the application:
-bash
-Copy code
-npm start
The application will be accessible at http://localhost:3000.
Access the application in your web browser.


Submit a story by filling out the form on the homepage.
View submitted stories by navigating to the /stories endpoint.


Directory Structure:
public: Contains static files like HTML, CSS, and client-side JavaScript.
views: Contains HTML templates (currently only index.html).
data.json: (Deprecated) Previously used for storing data, now replaced with MongoDB.
app.js: Main application file with server logic.


Dependencies:
Express: Web application framework for Node.js.
Body-parser: Middleware for handling HTTP request data.
MongoDB: Official MongoDB driver for Node.js.



Contributing:
Feel free to contribute by submitting issues or pull requests.

