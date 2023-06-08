import db from "../models";

export const getOne = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await db.User.findOrCreate({
        where: { id: userId },
        attributes: { exclude: ["password"] },
      });
      resolve({
        err: response ? "1" : "-1",
        message: response ? "Got!" : "User not found!",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
