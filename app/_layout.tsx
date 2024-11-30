import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"; // Changed import

export default function RootLayout() {
	return (
		<>
			<StatusBar style="dark" />{" "}
			<Stack
				screenOptions={{ headerShown: false, orientation: "portrait" }}
			>
				<Stack.Screen name="index" />
			</Stack>
		</>
	);
}
