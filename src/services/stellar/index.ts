/**
 * Stellar Horizon + Soroban RPC integration service — placeholder.
 *
 * This will wrap `@stellar/stellar-sdk` behind a typed interface (simulate →
 * assemble → submit → poll for Soroban transactions, plus Horizon account/
 * ledger reads) with retry/backoff and a signer callback so key custody stays
 * decoupled from this service. Not implemented yet; see the Stellar
 * integration backend issue for the full spec.
 *
 * Planned surface (subject to change):
 *   submitTransaction(xdr, signer) => TransactionResult
 *   getTransactionStatus(hash) => TransactionStatus
 *   getAccount(publicKey) => AccountInfo
 *   getLatestLedger() => LedgerInfo
 *   callContract(contractId, method, args) => SimulatedInvocation
 */
export {};
