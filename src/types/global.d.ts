import type { CssVarName } from './css-vars';

declare module 'react' {
	interface CSSProperties {
		/**
		 * Разрешаем все стандартные CSS-переменные из дизайн-системы
		 * @example style={{ '--gap': 'var(--space-20)' }}
		 */
		[key: `--${string}`]: string | number | undefined;

		/**
		 * Опционально: строгая типизация только для разрешённых переменных
		 * (раскомментируй, если хочешь жёсткий контроль)
		 */
		// [K in CssVarName]?: string | number;
	}
}

// Экспорт нужен, чтобы файл считался модулем (не глобальным скриптом)
export {};
