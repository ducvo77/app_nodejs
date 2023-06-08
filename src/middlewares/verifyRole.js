import { notAuth } from "./handleErrors";

const verifyRole = (req, res, next) => {
  const { role_code } = req.user;
  if (role_code !== "R1") return notAuth("Require is Admin", res);
  next();
};

export default verifyRole;
