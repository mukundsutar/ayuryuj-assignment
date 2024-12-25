import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router/stack";
import { PaperProvider } from "react-native-paper";

import { FontsProvider } from "../lib/providers/font-provider";
import { THEME } from "../ui/config";

const queryClient = new QueryClient();

export default function RootLayout() {
	return (
		<FontsProvider>
			<QueryClientProvider client={queryClient}>
				<PaperProvider>
					<ThemeProvider theme={THEME}>
						<Stack>
							<Stack.Screen
								name="(drawer)"
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="edit"
								options={{ headerShown: false }}
							/>
						</Stack>
					</ThemeProvider>
				</PaperProvider>
			</QueryClientProvider>
		</FontsProvider>
	);
}
