type RateLimitEntry = {
  count: number;
  resetTime: number;
};

class RateLimiter {
  private limits: Map<string, RateLimitEntry> = new Map();
  private maxRequests = 5;
  private windowMs = 60000; // 1 minute

  check(walletAddress: string): { allowed: boolean; resetIn?: number } {
    const now = Date.now();
    const entry = this.limits.get(walletAddress);

    if (!entry || now > entry.resetTime) {
      this.limits.set(walletAddress, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return { allowed: true };
    }

    if (entry.count >= this.maxRequests) {
      return {
        allowed: false,
        resetIn: Math.ceil((entry.resetTime - now) / 1000),
      };
    }

    entry.count++;
    return { allowed: true };
  }

  reset(walletAddress: string) {
    this.limits.delete(walletAddress);
  }
}

export const rateLimiter = new RateLimiter();
