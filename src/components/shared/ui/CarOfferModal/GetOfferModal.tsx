'use client';

import { useState, useEffect } from 'react';
import { Close } from '@/assets/icons';
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
	TextAlign,
} from '@/components/shared/ui/Text';
import { Select } from '@/components/shared/ui/Select';
import { formatPhone } from '@/lib/utils';

import cls from './GetOfferModal.module.scss';

interface GetOfferModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const GetOfferModal = ({ isOpen, onClose }: GetOfferModalProps) => {
	const [phone, setPhone] = useState('');
	const [model, setModel] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);

	// Блокируем скролл body когда модалка открыта
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose();
			}
		};
		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	}, [isOpen, onClose]);

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formatted = formatPhone(e.target.value);
		setPhone(formatted);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (phone && isAgreed) {
			console.log('Заявка отправлена:', { phone, model, isAgreed });
			onClose();
			setPhone('');
			setModel('');
			setIsAgreed(false);
		}
	};

	const modelOptions = [
		{ value: '', label: 'Выберите модель', disabled: true },
		{ value: 'tank-300', label: 'TANK 300' },
		{ value: 'tank-500', label: 'TANK 500' },
	];

	if (!isOpen) return null;

	return (
		<div className={cls.modal} onClick={onClose}>
			<div className={cls.modalContent} onClick={e => e.stopPropagation()}>
				<button className={cls.closeButton} onClick={onClose} aria-label='Закрыть'>
					<Close />
				</button>

				<div className={cls.header}>
					<Text
						type={TextType.TITLE}
						tag={TitleTag.H2}
						fontSize={TextSize.SIZE_30}
						fontWeight={FontWeight.BOLD}
						textAlign={TextAlign.CENTER}
						color={TextColor.WHITE}
						lineHeight={1.2}
						className={cls.title}
					>
						ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
					</Text>
					<Text
						type={TextType.TEXT}
						tag={TextTag.P}
						fontSize={TextSize.M}
						color={TextColor.GRAY}
						textAlign={TextAlign.CENTER}
						lineHeight={1.2}
						className={cls.subtitle}
					>
						Пожалуйста, укажите свои данные.
						<br />
						Наш менеджер свяжется с вами в течение 15 минут.
					</Text>
				</div>

				<form className={cls.form} onSubmit={handleSubmit}>
					<Select
						label='Модель'
						options={modelOptions}
						value={model}
						onChange={setModel}
						placeholder='Выберите модель'
					/>

					<div className={cls.formGroup}>
						<label className={cls.label}>Телефон</label>
						<input
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
						gap='--gap-x-10'
						type='submit'
						iconEnd={<ChevronRight />}
						className={cls.submitButton}
					>
						Получить предложение
					</Button>

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
							fontSize={TextSize.S}
							color={TextColor.WHITE}
						>
							Согласен на обработку персональных данных
						</Text>
					</label>
				</form>
			</div>
		</div>
	);
};
