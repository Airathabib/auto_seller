'use client';

import { useState } from 'react';
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
import { formatPhone } from '@/lib/utils';
import { useMediaQuery } from '@/lib/hooks';

import cls from './CreditForm.module.scss';

export const CreditForm = () => {
	const [phone, setPhone] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);

	const isMobile = useMediaQuery(996);

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formatted = formatPhone(e.target.value);
		setPhone(formatted);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (phone && isAgreed) {
			console.log('Заявка отправлена:', { phone, isAgreed });
			// Здесь будет отправка формы
		}
	};

	return (
		<div className={cls.creditForm}>
			<div className={cls.background}>
				{isMobile ? (
					<Image
						src='/images/cars/preview/creditBackgroundMobile.webp'
						alt='TANK 300 на фоне вулкана'
						fill
						className={cls.backgroundImage}
						priority
					/>
				) : (
					<Image
						src='/images/cars/preview/creditBackground.webp'
						alt='TANK 300 на фоне вулкана'
						fill
						className={cls.backgroundImage}
						priority
					/>
				)}
			</div>

			{/* Контент */}
			<div className={cls.content}>
				<div className={cls.contentHeader}>
					<Text
						type={TextType.TITLE}
						tag={TitleTag.H2}
						fontSize={isMobile ? TextSize.SIZE_28 : TextSize.SIZE_40}
						fontWeight={FontWeight.BOLD}
						color={TextColor.WHITE}
						lineHeight={1.2}
						className={cls.title}
					>
						ОСТАВЬТЕ ЗАЯВКУ
						<br />
						НА КРЕДИТ
					</Text>

					<Text
						type={TextType.TEXT}
						tag={TextTag.P}
						fontSize={TextSize.L}
						color={TextColor.WHITE}
						className={cls.subtitle}
					>
						и получите одобрение за 1 день!
					</Text>
				</div>

				<form className={cls.form} onSubmit={handleSubmit}>
					<div className={cls.formActions}>
						<div className={cls.inputGroup}>
							<label className={cls.label} htmlFor='phone'>
								Телефон
							</label>
							<input
								id='phone'
								type='tel'
								className={cls.input}
								placeholder='+7 (___) ___-__-__'
								value={phone}
								onChange={handlePhoneChange}
								required
							/>
						</div>

						<Button
							variant='primary'
							size='l'
							iconEnd={<ChevronRight />}
							type='submit'
							className={cls.submitButton}
						>
							Отправить заявку
						</Button>
					</div>

					<label className={cls.checkboxLabel}>
						<input
							type='checkbox'
							className={cls.checkbox}
							checked={isAgreed}
							onChange={e => setIsAgreed(e.target.checked)}
							required
						/>
						<span className={cls.checkmark} />
						<Text
							type={TextType.TEXT}
							tag={TextTag.SPAN}
							fontSize={TextSize.XS}
							color={TextColor.WHITE}
						>
							Согласен на обработку персональных данных.
						</Text>
					</label>
				</form>
			</div>
		</div>
	);
};
