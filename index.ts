import express, { Application, Request, Response } from "express";
import cors from 'cors';
const path = require('path')
const fetch = require("node-fetch");

const app: Application = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Routes
app.get("/movies", async (req: Request, res: Response): Promise<Response> => {
  console.log('request received: movies')

  const movies = await fetch(`http://www.omdbapi.com/?s=${req.query.name}&apikey=d2fee921&page=${req.query.page}`)
    .then((response: { text: () => any; }) => response.text())
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      console.error(error);
    });

  return res
    .status(200)
    .json(movies);
  }
);

app.get("/movie", async (req: Request, res: Response): Promise<Response> => {
  console.log('request received: moviedetails')


  const details = await fetch(`https://imdb-api.com/en/API/Title/k_q89zsv15/${req.query.id}`)
    .then((response: { text: () => any; }) => response.text())
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      console.error(error);
    });

  return res
    .status(200)
    .json(details);
  }
);

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// Initialize server and basic error handling
try {
    app.listen(port, (): void => {
        console.log(`Express App running on http://localhost:${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}