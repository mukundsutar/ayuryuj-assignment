import { Box, PressableBox } from "./box";
import type { TTHEME } from "./config";
import { Text } from "./text";

interface HealthCheckChardProps {
	testCount?: number;
	title?: string;
	ogPrice?: number;
	price?: number;
	precentage?: number;
	bgColor?: keyof TTHEME["colors"];
}

export default function HealthCheckChard({
	testCount = 76,
	title = "Ayushman Basic Health Check",
	ogPrice = 2400,
	price = 999,
	precentage = 60,
	bgColor = "accentLight",
}: HealthCheckChardProps) {
	return (
		<PressableBox
			bg={bgColor}
			p={3}
			flexDirection="column"
			flex={1}
			borderRadius={24}
		>
			<Text color="secondaryText" variant="bold" fontSize={14}>
				{testCount}+ Test{testCount > 1 ? "s" : ""}
			</Text>

			<Text variant="bold" fontSize={18}>
				{title}
			</Text>
			<Box bg="accent2Light" p={0.5} px={1} borderRadius={5}>
				<Text color="white" fontSize={14} textAlign="center">
					₹{price}&nbsp;
					<Text textDecorationLine="line-through" color="white">
						₹{ogPrice}
					</Text>
					&nbsp;{precentage}% OFF
				</Text>
			</Box>
		</PressableBox>
	);
}
