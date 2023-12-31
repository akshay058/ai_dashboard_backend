const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // port number is 8080
const path = require("path");

// Middleware for parsing JSON requests
app.use(express.json());

// Helper function to check valid metrics data
function isValidMetricsData(data) {
  if (!data || typeof data !== "object") {
    return false;
  }

  // Performing more specific validation checks here
  if (
    typeof data.accuracy !== "number" ||
    typeof data.precision !== "number" ||
    typeof data.recall !== "number"
  ) {
    return false;
  }
  return true;
}
app.get("/", (req, res) => {
  try {
    return res.status(200).send("Welcome to Backend");
  } catch (err) {
    console.log("Error in get request", err);
  }
});

// API endpoint to get mock AI metrics data
app.get("/api/metrics", (req, res) => {
  try {
    const metricsData = require("./data/metrics.json");
    if (!isValidMetricsData(metricsData)) {
      res.status(500).json({ error: "Invalid metrics data" });
      return;
    }
    res.json(metricsData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// API endpoint to get simulated AI predictions and actual results
app.get("/api/predictions", (req, res) => {
  try {
    const predictionsData = require("./data/predictions.json");
    res.json(predictionsData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
