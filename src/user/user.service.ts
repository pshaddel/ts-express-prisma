import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()
export const createUser = async (user: {
  name: string
  email: string
}): Promise<User> => {
  const insertResult = await prisma.user.create({
    data: user
  })
  prisma.$disconnect()
  return insertResult
}
