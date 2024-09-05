const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/api/league-data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://fantasy.espn.com/apis/v3/games/ffl/seasons/2024/segments/0/leagues/446679"
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching league data:", error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
