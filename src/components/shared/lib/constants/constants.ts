/**
 * URL карты Яндекс для виджета
 * Получен из конструктора карт: https://yandex.ru/map-constructor/
 */
export const YANDEX_MAP_URL =
	'https://yandex.ru/map-widget/v1/?um=constructor%3A355b7c390631f4b0e6f1e8eb31fd9b5a52cc70e26382b1c5018423a494b689bd&amp;source=constructor';

/**
 * Контактные данные компании
 * Используются в: Header, Footer, ContactMap, ContactBlock
 */
export const COMPANY_CONTACTS = {
	phone: '+7 (999) 999-99-99',
	phoneHref: 'tel:+79999999999',
	email: 'info@autorus-tank.ru',
	address: 'Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)',
	workHours: 'Ежедневно с 09:00 до 21:00',
} as const;
