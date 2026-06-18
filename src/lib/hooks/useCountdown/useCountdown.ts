'use client';

import { useState, useEffect } from 'react';

export interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export interface CountdownProgress {
	days: number; // 0-100
	hours: number; // 0-100
	minutes: number; // 0-100
	seconds: number; // 0-100
}

export const useCountdown = (endDate: string) => {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const [progress, setProgress] = useState<CountdownProgress>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const targetDate = new Date(endDate).getTime();

		const updateTimer = () => {
			const now = new Date().getTime();
			const difference = targetDate - now;

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((difference % (1000 * 60)) / 1000);

				setTimeLeft({ days, hours, minutes, seconds });

				// Прогресс заполнения (0-100%)
				setProgress({
					days: Math.min((days / 365) * 100, 100), // год как максимум
					hours: (hours / 24) * 100,
					minutes: (minutes / 60) * 100,
					seconds: (seconds / 60) * 100,
				});
			} else {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				setProgress({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			}
		};

		updateTimer();
		const interval = setInterval(updateTimer, 1000);

		return () => clearInterval(interval);
	}, [endDate]);

	return { timeLeft, progress };
};
