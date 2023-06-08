import { internalServerError } from "../middlewares/handleErrors";
import * as services from "../services";

const getCurrent = async (req, res) => {
  try {
    const { id } = req.user;
    const response = await services.getOne(id);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

export { getCurrent };
