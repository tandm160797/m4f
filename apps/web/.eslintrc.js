module.exports = {
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		extraFileExtensions: ['.md', '.json']
	},
	extends: ['react']
};
