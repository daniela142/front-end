import React, { useState, useEffect } from 'react';

export const CountdownTimer = ({ duration }) => {
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        setTimeLeft(duration * 60);
        const intervalId = setInterval(() => {
            setTimeLeft((previousTimeLeft) => {
                const newTimeLeft = previousTimeLeft - 1;
                if (newTimeLeft <= 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return newTimeLeft;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [duration]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div>
            {timeLeft > 0 ? `${minutes} mins ${seconds.toString().padStart(2, '0')} secs` : ''}
        </div>
    );
};
