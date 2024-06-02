import { Sequelize } from "sequelize";

const db = new Sequelize("cars_db", "root", "", {
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DBNAME,
  dialect: "mysql",
});

export default db;
