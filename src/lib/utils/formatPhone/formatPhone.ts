export const formatPhone = (value: string) => {
	const digits = value.replace(/\D/g, '').slice(0, 11);
	let formatted = '+7';

	if (digits.length > 1) {
		formatted += ` (${digits.slice(1, 4)}`;
	}
	if (digits.length >= 4) {
		formatted += `) ${digits.slice(4, 7)}`;
	}
	if (digits.length >= 7) {
		formatted += `-${digits.slice(7, 9)}`;
	}
	if (digits.length >= 9) {
		formatted += `-${digits.slice(9, 11)}`;
	}

	return formatted;
};
