import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const item = (props) => {
	<View style={styles.goalItem}>
		<Text>{props.value /*value comes from addGoalHanlder() */}</Text>
	</View>;
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,

    }
})
