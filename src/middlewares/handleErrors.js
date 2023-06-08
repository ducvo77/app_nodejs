import createHttpError from "http-errors";

export const badRequests = (error, res) => {
  const err = new createHttpError.BadRequest(error);
  return res.status(err.status).json({
    err: -1,
    message: err.message,
  });
};

export const notFound = (res) => {
  const err = new createHttpError.NotFound();
  // return res.status(err.status).json({
  //   err: -1,
  //   message: err.message,
  // });
  return res.send("NOT FOUND!!");
};

export const internalServerError = (res) => {
  const err = new createHttpError.InternalServerError();
  return res.status(err.status).json({
    err: -1,
    message: err.message,
  });
};

export const notAuth = (error, res) => {
  const err = new createHttpError.Unauthorized(error);
  return res.status(err.status).json({
    err: -1,
    message: err.message,
  });
};
