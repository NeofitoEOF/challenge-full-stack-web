import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { auth } from "../config/Auth";
import { register } from "../repository/ormUtilizado";

export const checkJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = <string>req.headers["auth"];
  let jwtPayload;
  try {
    jwtPayload = <any>jwt.verify(token, auth.secret);
    if (!jwtPayload) {
      return res
        .status(401)
        .json({ error: true, code: 130, message: `O token está expirado!!` });
    } else {
      const verifyId = await register.findByUnique(jwtPayload);
      console.log('Aqui', verifyId)
      if (!verifyId) throw new Error();
    }
  } catch (error) {
    res.status(401).send({
      error: true,
      code: 130,
      message: `O token está invalido!!`,
    });
  }
};
