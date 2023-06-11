import { badRequests, internalServerError } from "../middlewares/handleErrors";
import * as services from "../services";

export const addProduct = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description)
      return badRequests("Missing name or description of product!!");
    const response = await services.addProduct(req.body);
    return res.status(200).json(response);
  } catch {
    return internalServerError(res);
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.getProduct(id);
    return res.status(200).json(response);
  } catch {
    return internalServerError(res);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    if (!name || !description)
      return badRequests("Missing name or description of product!!");
    const response = await services.updateProduct(id, name, description);
    return res.status(200).json(response);
  } catch {
    return internalServerError(res);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteProduct(id);
    return res.status(200).json(response);
  } catch {
    return internalServerError(res);
  }
};

export const search = async (req, res) => {
  try {
    const query = req.query.name;
    const response = await services.search(query);
    return res.status(200).json(response);
  } catch {
    return internalServerError(res);
  }
};
