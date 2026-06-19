import { Hero } from '@/components/sections/Hero/Hero';
import { CarOffersList } from '@/components/sections/CarOfferList';
import { CarCatalog } from '@/components/sections/CarCatalog';
import { ContactSection } from '@/components/sections/ContactsSection/ContactsSection/ContactsSection';
import type { Metadata } from 'next';
import { SpecialOffer } from '@/components/sections/SpecialOffer';
import { PromoPopup } from '@/components/shared/ui/PromoPopup';

export const metadata: Metadata = {
	title: 'TANK 500 | АВТОРУСЬ TANK',
	description:
		'TANK 500 - премиальный внедорожник. Официальный дилер АВТОРУСЬ TANK Лосиный Остров.',
};

export default function Tank500Page() {
	return (
		<>
			<PromoPopup
				imageSrc='/images/banner/tank500/Tank500Desktop.webp'
				imageMobileSrc='/images/banner/tank500/Tank500Mobile.webp'
				modelName='TANK 500'
				autoCloseDelay={3000} // 3 секунды
			/>
			<Hero
				title='TANK 500'
				subtitle='Премиум в каждой детали'
				description='Роскошь, мощность и комфорт высшего класса'
				imageSrc='/images/hero/Hero_Tank500.webp'
				imageMobileSrc='/images/hero/Hero_Tasnk500_s.webp'
				imageAlt='TANK 500 премиальный внедорожник'
				ctaText='Получить предложение'
			/>
			<SpecialOffer showAdvantages={false} showBookingOffer={false} />
			<CarOffersList modelFilter='tank-500' />
			<CarCatalog defaultModel='tank-500' />
			<ContactSection />
		</>
	);
}
