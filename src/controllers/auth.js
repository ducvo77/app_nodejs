import { badRequests, internalServerError } from "../middlewares/handleErrors";
import * as services from "../services";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return badRequests(req, res);
    }
    const response = await services.register(req.body);
    return res.status(200).json(response);
  } catch {
    return internalServerError(req, res);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return badRequests(req, res);
    }

    const response = await services.login(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(req, res);
  }
};
