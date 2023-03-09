import jwt, { Secret } from 'jsonwebtoken';
import { User } from '../models/user';
import { NextFunction, Request, Response } from 'express';

const SECRET = process.env.TOKEN_SECRET as Secret;

export function isAuthorized(
  req: Request,
  res: Response,
  next: NextFunction
): void | boolean {
  try {
    if(req.headers.authorization == undefined){
      res.sendStatus(401);
      return false;
    }
    const token = (req.headers.authorization as unknown as string)?.split(' ')[1];
    
    if (jwt.verify(token, SECRET)) {
      next();
    }
  } catch (err) {
    res.sendStatus(401);
    return false;
  }
}

export function getTokenByUser(user: User) {
  return jwt.sign({ user }, SECRET);
}
