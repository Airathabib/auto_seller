'use client';

import { useState } from 'react';
import {
	MarkerPin,
	PhoneIncoming,
	Settings,
	Speedometer,
	ChevronDown,
	ChevronUp,
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
import { COMPANY_CONTACTS } from '@/components/shared/lib';

import cls from './Footer.module.scss';

export const Footer = () => {
	const status: ConnectionStatus = 'online';
	const isMobile = useMediaQuery(996);
	const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

	const toggleDisclaimer = () => setIsDisclaimerOpen(prev => !prev);

	return (
		<footer className={cls.footer}>
			<div className={cls.container}>
				{/* Дисклеймер */}
				<div className={cls.disclaimer}>
					<button
						className={cls.disclaimerToggle}
						onClick={toggleDisclaimer}
						aria-expanded={isDisclaimerOpen}
					>
						<Text
							type={TextType.TEXT}
							tag={TextTag.SPAN}
							fontSize={TextSize.M}
							fontWeight={FontWeight.MEDIUM}
							color={TextColor.WHITE}
						>
							Дисклеймер
						</Text>
						{isDisclaimerOpen ? (
							<ChevronUp className={cls.disclaimerIcon} />
						) : (
							<ChevronDown className={cls.disclaimerIcon} />
						)}
					</button>

					{isDisclaimerOpen && (
						<div className={cls.disclaimerContent}>
							<Text
								fontSize={TextSize.M}
								color={TextColor.GRAY}
								lineHeight={1.4}
								className={cls.disclaimerText}
							>
								TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK (ТЭНК) 300 в
								комплектации Adventure (Эдвенчер) с двигателем 2.0Т 4WD, 2023 года производства,
								цвет автомобиля: белый, с учетом выгоды по трейд-ин 300 000 рублей. В трейд-ин
								принимаются автомобили с пробегом со сроком владения и регистрации (постановки на
								учет) в органах ГИБДД не менее 6 месяцев (в отношении автомобилей бренда TANK,
								Haval, Great Wall – 3 месяца) до сдачи автомобиля в трейд-ин. В качестве документов,
								подтверждающих срок владения транспортного средства, собственнику необходимо
								предоставить копию ПТС или СТС или карточку учета ТС из ГИБДД с печатью и подписью.
								Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение
								ограничено, не является офертой и действует с 01.04.2024г.
							</Text>

							<Text
								fontSize={TextSize.M}
								color={TextColor.GRAY}
								lineHeight={1.4}
								className={cls.disclaimerText}
							>
								TANK 500 за 5 349 000 руб с учетом поддержек. Цена на модель TANK (ТЭНК) 500 в
								комплектации Adventure (Эдвенчер) с двигателем 3.0Т 4WD, 2023 года производства,
								цвет автомобиля: белый, с учетом прямой выгоды в 950 000 рублей. Подробности
								уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не
								является офертой и действует с 01.04.2024г.
							</Text>
						</div>
					)}
				</div>

				{/* Основной контент футера */}
				<div className={cls.footerContent}>
					{isMobile ? (
						<div className={cls.footerTop}>
							{/* Левая часть */}
							<div className={cls.footerLeft}>
								<div className={cls.dealerInfo}>
									<div className={cls.dealerTitle}>
										<Text
											type={TextType.TITLE}
											tag={TitleTag.H3}
											fontSize={isMobile ? TextSize.XL : TextSize.M}
											fontWeight={FontWeight.BOLD}
											color={TextColor.WHITE}
											className={cls.dealerName}
										>
											АВТОРУСЬ TANK Лосиный Остров
										</Text>
										<Text fontSize={TextSize.S} color={TextColor.GRAY} className={cls.dealerType}>
											Официальный дилер
										</Text>
									</div>

									<div className={cls.footerContacts}>
										<ContactBlock
											phone={COMPANY_CONTACTS.phone}
											ContactSize={TextSize.SIZE_30}
											status={status}
											align='start'
										/>

										<div className={cls.addressBlock}>
											<MarkerPin className={cls.addressIcon} />
											<Text fontSize={TextSize.S} color={TextColor.GRAY}>
												{COMPANY_CONTACTS.address}
											</Text>
										</div>

										<div className={cls.footerActions}>
											<Button
												variant='primary'
												size='l'
												gap='--gap-x-12'
												iconStart={<PhoneIncoming />}
												className={cls.callbackButton}
											>
												Заказать звонок
											</Button>
											<div className={cls.footerLinks}>
												<Link href='/service' className={cls.footerLink}>
													<Settings className={cls.linkIcon} />
													<Text fontSize={TextSize.M} color={TextColor.WHITE}>
														Записаться на сервис
													</Text>
												</Link>
												<Link href='/test-drive' className={cls.footerLink}>
													<Speedometer className={cls.linkIcon} />
													<Text fontSize={TextSize.M} color={TextColor.WHITE}>
														Тест-драйв
													</Text>
												</Link>
											</div>
										</div>
									</div>
									{/* Юридическая информация */}
									<div className={cls.legalInfo}>
										<Text fontSize={TextSize.S} color={TextColor.GRAY} className={cls.legalTitle}>
											Официальный дилер
										</Text>
										<Text fontSize={TextSize.M} color={TextColor.WHITE}>
											ООО АВТОРУСЬ МЫТИЩИ | ОГРН – 1147746695161, ИНН – 7728881903
										</Text>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div className={cls.footerTop}>
							{/* Левая часть */}
							<div className={cls.footerLeft}>
								<div className={cls.dealerInfo}>
									<div className={cls.dealerTitle}>
										<Text
											type={TextType.TITLE}
											tag={TitleTag.H3}
											fontSize={isMobile ? TextSize.XL : TextSize.M}
											fontWeight={FontWeight.BOLD}
											color={TextColor.WHITE}
											className={cls.dealerName}
										>
											АВТОРУСЬ TANK Лосиный Остров
										</Text>
										<Text fontSize={TextSize.S} color={TextColor.GRAY} className={cls.dealerType}>
											Официальный дилер
										</Text>
									</div>

									<div className={cls.addressBlock}>
										<MarkerPin className={cls.addressIcon} />
										<Text fontSize={TextSize.S} color={TextColor.GRAY}>
											{COMPANY_CONTACTS.address}
										</Text>
									</div>

									{/* Юридическая информация */}
									<div className={cls.legalInfo}>
										<Text fontSize={TextSize.S} color={TextColor.GRAY} className={cls.legalTitle}>
											Официальный дилер
										</Text>
										<Text fontSize={TextSize.M} color={TextColor.WHITE}>
											ООО АВТОРУСЬ МЫТИЩИ | ОГРН – 1147746695161, ИНН – 7728881903
										</Text>
									</div>
								</div>

								<div className={cls.footerActions}>
									<div className={cls.footerContacts}>
										<ContactBlock
											phone={COMPANY_CONTACTS.address}
											ContactSize={TextSize.XL}
											status={status}
											align='end'
										/>

										<Button
											variant='primary'
											size='l'
											iconStart={<PhoneIncoming />}
											className={cls.callbackButton}
										>
											Заказать звонок
										</Button>
									</div>

									<div className={cls.footerLinks}>
										<Link href='/service' className={cls.footerLink}>
											<Settings className={cls.linkIcon} />
											<Text fontSize={TextSize.M} color={TextColor.WHITE}>
												Записаться на сервис
											</Text>
										</Link>
										<Link href='/test-drive' className={cls.footerLink}>
											<Speedometer className={cls.linkIcon} />
											<Text fontSize={TextSize.M} color={TextColor.WHITE}>
												Тест-драйв
											</Text>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Нижняя часть */}
					<div className={cls.footerBottom}>
						<Text fontSize={TextSize.M} color={TextColor.GRAY} className={cls.footerInfo}>
							© 2024, АВТОРУСЬ TANK
						</Text>
						<div className={cls.bottomLinks}>
							<Link href='/legal' className={cls.bottomLink}>
								<Text fontSize={TextSize.M} color={TextColor.GRAY}>
									Правовая информация
								</Text>
							</Link>
							<Link href='/promo' className={cls.bottomLink}>
								<Text fontSize={TextSize.M} color={TextColor.GRAY}>
									Условия акции
								</Text>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
