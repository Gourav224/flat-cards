import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FancyCards() {
	return (
		<View>
			<Text style={styles.headingText}>Trending Places</Text>
			<View style={[styles.card, styles.cardElevated]}>
				<Image
					source={{
						uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ",
					}}
					style={styles.cardImage}
				/>
				<View style={styles.cardBody}>
					<Text style={styles.cardTitle}>Hawa Mahal</Text>
					<Text style={styles.cardLabel}>Pink City, jaipur</Text>
					<Text style={styles.cardDescription}>
						The Hawa Mahal is a palace in the city of Jaipur, India.
						Built from red and pink sandstone, it is on the edge of
						the City Palace.
					</Text>
					<Text style={styles.cardFooter}>12 mins away</Text>
				</View>
			</View>
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
	card: {
		width: "auto",
		height: 340,
		borderRadius: 6,
		marginVertical: 12,
		marginHorizontal: 16,
	},
	cardElevated: {
		backgroundColor: "#1f2932",
		elevation: 3,
		shadowOffset: {
			width: 1,
			height: 1,
		},
	},
	cardImage: {
		height: 180,
		marginBottom: 8,
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
	},
	cardBody: {
		flex: 1,
		flexGrow: 1,
		paddingHorizontal: 12,
	},
	cardTitle: {
		color: "#f0f8ff",
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 4,
	},
	cardLabel: {
		color: "#f0f8ff",
		fontSize: 14,
		marginBottom: 6,
	},
	cardDescription: {
		color: "#d1d5db",
		fontSize: 12,
		marginBottom: 12,
		marginTop: 6,
		flexShrink: 1,
	},
	cardFooter: {
		color: "#f0f8ff",
	},
});
