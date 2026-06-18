'use client';

import Image from 'next/image';
import { Button } from '@/components/shared/ui/Button';
import { ChevronRight } from '@/assets/icons';
import {
	Text,
	TextSize,
	FontWeight,
	TextColor,
	TextType,
	TitleTag,
	TextAlign,
} from '@/components/shared/ui/Text';
import { useMediaQuery } from '@/lib/hooks';
import cls from './TradeIn.module.scss';

export const TradeIn = () => {
	const isMobile = useMediaQuery(996);

	const handleSendRequest = () => {
		console.log('Отправить заявку на Trade-In');
		// Здесь будет логика отправки заявки
	};

	return (
		<section className={cls.tradeIn}>
			<div className={cls.container}>
				<div className={cls.content}>
					{/* Изображение */}
					<div className={cls.imageWrapper}>
						{isMobile ? (
							<Image
								src='/images/cars/preview/giftAutoMobile.webp'
								alt='TANK 500 с подарком'
								width={636}
								height={320}
								className={cls.image}
								priority
							/>
						) : (
							<Image
								src='/images/cars/preview/giftAuto.webp'
								alt='TANK 500 с подарком'
								width={636}
								height={320}
								className={cls.image}
								priority
							/>
						)}
					</div>

					{/* Текст и кнопка */}
					<div className={cls.textBlock}>
						<Text
							type={TextType.TITLE}
							tag={TitleTag.H2}
							fontSize={isMobile ? TextSize.SIZE_28 : TextSize.SIZE_40}
							fontWeight={FontWeight.BOLD}
							color={TextColor.WHITE}
							textAlign={TextAlign.LEFT}
						>
							ОБМЕН ПО TRADE-IN
							<br />
							НА ВЫГОДНЫХ УСЛОВИЯХ
						</Text>

						<Button
							variant='primary'
							size='l'
							gap='--gap-x-10'
							iconEnd={<ChevronRight />}
							onClick={handleSendRequest}
							className={cls.button}
						>
							Отправить заявку
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
