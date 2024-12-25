import {
	Roboto_100Thin,
	Roboto_100Thin_Italic,
	Roboto_300Light,
	Roboto_300Light_Italic,
	Roboto_400Regular,
	Roboto_400Regular_Italic,
	Roboto_500Medium,
	Roboto_500Medium_Italic,
	Roboto_700Bold,
	Roboto_700Bold_Italic,
	Roboto_900Black,
	Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import type React from "react";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export function FontsProvider({ children }: { children: React.ReactNode }) {
	const [loaded] = useFonts({
		Roboto_100Thin,
		Roboto_100Thin_Italic,
		Roboto_300Light,
		Roboto_300Light_Italic,
		Roboto_400Regular,
		Roboto_400Regular_Italic,
		Roboto_500Medium,
		Roboto_500Medium_Italic,
		Roboto_700Bold,
		Roboto_700Bold_Italic,
		Roboto_900Black,
		Roboto_900Black_Italic,
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
