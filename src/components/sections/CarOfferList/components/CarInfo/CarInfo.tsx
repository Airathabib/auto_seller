'use client';

import {
	Text,
	TextSize,
	FontWeight,
	TextColor,
	TextType,
	TitleTag,
} from '@/components/shared/ui/Text';
import { Button } from '@/components/shared/ui/Button';
import { ChevronRight, Warning } from '@/assets/icons';
import { useMediaQuery } from '@/lib/hooks';
import cls from './CarInfo.module.scss';

interface CarInfoProps {
	model: string;
	tradeInAmount?: string;
	discountAmount?: string;
	onPriceClick?: () => void;
	onTestDriveClick?: () => void;
	onCreditClick?: () => void;
}

export const CarInfo = ({
	model,
	tradeInAmount,
	discountAmount,
	onPriceClick,
	onTestDriveClick,
	onCreditClick,
}: CarInfoProps) => {
	const isMobile = useMediaQuery(996);

	return (
		<div className={cls.carInfo}>
			<div className={cls.header}>
				<Text
					fontSize={isMobile ? TextSize.S : TextSize.XL}
					fontWeight={FontWeight.MEDIUM}
					color={TextColor.ORANGE}
					className={cls.headerPromo}
				>
					Только в АВТОРУСЬ!
				</Text>
				<Text
					type={TextType.TITLE}
					tag={TitleTag.H3}
					fontSize={isMobile ? TextSize.SIZE_28 : TextSize.SIZE_40}
					fontWeight={FontWeight.BOLD}
					color={TextColor.WHITE}
				>
					{model}
				</Text>
				{tradeInAmount && (
					<div className={cls.tradeIn}>
						<Text
							fontSize={isMobile ? TextSize.XXL : TextSize.SIZE_30}
							fontWeight={FontWeight.MEDIUM}
							color={TextColor.WHITE}
							lineHeight='1.1'
						>
							ВЫГОДА ПО TRADE-IN ДО {tradeInAmount}
						</Text>
					</div>
				)}
				{discountAmount && (
					<div className={cls.discount}>
						<Text
							fontSize={TextSize.SIZE_30}
							fontWeight={FontWeight.MEDIUM}
							color={TextColor.WHITE}
							lineHeight='1.1'
						>
							ВЫГОДА ДО {discountAmount}
						</Text>
					</div>
				)}
				<div className={cls.attentionBlock}>
					<Warning className={cls.attentionIcon} />
					<Text fontSize={TextSize.S} fontWeight={FontWeight.MEDIUM} color={TextColor.WHITE}>
						Ограниченное предложение!
					</Text>
					<Warning className={cls.attentionIcon} />
				</div>
			</div>

			<div className={cls.buttons}>
				<Button
					variant='primary'
					size='l'
					iconEnd={<ChevronRight />}
					onClick={onPriceClick}
					gap='--gap-x-10'
					className={cls.primaryBtn}
				>
					Узнать стоимость по акции
				</Button>
				<Button
					variant='outline'
					size='l'
					gap='--gap-x-10'
					iconEnd={<ChevronRight />}
					onClick={onTestDriveClick}
				>
					<Text color={TextColor.WHITE}>Тест-драйв</Text>
				</Button>
				<Button
					variant='outline'
					size='l'
					gap='--gap-x-10'
					iconEnd={<ChevronRight />}
					onClick={onCreditClick}
				>
					<Text color={TextColor.WHITE}>Рассчитать кредит</Text>
				</Button>
			</div>
		</div>
	);
};
