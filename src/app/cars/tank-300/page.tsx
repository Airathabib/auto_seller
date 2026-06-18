import { Hero } from '@/components/sections/Hero/Hero';
import { CarOffersList } from '@/components/sections/CarOfferList';
import { CarCatalog } from '@/components/sections/CarCatalog';
import { ContactSection } from '@/components/sections/ContactsSection/ContactsSection/ContactsSection';
import type { Metadata } from 'next';
import { SpecialOffer } from '@/components/sections/SpecialOffer';
import { PromoPopup } from '@/components/shared/ui/PromoPopup';

export const metadata: Metadata = {
	title: 'TANK 300 | АВТОРУСЬ TANK',
	description:
		'TANK 300 - внедорожник с характером. Официальный дилер АВТОРУСЬ TANK Лосиный Остров.',
};
const Tank300Page = () => {
	return (
		<>
			<PromoPopup
				imageSrc='/images/banner/tank300/Tank300Desktop.webp'
				imageMobileSrc='/images/banner/tank300/Tank300mobile.webp'
				modelName='TANK 300'
				autoCloseDelay={3000} // 3 секунды
			/>
			<Hero
				title='TANK 300'
				subtitle='Внедорожник с характером'
				description='Мощный, стильный, готовый к любым приключениям'
				imageSrc='/images/hero/Hero_Tank300.webp'
				imageMobileSrc='/images/hero/Hero_Tank300_s.webp'
				imageAlt='TANK 300 внедорожник'
				ctaText='Получить предложение'
			/>
			<SpecialOffer showAdvantages={false} showBookingOffer={false} />
			<CarOffersList modelFilter='tank-300' />
			<CarCatalog defaultModel='tank-300' />
			<ContactSection />
		</>
	);
};

export default Tank300Page;
