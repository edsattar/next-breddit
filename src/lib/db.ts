import { PrismaClient } from '@prisma/client'
import "server-only"

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient
}

/**
 * @description Prisma Client instance.
 * @see https://www.prisma.io/docs/concepts/components/prisma-client
 */
let prisma: PrismaClient
// Avoid instantiating Multiple instances in development
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma