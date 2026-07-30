/**
 * SEP-10 wallet-auth routes (`/challenge`, `/verify`) and session refresh.
 *
 * Placeholder — the frontend's wallet-connect flow expects these endpoints
 * (see the wallet-auth and session-issuance backend issues). They respond
 * `501 Not Implemented` for now so the route surface exists and is
 * discoverable before the real SEP-10 + JWT implementation lands.
 */
import { Router, type Request, type Response } from "express";

export const authRouter = Router();

function notImplemented(_req: Request, res: Response) {
  res.status(501).json({
    error: {
      code: "NOT_IMPLEMENTED",
      message: "Wallet authentication is not implemented yet.",
    },
  });
}

authRouter.post("/challenge", notImplemented);
authRouter.post("/verify", notImplemented);
authRouter.post("/refresh", notImplemented);
