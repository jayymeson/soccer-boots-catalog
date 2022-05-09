import express from "express";
import { getIndex, getDetails } from "../controller/Controllador.js";
export const routers = express.Router();

routers.get("/", getIndex);
routers.get("/details/:id", getDetails);
