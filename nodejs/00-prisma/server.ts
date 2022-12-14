import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 10,
            name: "Curso de NodeJS",
            description: "Curso de NodeJS com Prisma"
        }
    })

    console.log(`result => ${result}`)
}

main();