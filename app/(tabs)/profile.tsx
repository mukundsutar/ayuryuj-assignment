import { Modal, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Card, Surface, TextInput } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

export default function Profile() {
	const [open, setOpen] = useState<boolean>(false);
	const [info, setInfo] = useState<{
		name: string;
		email: string;
		phoneNumber: string;
		location: string;
	}>({ name: "", email: "", phoneNumber: "", location: "" });

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
						<Button mode="outlined" onPress={() => setOpen(true)}>
							Edit
						</Button>
					</Card.Actions>
				</View>
			</Surface>
			<Modal
				animationType="fade"
				transparent={true}
				visible={open}
				onRequestClose={() => {
					console.log("Modal has been closed.");
					setOpen(!open);
				}}
			>
				<Pressable
					style={styles.centeredView}
					onPress={() => setOpen(false)}
				>
					<Pressable
						style={styles.modalView}
						onPress={(e) => e.stopPropagation()}
					>
						<View style={styles.modalContent}>
							{arr.map((i, index) => (
								<TextInput
									key={index}
									label={i.title}
									value={info?.email}
									onChangeText={(text) =>
										setInfo((prev) => ({
											...prev,
											[i.title]: text,
										}))
									}
									style={{ maxHeight: 20 }}
								/>
							))}
						</View>
					</Pressable>
				</Pressable>
			</Modal>
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
