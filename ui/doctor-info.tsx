import { useRouter } from "expo-router";
import React from "react";
import { Image } from "react-native";

import { Box, PressableBox } from "./box";
import { Button } from "./button";
import Chip from "./chip";
import { Text } from "./text";

interface DoctorInfoProps {
	id: number;
	name: string;
	email: string;
	address: string;
	phone: string;
	specialization?: string;
}

export default function DoctorInfo({
	id,
	name,
	address,
	specialization,
}: DoctorInfoProps) {
	const router = useRouter();

	const hospital = "Ayuryuj Healthcare";

	return (
		<PressableBox
			flexDirection="column"
			mb={4}
			p={4}
			flex={1}
			gap={4}
			bg="accentLight"
			borderRadius={10}
			onPress={() => {
				router.push({ pathname: "/doctor", params: { id } });
			}}
		>
			<Box flexDirection="row">
				<Image
					width={125}
					height={175}
					source={{
						uri: `https://i.pravatar.cc/300/?u=${name}`,
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
						<Box flexDirection="row" width="100%" mt={2}>
							<Chip
								label={specialization ?? "here"}
								bg="cardYellow"
								color="accent2"
							/>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box width="100%" flexDirection="row" gap={4}>
				<Button
					onPress={() => {
						router.push({ pathname: "/doctor", params: { id } });
					}}
				>
					Know more
				</Button>
				<Button
					onPress={() => {
						router.push({ pathname: "/doctor", params: { id } });
					}}
				>
					Consult
				</Button>
			</Box>
		</PressableBox>
	);
}
