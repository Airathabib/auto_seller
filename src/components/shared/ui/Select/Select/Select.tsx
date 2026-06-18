'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from '@/assets/icons';

import cls from './Select.module.scss';

interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

interface SelectProps {
	options: SelectOption[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	label?: string;
}

export const Select = ({
	options,
	value,
	onChange,
	placeholder = 'Выберите...',
	disabled = false,
	label,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const selectedOption = options.find(opt => opt.value === value);
	const displayText = selectedOption?.label || placeholder;

	const handleSelect = (optionValue: string) => {
		onChange(optionValue);
		setIsOpen(false);
	};

	return (
		<div className={cls.selectWrapper} ref={selectRef}>
			{label && <label className={cls.label}>{label}</label>}

			<button
				type='button'
				className={`${cls.selectButton} ${isOpen ? cls.open : ''} ${disabled ? cls.disabled : ''}`}
				onClick={() => !disabled && setIsOpen(!isOpen)}
				disabled={disabled}
			>
				<span className={cls.selectText}>{displayText}</span>
				<ChevronDown className={`${cls.arrow} ${isOpen ? cls.arrowRotated : ''}`} />
			</button>

			{isOpen && (
				<div className={cls.dropdown}>
					{options.map(option => (
						<button
							key={option.value}
							type='button'
							className={`${cls.option} ${option.value === value ? cls.selected : ''} ${option.disabled ? cls.disabled : ''}`}
							onClick={() => !option.disabled && handleSelect(option.value)}
							disabled={option.disabled}
						>
							{option.label}
						</button>
					))}
				</div>
			)}
		</div>
	);
};
