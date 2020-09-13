import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export default async function main() {
    const insertResult = await prisma.user.create({
        data:{
            name: "Alice",
            email: "alice@gmail.com"
        }
    })
    prisma.$disconnect()
    return insertResult;
}