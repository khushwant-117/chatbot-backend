// all application codes will be handeled here
import  express  from "express";
import {config} from "dotenv";
import morgan from "morgan"
config();
 import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
const app = express();
import cors from "cors";


//middeware 
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET))
//remove it in production
app.use(morgan("dev"));
  
app.use("/api/v1", appRouter);


export default app;