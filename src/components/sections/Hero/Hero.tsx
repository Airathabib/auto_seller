'use client';
import Image from 'next/image';
import {
	Text,
	TextSize,
	FontWeight,
	TextColor,
	TextType,
	TitleTag,
} from '@/components/shared/ui/Text';
import { Button } from '@/components/shared/ui/Button';
import { ChevronRight } from '@/assets/icons';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery/useMediaQuery';
import { useState } from 'react';
import { GetOfferModal } from '@/components/shared/ui/CarOfferModal/GetOfferModal';

import cls from './Hero.module.scss';

interface HeroProps {
	title: string;
	subtitle?: string;
	description?: string;
	imageSrc: string;
	imageMobileSrc?: string;
	imageAlt: string;
	ctaText?: string;
	ctaHref?: string;
	onCtaClick?: () => void;
}

export const Hero = ({
	title,
	subtitle,
	description,
	imageSrc,
	imageMobileSrc,
	imageAlt,
	ctaText,
	ctaHref,
	onCtaClick,
}: HeroProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const isMobile = useMediaQuery(996);
	const currentImageSrc = isMobile && imageMobileSrc ? imageMobileSrc : imageSrc;

	const handleCtaClick = () => {
		if (onCtaClick) {
			onCtaClick();
		} else {
			setIsModalOpen(true);
		}
	};

	return (
		<section className={cls.hero}>
			{/* На мобильном: изображение как отдельный блок */}
			{isMobile ? (
				<>
					<div className={cls.mobileImageWrapper}>
						<Image
							src={currentImageSrc}
							alt={imageAlt}
							fill
							sizes='100vw'
							className={cls.mobileImage}
							quality={85}
						/>
					</div>

					{/* Контент под изображением */}
					<div className={cls.container}>
						<div className={cls.textBlock}>
							<div className={cls.textBlockWrapperMobile}>
								{subtitle && (
									<Text fontSize={TextSize.L} color={TextColor.WHITE} fontWeight={FontWeight.LIGHT}>
										{subtitle}
									</Text>
								)}

								<Text
									type={TextType.TITLE}
									tag={TitleTag.H1}
									fontSize={TextSize.SIZE_40}
									fontWeight={FontWeight.BOLD}
									color={TextColor.WHITE}
								>
									{title}
								</Text>

								{description && (
									<Text fontSize={TextSize.L} color={TextColor.WHITE} fontWeight={FontWeight.LIGHT}>
										{description}
									</Text>
								)}
							</div>

							{ctaText && (
								<Button
									variant='primary'
									size='m'
									gap='--gap-x-10'
									className={cls.ctaButton}
									iconEnd={<ChevronRight />}
									onClick={handleCtaClick}
								>
									<Text
										fontSize={TextSize.S}
										color={TextColor.BLACK}
										fontWeight={FontWeight.MEDIUM}
									>
										{ctaText}
									</Text>
								</Button>
							)}
						</div>
					</div>
				</>
			) : (
				/* На десктопе: как было */
				<>
					<Image
						src={currentImageSrc}
						alt={imageAlt}
						fill
						priority
						sizes='100vw'
						className={cls.backgroundImage}
						quality={85}
					/>
					<div className={cls.overlay} />
					<div className={cls.container}>
						<div className={cls.textBlock}>
							<div className={cls.textBlockWrapper}>
								{subtitle && (
									<Text
										fontSize={TextSize.SIZE_28}
										color={TextColor.WHITE}
										fontWeight={FontWeight.LIGHT}
									>
										{subtitle}
									</Text>
								)}

								<Text
									type={TextType.TITLE}
									tag={TitleTag.H1}
									fontSize={TextSize.SIZE_60}
									fontWeight={FontWeight.BOLD}
									color={TextColor.WHITE}
								>
									{title}
								</Text>

								{description && (
									<Text
										fontSize={TextSize.SIZE_28}
										color={TextColor.WHITE}
										fontWeight={FontWeight.LIGHT}
									>
										{description}
									</Text>
								)}
							</div>

							{ctaText && (
								<Button
									variant='primary'
									size='m'
									gap='--gap-x-10'
									className={cls.ctaButton}
									iconEnd={<ChevronRight />}
									onClick={handleCtaClick}
								>
									<Text
										fontSize={TextSize.S}
										color={TextColor.BLACK}
										fontWeight={FontWeight.MEDIUM}
									>
										{ctaText}
									</Text>
								</Button>
							)}
						</div>
					</div>
				</>
			)}
			{/* Модалка */}
			<GetOfferModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</section>
	);
};
