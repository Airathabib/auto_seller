import { Hero } from '@/components/sections/Hero/Hero';
import { CarOffersList } from '@/components/sections/CarOfferList';
import { SpecialOffer } from '@/components/sections/SpecialOffer';
import { CarCatalog } from '@/components/sections/CarCatalog';
import { ContactSection } from '@/components/sections/ContactsSection/ContactsSection/ContactsSection';

export default function HomePage() {
	return (
		<>
			<Hero
				title='TANK AUTO'
				subtitle='Улучшим любые условия'
				description='Осталось всего 5 автомобилей!'
				imageSrc='/images/hero/hero.webp'
				imageMobileSrc='/images/hero/hero-mobile.webp'
				imageAlt='Автомобиль Tank на фоне города'
				ctaText='Получить предложение'
				ctaHref='/models'
			/>
			<SpecialOffer />
			<CarOffersList />
			<CarCatalog />
			<ContactSection />
		</>
	);
}
