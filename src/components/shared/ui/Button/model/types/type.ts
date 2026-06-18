import type { CssVarName } from '@/types/css-vars';

export type ButtonVariant = 'primary' | 'outline' | 'text' | 'image';
export type ButtonLayout = 'horizontal' | 'vertical' | 'icon-right';
export type ButtonSize = 's' | 'm' | 'l';
export type ButtonTextColor = 'light' | 'dark';
export type ButtonGap = CssVarName | '4' | '8' | '10' | '12' | '14' | '16' | '20' | '24';

export interface ButtonProps {
	className?: string;
	gap?: CssVarName;
	variant?: ButtonVariant;
	size?: ButtonSize;
	textColor?: ButtonTextColor;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	children?: React.ReactNode;
	onClick?: () => void;
	iconStart?: React.ReactNode;
	iconEnd?: React.ReactNode;
	'aria-label'?: string;
	layout?: ButtonLayout;
	fullWidth?: boolean;
	borderColor?: CssVarName;
}
