import { PrismaClient } from '../prisma/generated/client'

if (!process.env.DATABASE_URL) {
  throw new Error('No found DATABASE_URL for prisma client')
}

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// PrismaClient принимает аргументы.
// Например, new PrismaClient({ log: ['query'] }) для логирования запросов
export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
