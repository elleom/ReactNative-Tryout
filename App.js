import { useState } from "react";
import React from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoal] = useState([]); // [] stands for empty array

	const addGoalHandler = (goalTitle) => {
		//Syntax: func( [... currentArray, itemToAdd ])
		//#IMPORTAN: this synthax does not guarantee 100% result
		// E.G: setCourseGoal([...courseGoals, enteredGoal]); // spread array

		//#best use:
		// func( array => [...array, itemToAdd])
		setCourseGoal((courseGoals) => [
			...courseGoals,
			{ id: getRandomId(10000, 100000).toString(), value: goalTitle },
		]); // spread array
	};

	const getRandomId = (min, max) => {
		return Math.random() * (max - min) + min;
	}

	const onDeleteHandler = goalId => {
		setCourseGoal(courseGoals => {
			//forar each goal in array return the one that is not goalID
			//note the func inse the filter params
			return courseGoals.filter((goal) => goal.id !== goalId);
		}); 
	};

	return (
		//addGoalHandler is defined and referenced via GoalInput component
		<View style={styles.screen}>
			<GoalInput onAddGoal={addGoalHandler} />

			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem
						id={itemData.item.id}
						onDelete={onDeleteHandler}
						title={itemData.item.value}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
});
