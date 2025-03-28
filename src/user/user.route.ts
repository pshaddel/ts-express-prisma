import { Router } from "express";
import { createUser, userCreationValidator } from "./user.service";


const userRouter = Router();

userRouter.post("/users", async (req, res): Promise<void> => {
	const result = await userCreationValidator.safeParseAsync(req.body);
	if (!result.success) {
		res.status(400).json(result.error);
		return;
	}
	const user = result.data;
	const createdUser = await createUser(user);
	res.json(createdUser);
});

export { userRouter };
