import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Box } from "./box";
import { palette } from "./config";
import { Text } from "./text";

export function HomeHeader() {
	return (
		<Box flexDirection="column" ml={2}>
			<Text fontSize={12}>Your Location</Text>
			<Text ellipsizeMode="tail" numberOfLines={1}>
				Pune, Maharashtra
			</Text>
		</Box>
	);
}

export function HomeHeaderRight() {
	return (
		<Box flexDirection="row" gap={4} mr={4}>
			<MaterialIcons name="wallet" size={28} color={palette.accent2} />
			<MaterialCommunityIcons
				name="bell-outline"
				size={28}
				color={palette.accent2}
			/>
		</Box>
	);
}

export function HomeHeaderLeft() {
	return <MaterialIcons name="menu" size={28} color={palette.accent2} />;
}