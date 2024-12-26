import type { BoxProps } from "./box";
import { Box } from "./box";
import type { TTHEME } from "./config";
import { Text } from "./text";

interface ChipProps extends BoxProps {
	label: string;
	color?: keyof TTHEME["colors"];
}

export default function Chip({ label, color, ...props }: ChipProps) {
	return (
		<Box py={0.5} px={2} borderRadius="full" {...props}>
			<Text color={color} textAlign="center">
				{label}
			</Text>
		</Box>
	);
}
