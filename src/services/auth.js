import db from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

      let token = created
        ? jwt.sign(
            { id: user.id, email: user.email, role_code: user.role_code },
            process.env.JWT_SECRET,
            { expiresIn: "5d" }
          )
        : null;
      resolve({
        err: created ? "1" : "0",
        message: created ? "Register Successfully!!" : "Email is used",
        access_token: token ? `Bearer ${token}` : token,
      });
    } catch (error) {
      reject(error);
    }
  });

export const login = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const account = await db.User.findOne({ where: { email }, raw: true });
      let isChecked = account && bcrypt.compareSync(password, account.password);
      let token = isChecked
        ? jwt.sign(
            {
              id: account.id,
              email: account.email,
              role_code: account.role_code,
            },
            process.env.JWT_SECRET,
            { expiresIn: "5d" }
          )
        : null;
      if (isChecked) {
        resolve({
          err: "1",
          message: "Login is Successfully",
          access_token: `Bearer ${token}`,
        });
      } else {
        resolve({
          err: "-1",
          message: "Email or Password is Incorrect",
          access_token: token,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
