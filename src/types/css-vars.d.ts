/**
 * Все CSS-переменные дизайн-системы
 * Используются для типизации в cssVar() утилите
 */
export type CssVarName =
	// === COLORS ===
	| '--base-white'
	| '--base-black'
	| '--base-black-1'
	| '--base-black-2'
	| '--base-gray'
	| '--base-orange'
	| '--hover-orange'
	| '--hover-black'

	// === STATUS COLORS ===
	| '--status-online'
	| '--status-offline'
	| '--status-away'
	| '--status-text'
	| '--status-text-online'

	// === TYPOGRAPHY ===
	| '--font-sans'
	| '--font-mono'

	// === FONT SIZES ===
	| '--text-xs'
	| '--text-sm'
	| '--text-base'
	| '--text-lg'
	| '--text-xl'
	| '--text-2xl'
	| '--text-28'
	| '--text-30'
	| '--text-34'
	| '--text-40'
	| '--text-60'

	// === FONT WEIGHTS ===
	| '--weight-light'
	| '--weight-medium'
	| '--weight-bold'
	| '--weight-regular'
	| '--weight-semibold'
	| '--weight-black'

	// === RESPONSIVE ===
	| '--padding-inline-container'

	// === SPACE SCALE ===
	| '--space-4'
	| '--space-6'
	| '--space-8'
	| '--space-10'
	| '--space-12'
	| '--space-16'
	| '--space-20'
	| '--space-24'
	| '--space-28'
	| '--space-32'
	| '--space-40'
	| '--space-60'
	| '--space-80'
	| '--space-100'

	// radius
	| '--radius'
	| '--radius-sm'

	// === GAP: HORIZONTAL ===
	| '--gap-x-4'
	| '--gap-x-6'
	| '--gap-x-8'
	| '--gap-x-10'
	| '--gap-x-12'
	| '--gap-x-14'
	| '--gap-x-20'
	| '--gap-x-30'
	| '--gap-x-36'
	| '--gap-x-24'
	| '--gap-x-40'
	| '--gap-x-80'

	// === GAP: VERTICAL ===
	| '--gap-y-4'
	| '--gap-y-6'
	| '--gap-y-8'
	| '--gap-y-10'
	| '--gap-y-12'
	| '--gap-y-14'
	| '--gap-y-20'
	| '--gap-y-24'
	| '--gap-y-30'
	| '--gap-y-36'
	| '--gap-y-40'
	| '--gap-y-60'
	| '--gap-y-66'

	// === GAP: UNIVERSAL ===
	| '--gap-20'
	| '--gap-24'
	| '--gap-40'
	| '--gap-60'

	// === SECTION PADDING: HORIZONTAL ===
	| '--section-padding-x-10'
	| '--section-padding-x-20'
	| '--section-padding-x-24'
	| '--section-padding-x-28'
	| '--section-padding-x-40'

	// === SECTION PADDING: VERTICAL ===
	| '--section-padding-y-20'
	| '--section-padding-y-28'
	| '--section-padding-y-80'

	// === SHORT ALIASES ===
	| '--pad-section-sm'
	| '--pad-section-md'
	| '--pad-section-lg';

/**
 * Полное имя CSS-переменной с префиксом var()
 * Для использования в style={{ }}
 */
export type CssVar = `var(${CssVarName})`;
