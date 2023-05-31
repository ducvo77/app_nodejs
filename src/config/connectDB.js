import { Sequelize } from "sequelize";

const sequelize = new Sequelize("pttkht_tutorial", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export const checkDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection database sucessfully!!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkDb();
