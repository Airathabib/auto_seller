'use client';

import { useState, useMemo } from 'react';
import { CarCard } from '../components/CarCard/CarCard';
import { CarFilters } from '../components/CarFilters/CatFilter';
import { tankModels } from '../components/data/tankModel';
import type { FilterState } from '../model/types/types';
import {
	Text,
	TextAlign,
	TextColor,
	TextSize,
	TextType,
	TitleTag,
} from '@/components/shared/ui/Text';
import { useMediaQuery } from '@/lib/hooks';
import { TradeIn } from '../components/TradeIn/TradeIn';
import { Button } from '@/components/shared/ui/Button';

import cls from './CarCatalog.module.scss';

interface CarCatalogProps {
	defaultModel?: string;
}

export const CarCatalog = ({ defaultModel = '' }: CarCatalogProps) => {
	const [filters, setFilters] = useState<FilterState>({
		model: defaultModel || '',
		trim: '',
		engine: '',
	});

	const isMobile = useMediaQuery(996);

	const filteredCars = useMemo(() => {
		let cars = tankModels;

		if (filters.model) {
			cars = cars.filter(car => car.id === filters.model);
		}

		return cars.flatMap(model => {
			let trims = model.trims;

			if (filters.trim) {
				trims = trims.filter(trim => trim.name === filters.trim);
			}

			return trims.map(trim => ({
				modelId: model.id,
				modelName: model.name,
				modelImage: model.image,
				...trim,
			}));
		});
	}, [filters]);

	const handleFilterChange = (newFilters: FilterState) => {
		setFilters(newFilters);
	};

	const handleGetOffer = () => {
		console.log('Get offer');
	};

	const handleTestDrive = () => {
		console.log('Test drive');
	};

	return (
		<section className={cls.carCatalog}>
			<div className={cls.container}>
				<Text
					fontSize={isMobile ? TextSize.SIZE_28 : TextSize.SIZE_40}
					type={TextType.TITLE}
					tag={TitleTag.H2}
					color={TextColor.WHITE}
					textAlign={TextAlign.CENTER}
					className={cls.title}
				>
					ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ
				</Text>
				<CarFilters onFilterChange={handleFilterChange} defaultModel={defaultModel} />

				<div className={cls.carList}>
					{filteredCars.map((car, index) => (
						<CarCard
							key={`${car.modelId}-${car.name}-${index}`}
							model={car.modelName}
							image={car.modelImage}
							engine={`${car.engine.volume}, ${car.engine.fuel}, ${car.engine.drive}, ${car.engine.transmission}`}
							price={car.price}
							oldPrice={car.price + 500000}
							tradeInAmount={450000}
							gift='Керамическое покрытие в подарок!'
							onGetOffer={handleGetOffer}
							onTestDrive={handleTestDrive}
						/>
					))}
				</div>

				{filteredCars.length > 0 && (
					<Button
						type='button'
						size='l'
						variant='outline'
						borderColor='--base-gray'
						className={cls.loadMoreButton}
					>
						Загрузить еще
					</Button>
				)}
			</div>
			<TradeIn />
		</section>
	);
};
