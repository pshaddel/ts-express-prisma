import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import z from "zod";
const prisma = new PrismaClient();
export const createUser = async (user: UserCreationObject): Promise<User> => {
	const insertResult = await prisma.user.create({
		data: user,
	});
	prisma.$disconnect();
	return insertResult;
};

export const userCreationValidator = z.object({
	name: z.string(),
	email: z.string().email(),
});

type UserCreationObject = z.infer<typeof userCreationValidator>;
