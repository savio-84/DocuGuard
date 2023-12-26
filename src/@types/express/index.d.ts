declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    isAdmin: boolean;
    files?: any,
  }
}
  