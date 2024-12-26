import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";

import { useDrawer } from "../../lib/providers/drawer-provider";
import Avatar from "../avatar";
import { Box, PressableBox } from "../box";
import { palette } from "../config";
import DrawerList from "../drawer-list";
import { Text } from "../text";

export function DrawerContent() {
	const router = useRouter();
	const { closeDrawer } = useDrawer();

	const menuItems = [
		{ label: "Home", route: "/" },
		{ label: "Doctor Listing", route: "/doctor-listing" },
		{ label: "Profile", route: "/profile" },
	];

	const familyArr = [
		"Mukund",
		"Mother",
		"Father",
		"Wife",
		"Daughter",
		"Son",
		"Sister",
		"Brother",
		"Partner",
		"Mother-in-Law",
		"Father-in-Law",
	];

	const size = 32;
	const color = palette.secondaryText;

	const services = [
		{
			title: "Consult Now",
			icon: (
				<MaterialCommunityIcons
					name="stethoscope"
					size={size}
					color={color}
				/>
			),
		},
		{
			title: "Book Health Packages",
			icon: <Ionicons name="bag-add-outline" size={size} color={color} />,
		},
		{
			title: "Order Lab Test",
			icon: (
				<MaterialCommunityIcons
					name="microscope"
					size={size}
					color={color}
				/>
			),
		},
		{
			title: "Order Medicines",
			icon: (
				<MaterialCommunityIcons name="pill" size={size} color={color} />
			),
		},
		{
			title: "Ayuryuj Membership",
			icon: (
				<MaterialCommunityIcons
					name="pulse"
					size={size}
					color={color}
				/>
			),
		},
		{
			title: "Care Programs",
			icon: (
				<MaterialIcons
					name="health-and-safety"
					size={size}
					color={color}
				/>
			),
		},
		{
			title: "Tools and Trackers",
			icon: (
				<MaterialCommunityIcons
					name="heart-cog"
					size={size}
					color={color}
				/>
			),
		},
		{
			title: "Explore",
			icon: <MaterialIcons name="explore" size={size} color={color} />,
		},
	];
	const records = [
		{
			title: "My Orders",
			icon: (
				<MaterialCommunityIcons
					name="purse"
					size={size}
					color={color}
				/>
			),
		},
		{
			title: "Health Files",
			icon: (
				<MaterialIcons
					name="create-new-folder"
					size={size}
					color={color}
				/>
			),
		},
		{
			title: "Invoices",
			icon: (
				<MaterialIcons name="receipt-long" size={size} color={color} />
			),
		},
	];
	const about = [
		{
			title: "Help and Support",
			icon: (
				<MaterialCommunityIcons
					name="help-circle-outline"
					size={size}
					color={color}
				/>
			),
		},
		{
			title: "About Ayuryuj",
			icon: (
				<MaterialCommunityIcons
					name="pulse"
					size={size}
					color={color}
				/>
			),
		},
		{
			title: "Terms and Conditions",
			icon: (
				<MaterialCommunityIcons
					name="file-document"
					size={size}
					color={color}
				/>
			),
		},
		{
			title: "Privacy Policy",
			icon: <Fontisto name="locked" size={size} color={color} />,
		},
	];
	const settings = [
		{
			title: "Settings",
			icon: (
				<MaterialCommunityIcons
					name="cog-outline"
					size={size}
					color={color}
				/>
			),
		},
	];

	return (
		<Box flex={1}>
			{/* family selector */}
			<Box bg="accent" height="25%" p={4} pl={0}>
				<ScrollView horizontal>
					{familyArr.map((i, index) => (
						<Avatar key={index} seed={index + 1} title={i} />
					))}
				</ScrollView>
				<Box
					flexDirection="row"
					width="100%"
					alignItems="center"
					gap={4}
					pl={4}
				>
					<AntDesign
						name="pluscircleo"
						size={36}
						color={palette.white}
						style={{ width: 36 }}
					/>

					<Text color="white">Add Family</Text>
				</Box>
			</Box>

			<ScrollView>
				<Box gap={4} my={4}>
					{/* share */}
					<Box flexDirection="row" gap={4} alignItems="center" px={4}>
						<Box bg="accentLight" p={2} borderRadius="full">
							<MaterialCommunityIcons
								name="share-variant"
								size={30}
								color={palette.accent}
							/>
						</Box>
						<Box flexDirection="column">
							<Text fontSize={20} variant="bold">
								Share the App
							</Text>
							<Text fontSize={14} color="secondaryText">
								Recommended to Family and Friends
							</Text>
						</Box>
					</Box>

					<Box>
						{menuItems.map((i, index) => (
							<PressableBox
								key={index}
								p={4}
								borderTopWidth={index == 0 ? 1 : 0}
								borderBottomWidth={1}
								borderColor="mutedText"
								onPress={() => {
									router.push(i.route);
									closeDrawer();
								}}
							>
								<Text fontSize={20}>{i.label}</Text>
							</PressableBox>
						))}
					</Box>

					{/* care services */}
					<DrawerList
						label="Ayuryuj Care Services"
						data={services}
						size={size}
					/>

					{/* records */}
					<DrawerList label="Records" data={records} size={size} />

					{/* about */}
					<DrawerList label="About" data={about} size={size} />

					{/* settings */}
					<DrawerList label="Settings" data={settings} size={size} />
				</Box>
			</ScrollView>
		</Box>
	);
}
