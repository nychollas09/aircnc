import { Router } from 'express';

const router = Router();

export const Get = (path: string) => {
  return (target: any) => {
    router.get(path);
  };
};
