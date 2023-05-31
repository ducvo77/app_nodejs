import createHttpError from "http-errors";

export const badRequests = (req, res) => {
  const err = new createHttpError.BadRequest();
  return res.status(err.status).json({
    err: -1,
    message: err.message,
  });
};

export const notFound = (req, res) => {
  const err = new createHttpError.NotFound();
  return res.status(err.status).json({
    err: -1,
    message: err.message,
  });
};

export const internalServerError = (req, res) => {
  const err = new createHttpError.InternalServerError();
  return res.status(err.status).json({
    err: -1,
    message: err.message,
  });
};
