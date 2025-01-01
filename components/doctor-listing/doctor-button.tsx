import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

import type { PressableBoxProps } from "../../ui/box";
import { PressableBox } from "../../ui/box";
import { palette } from "../../ui/config";
import { Text } from "../../ui/text";

export default function KnowMoreButton({ ...props }: PressableBoxProps) {
	return (
		<PressableBox
			flexDirection="row"
			alignItems="center"
			justifyContent="center"
			p={4}
			bg="secondaryBg"
			borderRadius={10}
			gap={2}
			px={0}
			flex={1}
			{...props}
		>
			<MaterialCommunityIcons
				name="play-circle-outline"
				size={24}
				color={palette.accent}
			/>
			<Text variant="medium" color="accent">
				Know more
			</Text>
		</PressableBox>
	);
}

export function ConsultButton({ ...props }: PressableBoxProps) {
	return (
		<LinearGradient
			// Button Linear Gradient
			colors={["#ffa18a", "#fc6b47"]}
			style={{ borderRadius: 10, flex: 1 }}
		>
			<PressableBox
				flex={1}
				flexDirection="row"
				alignItems="center"
				justifyContent="center"
				p={4}
				px={0}
				borderRadius={10}
				gap={2}
				{...props}
			>
				<Text variant="medium" color="white">
					Consult now
				</Text>
			</PressableBox>
		</LinearGradient>
	);
}
