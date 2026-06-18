'use client';

import { useState, useMemo, useEffect } from 'react';
import { Select } from '@/components/shared/ui/Select';
import type { CarFiltersProps, FilterState } from '../../model/types/types';
import { tankModels } from '../data/tankModel';

import cls from './CarFilter.module.scss';

export const CarFilters = ({ onFilterChange, className, defaultModel }: CarFiltersProps) => {
	const [filters, setFilters] = useState<FilterState>({
		model: defaultModel || '',
		trim: '',
		engine: '',
	});

	useEffect(() => {
		if (defaultModel) {
			setFilters({
				model: defaultModel,
				trim: '',
				engine: '',
			});
		}
	}, [defaultModel]);

	const availableTrims = useMemo(() => {
		if (!filters.model) return [];
		const model = tankModels.find(m => m.id === filters.model);
		return model?.trims.map(t => ({ value: t.name, label: t.name })) || [];
	}, [filters.model]);

	const availableEngines = useMemo(() => {
		if (!filters.model || !filters.trim) return [];
		const model = tankModels.find(m => m.id === filters.model);
		const trim = model?.trims.find(t => t.name === filters.trim);
		return trim
			? [
					{
						value: trim.engine.name,
						label: `${trim.engine.volume}, ${trim.engine.power}, ${trim.engine.fuel}, ${trim.engine.transmission}`,
					},
				]
			: [];
	}, [filters.model, filters.trim]);

	const handleChange = (key: keyof FilterState, value: string) => {
		const newFilters = {
			...filters,
			[key]: value,
			...(key === 'model' && { trim: '', engine: '' }),
			...(key === 'trim' && { engine: '' }),
		};
		setFilters(newFilters);
		onFilterChange(newFilters);
	};

	return (
		<div className={cls.filters}>
			{!defaultModel && (
				<Select
					label='Модель'
					options={tankModels.map(m => ({ value: m.id, label: m.name }))}
					value={filters.model}
					onChange={value => handleChange('model', value)}
					placeholder='Выберите модель'
				/>
			)}

			<Select
				label='Комплектация'
				options={availableTrims}
				value={filters.trim}
				onChange={value => handleChange('trim', value)}
				placeholder={filters.model ? 'Выберите комплектацию' : 'Сначала выберите модель'}
				disabled={!filters.model}
			/>

			<Select
				label='Двигатель'
				options={availableEngines}
				value={filters.engine}
				onChange={value => handleChange('engine', value)}
				placeholder={filters.trim ? 'Выберите двигатель' : 'Сначала выберите комплектацию'}
				disabled={!filters.trim}
			/>
		</div>
	);
};
