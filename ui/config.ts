import { createTheme } from "@shopify/restyle";

export const COLORS = {
	white: "#FFFFFF",
	white50: "#FFFFFF80",
	black: "#000000",
	black50: "#00000080",
	red: "#ff0000",

	primaryBg: "#FFFFFF",
	secondaryBg: "#D9D9D999",
	ticketBg: "#F1F1F1",
	inputBg: "#F2F2F2",
	primaryText: "#353535",
	mutedText: "#A4A5A6",
	secondaryText: "#616C76",
	border: "#D9D9D9",
	border2: "#C6C6C6",
	accent: "#596A93",
	accentLight: "#eff1f5",
	accent2: "#5C6373",
	wheelSelect: "#E4E4E3",
	extension: "#2276DF",

	success: "#82BF80",
	successDark: "#2E7D32",
	warning: "#F2CD88",
	amber: "#F2A950",
	error: "#FEC0C7",
	errorDark: "#D32F2F",
	errorIcon: "#E65475",
	errorText: "#5F2120",
	errorLight: "#FECDD2",

	messageSender: "#F0DFBE",
	messageReceiver: "#CFEBCE",
	divider: "#969596",
	modal: "#00000066",
	avatar: "#2C3140",
} as const;

export const THEME = {
	colors: COLORS,

	spacing: {
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
		"10%": "10%",
		"15%": "15%",
		"20%": "20%",
		"25%": "25%",
		"40%": "40%",
		"45%": "45%",
		"50%": "50%",
		"55%": "55%",
		"60%": "60%",
		"75%": "75%",
		"80%": "80%",
		"100%": "100%",
		auto: "auto",
	},

	borderRadius: {
		0: 0,
		2.5: 2.5,
		5: 5,
		10: 10,
		32: 32,
		full: 9999,
	},

	textVariants: {
		defaults: {
			fontSize: 16,
			color: "primaryText",
		},

		medium: {
			fontSize: 16,
			color: "primaryText",
		},

		semibold: {
			fontSize: 16,
			color: "primaryText",
		},

		bold: {
			fontSize: 16,
			color: "primaryText",
		},
	},
} satisfies Parameters<typeof createTheme>[0];

export const RESTYLE_THEME = createTheme(THEME);

export type TTHEME = typeof THEME;
