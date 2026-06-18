'use client';
import { useEffect } from 'react';
import { Clock, MarkerPin, PhoneIncoming, Settings, Speedometer } from '@/assets/icons';
import Link from 'next/link';
import { FontWeight, Text, TextColor, TextSize } from '../../Text';
import { Button } from '../../Button';
import { ContactBlock, type ConnectionStatus } from '../../ContactBlock';
import { COMPANY_CONTACTS } from '@/components/shared/lib';

import cls from './BurgerMenu.module.scss';

interface BurgerMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export const BurgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {
	const status: ConnectionStatus = 'online';

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

	return (
		<div className={`${cls.menu} ${isOpen ? cls.menuOpen : ''}`}>
			<div className={cls.content}>
				<div className={cls.header}>
					<Text fontSize={TextSize.XL} fontWeight={FontWeight.BOLD} color={TextColor.WHITE}>
						АВТОРУСЬ TANK Лосиный Остров
					</Text>
					<Text fontSize={TextSize.S} color={TextColor.GRAY} fontWeight={FontWeight.LIGHT}>
						Официальный дилер
					</Text>
				</div>

				<div className={cls.phone}>
					<ContactBlock
						phone={COMPANY_CONTACTS.phone}
						href={COMPANY_CONTACTS.phoneHref}
						status={status}
						className={cls.contactBlock}
					/>
				</div>

				{/* Адрес */}
				<div className={cls.info}>
					<div className={cls.infoItem}>
						<MarkerPin className={cls.infoIcon} />
						<Text fontSize={TextSize.M} color={TextColor.GRAY}>
							{COMPANY_CONTACTS.address}
						</Text>
					</div>

					{/* Время работы */}
					<div className={cls.infoItem}>
						<Clock className={cls.infoIcon} />
						<Text fontSize={TextSize.M} color={TextColor.GRAY}>
							{COMPANY_CONTACTS.workHours}
						</Text>
					</div>
				</div>

				{/* Кнопка заказать звонок */}
				<div className={cls.actions}>
					<Button
						variant='primary'
						size='l'
						iconStart={<PhoneIncoming />}
						className={cls.callButton}
					>
						Заказать звонок
					</Button>

					{/* Ссылки */}
					<div className={cls.menuLinkWrapper}>
						<Link href='/service' className={cls.menuLink} onClick={onClose}>
							<Settings className={cls.linkIcon} />
							<Text fontSize={TextSize.S} color={TextColor.WHITE}>
								Записаться на сервис
							</Text>
						</Link>

						<Link href='/test-drive' className={cls.menuLink} onClick={onClose}>
							<Speedometer className={cls.linkIcon} />
							<Text fontSize={TextSize.S} color={TextColor.WHITE}>
								Тест-драйв
							</Text>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
