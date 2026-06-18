'use client';

import Image from 'next/image';
import { Tag, Gift } from '@/assets/icons';
import { Button } from '@/components/shared/ui/Button';
import { ChevronRight } from '@/assets/icons';
import type { CarCardProps } from '../../model/types/types';
import {
	FontWeight,
	Text,
	TextColor,
	TextSize,
	TextTag,
	TextType,
	TitleTag,
} from '@/components/shared/ui/Text';
import { useMediaQuery } from '@/lib/hooks';
import cls from './CarCard.module.scss';

export const CarCard = ({
	model,
	image,
	engine,
	oldPrice,
	tradeInAmount,
	gift,
	onGetOffer,
	onTestDrive,
}: CarCardProps) => {
	//
	const isMobile = useMediaQuery(996);

	return (
		<div className={cls.carCard}>
			{/* Изображение автомобиля */}
			<div className={cls.carImage}>
				<Image src={image} alt={model} width={400} height={250} />
			</div>

			{/* Информация */}
			<div className={cls.carInfo}>
				<div className={cls.carTextBlock}>
					<Text
						fontSize={TextSize.SIZE_30}
						type={TextType.TITLE}
						tag={TitleTag.H3}
						color={TextColor.WHITE}
						className={cls.carName}
					>
						{model}
					</Text>
					{isMobile ? (
						''
					) : (
						<Text
							type={TextType.TEXT}
							tag={TextTag.P}
							fontSize={TextSize.L}
							color={TextColor.GRAY}
							className={cls.carEngine}
						>
							{engine}
						</Text>
					)}

					{/* Цена */}
					<div className={cls.priceBlock}>
						{/* Цена */}
						<div className={cls.priceBlock}>
							{oldPrice && (
								<Text
									fontSize={TextSize.XXL}
									color={TextColor.WHITE}
									fontWeight={FontWeight.BOLD}
									type={TextType.TEXT}
									tag={TextTag.SPAN}
									className={cls.oldPrice}
								>
									{oldPrice.toLocaleString('ru-RU')} ₽
								</Text>
							)}
						</div>
					</div>
				</div>

				<div className={cls.carActions}>
					<Button
						variant='primary'
						size='l'
						gap='--gap-x-10'
						iconEnd={<ChevronRight />}
						onClick={onGetOffer}
						className={cls.carCardBtn}
					>
						Получить предложение
					</Button>
					<Button
						variant='outline'
						size='l'
						gap='--gap-x-10'
						iconEnd={<ChevronRight />}
						onClick={onTestDrive}
						className={cls.carCardBtn}
					>
						Тест-драйв
					</Button>
				</div>
				{/* Преимущества */}
				<div className={cls.benefits}>
					{tradeInAmount && (
						<div className={cls.benefit}>
							<Tag className={cls.benefitIcon} />
							<Text
								type={TextType.TEXT}
								tag={TextTag.SPAN}
								fontSize={TextSize.M}
								color={TextColor.WHITE}
							>
								Выгода по Trade-in до {tradeInAmount.toLocaleString('ru-RU')} ₽
							</Text>
						</div>
					)}
					{gift && (
						<Text
							type={TextType.TEXT}
							tag={TextTag.SPAN}
							fontSize={TextSize.M}
							color={TextColor.WHITE}
							className={cls.benefit}
						>
							<Gift className={cls.benefitIcon} />
							<span>{gift}</span>
						</Text>
					)}
				</div>
			</div>
		</div>
	);
};
