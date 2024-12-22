import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Divider, Text } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface DoctorInfoProps {
	location?: string;
	name?: string;
}

export default function DoctorInfo({
	location = "HSR Layout, Bengal",
	name = "Dr. Mukund Sutar",
}: DoctorInfoProps) {
	const [visible, setVisible] = useState(false);

	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);
	const containerStyle = { backgroundColor: "white", padding: 20 };

	console.log(visible);

	return (
		<>
			<Pressable
				onPress={() => showModal()}
				android_ripple={{ color: "transparent" }}
				style={({ pressed }) => [
					{
						opacity: pressed ? 1 : 1, // Disable opacity change on press
					},
					{
						marginBottom: 20,
					},
				]}
			>
				<Card
					style={{ backgroundColor: "transparent" }}
					contentStyle={styles.cardContent}
					mode="contained"
				>
					<Card.Cover
						source={{ uri: "https://picsum.photos/700" }}
						style={styles.cardCover}
					/>
					<View>
						<Card.Title
							title="Ayuryuj Healthcare"
							subtitle={location}
							left={() => (
								<Avatar.Image
									size={50}
									source={require("../assets/icon-blue-rounded.png")}
									style={styles.logo}
								/>
							)}
						/>

						<View style={styles.textContainer}>
							<Card.Content>
								<Text variant="titleLarge">{name}</Text>
								<Text variant="bodyMedium">MBBS</Text>
								<Text
									variant="bodyLarge"
									style={{ fontWeight: "bold" }}
								>
									₹123
								</Text>
							</Card.Content>
						</View>
					</View>
					<Divider />
					<Card.Actions style={{ backgroundColor: "transparent" }}>
						<Button>Know More</Button>
						<Button>Consult</Button>
					</Card.Actions>
				</Card>
			</Pressable>
			<Modal
				animationType="fade"
				transparent={true}
				visible={visible}
				onRequestClose={() => {
					console.log("Modal has been closed.");
					setVisible(!visible);
				}}
			>
				<Pressable
					style={styles.centeredView}
					onPress={() => setVisible(false)}
				>
					<Pressable
						style={styles.modalView}
						onPress={(e) => e.stopPropagation()}
					>
						<Card
							style={{ backgroundColor: "transparent" }}
							contentStyle={styles.cardContent}
							mode="contained"
						>
							<Card.Cover
								source={{ uri: "https://picsum.photos/700" }}
								style={styles.cardCover}
							/>
							<View>
								<Card.Title
									title="Ayuryuj Healthcare"
									subtitle={location}
									left={() => (
										<Avatar.Image
											size={50}
											source={require("../assets/icon-blue-rounded.png")}
											style={styles.logo}
										/>
									)}
								/>

								<View style={styles.textContainer}>
									<Card.Content>
										<Text variant="titleLarge">{name}</Text>
										<Text variant="bodyMedium">MBBS</Text>
										<Text
											variant="bodyLarge"
											style={{ fontWeight: "bold" }}
										>
											₹123
										</Text>
									</Card.Content>
								</View>
							</View>
							<Divider />
							<Card.Actions
								style={{ backgroundColor: "transparent" }}
							>
								<Button onPress={() => setVisible(false)}>
									Close
								</Button>
							</Card.Actions>
						</Card>
					</Pressable>
				</Pressable>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	cardContent: {
		flexDirection: "row",
		flexWrap: "wrap",
		backgroundColor: "#fff",
		borderRadius: 25,
	},
	cardCover: {
		width: "35%",
		margin: 12,
		marginBottom: 0,
		backgroundColor: "#fff",
		borderColor: "#e6e6e6",
		borderWidth: 2,
	},
	logo: {
		backgroundColor: "transparent",
	},
	textContainer: {
		justifyContent: "space-between",
		flex: 1,
		marginVertical: 8,
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
});
