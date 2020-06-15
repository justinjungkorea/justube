import express from "express"
import logger from "morgan"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import helmet from "helmet"
import { userRouter } from "./router"

const app = express();

const handleHome = (req, res) => res.send("Hello, welcome to my home!");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(logger("dev"));

app.get("/", handleHome)
app.use("/user", userRouter)

export default app;