import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv';
import * as database from "./config/database";
import clientRoutes from "./routes/clients/index.route";
import bodyParser  from "body-parser";
// import cookieParser from 'cookie-parser';
const cookieParse = require("cookie-parser");

const app: Express = express ();
const port: number | string = process.env.PORT || 3000;
dotenv.config();

app.set("views", "./views");
app.set("view engine", "pug");

// Flash
app.use(cookieParse());

// sử dụng file tĩnh
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))




// connect database
database.connect();

// router
clientRoutes(app);

app.listen(port, ()=> {
    console.log("App is listening on port "+ port);
})