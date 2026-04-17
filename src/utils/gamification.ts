// src/utils/gamification.ts

/**
 * Calculate experience points based on completed tasks.
 * @param {number} basePoints - The base points for the task.
 * @param {number} multiplier - The multiplier based on task difficulty.
 * @returns {number} - The total experience points earned.
 */
export function calculateExperiencePoints(basePoints: number, multiplier: number): number {
    return basePoints * multiplier;
}

/**
 * Determine the next level based on total experience points.
 * @param {number} experience - The total experience points of the user.
 * @returns {number} - The current level of the user.
 */
export function levelUp(experience: number): number {
    return Math.floor(experience / 100); // Assuming each level requires 100 experience points
}

/**
 * Check if an achievement should be unlocked based on achievements criteria.
 * @param {number} experience - The total experience points.
 * @param {number} achievementThreshold - The points required to unlock the achievement.
 * @returns {boolean} - True if the achievement is unlocked, false otherwise.
 */
export function unlockAchievement(experience: number, achievementThreshold: number): boolean {
    return experience >= achievementThreshold;
}