import type { StatusIndicatorProps, ConnectionStatus } from '../../lib/types/types';

import cls from './StatusIndicator.module.scss';

const STATUS_CONFIG: Record<ConnectionStatus, { colorVar: string; label: string }> = {
	online: { colorVar: '--status-online', label: 'Онлайн' },
	offline: { colorVar: '--status-offline', label: 'Офлайн' },
	away: { colorVar: '--status-away', label: 'Скоро будем' },
};

const StatusIndicator = ({
	status,
	size = 8,
	pulse,
	ariaLabel,
	className = '',
}: StatusIndicatorProps) => {
	const config = STATUS_CONFIG[status];
	const shouldPulse = pulse ?? status === 'online';

	return (
		<span
			className={`${cls.dot} ${cls[`dot--${status}`]} ${className}`.trim()}
			style={{ width: size, height: size }}
			role='status'
			aria-label={ariaLabel ?? `Статус: ${config.label}`}
			aria-live='polite'
		>
			{shouldPulse && <span className={cls.pulse} style={{ width: size, height: size }} />}
		</span>
	);
};

export default StatusIndicator;
