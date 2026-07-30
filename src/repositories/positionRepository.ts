/**
 * Data-access layer for `Position` rows. Route/service code should go through
 * repositories like this rather than importing `prisma` directly, so query
 * logic stays in one place as the schema evolves (e.g. once the indexer
 * starts writing positions).
 */
import type { Position } from "@prisma/client";

import { prisma } from "../lib/prisma.js";

export function findPosition(accountId: string, asset: string): Promise<Position | null> {
  return prisma.position.findUnique({
    where: { accountId_asset: { accountId, asset } },
  });
}

export function listPositionsForAccount(accountId: string): Promise<Position[]> {
  return prisma.position.findMany({
    where: { accountId },
    orderBy: { asset: "asc" },
  });
}
