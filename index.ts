import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv';
import * as database from "./config/database";
const app: Express = express();
const port: number | string = process.env.PORT || 3000;

dotenv.config();

app.set("views", "./views");
app.set("view engine", "pug");

// connect database
database.connect();

app.get("/topics",(req: Request, res: Response)=> {
    res.render("client/pages/topics/index.pug");
})
app.listen(port, ()=> {
    console.log("App is listening on port "+ port);
})