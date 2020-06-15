import express from "express"
import logger from "morgan"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import helmet from "helmet"

const app = express();
const PORT = 4000;

const handleHome = (req, res) => res.send("Hello, welcome to my home!");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(logger("dev"));

app.get("/", handleHome)

app.listen(PORT, () => {
    console.log(`✅ listening on http://localhost:${PORT}`)
}); 