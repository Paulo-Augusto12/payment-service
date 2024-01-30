export { };

declare global {
  namespace Express {
    export interface Request {
      userData: string | JwtPayload | undefined;
    }
  }
}
