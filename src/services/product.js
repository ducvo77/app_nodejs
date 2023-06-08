import db, { sequelize } from "../models";

export const createProduct = ({ name, description }) =>
  new Promise(async (resolve, reject) => {
    try {
      const [, created] = await db.Product.findOrCreate({
        where: { name },
        defaults: {
          name,
          description,
        },
      });
      resolve({
        err: created ? 1 : -1,
        message: created
          ? "Product is created Successfully"
          : "The Name of Product used",
      });
    } catch (error) {
      reject(error);
    }
  });

export const search = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const users = await db.Product.findAll({
        limit: 10,
        where: {
          name: sequelize.where(
            sequelize.fn("LOWER", sequelize.col("name")),
            "LIKE",
            "%" + query.toLowerCase() + "%"
          ),
        },
      });
      resolve({
        err: 1,
        data: users,
      });
    } catch (error) {
      reject(error);
    }
  });
