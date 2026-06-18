'use client';
import { Award, Clock, ClipboardCheck } from '@/assets/icons';
import { Text, TextSize, FontWeight, TextColor } from '@/components/shared/ui/Text';
import { useMediaQuery } from '@/lib/hooks';

import cls from './Advantages.module.scss';

interface AdvantageItem {
	icon: 'badge' | 'clock' | 'checklist';
	title: string;
	description: string;
}

interface AdvantagesProps {
	items: AdvantageItem[];
}

const ICON_MAP = {
	badge: Award,
	clock: Clock,
	checklist: ClipboardCheck,
};

export const Advantages = ({ items }: AdvantagesProps) => {
	const isMobile = useMediaQuery(996);
	return (
		<div className={cls.advantages}>
			{items.map((item, index) => {
				const Icon = ICON_MAP[item.icon];
				return (
					<div key={index} className={cls.advantageCard}>
						<Icon className={cls.icon} />
						<div className={cls.content}>
							<Text
								fontSize={TextSize.XL}
								color={TextColor.WHITE}
								fontWeight={FontWeight.BOLD}
								uppercase
							>
								{item.title}
							</Text>
							{isMobile ? (
								''
							) : (
								<Text fontSize={TextSize.M} color={TextColor.WHITE} fontWeight={FontWeight.MEDIUM}>
									{item.description}
								</Text>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};
