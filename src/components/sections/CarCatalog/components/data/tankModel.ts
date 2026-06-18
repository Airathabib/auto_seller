import type { CarModel } from '../../model/types/types';

export const tankModels: CarModel[] = [
	{
		id: 'tank-300',
		name: 'TANK 300',
		image: '/images/cars/TANK300/TANK300_cherry.png',
		trims: [
			{
				name: 'Adventure',
				price: 3_649_000,
				engine: {
					name: '2.0 AT',
					volume: '2.0 л',
					power: '227 л.с.',
					fuel: 'Бензин',
					transmission: 'Автоматическая',
					drive: 'Полный',
				},
				features: ['Полный привод', 'Кожаный салон', 'Климат-контроль'],
			},
			{
				name: 'Premium',
				price: 4_199_000,
				engine: {
					name: '2.0 AT',
					volume: '2.0 л',
					power: '227 л.с.',
					fuel: 'Бензин',
					transmission: 'Автоматическая',
					drive: 'Полный',
				},
				features: ['Полный привод', 'Панорамная крыша', 'Адаптивный круиз'],
			},
			{
				name: 'Luxury',
				price: 4_699_000,
				engine: {
					name: '2.0 AT',
					volume: '2.0 л',
					power: '227 л.с.',
					fuel: 'Бензин',
					transmission: 'Автоматическая',
					drive: 'Полный',
				},
				features: ['Полный привод', 'Массаж сидений', 'Премиум аудио'],
			},
		],
	},
	{
		id: 'tank-500',
		name: 'TANK 500',
		image: '/images/cars/TANK500/TANK500_brown.png',
		trims: [
			{
				name: 'Premium',
				price: 5_999_000,
				engine: {
					name: '3.0 AT',
					volume: '3.0 л V6',
					power: '354 л.с.',
					fuel: 'Бензин',
					transmission: 'Автоматическая',
					drive: 'Полный',
				},
				features: ['Полный привод', 'Кожаный салон', 'Вентиляция сидений'],
			},
			{
				name: 'Luxury',
				price: 6_799_000,
				engine: {
					name: '3.0 AT',
					volume: '3.0 л V6',
					power: '354 л.с.',
					fuel: 'Бензин',
					transmission: 'Автоматическая',
					drive: 'Полный',
				},
				features: ['Полный привод', 'Массаж сидений', 'Проекционный дисплей'],
			},
			{
				name: 'Ultimate',
				price: 7_499_000,
				engine: {
					name: '3.0 AT',
					volume: '3.0 л V6',
					power: '354 л.с.',
					fuel: 'Бензин',
					transmission: 'Автоматическая',
					drive: 'Полный',
				},
				features: ['Полный привод', 'Все опции', 'Расширенная гарантия'],
			},
		],
	},
];
