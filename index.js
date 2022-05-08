import exp from "constants";
import express from "express";
import { Server } from "http";
import { routers } from "./src/routers/routers.js";
import path from "path";
import dotenv from 'dotenv'
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const __dirname = path.resolve(path.dirname(''));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(routers);


app.listen(port, () => {
    console.log(`Rodando na porta http://localhost:${port}`)
}) ;