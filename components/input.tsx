import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

interface InputProps {
	label: string;
	value: string;
	setValue: (value: string) => void;
}

export default function Input({ label, value, setValue }: InputProps) {
	return (
		<>
			<View style={styles.container}>
				<Text variant="titleLarge" style={{ fontWeight: "bold" }}>
					{label}
				</Text>
				<TextInput
					value={value}
					onChangeText={(text) => setValue(text)}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 4,
	},
});
