import "../gesture-handler";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { DrawerProvider } from "../lib/providers/drawer-provider";
import { FontsProvider } from "../lib/providers/font-provider";
import { THEME } from "../ui/config";

const queryClient = new QueryClient();

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={RNGH_ROOT_STYLE}>
			<FontsProvider>
				<QueryClientProvider client={queryClient}>
					<DrawerProvider>
						<BottomSheetModalProvider>
							<ThemeProvider theme={THEME}>
								<Stack
									screenOptions={{
										animation: "fade_from_bottom",
										animationTypeForReplace: "push",
									}}
								>
									<Stack.Screen
										name="(tabs)"
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="edit"
										options={{
											title: "Edit your Profile",
											headerBackVisible: true,
											presentation: "modal",
										}}
									/>
									<Stack.Screen
										name="doctor"
										options={{
											headerShown: false,
											presentation: "transparentModal",
										}}
									/>
								</Stack>
							</ThemeProvider>
						</BottomSheetModalProvider>
					</DrawerProvider>
				</QueryClientProvider>
			</FontsProvider>
		</GestureHandlerRootView>
	);
}

const RNGH_ROOT_STYLE = {
	flex: 1,
} as const;
