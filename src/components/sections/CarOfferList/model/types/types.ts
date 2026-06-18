export type CarColor = 'black' | 'cherry' | 'gray' | 'light' | 'red' | 'brown';

export interface ColorOption {
	id: CarColor;
	name: string;
	color: string;
	imageSrc: string;
}

export interface CarColorPickerProps {
	colors: ColorOption[];
	selectedColor: CarColor;
	onColorChange: (color: CarColor) => void;
	reversed?: boolean;
}
