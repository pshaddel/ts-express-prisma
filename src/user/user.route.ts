import express, { type Request, type Response } from "express";
import { createUser, userCreationValidator } from "./user.service";

const userRouter = express.Router();

userRouter.post("/users", async (req: Request, res: Response) => {
	const result = await userCreationValidator.safeParseAsync(req.body);
	if (!result.success) {
		return res.status(400).json(result.error);
	}
	const user = result.data;
	const createdUser = await createUser(user);
	res.json(createdUser);
});

export { userRouter };
