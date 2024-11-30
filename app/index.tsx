import {
	ScrollView,
	StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FlatCards from "@/components/FlatCards";
import ElevatedCards from "@/components/ElevatedCards";
import FancyCards from "@/components/FancyCards";
import ActionCards from "@/components/ActionCards";
import ContactList from "@/components/ContactList";

const index = () => {
	return (
		<SafeAreaView
			style={{
				backgroundColor: "#1f2937", // Assuming zinc-800 is #1f2937.  Verify this hex code.
				flex: 1,
			}}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<FlatCards />
				<ElevatedCards />
				<FancyCards />
				<ActionCards />
				<ContactList />
			</ScrollView>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
