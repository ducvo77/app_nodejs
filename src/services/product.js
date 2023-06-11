import db, { sequelize } from "../models";

export const addProduct = ({ name, description }) =>
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

export const getProduct = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Product.findAll({
        where: { id },
      });
      resolve({
        err: 1,
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateProduct = (id, name, description) =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await db.Product.update(
        { name, description },
        { where: { id } }
      );
      resolve({
        err: result ? 1 : -1,
        message: result ? "Update Successfully!!" : "Update failure!!",
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteProduct = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await db.Product.destroy({
        where: { id },
      });
      resolve({
        err: result ? 1 : -1,
        message: result ? "Delete Successfully!!" : "Delete failure!!",
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
