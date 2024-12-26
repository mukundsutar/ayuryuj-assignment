import React from "react";
import type { InputModeOptions, ViewStyle } from "react-native";
import { TextInput } from "react-native";

import type { BoxProps } from "./box";
import { Box } from "./box";
import { palette } from "./config";
import { Text } from "./text";

interface TextFieldProps extends BoxProps {
	label?: string;
	placeholder?: string;
	inputWidth?: number | string;
	inputHeight?: number | string;
	fullWidth?: boolean;
	fullHeight?: boolean;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	inputMode?: InputModeOptions;
}

export default function TextField({
	label,
	placeholder,
	inputWidth,
	inputHeight = 58,
	fullWidth = true,
	fullHeight,
	value,
	setValue,
	inputMode,
	...props
}: TextFieldProps) {
	return (
		<Box {...props} gap={2}>
			{label && (
				<Text fontSize={16} variant="medium">
					{label}
				</Text>
			)}
			<Box borderWidth={1} borderColor="accent" borderRadius={10}>
				<TextInput
					textAlignVertical="center"
					verticalAlign="middle"
					style={{
						borderRadius: 10,
						paddingHorizontal: 10,
						paddingVertical: 10,
						fontSize: 18,
						color: palette.accent2,
						backgroundColor: palette.accentLight,
						width: fullWidth
							? "100%"
							: (inputWidth as ViewStyle["width"]),
						height: fullHeight
							? "100%"
							: (inputHeight as ViewStyle["height"]),
						fontWeight: "500",
					}}
					placeholderTextColor={palette.mutedText}
					placeholder={placeholder}
					value={value}
					onChangeText={setValue}
					inputMode={inputMode}
				/>
			</Box>
		</Box>
	);
}
