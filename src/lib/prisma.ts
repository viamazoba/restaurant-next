import { PrismaClient } from '@prisma/client'

/** Este documento sirve para no crear muchas instancias de prisma, solo una, ya que esto a futuro genera problemas */

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'],
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma