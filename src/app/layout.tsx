import type { Metadata } from 'next';
import { ttTank } from '@/lib/fonts';
import { Footer, Header } from '@/components/layout';

import '@/styles/global.scss';
import { Suspense } from 'react';
import { ScrollToTop } from '@/components/shared/ui/ScrollTop';

export const metadata: Metadata = {
	title: 'АВТОРУСЬ TANK',
	description: 'АВТОРУСЬ TANK. Лосиный Остров. Официальный дилер.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru' className={ttTank.variable}>
			<head>
				{/* 🔹 ПЕРВЫМ — .ico как основной (браузеры используют его по умолчанию) */}
				<link rel='icon' href='/favicon.ico' sizes='any' />

				{/* 🔹 SVG — как дополнение для современных браузеров (не перекрывает .ico) */}
				<link rel='icon' type='image/svg+xml' href='/icon.svg' />

				{/* Apple Touch Icon — обязательно PNG с фоном */}
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />

				{/* Маска для Safari (monochrome) */}
				<link rel='mask-icon' href='/icon.svg' color='#ff9549' />
			</head>
			<body className={ttTank.className}>
				<Header />
				<Suspense fallback={null}>
					<ScrollToTop />
				</Suspense>
				{children}
				<Footer />
			</body>
		</html>
	);
}
