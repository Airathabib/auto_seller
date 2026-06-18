'use client';
import { useState } from 'react';
import {
	Logo,
	MarkerPin,
	Menu,
	PhoneCall,
	PhoneIncoming,
	Settings,
	Speedometer,
	Close,
} from '@/assets/icons';
import {
	Text,
	TextSize,
	TextColor,
	TextType,
	FontWeight,
	TitleTag,
	TextTag,
} from '@/components/shared/ui/Text';
import Link from 'next/link';
import { ContactBlock, type ConnectionStatus } from '@/components/shared/ui/ContactBlock';
import { Button } from '@/components/shared/ui/Button';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery/useMediaQuery';
import { BurgerMenu } from '@/components/shared/ui/BurgerMenu';
import { COMPANY_CONTACTS } from '@/components/shared/lib';

import cls from './Header.module.scss';

export const Header = () => {
	const status: ConnectionStatus = 'online';
	const isMobile = useMediaQuery(996);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(prev => !prev);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header className={cls.header}>
			<div className={cls.container}>
				<Link href='/' className={cls.logoLink}>
					<Logo className={cls.logo} />
				</Link>

				<div className={cls.headerWrapper}>
					<div className={cls.headerWrapperTop}>
						<div className={cls.wrapperTopAddress}>
							<MarkerPin className={cls.adressPin} />
							<Text fontSize={TextSize.S} color={TextColor.GRAY}>
								{COMPANY_CONTACTS.address}
							</Text>
						</div>

						<div className={cls.wrapperTopActions}>
							<Link href='/service' className={cls.servise}>
								<Settings className={cls.actionIcon} />
								<Text fontSize={TextSize.S} color={TextColor.WHITE}>
									Записаться на сервис
								</Text>
							</Link>

							<Link href='/test-drive' className={cls.testdrive}>
								<Speedometer className={cls.actionIcon} />
								<Text fontSize={TextSize.S} color={TextColor.WHITE}>
									Тест-драйв
								</Text>
							</Link>
						</div>
					</div>

					<div className={cls.headerWrapperBottom}>
						<div className={cls.bottomTitle}>
							<Text
								type={TextType.TITLE}
								tag={TitleTag.H3}
								fontSize={isMobile ? TextSize.S : TextSize.SIZE_30}
								fontWeight={isMobile ? FontWeight.MEDIUM : FontWeight.BOLD}
								color={TextColor.WHITE}
							>
								АВТОРУСЬ TANK{isMobile && ' Лосиный Остров'}
							</Text>

							{!isMobile && <span className={cls.divider} aria-hidden='true' />}

							<Text
								type={TextType.TEXT}
								tag={TextTag.P}
								fontSize={isMobile ? TextSize.XS : TextSize.L}
								fontWeight={FontWeight.LIGHT}
								color={isMobile ? TextColor.GRAY : TextColor.WHITE}
							>
								Официальный дилер
							</Text>
						</div>
						<div className={cls.wrapperBottomActions}>
							{!isMobile ? (
								<>
									<ContactBlock
										phone={COMPANY_CONTACTS.phone}
										href={COMPANY_CONTACTS.phoneHref}
										status={status}
										align='end'
									/>
									<Button size='m' gap='--gap-x-12' iconStart={<PhoneIncoming />}>
										Заказать звонок
									</Button>
								</>
							) : (
								<>
									<Link href='tel:+79999999999' className={cls.phoneIcon} aria-label='Позвонить'>
										<PhoneCall />
									</Link>

									{/* Иконка меняется на X когда меню открыто */}
									<button
										className={cls.burger}
										aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
										aria-expanded={isMenuOpen}
										onClick={toggleMenu}
									>
										{isMenuOpen ? <Close /> : <Menu />}
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Бургер-меню под хедером */}
			{isMobile && <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />}
		</header>
	);
};
