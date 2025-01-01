import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import type { InputModeOptions, ViewStyle } from "react-native";
import { TextInput } from "react-native";

import type { BoxProps } from "./box";
import { Box, PressableBox } from "./box";
import type { TTHEME } from "./config";
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
	backgroundC?: keyof TTHEME["colors"];
}

export default function SearchField({
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
			<Box
				borderRadius="full"
				elevation={10}
				shadowColor="black"
				shadowOpacity={1}
				shadowRadius={10}
				position="relative"
			>
				<Box
					position="absolute"
					zIndex={10}
					top={10}
					left={8}
					width={24}
				>
					<MaterialIcons
						name="search"
						size={24}
						color={palette.mutedText}
					/>
				</Box>
				<Box
					position="absolute"
					zIndex={10}
					top={12}
					left={32}
					width="25%"
				>
					<Text fontSize={14} color="accent3" variant="medium">
						Search for:
					</Text>
				</Box>

				<TextInput
					textAlignVertical="center"
					verticalAlign="middle"
					style={{
						borderRadius: 9999,
						paddingHorizontal: 10,
						paddingLeft: 105,
						fontSize: 14,
						color: palette.accent2,
						backgroundColor: backgroundC
							? backgroundC
							: palette.accentLight,
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

				<Box
					position="absolute"
					zIndex={10}
					top={10}
					right={32}
					width={24}
				>
					<MaterialIcons
						name="health-and-safety"
						size={24}
						color={palette.mutedText}
					/>
				</Box>

				<PressableBox
					position="absolute"
					top={10}
					right={8}
					width={24}
					onPress={() => {
						setValue("");
					}}
					zIndex={10}
				>
					<MaterialCommunityIcons
						name="close"
						size={24}
						color="black"
					/>
				</PressableBox>
			</Box>
		</Box>
	);
}
