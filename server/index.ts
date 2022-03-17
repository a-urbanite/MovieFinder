import express, { Application, Request, Response } from "express";
import cors from 'cors';
// var zlib = require('zlib')
var request = require('request')
const bent = require('bent')

const fetch = require("node-fetch");
// import fetch from "node-fetch";

// import http from 'node:http';
// import decompressResponse from 'decompress-response';

const app: Application = express();
const port = 8080;

// Body parsing Middleware

app.use(cors())
// app.use(cors({
//   origin: 'http://localhost:3000/'
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
        console.log('request received:', req.query.name)

        // let movies='';
        // const movies2 = await request({ method: 'GET', uri: `http://www.omdbapi.com/?s=${req.query.name}&apikey=d2fee921&page=1`}, 
        //   function (error:any, response:any, body:any) {
        //     console.log('BODY:', body)
        //     movies += body
        //     // return body
        //   }
        // )
        // // console.log('MOVIES2', movies2)
        // console.log('MOVIES',movies)

        // const getStream = bent(`http://www.omdbapi.com/?s=${req.query.name}&apikey=d2fee921&page=1`)
        // let stream = await getStream('/json.api')
        // // status code
        // stream.status // 200
        // stream.statusCode // 200
        // // optionally decode
        // const obj = await stream.json()
        // // or
        // const str = await stream.text()


        const movies = await fetch(`http://www.omdbapi.com/?s=${req.query.name}&apikey=d2fee921&page=1`)
          .then((response: { text: () => any; }) => response.text())
          .then((data: any) => {
            // console.log('INSIDE FETCH', data);
            return data;
          })
          .catch((error: any) => {
            console.error(error);
          });
        console.log('MOVIE', movies)

        // http.get(`http://www.omdbapi.com/?s=${req.query.name}&apikey=d2fee921&page=1`, response => {
        //   response = decompressResponse(response);
        //   console.log('NEW TST',response)
        // });
        
        // const test = zlib.gunzip(movies.body, (err:any, dezipped:any) => {
        //   console.log(dezipped.toString())
        // })
        // console.log(test)
        // .then(res => res.text())
        // .then(data => {
        //   const result = convert.xml2js(data);
        //   console.log("result in json: ", result);
        // })
        // .catch(err => console.log(err));
        // const movies = response.json()
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch((error) => {
        //   console.error(error);
        // });
        // console.log(movies.body)


        return res
          .status(200)
          .json(movies);
        //   .send({
        //     message: "Hello World!",
        // });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}