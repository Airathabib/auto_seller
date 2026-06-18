import localFont from 'next/font/local';

const ttTank = localFont({
	src: [
		{
			path: '../../assets/fonts/TT-TANK-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../assets/fonts/TT-TANK-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../assets/fonts/TT-TANK-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-tt-tank',
	display: 'swap',
});

export default ttTank;
