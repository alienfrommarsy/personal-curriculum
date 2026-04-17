import { useState, useEffect } from 'react';

const useDailyGoals = () => {
    const [goals, setGoals] = useState([]);
    const [progress, setProgress] = useState({});

    useEffect(() => {
        // Load daily goals from local storage or API
        const storedGoals = JSON.parse(localStorage.getItem('dailyGoals')) || [];
        setGoals(storedGoals);

        const storedProgress = JSON.parse(localStorage.getItem('dailyGoalsProgress')) || {};
        setProgress(storedProgress);
    }, []);

    const addGoal = (goal) => {
        const newGoals = [...goals, goal];
        setGoals(newGoals);
        localStorage.setItem('dailyGoals', JSON.stringify(newGoals));
    };

    const updateProgress = (goalId, completed) => {
        const newProgress = { ...progress, [goalId]: completed }; 
        setProgress(newProgress);
        localStorage.setItem('dailyGoalsProgress', JSON.stringify(newProgress));
    };

    const removeGoal = (goalId) => {
        const newGoals = goals.filter(goal => goal.id !== goalId);
        setGoals(newGoals);
        localStorage.setItem('dailyGoals', JSON.stringify(newGoals));
        const { [goalId]: _, ...rest } = progress;
        setProgress(rest);
        localStorage.setItem('dailyGoalsProgress', JSON.stringify(rest));
    };

    return { goals, progress, addGoal, updateProgress, removeGoal };
};

export default useDailyGoals;