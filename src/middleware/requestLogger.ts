/**
 * Minimal request-logging middleware: one structured log line per request
 * with method, path, status code, and duration. Request-ID correlation and
 * redaction are left to the future structured-logging/observability issue.
 */
import type { NextFunction, Request, Response } from "express";

import { logger } from "../lib/logger.js";

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
  const startedAt = process.hrtime.bigint();

  res.on("finish", () => {
    const durationMs = Number(process.hrtime.bigint() - startedAt) / 1_000_000;
    logger.info("request completed", {
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: Math.round(durationMs * 100) / 100,
    });
  });

  next();
}
