import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		ignores: ["**/*.config.js", "*.plugin.js"],
	},
	{
		files: ["**/*.config.js"],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	{
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				project: true,
				project: "./tsconfig.json",
			},
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	pluginReact.configs.flat.recommended,
	{
		plugins: {
			"simple-import-sort": pluginSimpleImportSort,
			import: pluginImport,
			"react-hooks": pluginReactHooks,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			// TypeScript rules
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{ prefer: "type-imports", fixStyle: "separate-type-imports" },
			],
			"@typescript-eslint/no-misused-promises": "off",
			"@typescript-eslint/no-floating-promises": "off",

			// React rules
			"react/prop-types": "off",
			"react/react-in-jsx-scope": "off",
			"react/jsx-no-useless-fragment": "error",
			"react/jsx-curly-brace-presence": [
				"error",
				{ props: "never", children: "never" },
			],

			// Import sorting rules
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"import/first": "error",
			"import/newline-after-import": "error",
			"import/no-duplicates": "error",
			"import/consistent-type-specifier-style": [
				"error",
				"prefer-top-level",
			],

			// Base rules
			"no-unused-vars": "error",
			"no-undef": "error",
		},
	},
];
