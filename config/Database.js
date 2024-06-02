import { Sequelize } from "sequelize";

const db = new Sequelize("cars_db", "root", "", {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  dialect: "mysql",
});

export default db;
