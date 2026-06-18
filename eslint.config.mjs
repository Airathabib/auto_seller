import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const eslintConfig = defineConfig([

	{ ignores: ['.next/', 'out/', 'build/', 'next-env.d.ts', 'scripts/**'] },

	...nextVitals,
	...nextTs,
	eslintConfigPrettier,
	tseslint.configs.recommended,

	{
		files: ['**/*.{ts,tsx,js,jsx}'],
		plugins: {
			prettier,
			react,
			'react-hooks': reactHooks,
		},
		languageOptions: {
			parserOptions: {
				project: true,
				// 👇 import.meta.dirname требует Node.js 20.11+. 
				// Если будут проблемы, замени на:
				// tsconfigRootDir: import.meta.dirname, // для ESM
				// или:
				// tsconfigRootDir: process.cwd(),      // универсально
			},
		},
		rules: {

			'no-var': 'error',
			'prefer-const': 'warn',
			'no-console': 'warn',
			eqeqeq: 'warn',
			curly: 'warn',
			'import/no-anonymous-default-export': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			'react/jsx-props-no-spreading': 'warn',

		}
	}
]);

export default eslintConfig;
