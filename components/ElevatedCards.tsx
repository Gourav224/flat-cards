import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevatedCards() {
	return (
		<View>
			<Text style={styles.headingText}>ElevatedCards</Text>
			<ScrollView style={styles.container} horizontal={true}>
				<View style={[styles.card, styles.cardElevated]}>
					<Text>Tap</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Text>me</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Text>to</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Text>Scroll</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Text>more ...</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Text>😎</Text>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	headingText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#f0f8ff",
		marginLeft: 16,
	},
	container: {
		padding: 8,
	},
	card: {
		flex: 1,
		width: 100,
		height: 100,
		borderRadius: 6,
		margin: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	cardElevated: {
		backgroundColor: "#f0f8ff",
		elevation: 4,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowColor: "#333",
		shadowOpacity: 0.4,
		shadowRadius: 2,
	},
});
