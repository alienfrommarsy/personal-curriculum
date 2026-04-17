import React, { useState } from 'react';
import './DailyGoals.css';

const DailyGoals = () => {
    const [goals, setGoals] = useState(['Learn React hooks', 'Complete TypeScript exercise', 'Read 20 pages of a book']);
    const [completedGoals, setCompletedGoals] = useState([]);
    const [reward, setReward] = useState('');

    const handleCheckboxChange = (goal) => {
        if (completedGoals.includes(goal)) {
            setCompletedGoals(completedGoals.filter(g => g !== goal));
        } else {
            setCompletedGoals([...completedGoals, goal]);
            checkReward();
        }
    };

    const checkReward = () => {
        if (completedGoals.length + 1 === goals.length) {
            setReward('Congratulations! You have completed all your daily goals! 🎉');
        }
    };

    return (
        <div className="daily-goals">
            <h2>Daily Learning Goals</h2>
            <ul>
                {goals.map(goal => (
                    <li key={goal}>
                        <label>
                            <input
                                type="checkbox"
                                checked={completedGoals.includes(goal)}
                                onChange={() => handleCheckboxChange(goal)}
                            />
                            {goal}
                        </label>
                    </li>
                ))}
            </ul>
            {reward && <div className="reward-notification">{reward}</div>}
        </div>
    );
};

export default DailyGoals;