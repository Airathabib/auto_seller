export interface Engine {
	name: string;
	volume: string;
	power: string;
	fuel: string;
	transmission: string;
	drive: string;
}

export interface TrimLevel {
	name: string;
	price: number;
	engine: Engine;
	features: string[];
}

export interface CarModel {
	id: string;
	name: string;
	image: string;
	trims: TrimLevel[];
}

export interface FilterState {
	model: string;
	trim: string;
	engine: string;
}

export interface CarFiltersProps {
	onFilterChange: (filters: FilterState) => void;
	className?: string;
	defaultModel?: string;
}

export interface CarCardProps {
	model: string;
	image: string;
	engine: string;
	price: number;
	oldPrice?: number;
	tradeInAmount?: number;
	gift?: string;
	onGetOffer?: () => void;
	onTestDrive?: () => void;
}
