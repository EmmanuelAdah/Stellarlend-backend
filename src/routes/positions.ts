/**
 * Position/protocol read routes.
 *
 * Placeholder — once the indexer (`src/services/indexer`) is populating
 * Postgres, this will read through `src/repositories/positionRepository.ts`.
 * For now it responds `501 Not Implemented` so the route exists and is
 * documented rather than 404ing.
 */
import { Router, type Request, type Response } from "express";

export const positionsRouter = Router();

positionsRouter.get("/", (_req: Request, res: Response) => {
  res.status(501).json({
    error: {
      code: "NOT_IMPLEMENTED",
      message: "Position queries are not implemented yet.",
    },
  });
});
