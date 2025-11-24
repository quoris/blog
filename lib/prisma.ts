import { PrismaClient } from '../prisma/generated/client'

const DB_URL = process.env.DATABASE_URL

if (!DB_URL) {
  throw new Error('No found DATABASE_URL for prisma client')
}

export const prisma = new PrismaClient({
  accelerateUrl: DB_URL,
  log: ['query', 'info', 'warn', 'error'],
})
