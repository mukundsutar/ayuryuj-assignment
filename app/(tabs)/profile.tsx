import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, Card, Surface } from "react-native-paper";

export default function Profile() {
	const router = useRouter();

	const size = 35;
	const arr = [
		{
			title: "Name",
			icon: <MaterialIcons name="person" size={size} color="black" />,
		},
		{
			title: "Email",
			icon: <MaterialIcons name="email" size={size} color="black" />,
		},
		{
			title: "Phone Number",
			icon: (
				<MaterialIcons name="local-phone" size={size} color="black" />
			),
		},
		{
			title: "Location",
			icon: (
				<MaterialIcons name="location-pin" size={size} color="black" />
			),
		},
	];

	return (
		<View style={styles.container}>
			<Surface style={styles.main}>
				{arr.map((i, index) => (
					<Card.Title
						key={index}
						title={i.title}
						left={() => i.icon}
						style={styles.section}
						titleVariant="headlineMedium"
					/>
				))}

				<View style={styles.cardAction}>
					<Card.Actions>
						<Button
							mode="outlined"
							onPress={() => router.push("/edit")}
						>
							Edit
						</Button>
					</Card.Actions>
				</View>
			</Surface>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 24,
		paddingHorizontal: 12,
	},
	main: {
		justifyContent: "flex-start",
		borderRadius: 12,
	},
	section: { width: "100%" },
	cardAction: {
		alignItems: "flex-start",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00000050",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalContent: { padding: 16 },
});
