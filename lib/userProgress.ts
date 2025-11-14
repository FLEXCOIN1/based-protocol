// Track user progress in localStorage (streaks, achievements, etc.)

interface UserProgress {
  lastLoginDate: string;
  loginStreak: number;
  hasWithdrawn: boolean;
  referrals: number;
  unlockedAchievements: number[];
  totalStaked: number;
}

const STORAGE_KEY = 'based_user_progress_';

export function getUserProgress(walletAddress: string): UserProgress {
  if (typeof window === 'undefined') {
    return getDefaultProgress();
  }
  
  const stored = localStorage.getItem(STORAGE_KEY + walletAddress);
  if (!stored) {
    return getDefaultProgress();
  }
  
  try {
    return JSON.parse(stored);
  } catch {
    return getDefaultProgress();
  }
}

export function saveUserProgress(walletAddress: string, progress: UserProgress) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY + walletAddress, JSON.stringify(progress));
}

export function updateLoginStreak(walletAddress: string): number {
  const progress = getUserProgress(walletAddress);
  const today = new Date().toDateString();
  
  if (progress.lastLoginDate === today) {
    // Already logged in today
    return progress.loginStreak;
  }
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toDateString();
  
  if (progress.lastLoginDate === yesterdayStr) {
    // Streak continues
    progress.loginStreak += 1;
  } else {
    // Streak broken, restart
    progress.loginStreak = 1;
  }
  
  progress.lastLoginDate = today;
  saveUserProgress(walletAddress, progress);
  
  return progress.loginStreak;
}

export function unlockAchievement(walletAddress: string, achievementId: number) {
  const progress = getUserProgress(walletAddress);
  
  if (!progress.unlockedAchievements.includes(achievementId)) {
    progress.unlockedAchievements.push(achievementId);
    saveUserProgress(walletAddress, progress);
    return true; // Newly unlocked
  }
  
  return false; // Already unlocked
}

export function markWithdrawal(walletAddress: string) {
  const progress = getUserProgress(walletAddress);
  progress.hasWithdrawn = true;
  saveUserProgress(walletAddress, progress);
}

export function updateTotalStaked(walletAddress: string, amount: number) {
  const progress = getUserProgress(walletAddress);
  progress.totalStaked = amount;
  saveUserProgress(walletAddress, progress);
}

export function incrementReferrals(walletAddress: string) {
  const progress = getUserProgress(walletAddress);
  progress.referrals += 1;
  saveUserProgress(walletAddress, progress);
}

function getDefaultProgress(): UserProgress {
  return {
    lastLoginDate: '',
    loginStreak: 0,
    hasWithdrawn: false,
    referrals: 0,
    unlockedAchievements: [],
    totalStaked: 0,
  };
}
