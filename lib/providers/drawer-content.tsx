import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

import { PressableBox } from "../../ui/box";
import { Text } from "../../ui/text";

export function DrawerContent() {
	const router = useRouter();

	const menuItems = [
		{ label: "Home", route: "/" },
		{ label: "Profile", route: "/profile" },
		{ label: "Settings", route: "/settings" },
	];

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>App Name</Text>
			</View>
			{menuItems.map((item) => (
				<PressableBox
					key={item.route}
					style={styles.menuItem}
					onPress={() => {
						router.push(item.route);
					}}
				>
					<Text>{item.label}</Text>
				</PressableBox>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	menuItem: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
	},
});
