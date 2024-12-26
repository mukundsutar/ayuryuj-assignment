import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import Input from "../../ui/input";

export default function Edit() {
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
			key: "name",
			icon: <MaterialIcons name="person" size={size} color="black" />,
		},
		{
			title: "Email",
			key: "email",
			icon: <MaterialIcons name="email" size={size} color="black" />,
		},
		{
			title: "Phone Number",
			key: "phoneNumber",
			icon: (
				<MaterialIcons name="local-phone" size={size} color="black" />
			),
		},
		{
			title: "Location",
			key: "location",
			icon: (
				<MaterialIcons name="location-pin" size={size} color="black" />
			),
		},
	];

	return (
		<View style={styles.container}>
			{arr.map((i, index) => (
				<Input
					key={index}
					label={i.title}
					value={info[i.key as keyof typeof info]}
					setValue={(value) =>
						setInfo((prev) => ({ ...prev, [i.key]: value }))
					}
				/>
			))}

			<View style={styles.buttonGroup}>
				<Button
					mode="contained"
					style={{ borderRadius: 8, flex: 1, marginHorizontal: 5 }}
					contentStyle={{ height: 50 }}
					labelStyle={{ fontSize: 20 }}
				>
					Cancel
				</Button>
				<Button
					mode="contained"
					style={{ borderRadius: 8, flex: 1, marginHorizontal: 5 }}
					contentStyle={{ height: 50 }}
					labelStyle={{ fontSize: 20 }}
				>
					Save
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 24,
		paddingHorizontal: 12,
		gap: 10,
	},
	buttonGroup: {
		flexDirection: "row",
	},
});
