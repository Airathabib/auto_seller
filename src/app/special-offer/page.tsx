import Link from 'next/link';
import { Button } from '@/components/shared/ui/Button';
import {
	Text,
	TextSize,
	FontWeight,
	TextColor,
	TextType,
	TitleTag,
} from '@/components/shared/ui/Text';
import { ChevronRight } from '@/assets/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Спецпредложение | АВТОРУСЬ TANK',
	description: 'Специальные предложения на автомобили TANK',
};

export default function SpecialOfferPage() {
	return (
		<section
			style={{
				minHeight: '80vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 'var(--space-40) var(--space-24)',
				backgroundColor: 'var(--base-black-1)',
				textAlign: 'center',
				gap: 'var(--gap-x-24)',
			}}
		>
			<Text
				type={TextType.TITLE}
				tag={TitleTag.H1}
				fontSize={TextSize.SIZE_40}
				fontWeight={FontWeight.BOLD}
				color={TextColor.WHITE}
			>
				Специальное предложение
			</Text>

			<Text fontSize={TextSize.L} color={TextColor.GRAY} lineHeight={1.4}>
				Страница находится в разработке.
				<br />
				Следите за обновлениями, чтобы не пропустить выгоду!
			</Text>

			<Link href='/'>
				<Button variant='primary' size='l' iconEnd={<ChevronRight />}>
					Вернуться на главную
				</Button>
			</Link>
		</section>
	);
}
