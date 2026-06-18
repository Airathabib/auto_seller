'use client';

import { CarOffer } from '../components/CarOffer/CarOffer';
import { carModels } from '../data/carModels';

interface CarOfferListProps {
	modelFilter?: string;
}

export const CarOffersList = ({ modelFilter }: CarOfferListProps) => {
	const filteredModels = modelFilter ? carModels.filter(car => car.id === modelFilter) : carModels;
	return (
		<>
			{filteredModels.map(car => (
				<CarOffer
					key={car.id}
					model={car.model}
					modelId={modelFilter ? car.id : undefined}
					tradeInAmount={car.tradeInAmount}
					discountAmount={car.discountAmount}
					mainImage={car.mainImage}
					images={car.images}
					colors={car.colors}
					features={car.features}
					reversed={car.reversed}
				/>
			))}
		</>
	);
};
