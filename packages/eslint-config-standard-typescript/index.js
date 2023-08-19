module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	extends: ['standard-with-typescript', 'prettier'],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-dynamic-delete': 'off',
		'@typescript-eslint/strict-null-checks': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		'arrow-body-style': ['error', 'as-needed']
	}
};
