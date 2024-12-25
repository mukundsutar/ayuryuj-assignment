import React, { useMemo } from "react";

import type { BoxProps, PressableBoxProps } from "./box";
import { PressableBox } from "./box";
import type { TTHEME } from "./config";
import type { TextProps } from "./text";
import { Text } from "./text";

export type ButtonProps = PressableBoxProps & {
	variant?:
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "error"
		| "text";
	full?: boolean;
	fontVariant?: "light" | "medium" | "bold";
};

export function Button({
	p = 2,
	children,
	variant = "primary",
	borderRadius = 10,
	alignItems = "center",
	justifyContent = "center",
	full = false,
	fontVariant,
	...props
}: ButtonProps) {
	const isChildrenString = typeof children === "string";

	const memoizedProps = useMemo(() => {
		let backgroundColor: keyof TTHEME["colors"] = "accent";

		if (variant === "primary") backgroundColor = "accent";
		if (variant === "secondary") backgroundColor = "white";
		if (variant === "text") backgroundColor = "white";

		// TODO: fix overlapping props like p, padding sides etc
		return {
			p,
			alignItems,
			borderRadius,
			justifyContent,
			backgroundColor,
			width: full ? "100%" : "auto",
			...(variant === "secondary"
				? { borderWidth: 1, borderColor: "accent" }
				: {}),
		} satisfies BoxProps;
	}, [alignItems, borderRadius, full, justifyContent, p, variant]);

	const textMemoizedProps = useMemo(() => {
		let color: keyof TTHEME["colors"] = "white";

		if (variant === "secondary") color = "accent";
		if (variant === "success") color = "primaryText";

		let fontWeight: keyof TTHEME["textVariants"] = "bold";

		if (fontVariant === "light") fontWeight = "light";
		if (fontVariant === "medium") fontWeight = "medium";
		if (fontVariant === "bold") fontWeight = "bold";

		return {
			color,
			textAlign: "center",
			variant: fontWeight,
		} satisfies TextProps;
	}, [variant]);

	return (
		<PressableBox {...props} {...memoizedProps}>
			{isChildrenString ? (
				<Text {...textMemoizedProps}>{children}</Text>
			) : (
				children
			)}
		</PressableBox>
	);
}
