'use client';

import { ClipboardCheck, ShieidTick, Tag, Sale } from '@/assets/icons';
import type { CarColor, ColorOption } from '../model/types/types';

export interface CarFeature {
	icon: React.ComponentType<{ className?: string }>;
	text: string;
}

export interface CarModel {
	id: string;
	model: string;
	tradeInAmount?: string;
	discountAmount?: string;
	mainImage: string;
	images: string[];
	colors: ColorOption[];
	features: CarFeature[];
	reversed: boolean;
}

export const carModels: CarModel[] = [
	{
		id: 'tank-300',
		model: 'TANK 300',
		tradeInAmount: '450 000 ₽',
		mainImage: '/images/cars/TANK300/TANK300_cherry.png',
		images: [
			'/images/cars/preview/tank300/tank300_preview_1.png',
			'/images/cars/preview/tank300/tank300_preview_2.png',
			'/images/cars/preview/tank300/tank300_preview_3.png',
			'/images/cars/preview/tank300/tank300_preview_4.png',
			'/images/cars/preview/tank300/tank300_preview_5.png',
		],

		colors: [
			{
				id: 'cherry',
				name: 'Вишнёвый',
				color: '#781318',
				imageSrc: '/images/cars/TANK300/TANK300_cherry.png',
			},
			{
				id: 'red',
				name: 'Красный',
				color: '#9F291B',
				imageSrc: '/images/cars/TANK300/TANK300_red.png',
			},
			{
				id: 'black',
				name: 'Чёрный',
				color: '#0F0F11',
				imageSrc: '/images/cars/TANK300/TANK300_black.png',
			},
			{
				id: 'gray',
				name: 'Серый',
				color: '#585960',
				imageSrc: '/images/cars/TANK300/TANK300_gray.png',
			},
			{
				id: 'light',
				name: 'Светлый',
				color: '#BAC3D0',
				imageSrc: '/images/cars/TANK300/TANK300_light.png',
			},
		],
		features: [
			{ icon: ClipboardCheck, text: 'Автомобили в наличии с ПТС' },
			{ icon: ShieidTick, text: 'Современная подвеска до 5 лет / 150 000 км' },
			{ icon: Tag, text: 'Улучшим любое предложение' },
			{ icon: Sale, text: 'Кредит 0.01%' },
		],
		reversed: false,
	},
	{
		id: 'tank-500',
		model: 'TANK 500',
		discountAmount: '700 000 ₽',
		mainImage: '/images/cars/TANK500/TANK500_brown.png',
		images: [
			'/images/cars/preview/tank500/tank500_preview_1.png',
			'/images/cars/preview/tank500/tank500_preview_2.png',
			'/images/cars/preview/tank500/tank500_preview_3.png',
			'/images/cars/preview/tank500/tank500_preview_4.png',
			'/images/cars/preview/tank500/tank500_preview_5.png',
		],

		//  Цвета для TANK 500
		colors: [
			{
				id: 'brown',
				name: 'Коричневый',
				color: '#79746B',
				imageSrc: '/images/cars/TANK500/TANK500_brown.png',
			},
			{
				id: 'black',
				name: 'Чёрный',
				color: '#0E1011',
				imageSrc: '/images/cars/TANK500/TANK500_black.png',
			},
			{
				id: 'gray',
				name: 'Серый',
				color: '#4A4B52',
				imageSrc: '/images/cars/TANK500/TANK500_gray.png',
			},
			{
				id: 'light',
				name: 'Светлый',
				color: '#DBE6F8',
				imageSrc: '/images/cars/TANK500/TANK500_light.png',
			},
		],
		features: [
			{ icon: ClipboardCheck, text: 'Автомобили в наличии с ПТС' },
			{ icon: ShieidTick, text: 'Современная подвеска до 5 лет / 150 000 км' },
			{ icon: Tag, text: 'Улучшим любое предложение' },
			{ icon: Sale, text: 'Кредит 0.01%' },
		],
		reversed: true,
	},
];
