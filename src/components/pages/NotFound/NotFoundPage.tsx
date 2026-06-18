'use client';

import { useRouter } from 'next/navigation';

import {
	Text,
	TextSize,
	FontWeight,
	TextTag,
	TextType,
	TitleTag,
	TextColor,
} from '@/components/shared/ui/Text';
import { Button } from '@/components/shared/ui/Button';

import cls from './notFoundPage.module.scss';

export const NotFoundPage = () => {
	const router = useRouter();

	return (
		<main className={cls.page}>
			<div className={cls.container}>
				<div className={cls.content}>
					<Text
						type={TextType.TITLE}
						tag={TitleTag.H1}
						fontSize={TextSize.SIZE_60}
						fontWeight={FontWeight.BOLD}
						color={TextColor.GRAY}
						className={cls.code}
					>
						404
					</Text>
					<Text
						type={TextType.TITLE}
						tag={TitleTag.H3}
						fontSize={TextSize.XXL}
						fontWeight={FontWeight.BOLD}
						color={TextColor.GRAY}
					>
						Страница не найдена
					</Text>

					<Text fontSize={TextSize.XXL} className={cls.description} color={TextColor.GRAY}>
						Похоже, вы перешли по неверной ссылке или страница была удалена.
					</Text>

					<Button variant='primary' size='m' onClick={() => router.back()}>
						Вернуться назад
					</Button>
				</div>
			</div>
		</main>
	);
};
