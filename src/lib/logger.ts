/**
 * Minimal structured logger.
 *
 * This is a deliberately small placeholder: it prints single-line JSON so log
 * output is machine-parseable from day one, but it does not yet do
 * correlation/request-ID propagation, redaction, or ship to anywhere. That
 * richer structured-logging + observability layer (correlation IDs, redaction,
 * Prometheus metrics) is tracked as a follow-up backend issue — swap this out
 * (e.g. for pino) when that lands instead of building on top of it.
 */
import { env } from "../config/env.js";

type Level = "debug" | "info" | "warn" | "error";

const LEVEL_ORDER: Record<Level, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

function log(level: Level, message: string, meta?: Record<string, unknown>): void {
  if (LEVEL_ORDER[level] < LEVEL_ORDER[env.LOG_LEVEL]) {
    return;
  }

  const entry = {
    level,
    time: new Date().toISOString(),
    message,
    ...meta,
  };

  const line = JSON.stringify(entry);
  if (level === "error" || level === "warn") {
    console.error(line);
  } else {
    console.log(line);
  }
}

export const logger = {
  debug: (message: string, meta?: Record<string, unknown>) => log("debug", message, meta),
  info: (message: string, meta?: Record<string, unknown>) => log("info", message, meta),
  warn: (message: string, meta?: Record<string, unknown>) => log("warn", message, meta),
  error: (message: string, meta?: Record<string, unknown>) => log("error", message, meta),
};
