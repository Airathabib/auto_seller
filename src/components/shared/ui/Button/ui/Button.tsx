import { classNames } from '@/lib/classNames/classNames';
import { filterMods, cssClass } from '@/lib/utils/cssModule/cssModule';
import type { ButtonProps } from '../model/types/type';
import cls from './Button.module.scss';

export const Button = ({
	className,
	variant = 'primary',
	size = 'l',
	disabled = false,
	type = 'button',
	children,
	onClick,
	iconStart,
	iconEnd,
	'aria-label': ariaLabel,
	layout = 'horizontal',
	gap,
	borderColor,
}: ButtonProps) => {
	const hasIcons = Boolean(iconStart || iconEnd);
	const isImageVariant = variant === 'image';

	const baseClass = cls.button as string;

	const mods = filterMods({
		[cssClass(cls, variant)]: true,
		[cssClass(cls, size)]: true,
		[cssClass(cls, 'withIcons')]: hasIcons,
		[cssClass(cls, 'disabled')]: disabled,
		[cssClass(cls, 'layoutVertical')]: layout === 'vertical',
		[cssClass(cls, 'layoutIconRight')]: layout === 'icon-right',
	});

	const additional = className ? [className] : [];

	const { className: btnClass } = classNames({
		base: baseClass,
		mods,
		additional,
	});

	const style: React.CSSProperties = {
		...(gap ? { gap: `var(${gap})` } : {}),
		...(borderColor ? ({ '--border-color': `var(${borderColor})` } as React.CSSProperties) : {}),
	};

	return (
		<button
			aria-label={ariaLabel}
			className={btnClass}
			disabled={disabled}
			type={type}
			style={Object.keys(style).length > 0 ? style : undefined}
			onClick={onClick}
		>
			{iconStart && <span className={cls.icon}>{iconStart}</span>}

			{isImageVariant ? children : children && <span className={cls.label}>{children}</span>}

			{iconEnd && <span className={cls.icon}>{iconEnd}</span>}
		</button>
	);
};
