import { badRequests, notAuth } from "./handleErrors";
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return badRequests("Require authorization!", res);
  const accessToken = token.split(" ")[1];
  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if (err) return notAuth("Token may be expired or invalid!", res);
    req.user = user;
    next();
  });
};

export default verifyToken;
