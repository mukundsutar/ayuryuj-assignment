import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import type { InputModeOptions } from "react-native";
import { Image, ScrollView } from "react-native";

import { Box } from "../../ui/box";
import { Button } from "../../ui/button";
import TextField from "../../ui/text-input";

export default function Edit() {
	const router = useRouter();

	const [info, setInfo] = useState<{
		name: string;
		email: string;
		phoneNumber: string;
		address: string;
	}>({ name: "", email: "", phoneNumber: "", address: "" });
	const [medicalInfo, setMedicalInfo] = useState<{
		height: string;
		weight: string;
		pastIssues: string;
	}>({ height: "", weight: "", pastIssues: "" });

	const size = 35;
	const arr = [
		{
			title: "Name",
			key: "name",
			icon: <MaterialIcons name="person" size={size} color="black" />,
		},
		{
			title: "Email",
			key: "email",
			icon: <MaterialIcons name="email" size={size} color="black" />,
		},
		{
			title: "Phone Number",
			key: "phoneNumber",
			icon: (
				<MaterialIcons name="local-phone" size={size} color="black" />
			),
		},
		{
			title: "Address",
			key: "address",
			icon: (
				<MaterialIcons name="location-pin" size={size} color="black" />
			),
		},
	];

	const medicalInfoArr = [
		{ title: "Height (cm)", key: "height" },
		{ title: "Weight (kg)", key: "weight" },
		{ title: "Past Health Issues", key: "pastIssues" },
	];

	return (
		<ScrollView>
			<Box p={4} pb={12} gap={4} bg="primaryBg">
				{/* <Box flexDirection="row" alignItems="center" gap={4} mb={6}>
					<PressableBox
						width={34}
						onPress={() => {
							router.back();
						}}
					>
						<MaterialIcons
							name="arrow-back"
							size={34}
							color="black"
						/>
					</PressableBox>
					<Text variant="bold" fontSize={32}>
						Edit Your Profile
					</Text>
				</Box> */}

				<Image
					source={{ uri: "https://avatar.iran.liara.run/public/49" }}
					style={{
						width: 250,
						height: 250,
						marginHorizontal: "auto",
						marginTop: 6,
					}}
					resizeMode="cover"
				/>

				{arr.map((i, index) => (
					<TextField
						key={index}
						label={i.title}
						value={info[i.key as keyof typeof info]}
						setValue={(value) =>
							setInfo((prev) => ({ ...prev, [i.key]: value }))
						}
					/>
				))}

				{medicalInfoArr.map((i, index) => {
					let inputMode: InputModeOptions = "text";

					if (
						i.key === "height" ||
						i.key === "weight" ||
						i.key === "phoneNumber"
					) {
						inputMode = "numeric";
					} else if (i.key == "email") {
						inputMode = "email";
					}

					return (
						<TextField
							key={index}
							label={i.title}
							value={
								medicalInfo[i.key as keyof typeof medicalInfo]
							}
							setValue={(value) =>
								setMedicalInfo((prev) => ({
									...prev,
									[i.key]: value,
								}))
							}
							inputMode={inputMode}
						/>
					);
				})}

				<Box flexDirection="row" gap={4} mt={12}>
					<Button
						flex={1}
						p={4}
						onPress={() => {
							router.back();
						}}
					>
						Cancel
					</Button>
					<Button flex={1}>Save</Button>
				</Box>
			</Box>
		</ScrollView>
	);
}
