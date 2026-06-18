'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Close } from '@/assets/icons';
import { useMediaQuery } from '@/lib/hooks';
import cls from './PromoPopup.module.scss';

interface PromoPopupProps {
	imageSrc: string;
	imageMobileSrc?: string;
	modelName: string;
	autoCloseDelay?: number;
}

export const PromoPopup = ({
	imageSrc,
	imageMobileSrc,
	modelName,
	autoCloseDelay = 3000,
}: PromoPopupProps) => {
	const [isVisible, setIsVisible] = useState(true);
	const [timeLeft, setTimeLeft] = useState(autoCloseDelay / 1000);
	const isMobile = useMediaQuery(996);

	const currentImageSrc = isMobile && imageMobileSrc ? imageMobileSrc : imageSrc;

	useEffect(() => {
		const countdownInterval = setInterval(() => {
			setTimeLeft(prev => {
				if (prev <= 1) {
					clearInterval(countdownInterval);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		const autoCloseTimeout = setTimeout(() => {
			setIsVisible(false);
		}, autoCloseDelay);

		return () => {
			clearInterval(countdownInterval);
			clearTimeout(autoCloseTimeout);
		};
	}, [autoCloseDelay]);

	const handleClose = () => {
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className={cls.overlay} onClick={handleClose}>
			<div className={cls.popup} onClick={e => e.stopPropagation()}>
				<div className={cls.imageWrapper}>
					<Image
						src={currentImageSrc}
						alt={`Акция на ${modelName}`}
						fill
						className={cls.image}
						priority
					/>
				</div>
			</div>
		</div>
	);
};
