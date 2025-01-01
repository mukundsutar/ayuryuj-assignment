import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Image } from "react-native";

import KnowMoreButton, {
	ConsultButton,
} from "../components/doctor-listing/doctor-button";
import { Box, PressableBox } from "./box";
import Chip from "./chip";
import { palette } from "./config";
import { Text } from "./text";

interface DoctorInfoProps {
	id: number;
	name: string;
	email: string;
	address: string;
	phone: string;
	specialization?: string;
	disable?: boolean;
}

export default function DoctorInfo({
	id,
	name,
	address,
	specialization,
	disable,
}: DoctorInfoProps) {
	const router = useRouter();

	const hospital = "Ayuryuj Healthcare";

	const languages = ["English", "Hindi", "Marathi", "Telugu", "Kannada"];

	return (
		<PressableBox
			flexDirection="column"
			mb={4}
			py={4}
			flex={1}
			gap={4}
			bg="white"
			borderRadius={10}
			onPress={() => {
				router.push({
					pathname: "/doctor",
					params: { id, specialization },
				});
			}}
		>
			<Box flexDirection="row" px={4}>
				<Box flexDirection="column" alignItems="center" gap={2}>
					<Image
						width={125}
						height={175}
						source={{
							uri: `https://i.pravatar.cc/300/?u=${name}`,
						}}
						borderRadius={10}
					/>
					<Chip
						label={`${Math.round(Math.random() * (12 - 4) + 4)} years exp`}
						bg="accent"
						color="white"
						borderRadius={10}
						width={110}
						py={1}
					/>
				</Box>

				<Box flex={1} mx={4} gap={4}>
					<Box flexDirection="row" gap={2}>
						<Image
							style={{
								width: 50,
								height: 50,
							}}
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports, no-undef
							source={require("../assets/icon-blue-rounded.png")}
						/>
						<Box
							minHeight="auto"
							borderLeftWidth={1}
							borderColor="mutedText"
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
							fontSize={20}
							ellipsizeMode="tail"
							numberOfLines={1}
							variant="bold"
						>
							Dr.&nbsp;{name}
						</Text>
						<Text
							fontSize={15}
							ellipsizeMode="tail"
							numberOfLines={1}
							color="semiMutedText"
						>
							MBBS
						</Text>
						<Text
							fontSize={15}
							ellipsizeMode="tail"
							numberOfLines={1}
							color="semiMutedText"
						>
							{specialization}
						</Text>
						<Box flexDirection="row" gap={1}>
							<Box width={24}>
								<Ionicons
									name="chatbubbles-outline"
									size={24}
									color={palette.accent}
								/>
							</Box>
							<Box flexDirection="row" alignItems="center">
								<Text
									fontSize={15}
									variant="bold"
									color="semiMutedText"
								>
									{languages[0]},&nbsp;{languages[1]}
									{languages.length > 2 ? ".." : ""}&nbsp;
								</Text>
								{languages.length > 2 ? (
									<Box
										borderWidth={1.5}
										borderColor="accent"
										p={0.5}
										px={0.75}
										borderRadius={5}
									>
										<Text
											fontSize={15}
											variant="medium"
											color="accent"
										>
											+{languages.length - 2}
										</Text>
									</Box>
								) : null}
							</Box>
						</Box>
						<Text
							fontSize={20}
							ellipsizeMode="tail"
							numberOfLines={1}
							variant="medium"
						>
							₹{Math.round(Math.random() * (900 - 300) + 300)}
						</Text>
					</Box>
				</Box>
			</Box>

			<Box
				minWidth="100%"
				borderColor="mutedText"
				borderWidth={0}
				borderBottomWidth={1}
			/>

			<Box
				width="100%"
				flexDirection="row"
				gap={4}
				px={4}
				justifyContent="space-evenly"
			>
				<KnowMoreButton
					onPress={() => {
						if (!disable) {
							router.push({
								pathname: "/doctor",
								params: { id, specialization },
							});
						}
					}}
				/>
				<ConsultButton
					onPress={() => {
						if (!disable) {
							router.push({
								pathname: "/doctor",
								params: { id, specialization },
							});
						}
					}}
				/>
			</Box>
		</PressableBox>
	);
}
