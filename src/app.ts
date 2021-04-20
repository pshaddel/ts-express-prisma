import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import dotenv from "dotenv";
import Config from "../config";
import { userRouter } from "./user/user.controller";

dotenv.config();
const config = Config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, AUTHORIZATION"
  );
  next();
});

app.get("/ping", (_req: Request, res: Response) => {
  res.send("pong");
});

app.post("/user", userRouter);

app.listen(config.PORT);
console.info("App is listenng on port:", config.PORT);
