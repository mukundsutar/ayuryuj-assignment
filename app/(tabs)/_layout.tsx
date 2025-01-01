import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

import { useDrawer } from "../../lib/providers/drawer-provider";
import { PressableBox } from "../../ui/box";
import { palette } from "../../ui/config";
import { CustomDrawer } from "../../ui/drawer-ui/custom-drawer";
import {
	HomeHeader,
	HomeHeaderLeft,
	HomeHeaderRight,
} from "../../ui/home-header";
import { Text } from "../../ui/text";

export default function TabLayout() {
	const { openDrawer } = useDrawer();

	return (
		<CustomDrawer>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: "#1c96b6",
					animation: "shift",
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Home",
						tabBarIcon: ({ color }) => (
							<MaterialIcons
								name="home"
								size={28}
								color={color}
							/>
						),
						headerLeft: () => (
							<PressableBox
								onPress={() => {
									openDrawer();
								}}
							>
								<HomeHeaderLeft />
							</PressableBox>
						),
						headerTitle: () => <HomeHeader />,
						headerRight: () => <HomeHeaderRight />,
					}}
				/>
				<Tabs.Screen
					name="doctor-listing"
					options={{
						title: "Choose your Doctor",
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name="doctor"
								size={24}
								color={color}
							/>
						),
						headerLeft: () => (
							<PressableBox
								onPress={() => {
									openDrawer();
								}}
							>
								<MaterialIcons
									name="arrow-back"
									size={24}
									color={palette.semiMutedText}
								/>
							</PressableBox>
						),
						headerTitle: () => (
							<Text variant="bold" fontSize={20}>
								Choose your Doctor
							</Text>
						),
						headerTitleAlign: "center",
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						tabBarIcon: ({ color }) => (
							<MaterialIcons
								name="person"
								size={24}
								color={color}
							/>
						),
						headerLeft: () => (
							<PressableBox
								onPress={() => {
									openDrawer();
								}}
							>
								<HomeHeaderLeft />
							</PressableBox>
						),
					}}
				/>
			</Tabs>
		</CustomDrawer>
	);
}
