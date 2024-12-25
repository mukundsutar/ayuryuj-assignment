import { useRouter } from "expo-router";
import React from "react";

export default function Profile() {
	const router = useRouter();

	router.push("/(tabs)/profile");
}
