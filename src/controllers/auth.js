import * as services from "../services";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        err: -1,
        message: "Missing payloads",
      });
    }
    const response = await services.register(req.body);
    return res.status(200).json(response);
  } catch {
    return res.status(500).json({
      err: -1,
      message: "Internal Server Error",
    });
  }
};