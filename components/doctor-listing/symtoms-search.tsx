import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import type { InputModeOptions, ViewStyle } from "react-native";
import { TextInput } from "react-native";

import type { BoxProps } from "../../ui/box";
import { Box } from "../../ui/box";
import type { TTHEME } from "../../ui/config";
import { palette } from "../../ui/config";
import { Text } from "../../ui/text";

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
	backgroundC?: keyof TTHEME["colors"];
}

export default function SymptomsSearch({
	label,
	placeholder,
	inputWidth,
	inputHeight = 58,
	fullWidth = true,
	fullHeight,
	value,
	setValue,
	inputMode,
	backgroundC,
	...props
}: TextFieldProps) {
	return (
		<Box {...props} gap={2}>
			{label && (
				<Text fontSize={16} variant="medium">
					{label}
				</Text>
			)}
			<Box borderWidth={1} borderColor="mutedText" borderRadius={10}>
				<Box
					position="absolute"
					zIndex={10}
					top={13}
					left={10}
					width={24}
				>
					<MaterialIcons
						name="search"
						size={24}
						color={palette.mutedText}
					/>
				</Box>

				<TextInput
					textAlignVertical="center"
					verticalAlign="middle"
					style={{
						borderRadius: 10,
						paddingHorizontal: 10,
						paddingLeft: 40,
						fontSize: 18,
						color: palette.accent2,
						backgroundColor: backgroundC
							? backgroundC
							: palette.white,
						width: fullWidth
							? "100%"
							: (inputWidth as ViewStyle["width"]),
						height: fullHeight
							? "100%"
							: (inputHeight as ViewStyle["height"]),
						fontWeight: "600",
					}}
					placeholderTextColor={palette.accent}
					placeholder={placeholder}
					value={value}
					onChangeText={setValue}
					inputMode={inputMode}
				/>
			</Box>
		</Box>
	);
}
