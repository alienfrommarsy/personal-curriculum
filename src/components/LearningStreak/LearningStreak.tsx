import React from 'react';
import './LearningStreak.css';

const LearningStreak = ({ currentStreak, bestStreak, calendarData, motivationalMessages }) => {
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

    return (
        <div className="learning-streak">
            <h2>Current Streak: {currentStreak}</h2>
            <h2>Best Streak: {bestStreak}</h2>
            <div className="calendar-view">
                {/* Implement calendar view using calendarData */}
            </div>
            <div className="motivational-message">
                <p>{randomMessage}</p>
            </div>
        </div>
    );
};

export default LearningStreak;