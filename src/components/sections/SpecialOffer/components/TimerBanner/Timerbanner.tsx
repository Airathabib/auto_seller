'use client';

import Link from 'next/link';
import { Text, TextSize, FontWeight, TextColor } from '@/components/shared/ui/Text';
import { Button } from '@/components/shared/ui/Button';
import { ChevronRight } from '@/assets/icons';
import { useCountdown } from '@/lib/hooks/useCountdown/useCountdown';
import { TimerCircle } from '../TimerCircle/TimerCircle';
import { formatTimerNumber } from '@/lib/utils';
import { useMediaQuery } from '@/lib/hooks';
import cls from './TimerBanner.module.scss';

interface TimerBannerProps {
	endDate: string;
	ctaText: string;
	ctaHref: string;
}

export const TimerBanner = ({ endDate, ctaText, ctaHref }: TimerBannerProps) => {
	const { timeLeft, progress } = useCountdown(endDate);
	const isMobile = useMediaQuery(996);

	return (
		<div className={cls.timerBanner}>
			<Text
				fontSize={isMobile ? TextSize.SIZE_28 : TextSize.SIZE_30}
				color={TextColor.WHITE}
				fontWeight={FontWeight.BOLD}
			>
				СРОК ДЕЙСТВИЯ СПЕЦПРЕДЛОЖЕНИЯ:
			</Text>

			<div className={cls.timer}>
				<TimerCircle
					value={formatTimerNumber(timeLeft.days, false)}
					label='дня'
					progress={progress.days}
				/>
				<span className={cls.separator}>:</span>
				<TimerCircle
					value={formatTimerNumber(timeLeft.hours)}
					label='часов'
					progress={progress.hours}
				/>
				<span className={cls.separator}>:</span>
				<TimerCircle
					value={formatTimerNumber(timeLeft.minutes)}
					label='минут'
					progress={progress.minutes}
				/>
				<span className={cls.separator}>:</span>
				<TimerCircle
					value={formatTimerNumber(timeLeft.seconds)}
					label='секунд'
					progress={progress.seconds}
				/>
			</div>

			<Link href={ctaHref} className={cls.ctaLink}>
				<Button
					variant='primary'
					size='m'
					fullWidth={isMobile}
					gap='--gap-x-10'
					iconEnd={<ChevronRight />}
					className={cls.timerBtn}
				>
					<Text fontSize={TextSize.S} fontWeight={FontWeight.MEDIUM} color={TextColor.BLACK}>
						{ctaText}
					</Text>
				</Button>
			</Link>
		</div>
	);
};
