import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs, useNavigation } from "expo-router";
import type { DrawerLayout } from "react-native-gesture-handler";

import { PressableBox } from "../../../ui/box";
import {
	HomeHeader,
	HomeHeaderLeft,
	HomeHeaderRight,
} from "../../../ui/home-header";

export default function TabLayout() {
	const navigation = useNavigation<DrawerLayout>();

	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "#1c96b6" }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="home" size={28} color={color} />
					),
					headerLeft: () => (
						<PressableBox onPress={() => navigation.openDrawer()}>
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
					title: "Available Doctors",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="doctor"
							size={24}
							color={color}
						/>
					),
					headerLeft: () => (
						<PressableBox onPress={() => navigation.openDrawer()}>
							<HomeHeaderLeft />
						</PressableBox>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="cog"
							size={28}
							color={color}
						/>
					),
					headerLeft: () => (
						<PressableBox onPress={() => navigation.openDrawer()}>
							<HomeHeaderLeft />
						</PressableBox>
					),
				}}
			/>
		</Tabs>
	);
}
