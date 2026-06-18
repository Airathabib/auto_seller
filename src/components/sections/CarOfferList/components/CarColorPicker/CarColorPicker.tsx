'use client';

import { useEffect, useRef, useState } from 'react';
import { Check } from '@/assets/icons';
import type { CarColorPickerProps, CarColor } from '../../model/types/types';
import cls from './CarColorPicker.module.scss';

export const CarColorPicker = ({
	colors,
	selectedColor,
	onColorChange,
	reversed = false,
}: CarColorPickerProps) => {
	const [hoveredColor, setHoveredColor] = useState<CarColor | null>(null);
	const [tooltipColorId, setTooltipColorId] = useState<CarColor | null>(null);
	const tooltipTimerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (selectedColor) {
			if (tooltipTimerRef.current) {
				clearTimeout(tooltipTimerRef.current);
			}

			setTooltipColorId(selectedColor);

			tooltipTimerRef.current = setTimeout(() => {
				setTooltipColorId(null);
				tooltipTimerRef.current = null;
			}, 1000);
		}

		return () => {
			if (tooltipTimerRef.current) {
				clearTimeout(tooltipTimerRef.current);
			}
		};
	}, [selectedColor]);

	return (
		<div className={cls.colorPicker} data-reversed={reversed}>
			{colors.map(color => {
				const isSelected = selectedColor === color.id;
				const isHovered = hoveredColor === color.id;
				const showTooltip = isHovered || tooltipColorId === color.id;

				return (
					<button
						key={color.id}
						type='button'
						className={`${cls.colorButton} ${isSelected ? cls.selected : ''}`}
						onClick={() => onColorChange(color.id)}
						onMouseEnter={() => setHoveredColor(color.id)}
						onMouseLeave={() => setHoveredColor(null)}
						aria-label={`Выбрать цвет: ${color.name}`}
						aria-pressed={isSelected}
					>
						<div className={cls.colorCircle} style={{ backgroundColor: color.color }} />

						{isSelected && (
							<div className={cls.checkmark} aria-hidden='true'>
								<Check />
							</div>
						)}

						{showTooltip && (
							<div className={cls.tooltip} role='tooltip'>
								{color.name}
							</div>
						)}
					</button>
				);
			})}
		</div>
	);
};
