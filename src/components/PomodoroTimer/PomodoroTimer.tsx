import React, { useState, useEffect } from 'react';

const PomodoroTimer = ({ workDuration = 25, breakDuration = 5 }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [timeLeft, setTimeLeft] = useState(workDuration * 60);
    const [message, setMessage] = useState("Let's get to work!");

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isRunning) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 0) {
                        setIsBreak((prev) => !prev);
                        setTimeLeft(isBreak ? workDuration * 60 : breakDuration * 60);
                        setMessage(isBreak ? "Time to work!" : "Take a break!");
                        return isBreak ? workDuration * 60 : breakDuration * 60;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isRunning, isBreak, workDuration, breakDuration]);

    const formatTime = (seconds: number) => {
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return (
        <div>
            <h1>{message}</h1>
            <div>{formatTime(timeLeft)}</div>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button onClick={() => {
                setIsRunning(false);
                setTimeLeft(workDuration * 60);
                setIsBreak(false);
                setMessage("Let's get to work!");
            }}>
                Reset
            </button>
        </div>
    );
};

export default PomodoroTimer;
