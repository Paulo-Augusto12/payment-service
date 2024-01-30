import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function validateJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET as string, (error, userData) => {
      if (error) {
        return res
          .status(500)
          .json({ error: "Houve um erro por parte do servidor" });
      }
      req.userData = userData
      next();
    });
  } else {
    return res.status(401).json({
      unauthorized:
        "Um token de autenticação válido não foi providenciado durant sua requisição",
    });
  }
}

export { validateJWT };
