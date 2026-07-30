/**
 * Liveness/readiness endpoints.
 *
 * `/health` is a cheap liveness check (process is up, event loop is running).
 * `/ready` additionally checks the database connection and should be used by
 * orchestrators/load balancers to decide whether to route traffic here.
 */
import { Router, type Request, type Response } from "express";

import { prisma } from "../lib/prisma.js";

export const healthRouter = Router();

const startedAt = Date.now();

healthRouter.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    uptimeSeconds: Math.round((Date.now() - startedAt) / 1000),
    timestamp: new Date().toISOString(),
  });
});

healthRouter.get("/ready", async (_req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ status: "ready" });
  } catch (error) {
    res.status(503).json({
      status: "not_ready",
      reason: error instanceof Error ? error.message : "unknown error",
    });
  }
});
