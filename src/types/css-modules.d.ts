// Возвращают объект с типизированными ключами
declare module '*.module.scss' {
	const classes: { readonly [key: string]: string };
	export default classes;
}


// Side-effect импорт: просто применяет стили, ничего не экспортирует
declare module '*.scss' {
	const content: { [className: string]: string };
	export default content;
}

// Разрешаем импортировать без использования значения
declare module '@/styles/*.scss' {
	export default {};
}
