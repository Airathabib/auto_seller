'use client';

import { useMediaQuery } from '@/lib/hooks/useMediaQuery/useMediaQuery';

import cls from './TimerCircle.module.scss';

interface TimerCircleProps {
	value: string;
	label: string;
	progress: number;
}

export const TimerCircle = ({ value, label, progress }: TimerCircleProps) => {
	const isMobile = useMediaQuery(996);

	const size = isMobile ? 70 : 90;
	const strokeWidth = 5;
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (progress / 100) * circumference;

	return (
		<div className={cls.timerCircle}>
			<svg width={size} height={size} className={cls.svg}>
				{/* Фоновый круг */}
				<circle
					className={cls.backgroundCircle}
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={strokeWidth}
					fill='none'
				/>
				{/* Прогресс-круг */}
				<circle
					className={cls.progressCircle}
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={strokeWidth}
					fill='none'
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					style={{
						transform: 'rotate(-90deg)',
						transformOrigin: '50% 50%',
					}}
				/>
			</svg>
			<div className={cls.content}>
				<span className={cls.value}>{value}</span>
				<span className={cls.label}>{label}</span>
			</div>
		</div>
	);
};
