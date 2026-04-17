import { useState, useEffect } from 'react';

const useStreak = () => {
    const [streak, setStreak] = useState(0);
    const [lastActiveDate, setLastActiveDate] = useState<string | null>(null);

    useEffect(() => {
        // Load the last active date from local storage or initialize to null
        const storedDate = localStorage.getItem('lastActiveDate');
        if (storedDate) {
            setLastActiveDate(storedDate);
            const today = new Date().toISOString().split('T')[0];
            // Check if the last active date was yesterday or before
            if (storedDate < today) {
                setStreak(0);
            } else {
                setStreak(prev => prev + 1);
            }
        } else {
            setStreak(0);
        }
    }, []);

    const updateStreak = () => {
        const today = new Date().toISOString().split('T')[0];
        setLastActiveDate(today);
        localStorage.setItem('lastActiveDate', today);
        setStreak(prev => prev + 1);
    };

    return { streak, updateStreak };
};

export default useStreak;