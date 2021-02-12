import { useState } from "react";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
	/*
	Syntax = conts + [ array, funtion] = useState( OBJECT => string, array, etc )
	*/
	const [enteredGoal, setEnteredGoal] = useState(""); //text is so far null so state('')
	const [courseGoals, setCourseGoal] = useState([]) // [] stands for empty array


	const goalInputHandler = (enteredtext) => {
		setEnteredGoal(enteredtext);
	};

	const addGoalHandler = () => {

		//Syntax: func( [... currentArray, itemToAdd ])
		setCourseGoal([...courseGoals, enteredGoal]); // spread array

	}

	
	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='course goal'
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title='ADD' onPress={addGoalHandler} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	input: {
		width: "80%",
		borderColor: "black",
		borderBottomWidth: 1,
	},
});
