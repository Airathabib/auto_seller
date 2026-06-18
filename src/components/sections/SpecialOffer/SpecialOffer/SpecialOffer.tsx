'use client';

import { Advantages } from '../components/Advantages/Advantages';
import { BookingOffer } from '../components/BookingOffer/BookingOffer';
import { TimerBanner } from '../components/TimerBanner/Timerbanner';

import cls from './SpecialOffer.module.scss';

interface SpecialOfferProps {
	showAdvantages?: boolean;
	showBookingOffer?: boolean;
}

export const SpecialOffer = ({
	showAdvantages = true,
	showBookingOffer = true,
}: SpecialOfferProps) => {
	return (
		<section className={cls.specialOffer}>
			<div className={cls.container}>
				<TimerBanner
					endDate='2026-06-30T23:59:59'
					ctaText='Узнать цену с выгодами'
					ctaHref='/special-offer'
				/>

				{showAdvantages && (
					<Advantages
						items={[
							{
								icon: 'badge',
								title: 'Официальный дилер',
								description: 'Гарантируем высокое качество обслуживания.',
							},
							{
								icon: 'clock',
								title: 'Покупка авто за 1 день',
								description: 'Удобный процесс покупки, включая оформление всех документов.',
							},
							{
								icon: 'checklist',
								title: 'Все комплектации в наличии',
								description: 'Широкий выбор комплектаций, с полным пакетом документов.',
							},
						]}
					/>
				)}

				{showBookingOffer && (
					<BookingOffer
						title='ЗАБРОНИРУЙТЕ АВТОМОБИЛЬ СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ 100 000 ₽'
						carModels={[
							{
								name: 'TANK 300',
								imageSrc: '/images/cars/preview/previewTANK300.png',
								href: '/cars/tank-300',
							},
							{
								name: 'TANK 500',
								imageSrc: '/images/cars/preview/previewTANK500.png',
								href: '/cars/tank-500',
							},
						]}
					/>
				)}
			</div>
		</section>
	);
};
