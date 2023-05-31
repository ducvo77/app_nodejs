import db from "../models";
import bcrypt from "bcrypt";

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const register = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const [user, created] = await db.User.findOrCreate({
        where: { email },
        defaults: {
          email,
          password: hashPassword(password),
        },
      });
      resolve({
        err: created ? "1" : "0",
        message: created ? "Register sucssfully!!" : "Email is used",
      });
    } catch {
      reject(error);
    }
  });
