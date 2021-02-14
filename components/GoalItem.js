import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id) /* props on delete will be declared on app.js*/}> 
			<View style={styles.goalItem}>
				<Text>{props.title /*value comes from addGoalHanlder() */}</Text>
			</View> 
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
	},
});

export default GoalItem;
