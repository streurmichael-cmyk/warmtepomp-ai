const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

const requestCounts = new Map<string, { count: number; resetAt: number }>();

/**
 * Eenvoudige in-memory rate limiter: maximaal 10 aanvragen per uur per IP.
 * Werkt per server-instance; bij meerdere instances kan de daadwerkelijke
 * limiet iets hoger uitvallen, maar voorkomt misbruik van de AI-aanroep.
 */
export function isRateLimited(ip: string): boolean {
  const now = Date.now();

  for (const [key, entry] of requestCounts) {
    if (entry.resetAt < now) {
      requestCounts.delete(key);
    }
  }

  const entry = requestCounts.get(ip);
  if (!entry || entry.resetAt < now) {
    requestCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return "unknown";
}
