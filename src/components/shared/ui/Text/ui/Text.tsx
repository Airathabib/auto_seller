'use client';

import { classNames } from '@/lib/classNames/classNames';
import { useMediaQuery } from '@/lib/hooks';
import type { JSX } from 'react';
import { TextType, TitleTag, TextTag } from '../model/types/enums';
import type { TextProps, AllowedTag } from '../model/types/types';

import cls from './Text.module.scss';

export const Text = (props: TextProps) => {
	const {
		type = TextType.TEXT,
		children,
		color,
		inheritColor = false,
		fontSize,
		fontSizeMobile,
		fontWeight,
		fontWeightMobile,
		lineHeight,
		textAlign,
		truncate = false,
		uppercase = false,
		maxLines,
		className = '',
		tag,
	} = props;

	const isMobile = useMediaQuery(768);

	const isTitle = type === TextType.TITLE;
	const defaultTag = isTitle ? TitleTag.H3 : TextTag.P;
	const resolvedTag = (tag ?? defaultTag) as AllowedTag;
	const typeClass = isTitle ? cls.text_title : cls.text_text;

	const dynamicStyles: React.CSSProperties = {
		...(!inheritColor && color !== undefined ? { color: `var(${color})` } : {}),
		...(fontSize !== undefined && {
			fontSize: isMobile && fontSizeMobile ? `var(${fontSizeMobile})` : `var(${fontSize})`,
		}),
		...(fontWeight !== undefined && {
			fontWeight: isMobile && fontWeightMobile ? fontWeightMobile : fontWeight,
		}),
		...(lineHeight !== undefined ? { lineHeight } : {}),
		...(textAlign !== undefined ? { textAlign } : {}),
		...(uppercase ? { textTransform: 'uppercase' } : {}),
	};

	const allClasses = [
		cls.text,
		typeClass,
		...(truncate ? [cls.text_truncate] : []),
		...(!truncate && maxLines ? [cls[`clamp-${maxLines}`]] : []),
		...(inheritColor ? [cls.text_inherit] : []),
		...(className ? [className] : []),
	];

	const { className: finalClassName } = classNames({
		base: cls.text as string,
		mods: {},
		additional: allClasses,
	});

	const Tag = resolvedTag as keyof JSX.IntrinsicElements;

	return (
		<Tag className={finalClassName} style={dynamicStyles}>
			{children}
		</Tag>
	);
};
