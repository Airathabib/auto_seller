import Image from 'next/image';
import Link from 'next/link';
import {
	Text,
	TextSize,
	FontWeight,
	TextColor,
	TextType,
	TitleTag,
} from '@/components/shared/ui/Text';
import { useMediaQuery } from '@/lib/hooks';

import cls from './BookingOffer.module.scss';

interface CarModel {
	name: string;
	imageSrc: string;
	href: string;
}

interface BookingOfferProps {
	title: string;
	carModels: CarModel[];
}

export const BookingOffer = ({ title, carModels }: BookingOfferProps) => {
	const isMobile = useMediaQuery(996);
	return (
		<div className={cls.bookingOffer}>
			<Text
				type={TextType.TITLE}
				tag={TitleTag.H2}
				fontSize={isMobile ? TextSize.SIZE_28 : TextSize.SIZE_40}
				fontWeight={FontWeight.BOLD}
				color={TextColor.WHITE}
				className={cls.title}
			>
				{title}
			</Text>

			<div className={cls.carModels}>
				{carModels.map(car => (
					<Link key={car.name} href={car.href} className={cls.carLink}>
						<div className={cls.imageWrapper}>
							<Image
								src={car.imageSrc}
								alt={car.name}
								width={200}
								height={120}
								className={cls.carImage}
							/>
						</div>
						<Text
							fontSize={TextSize.M}
							color={TextColor.WHITE}
							fontWeight={FontWeight.LIGHT}
							className={cls.carModel}
						>
							{car.name}
						</Text>
					</Link>
				))}
			</div>
		</div>
	);
};
