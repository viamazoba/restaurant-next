import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function main() {
    try {
        await prisma.category.createMany({
            data: categories
        })

        await prisma.product.createMany({
            data: products
        })
    } catch (error) {
        console.log(error)
    }
}

/** En esta parte se cierra la conexión con la base de datos */
main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})