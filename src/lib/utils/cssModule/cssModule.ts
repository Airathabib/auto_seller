/**
 * Безопасно получает класс из CSS-модуля
 * @returns string (никогда undefined)
 */
export const cssClass = (cls: Record<string, string>, key: string | undefined): string => {
	return key ? (cls[key] ?? '') : '';
};

/**
 * Фильтрует объект модов: убирает ключи с falsy значениями
 */
export const filterMods = <T extends Record<string, string | boolean | undefined>>(
	mods: T
): Record<string, boolean> => {
	const entries = Object.entries(mods)
		.filter(([_, value]) => value !== undefined && value !== '')
		.map(([key, value]) => [key, Boolean(value)] as const);

	const result: Record<string, boolean> = {};
	for (const [key, value] of entries) {
		result[key] = value;
	}
	return result;
};
