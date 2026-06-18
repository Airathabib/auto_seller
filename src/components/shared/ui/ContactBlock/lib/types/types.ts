import type { TextSize } from '../../../Text/model/types/enums';

export type ConnectionStatus = 'online' | 'offline' | 'away';

export type ContactAlign = 'start' | 'center' | 'end';

export interface StatusIndicatorProps {
	status: ConnectionStatus;

	size?: number;

	pulse?: boolean;

	ariaLabel?: string;
	className?: string;
}

export interface ContactBlockProps {
	phone: string;
	href?: string;
	status: ConnectionStatus;

	statusText?: string;
	className?: string;
	align?: ContactAlign;
	ContactSize?: TextSize;
	statusSize?: TextSize;
}
