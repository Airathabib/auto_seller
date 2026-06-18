import Link from 'next/link';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import type { ContactBlockProps, ConnectionStatus } from '../../lib/types/types';
import { Text, TextSize, FontWeight, TextColor } from '../../../Text';

import cls from './ContactBlock.module.scss';

const STATUS_TEXT: Record<ConnectionStatus, string> = {
	online: 'Мы на связи',
	offline: 'Сейчас недоступны',
	away: 'Скоро будем на связи',
};

const ContactBlock = ({
	phone,
	href,
	status,
	statusText,
	className = '',
	align = 'start',
	ContactSize = TextSize.XL,
	statusSize = TextSize.S,
}: ContactBlockProps) => {
	const label = statusText ?? STATUS_TEXT[status];

	// Формируем классы wrapper с учётом выравнивания
	const wrapperClasses = [cls.wrapper, align !== 'start' && cls[`wrapper--${align}`], className]
		.filter(Boolean)
		.join(' ');

	const phoneContent = (
		<div className={wrapperClasses}>
			<Text fontSize={ContactSize} fontWeight={FontWeight.MEDIUM} color={TextColor.WHITE}>
				{phone}
			</Text>

			<div className={cls.status}>
				<StatusIndicator status={status} />
				<Text fontSize={statusSize} color={TextColor.GRAY}>
					{label}
				</Text>
			</div>
		</div>
	);

	if (href) {
		return (
			<Link href={href} className={cls.link} aria-label={`Позвонить: ${phone}`}>
				{phoneContent}
			</Link>
		);
	}

	return phoneContent;
};

export default ContactBlock;
