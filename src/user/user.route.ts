import express, { Request, Response } from "express";
import { createUser } from "./user.service";

const userRouter = express.Router();

userRouter.post("/users", async (req: Request, res: Response) => {
  const user = req.body;
  // TODO: Validate req.body
  const createdUser = await createUser(user);
  res.json(createdUser);
});

export { userRouter };
