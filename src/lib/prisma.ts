/**
 * Shared Prisma Client singleton.
 *
 * Repositories should import `prisma` from here rather than instantiating
 * their own `PrismaClient`. Using a single instance (cached on `globalThis`
 * in development) avoids exhausting the Postgres connection pool when the
 * dev server hot-reloads.
 */
import { PrismaClient } from "@prisma/client";

import { env } from "../config/env.js";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma: PrismaClient =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
