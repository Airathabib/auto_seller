import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ['lucide-react'],
	},

	images: {
		qualities: [25, 50, 75, 85, 100],
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},

	turbopack: {
		rules: {
			'*.svg': {
				loaders: [
					{
						loader: '@svgr/webpack',
						options: {
							icon: true,
							svgo: true,
							svgoConfig: {
								plugins: [{ name: 'removeViewBox', active: false }],
							},
						},
					},
				],
				as: '*.js',
			},
		},
	},

	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.('.svg'));

		if (fileLoaderRule) {
			config.module.rules.push(
				{
					...fileLoaderRule,
					test: /\.svg$/i,
					resourceQuery: /url/,
				},

				{
					test: /\.svg$/i,
					issuer: fileLoaderRule.issuer,
					resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
					use: [
						{
							loader: '@svgr/webpack',
							options: {
								icon: true,
								svgo: true,
								svgoConfig: {
									plugins: [{ name: 'removeViewBox', active: false }],
								},
							},
						},
					],
				}
			);
			fileLoaderRule.exclude = /\.svg$/i;
		}

		return config;
	},
};

export default nextConfig;
