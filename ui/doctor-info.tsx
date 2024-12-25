import { Image } from "react-native";

import { Box, PressableBox } from "./box";
import { Button } from "./button";
import { Text } from "./text";

interface DoctorInfoProps {
	name: string;
	email: string;
	address: string;
	phone: string;
}

export default function DoctorInfo({ name, address }: DoctorInfoProps) {
	const hospital = "mFine Healthcare";

	return (
		<PressableBox
			flexDirection="column"
			mb={4}
			p={4}
			flex={1}
			gap={4}
			bg="accentLight"
			borderRadius={10}
		>
			<Box flexDirection="row">
				<Image
					width={125}
					height={175}
					source={{
						uri: `https://picsum.photos/seed/${name}/125/175`,
					}}
					borderRadius={10}
				/>

				<Box flex={1} mx={4} gap={4}>
					<Box flexDirection="row" gap={2}>
						<Image
							style={{ width: 50, height: 50 }}
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports, no-undef
							source={require("../assets/icon-blue-rounded.png")}
						/>
						<Box width="85%">
							<Text ellipsizeMode="tail" numberOfLines={1}>
								{hospital}
							</Text>
							<Text ellipsizeMode="tail" numberOfLines={1}>
								{address}
							</Text>
						</Box>
					</Box>
					<Box>
						<Text
							fontSize={24}
							ellipsizeMode="tail"
							numberOfLines={1}
							variant="bold"
						>
							{name}
						</Text>
						<Text ellipsizeMode="tail" numberOfLines={1}>
							MBBS
						</Text>
						<Text
							fontSize={20}
							ellipsizeMode="tail"
							numberOfLines={1}
							variant="medium"
						>
							₹ 123
						</Text>
					</Box>
				</Box>
			</Box>
			<Box width="100%" flexDirection="row" gap={4}>
				<Button>Know more</Button>
				<Button>Consult</Button>
			</Box>
		</PressableBox>
	);
}
