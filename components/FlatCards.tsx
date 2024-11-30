import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlatCards = () => {
	return (
		<View>
			<Text style={styles.headingText}>FlatCards</Text>
			<View style={styles.container}>
				<View style={[styles.card, styles.card1]}>
					<Text>Red</Text>
				</View>
				<View style={[styles.card, styles.card2]}>
					<Text>Green</Text>
				</View>
				<View style={[styles.card, styles.card3]}>
					<Text>Blue</Text>
				</View>
			</View>
		</View>
	);
};

export default FlatCards;

const styles = StyleSheet.create({
	headingText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#f0f8ff",
		marginLeft: 16,
	},
	container: {
		flex: 1,
		flexDirection: "row",
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
	card1: {
		backgroundColor: "#ef5354",
	},
	card2: {
		backgroundColor: "#50dbb4",
	},
	card3: {
		backgroundColor: "#5da3fa",
	},
});
