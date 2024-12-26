import { createTheme } from "@shopify/restyle";

export const palette = {
	white: "#FFFFFF",
	black: "#000000",

	primaryBg: "#FFFFFF",
	secondaryBg: "#eaf5fe",
	primaryText: "#322927",
	mutedText: "#c8cbd1",
	secondaryText: "#73787e",
	border: "#D9D9D9",
	border2: "#1b96b650",
	accent: "#1b96b6",
	accentLight: "#b3dbf1",
	accent2: "#2c5472",
	accent2Light: "#4e83ad",

	cardYellow: "#fef0c4",
} as const;

export const FONT_FMAILY = {
	light: "Roboto_300Light",
	normal: "Roboto_400Regular",
	medium: "Roboto_500Medium",
	bold: "Roboto_700Bold",
} as const;

export const THEME = {
	colors: palette,

	spacing: {
		sm: 8,
		md: 12,
		bs: 16,
		lg: 20,
		xl: 24,
		0: 0,
		0.25: 1,
		0.5: 2,
		1: 4,
		1.5: 6,
		2: 8,
		2.5: 10,
		3: 12,
		3.5: 14,
		4: 16,
		5: 20,
		6: 24,
		7: 28,
		8: 32,
		9: 36,
		10: 40,
		11: 44,
		12: 48,
		14: 56,
		16: 64,
		18: 72,
		20: 80,
		24: 96,
		28: 112,
		32: 128,
		36: 144,
		37: 148,
		38: 152,
		40: 160,
		44: 176,
		48: 192,
		52: 208,
		56: 224,
		60: 240,
		64: 256,
		72: 288,
		80: 320,
		96: 384,
		120: 480,
		160: 640,
		200: 800,
		"5%": "5%",
		"10%": "10%",
		"15%": "15%",
		"20%": "20%",
		"25%": "25%",
		"30%": "30%",
		"35%": "35%",
		"40%": "40%",
		"45%": "45%",
		"50%": "50%",
		"55%": "55%",
		"60%": "60%",
		"65%": "65%",
		"70%": "70%",
		"75%": "75%",
		"80%": "80%",
		"85%": "85%",
		"90%": "90%",
		"95%": "95%",
		"100%": "100%",
		auto: "auto",
	},

	borderRadii: {
		0: 0,
		0.5: 0.5,
		1: 1,
		2.5: 2.5,
		5: 5,
		10: 10,
		16: 16,
		24: 24,
		32: 32,
		full: 9999,
	},

	textVariants: {
		light: {
			fontSize: 16,
			color: "primaryText",
			fontFamily: FONT_FMAILY.light,
		},

		defaults: {
			fontSize: 16,
			color: "primaryText",
			fontFamily: FONT_FMAILY.normal,
		},

		medium: {
			fontSize: 16,
			color: "primaryText",
			fontFamily: FONT_FMAILY.medium,
		},

		bold: {
			fontSize: 16,
			color: "primaryText",
			fontFamily: FONT_FMAILY.bold,
		},
	},
} satisfies Parameters<typeof createTheme>[0];

export const RESTYLE_THEME = createTheme(THEME);

export type TTHEME = typeof THEME;
