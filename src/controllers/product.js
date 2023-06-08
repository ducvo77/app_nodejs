import { badRequests, internalServerError } from "../middlewares/handleErrors";
import * as services from "../services";

export const createProduct = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description)
      return badRequests("Missing name or description of product!!");
    const response = await services.createProduct(req.body);
    return res.status(200).json(response);
  } catch {
    return internalServerError(res);
  }
};

export const search = async (req, res) => {
  try {
    const query = req.query.q;
    const response = await services.search(query);
    return res.status(200).json(response);
  } catch {
    return internalServerError(res);
  }
};
