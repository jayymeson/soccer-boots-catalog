import express from "express";
import { getIndex, getDetails, getDelete, getCreate, postCreate } from "../controller/Controllador.js";
export const routers = express.Router();

routers.get("/", getIndex);
routers.get("/details/:id", getDetails);
routers.get("/delete/:id" , getDelete);
routers.get("/create", getCreate);
routers.post("/create", postCreate);