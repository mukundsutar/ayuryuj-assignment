import "../global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router/stack";
import { PaperProvider } from "react-native-paper";

const queryClient = new QueryClient();

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<PaperProvider>
				<Stack>
					<Stack.Screen
						name="(tabs)"
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="edit"
						options={{ headerShown: false }}
					/>
				</Stack>
			</PaperProvider>
		</QueryClientProvider>
	);
}
