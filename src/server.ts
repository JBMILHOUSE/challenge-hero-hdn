import "reflect-metadata";
import express from "express";  // importe do express

import { router } from "./routes";
import "./database";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running"));
