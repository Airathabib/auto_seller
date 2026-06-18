import type { CssVarName } from '@/types/css-vars';

export type Mods = Record<string, boolean | string | undefined>;
export type AdditionalClass = string | undefined;

export interface ClassNamesOptions {
	base: string;
	mods?: Mods;
	additional?: AdditionalClass[];
	styleVars?: Partial<Record<string, CssVarName | string>>;
}

/**
 * Генерирует className + style для React-компонентов
 */
export function classNames({
	base,
	mods = {},
	additional = [],
	styleVars = {},
}: ClassNamesOptions): {
	className: string;
	style?: React.CSSProperties;
} {
	const filteredAdditional = additional.filter(Boolean) as string[];

	const className = [
		base,
		...filteredAdditional,
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');

	const style =
		Object.keys(styleVars).length > 0
			? Object.entries(styleVars).reduce((acc, [key, value]) => {
					const cssValue = String(value).startsWith('--') ? `var(${value})` : String(value);
					(acc as Record<string, string | number>)[key] = cssValue;
					return acc;
				}, {} as React.CSSProperties)
			: undefined;

	return { className, style };
}

/**
 * Упрощённая версия без styleVars
 */
export function classNamesSimple(
	cls: string,
	mods: Mods = {},
	additional: Array<string | undefined> = []
): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
}

/**
 * Безопасно получает класс из CSS-модуля
 * @returns string (никогда undefined)
 */
export const cssClass = (cls: Record<string, string>, key: string | undefined): string => {
	return key ? (cls[key] ?? '') : '';
};

/**
 * Фильтрует моды: убирает undefined и пустые значения
 */
export const filterMods = (
	mods: Record<string, boolean | string | undefined>
): Record<string, boolean> => {
	const result: Record<string, boolean> = {};
	for (const [key, value] of Object.entries(mods)) {
		if (key && value) {
			result[key] = true;
		}
	}
	return result;
};
