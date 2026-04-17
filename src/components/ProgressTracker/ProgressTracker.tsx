import React from 'react';

const ProgressTracker = () => {
    const overallProgress = 75; // Placeholder for overall progress percentage
    const level = 3; // Placeholder for user level
    const experiencePoints = 1500; // Placeholder for experience points
    const achievementBadges = ["Badge1", "Badge2", "Badge3"]; // Placeholder for achievement badges

    return (
        <div className="progress-tracker">
            <h2>Progress Tracker</h2>
            <div>
                <h3>Overall Progress: {overallProgress}%</h3>
                <h3>Level: {level}</h3>
                <h3>Experience Points: {experiencePoints}</h3>
                <h3>Achievement Badges:</h3>
                <ul>
                    {achievementBadges.map((badge, index) => (
                        <li key={index}>{badge}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProgressTracker;