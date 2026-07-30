/**
 * Shared, cross-cutting types. Domain-specific types should live closer to
 * the code that owns them; put things here only once two or more modules
 * need to agree on the same shape.
 */

/** Standard error envelope returned by `src/middleware/errorHandler.ts`. */
export interface ApiErrorBody {
  error: {
    code: string;
    message: string;
  };
}

/** Common pagination query params for list endpoints. */
export interface PaginationParams {
  limit?: number;
  cursor?: string;
}
