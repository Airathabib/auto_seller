'use client';

import { Button } from '@/components/shared/ui/Button';
import { ChevronRight } from '@/assets/icons';
import { Text, TextSize, FontWeight, TextColor, TextTag } from '@/components/shared/ui/Text';
import { ContactBlock } from '@/components/shared/ui/ContactBlock';
import { useMediaQuery } from '@/lib/hooks';
import { COMPANY_CONTACTS, YANDEX_MAP_URL } from '@/components/shared/lib';

import cls from './ContactMap.module.scss';

export const ContactMap = () => {
	const isMobile = useMediaQuery(996);

	const mapSrc = YANDEX_MAP_URL;

	const handleOrderCallback = () => {
		console.log('Заказать звонок');
	};

	return (
		<div className={cls.contactMap}>
			<div className={cls.mapWrapper}>
				<iframe src={mapSrc} className={cls.map} title='Карта расположения' loading='lazy' />

				<div className={cls.contactPanel}>
					<div className={cls.contactItem}>
						<Text fontSize={TextSize.S} color={TextColor.GRAY} className={cls.label}>
							Адрес
						</Text>
						<Text fontSize={TextSize.XL} color={TextColor.WHITE} className={cls.value}>
							{COMPANY_CONTACTS.address}
						</Text>
					</div>

					<div className={cls.contactItem}>
						<Text fontSize={TextSize.S} color={TextColor.GRAY} className={cls.label}>
							Телефон
						</Text>
						<ContactBlock
							phone={COMPANY_CONTACTS.phone}
							href={COMPANY_CONTACTS.phoneHref}
							ContactSize={isMobile ? TextSize.M : TextSize.XL}
							status='online'
							align='start'
						/>
					</div>

					<div className={cls.contactItem}>
						<Text fontSize={TextSize.S} color={TextColor.GRAY} className={cls.label}>
							Режим работы
						</Text>
						<Text fontSize={TextSize.XL} color={TextColor.WHITE} className={cls.value}>
							{COMPANY_CONTACTS.workHours}
						</Text>
					</div>

					<Button
						variant='primary'
						size='l'
						iconEnd={<ChevronRight />}
						onClick={handleOrderCallback}
						className={cls.callbackButton}
					>
						Заказать звонок
					</Button>
				</div>
			</div>
		</div>
	);
};
