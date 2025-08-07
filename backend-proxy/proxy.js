const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

const API_TOKEN = 'bfe38c87fb5f4f55b98f9a752aba2cef';

app.get('/standings/:league', async (req, res) => {
  const leagueCode = req.params.league;
  try {
    const response = await axios.get(`https://api.football-data.org/v4/competitions/${leagueCode}/standings`, {
      headers: {
        'X-Auth-Token': API_TOKEN,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/teams/:id", async (req, res) => {
  const teamCode = req.params.id;
  console.log(`Fetching teams for league: ${teamCode}`);
  try {
    const response = await axios.get(
      `https://api.football-data.org/v4/teams/${teamCode}`,
      {
        headers: {
          "X-Auth-Token": API_TOKEN,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/matches", async (req, res) => {
  try {
    const { dateFrom } = req.query;
    const date = new Date().toISOString().split("T")[0];
    const response = await axios.get(
      "https://api.football-data.org/v4/matches",
      {
        headers: {
          "X-Auth-Token": API_TOKEN,
        },
      },
      {
        params: {
          dateFrom: dateFrom,
          dateTo: date,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});

