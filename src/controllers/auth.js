import { badRequests, internalServerError } from "../middlewares/handleErrors";
import * as services from "../services";
import { schemaUser } from "../helpers/joiSchema";

export const register = async (req, res) => {
  try {
    const { error } = schemaUser.validate(req.body);
    if (error) return badRequests(error.details[0].message, res);
    const response = await services.register(req.body);
    return res.status(200).json(response);
  } catch {
    return internalServerError(req, res);
  }
};

export const login = async (req, res) => {
  try {
    const { error } = schemaUser.validate(req.body);
    if (error) return badRequests(error.details[0].message, res);
    const response = await services.login(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(req, res);
  }
};
