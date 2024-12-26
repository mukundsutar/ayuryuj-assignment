import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { Image, ScrollView } from "react-native";

import { Box } from "../../ui/box";
import { Button } from "../../ui/button";
import Chip from "../../ui/chip";
import { palette } from "../../ui/config";
import ProfileInfoList from "../../ui/profile-info-list";
import { Text } from "../../ui/text";

export default function Profile() {
	const router = useRouter();

	const size = 24;
	const color = palette.accent2;

	const contactInfoArr = [
		{
			label: "Email",
			icon: <MaterialIcons name="email" size={size} color={color} />,
			value: "mukundsutar1512@gmail.com",
		},
		{
			label: "Contact No.",
			icon: (
				<MaterialIcons name="local-phone" size={size} color={color} />
			),
			value: "+91-8275812026",
		},
		{
			label: "Address",
			icon: (
				<MaterialIcons name="location-pin" size={size} color={color} />
			),
			value: "Pune",
		},
	];

	const medicalInfoArr = [
		{ label: "Blood Group", value: "B+" },
		{ label: "Height", value: "184cm" },
		{ label: "Weight", value: "63kg" },
		{ label: "Past Health Issues", value: "None" },
	];

	return (
		<ScrollView style={{ flex: 1 }}>
			<Box
				width="100%"
				flexDirection="column"
				pt={8}
				pb={8}
				px={12}
				bg="secondaryBg"
				height="100%"
				gap={8}
				flex={1}
			>
				<Image
					source={{ uri: "https://avatar.iran.liara.run/public/49" }}
					style={{
						width: 250,
						height: 250,
						marginHorizontal: "auto",
						borderWidth: 1,
						borderRadius: 9999,
						borderColor: palette.accent2,
					}}
					resizeMode="cover"
				/>

				{/* name */}
				<Box flexDirection="column" gap={2}>
					<Box>
						<Text
							fontSize={32}
							variant="bold"
							ellipsizeMode="tail"
							numberOfLines={2}
						>
							Mukund Sutar
						</Text>
						<Text>Software Developer</Text>
					</Box>

					<Box flexDirection="row" gap={2}>
						<Chip
							label="Male"
							bg="accent"
							color="white"
							width={55}
						/>
						<Chip
							label="22y"
							bg="accent2"
							color="white"
							width={55}
						/>
					</Box>
				</Box>

				{/* contact info */}
				<ProfileInfoList label="Contact Info" data={contactInfoArr} />

				{/* medical info */}
				<ProfileInfoList label="Medical Info" data={medicalInfoArr} />

				{/* edit */}
				<Box>
					<Button
						onPress={() => {
							router.push("/edit");
						}}
					>
						Edit
					</Button>
				</Box>
			</Box>
		</ScrollView>
	);
}
