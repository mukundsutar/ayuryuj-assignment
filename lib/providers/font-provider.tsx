import {
	Roboto_300Light,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import type React from "react";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export function FontsProvider({ children }: { children: React.ReactNode }) {
	const [loaded] = useFonts({
		Roboto_300Light,
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return children;
}
