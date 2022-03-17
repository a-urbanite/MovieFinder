import express, { Application, Request, Response } from "express";
import cors from 'cors';
// var zlib = require('zlib')
// var request = require('request')
// const bent = require('bent')

const fetch = require("node-fetch");
// import fetch from "node-fetch";

// import http from 'node:http';
// import decompressResponse from 'decompress-response';

const app: Application = express();
const port = 8080;

// Body parsing Middleware

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/movies", async (req: Request, res: Response): Promise<Response> => {
        console.log('request received:', req.query)


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
  console.log('request received:', req.query)


  const details = await fetch(`https://imdb-api.com/en/API/Title/k_q89zsv15/${req.query.id}`)
    .then((response: { text: () => any; }) => response.text())
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      console.error(error);
    });

  console.log(details)
  return res
    .status(200)
    .json(details);

}
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}