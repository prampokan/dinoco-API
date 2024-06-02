import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Car = db.define(
  "cars",
  {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    type: DataTypes.STRING,
    year: DataTypes.INTEGER,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  },
);

export default Car;

(async () => {
  await db.sync();
})();
