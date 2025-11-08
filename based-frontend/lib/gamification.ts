// Level system configuration
export const LEVELS = [
  { level: 1, name: "Paper Hands", emoji: "📄", minWeeks: 0, multiplier: 1.0 },
  { level: 2, name: "Bronze Stacker", emoji: "🥉", minWeeks: 5, multiplier: 1.5 },
  { level: 3, name: "Silver Hodler", emoji: "🥈", minWeeks: 10, multiplier: 2.0 },
  { level: 4, name: "Gold Diamond", emoji: "🥇", minWeeks: 20, multiplier: 3.0 },
  { level: 5, name: "Platinum Legend", emoji: "💎", minWeeks: 50, multiplier: 5.0 },
  { level: 6, name: "BASED God", emoji: "👑", minWeeks: 100, multiplier: 10.0 },
];

// Achievement definitions
export const ACHIEVEMENTS = [
  { id: 1, name: "First Blood", emoji: "🔥", description: "Stake your first SOL", requirement: "stake_first" },
  { id: 2, name: "Early Bird", emoji: "🦅", description: "Join in first 100 stakers", requirement: "founder" },
  { id: 3, name: "Degen Entry", emoji: "💰", description: "Stake 10+ SOL in one transaction", requirement: "stake_10" },
  { id: 4, name: "Diamond Hands", emoji: "💎", description: "Hold for 90 days without withdrawing", requirement: "hold_90" },
  { id: 5, name: "Never Sold", emoji: "🔒", description: "Hold for 365 days, zero withdrawals", requirement: "hold_365" },
  { id: 6, name: "Speed Run", emoji: "⚡", description: "Reach Silver level in under 30 days", requirement: "silver_30" },
  { id: 7, name: "Recruiter", emoji: "🤝", description: "Refer 5 successful stakers", requirement: "refer_5" },
  { id: 8, name: "Top 10", emoji: "🎯", description: "Make it into top 10 leaderboard", requirement: "top_10" },
  { id: 9, name: "Whale Status", emoji: "🐋", description: "Stake 100+ SOL total", requirement: "stake_100" },
  { id: 10, name: "Omnipresent", emoji: "👁️", description: "100-day login streak", requirement: "streak_100" },
];

// Calculate level based on weeks staked
export function calculateLevel(weeksStaked: number) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (weeksStaked >= LEVELS[i].minWeeks) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}

// Calculate progress to next level
export function calculateLevelProgress(weeksStaked: number) {
  const currentLevel = calculateLevel(weeksStaked);
  const currentIndex = LEVELS.findIndex(l => l.level === currentLevel.level);
  
  if (currentIndex === LEVELS.length - 1) {
    return { current: weeksStaked, next: weeksStaked, progress: 100 };
  }
  
  const nextLevel = LEVELS[currentIndex + 1];
  const weeksIntoLevel = weeksStaked - currentLevel.minWeeks;
  const weeksToNext = nextLevel.minWeeks - currentLevel.minWeeks;
  const progress = (weeksIntoLevel / weeksToNext) * 100;
  
  return {
    current: weeksStaked,
    next: nextLevel.minWeeks,
    progress: Math.min(progress, 100),
    nextLevel: nextLevel
  };
}

// Check if user unlocked achievement
export function checkAchievement(
  achievementId: number,
  userData: {
    staked: number;
    weeksStaked: number;
    rank: number;
    totalStaked: number;
    referrals: number;
    hasWithdrawn: boolean;
    isFounder: boolean;
    loginStreak: number;
  }
) {
  const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
  if (!achievement) return false;
  
  switch (achievement.requirement) {
    case "stake_first":
      return userData.staked > 0;
    case "founder":
      return userData.isFounder;
    case "stake_10":
      return userData.totalStaked >= 10;
    case "hold_90":
      return userData.weeksStaked >= 13 && !userData.hasWithdrawn;
    case "hold_365":
      return userData.weeksStaked >= 52 && !userData.hasWithdrawn;
    case "silver_30":
      return userData.weeksStaked >= 10 && (userData.weeksStaked * 7) <= 30;
    case "refer_5":
      return userData.referrals >= 5;
    case "top_10":
      return userData.rank > 0 && userData.rank <= 10;
    case "stake_100":
      return userData.totalStaked >= 100;
    case "streak_100":
      return userData.loginStreak >= 100;
    default:
      return false;
  }
}

// Get all unlocked achievements for user
export function getUnlockedAchievements(userData: any) {
  return ACHIEVEMENTS.filter(achievement => 
    checkAchievement(achievement.id, userData)
  );
}

// Calculate streak bonus APY
export function calculateStreakBonus(streak: number) {
  if (streak >= 365) return 1.0; // +1% APY
  if (streak >= 100) return 0.5; // +0.5% APY
  if (streak >= 30) return 0.25; // +0.25% APY
  if (streak >= 7) return 0.1; // +0.1% APY
  return 0;
}
