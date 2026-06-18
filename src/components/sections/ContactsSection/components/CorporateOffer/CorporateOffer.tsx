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
	TextTag,
} from '@/components/shared/ui/Text';
import { useMediaQuery } from '@/lib/hooks';

import cls from './CorporateOffer.module.scss';

export const CorporateOffer = () => {
	//
	const isMobile = useMediaQuery(996);

	const handleSendRequest = () => {
		console.log('Отправить заявку для корпоративных клиентов');
		// Здесь будет логика отправки
	};

	return (
		<div className={cls.corporateOffer}>
			<div className={cls.container}>
				<div className={cls.content}>
					<div className={cls.textBlock}>
						<Text
							type={TextType.TITLE}
							tag={TitleTag.H2}
							fontSize={isMobile ? TextSize.SIZE_28 : TextSize.SIZE_30}
							fontWeight={FontWeight.BOLD}
							color={TextColor.WHITE}
							className={cls.title}
						>
							ИНДИВИДУАЛЬНОЕ ПРЕДЛОЖЕНИЕ
							<br />
							ДЛЯ КОРПОРАТИВНЫХ КЛИЕНТОВ
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

					<div className={cls.managerBlock}>
						<div className={cls.photoWrapper}>
							<Image
								src='/images/cars/preview/managers/carSeller.png'
								alt='Татьяна Санникова'
								width={120}
								height={120}
								className={cls.photo}
							/>
						</div>

						<div className={cls.managerInfo}>
							<Text
								type={TextType.TEXT}
								tag={TextTag.SPAN}
								fontSize={isMobile ? TextSize.L : TextSize.XXL}
								fontWeight={FontWeight.BOLD}
								color={TextColor.WHITE}
								className={cls.managerName}
							>
								ТАТЬЯНА САННИКОВА
							</Text>

							<Text
								type={TextType.TEXT}
								tag={TextTag.P}
								fontSize={isMobile ? TextSize.S : TextSize.M}
								color={TextColor.GRAY}
								className={cls.managerPosition}
							>
								Отдел корпоративных
								<br />
								продаж АВТОРУСЬ
							</Text>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
