/**
 * Price-oracle integration service — placeholder.
 *
 * Will fetch/validate/cache prices from a primary source (on-chain Soroban
 * oracle contract) with an off-chain fallback, enforcing staleness and
 * sanity-deviation checks so bad prices never silently propagate into
 * protocol logic. Not implemented yet; see the price-oracle backend issue for
 * the full spec.
 *
 * Planned surface (subject to change):
 *   getPrice(assetCode) => { price, source, ageSeconds } | NoTrustedPriceError
 */
export {};
