import { ScrollView, StyleSheet, View } from "react-native";
import DoctorInfo from "../../components/doctor-info";
import { Text } from "react-native-paper";

export default function DoctorListing() {
	const arr = Array(5).fill("");

	return (
		<View style={styles.container}>
			<ScrollView style={{ flex: 1 }} contentContainerStyle={styles.list}>
				{arr.map((i, index) => (
					<DoctorInfo key={index} />
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
		display: "flex",
		flexDirection: "column",
		gap: 12,
	},
	main: {
		justifyContent: "center",
	},
	title: {
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
	list: {},
});
