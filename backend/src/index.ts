import express, {Application, Request, Response, NextFunction} from "express";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
})

const app : Application = express();

const port = process.env.PORT 

app.get("/", (req: Request, res: Response, next: NextFunction)=>{
    res.status(200).json({
        message: "This is TicketThrift",
        Description: "Not getting tickets!! Do not worry !! We are there to cover you!!"
    })
})

app.listen(port, ()=>{
    console.log(`The server is listening on ${port}`)
})