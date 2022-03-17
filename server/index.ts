import express, { Application, Request, Response } from "express";
import cors from 'cors';


// import fetch from "node-fetch";

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

        // const movies = await fetch(`http://www.omdbapi.com/?s=${req.query.name}&apikey=d2fee921&page=1`)
        // console.log(movies)


        return res
          .status(200)
          .json({
            "message": "Hello from the backend!",
        });
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