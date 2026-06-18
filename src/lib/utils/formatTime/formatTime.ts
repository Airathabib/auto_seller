/**
 * Форматирует число для таймера
 * @param num - число
 * @param padZero - добавлять ли ведущий ноль (для дней - нет, для остальных - да)
 */
export const formatTimerNumber = (num: number, padZero = true): string => {
	return padZero ? String(num).padStart(2, '0') : String(num);
};
