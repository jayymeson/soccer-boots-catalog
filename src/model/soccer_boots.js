import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const soccer_boots = connection.define(
  "soccer_boots",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },
    model_name: {
      type: Sequelize.STRING,
      allowNULL: false,
    },
    brand_name: {
      type: Sequelize.STRING,
      allowNULL: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNULL: false,
    },
    size: {
      type: Sequelize.STRING,
      allowNULL: false,
    },
    value: {
      type: Sequelize.STRING,
      allowNULL: false,
    },
    link_img: {
      type: Sequelize.STRING,
      allowNULL: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

const initTable = async () => {
  await soccer_boots.sync()
}

initTable();
