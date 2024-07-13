import express from "express"; // Import the Express library
import axios from "axios"; // Import the Axios library for making HTTP requests

const app = express(); // Create an instance of an Express application
const port = 3000; // Define the port number for the server

app.use(express.static("public")); // Serve static files from the "public" directory

// Define the route for the root URL
app.get("/", async (req, res) => {
  try {
    // Make a GET request to the Secrets API to fetch a random secret
    const result = await axios.get("https://secrets-api.appbrewery.com/random");

    // Render the "index.ejs" template with the fetched secret and username
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    // Log any errors encountered during the API request
    console.log(error.response.data);

    // Send a 500 Internal Server Error response to the client
    res.status(500).send("An error occurred while fetching the secret.");
  }
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
