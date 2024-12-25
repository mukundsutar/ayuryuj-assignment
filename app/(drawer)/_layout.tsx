import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AppDrawerLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer screenOptions={{ swipeEnabled: true }}>
				<Drawer.Screen
					name="(tabs)" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "Home",
						headerShown: false,
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
