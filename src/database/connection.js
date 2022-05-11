import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const connection = new Sequelize( 'postgres://catalogo_08fr_user:znlX65r2BxZXMsBao5juGflXc1TYqB7p@dpg-c9u42inho1kvad3k3g10-a.oregon-postgres.render.com/catalogo_08fr',
  {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})


