import type { CssVarName, CssVar } from '@/types/css-vars';

/**
 * Преобразует имя переменной в строку var(--name)
 * @example cssVar('--space-20') → 'var(--space-20)'
 */
export const cssVar = (name: CssVarName): CssVar => `var(${name})`;

/**
 * Для случаев, когда нужно указать значение с фолбэком
 * @example cssVarWithFallback('--space-30', '1.875rem')
 */
export const cssVarWithFallback = <T extends CssVarName>(name: T, fallback: string): string =>
	`var(${name}, ${fallback})`;

/**
 * Типизированный объект для удобного доступа (опционально)
 * @example css.vars.space20 → 'var(--space-20)'
 */
export const css = {
	var: cssVar,
	fallback: cssVarWithFallback,

	// Быстрый доступ к часто используемым переменным
	get space() {
		return {
			4: cssVar('--space-4'),
			8: cssVar('--space-8'),
			10: cssVar('--space-10'),
			12: cssVar('--space-12'),
			16: cssVar('--space-16'),
			20: cssVar('--space-20'),
			24: cssVar('--space-24'),
			28: cssVar('--space-28'),
			32: cssVar('--space-32'),
			40: cssVar('--space-40'),
			80: cssVar('--space-80'),
		} as const;
	},

	get gap() {
		return {
			x: {
				20: cssVar('--gap-x-20'),
				40: cssVar('--gap-x-40'),
				80: cssVar('--gap-x-80'),
			},
			y: {
				10: cssVar('--gap-y-10'),
				30: cssVar('--gap-y-30'),
				40: cssVar('--gap-y-40'),
			},
			universal: {
				20: cssVar('--gap-20'),
				24: cssVar('--gap-24'),
				40: cssVar('--gap-40'),
			},
		} as const;
	},

	get section() {
		return {
			padding: {
				x: {
					20: cssVar('--section-padding-x-20'),
					24: cssVar('--section-padding-x-24'),
					28: cssVar('--section-padding-x-28'),
					40: cssVar('--section-padding-x-40'),
				},
				y: {
					20: cssVar('--section-padding-y-20'),
					28: cssVar('--section-padding-y-28'),
					80: cssVar('--section-padding-y-80'),
				},
			},
		} as const;
	},
} as const;
