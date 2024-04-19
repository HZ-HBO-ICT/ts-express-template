import { Request, Response } from 'express';

/**
 *
 * @param req - the Request object
 * @param res - The Reponse object
 */
export function responseExample(req: Request, res: Response): void {
  res.status(200).send('everything went well');
}

interface ModelExample {
  name: string,
  age: number
}

/**
 *
 * @param req - the Request object
 * @param res - The Reponse object
 */
export function updateExample(req: Request, res: Response): void {
  //if you add different attributes to the body, it will not give an error
  const body: ModelExample = req.body;
  res.status(200).send(`Hi 🤭; I got this data: ${JSON.stringify(body)}?`);
}
