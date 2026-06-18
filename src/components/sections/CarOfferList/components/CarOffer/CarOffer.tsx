'use client';

import Image from 'next/image';
import { CarGallery } from '../CarGallery/CarGallery';
import { CarInfo } from '../CarInfo/CarInfo';
import type { CarFeature } from '../../data/carModels';
import {
	FontWeight,
	Text,
	TextAlign,
	TextColor,
	TextSize,
	TextTag,
	TextType,
} from '@/components/shared/ui/Text';
import { CarColorPicker } from '../CarColorPicker/CarColorPicker';
import { useState } from 'react';
import type { CarColor, ColorOption } from '../../model/types/types';
import { useMediaQuery } from '@/lib/hooks';
import cls from './CarOffer.module.scss';

interface CarOfferProps {
	modelId?: string;
	model: string;
	tradeInAmount?: string;
	discountAmount?: string;
	mainImage: string;
	images: string[];
	colors: ColorOption[];
	features: CarFeature[];
	reversed?: boolean;
	onPriceClick?: () => void;
	onTestDriveClick?: () => void;
	onCreditClick?: () => void;
}

export const CarOffer = ({
	modelId,
	model,
	tradeInAmount,
	discountAmount,
	mainImage,
	images,
	colors,
	features,
	reversed = false,
	onPriceClick,
	onTestDriveClick,
	onCreditClick,
}: CarOfferProps) => {
	const [selectedColor, setSelectedColor] = useState<CarColor>(colors[0]?.id ?? 'cherry');
	const isMobile = useMediaQuery(996);
	const currentImage = colors.find(c => c.id === selectedColor)?.imageSrc || mainImage;

	const isReversed = modelId ? false : reversed;

	return (
		<section className={cls.carOffer} data-reversed={isReversed}>
			<div className={cls.container}>
				{/* Верхняя часть: кнопки + авто */}
				<div className={cls.topSection} data-reversed={isReversed}>
					<div className={cls.leftColumn}>
						<CarInfo
							model={model}
							tradeInAmount={tradeInAmount}
							discountAmount={discountAmount}
							onPriceClick={onPriceClick}
							onTestDriveClick={onTestDriveClick}
							onCreditClick={onCreditClick}
						/>
					</div>

					<div className={cls.rightColumn}>
						<div className={cls.carWrapper}>
							<Image
								src={currentImage}
								alt={`${model} - ${selectedColor}`}
								width={800}
								height={533}
								className={cls.carImage}
								priority
							/>
							<Text
								fontSize={isMobile ? TextSize.XS : TextSize.M}
								fontWeight={FontWeight.MEDIUM}
								textAlign={TextAlign.CENTER}
								className={cls.sticker}
							>
								Осталось 5 автомобилей по спец цене
							</Text>

							<CarColorPicker
								colors={colors}
								selectedColor={selectedColor}
								onColorChange={setSelectedColor}
								reversed={isReversed}
							/>
						</div>
					</div>
				</div>

				{/* Features */}
				<div className={cls.features}>
					{features.map((feature, index) => {
						const IconComponent = feature.icon;
						return (
							<div key={index} className={cls.feature}>
								<IconComponent className={cls.featureIcon} />
								<Text
									type={TextType.TEXT}
									tag={TextTag.SPAN}
									fontSize={TextSize.M}
									color={TextColor.WHITE}
									lineHeight={isMobile ? 1.3 : 1.1}
									className={cls.featureText}
								>
									{feature.text}
								</Text>
							</div>
						);
					})}
				</div>

				<CarGallery images={images} />
			</div>
		</section>
	);
};
