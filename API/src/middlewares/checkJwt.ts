import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { auth } from "../config/Auth";
import { register } from "../repository/ormUtilizado";

export const checkJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return res
      .status(401)
      .json({ error: true, code: 130, message: `O token está expirado!!` });
  }
  const [bearer, token] = authorization.split(" ");
  try {
    const decoded = jwt.verify(token, auth.secret);
    if (!decoded) {
      return res.status(401).json({
        error: true,
        code: 130,
        message: `O token está expirado!!`,
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send({
      error: true,
      code: 130,
      message: `O token está invalido!!`,
    });
  }
};
