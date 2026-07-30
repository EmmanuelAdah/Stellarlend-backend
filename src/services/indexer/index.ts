/**
 * Contract-event indexer — placeholder.
 *
 * Will stream Soroban contract events via RPC `getEvents`, normalize and
 * upsert them into Postgres (idempotent on `(ledger, txHash, eventIndex)`),
 * track a resumable ingestion cursor, and maintain cached aggregates (TVL,
 * utilization, recent activity) for dashboards. Not implemented yet; see the
 * contract-event indexer backend issue for the full spec.
 *
 * Planned surface (subject to change):
 *   startIndexer() => void
 *   getIndexerHealth() => { lagLedgers, lastProcessedLedger }
 */
export {};
