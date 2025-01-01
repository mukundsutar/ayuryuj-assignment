import { Image } from "react-native";

import { Box } from "./box";
import { Text } from "./text";

interface OfferCardProps {
	amount: number;
}

export default function OfferCard({ amount = 250 }: OfferCardProps) {
	return (
		<Box
			flexDirection="row"
			bg="primaryBg"
			width={220}
			gap={2}
			borderWidth={0.75}
			borderColor="mutedText"
			borderRadius={10}
		>
			<Box p={1} px={2} borderRightWidth={0.75} borderColor="mutedText">
				<Image
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports, no-undef
					source={require("../assets/images/payment-icon.png")}
					style={{ width: 24, height: 40 }}
				/>
			</Box>
			<Box flexDirection="column" justifyContent="space-evenly">
				<Text variant="bold">Upto Rs {amount}</Text>
				<Text variant="light" fontSize={12}>
					cashback on MobiKwik wallet
				</Text>
			</Box>
		</Box>
	);
}
