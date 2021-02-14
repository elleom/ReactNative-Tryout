import { useState } from "react";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";

export default function App() {
	/*
	Syntax = conts + [ array, funtion] = useState( OBJECT => string, array, etc )
	*/
	const [enteredGoal, setEnteredGoal] = useState(""); //text is so far null so state('')
	const [courseGoals, setCourseGoal] = useState([]); // [] stands for empty array

	const goalInputHandler = (enteredtext) => {
		setEnteredGoal(enteredtext);
	};

	const addGoalHandler = () => {
		//Syntax: func( [... currentArray, itemToAdd ])
		//#IMPORTAN: this synthax does not guarantee 100% result
		// E.G: setCourseGoal([...courseGoals, enteredGoal]); // spread array

		//#best use:
		// func( array => [...array, itemToAdd])
		setCourseGoal((courseGoals) => [...courseGoals, {key: Math.random.toString(), value: enteredGoal}]); // spread array
	};

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
			
			<FlatList keyExtractor={(item, index) => item.key}
			// by default it takes a look at the item and check for a 'key' item
			 data={courseGoals} renderItem={itemData => ( 
				<View style={styles.goalItem}>
					<Text>{itemData.item.value /*value comes from addGoalHanlder() */ }</Text>
				
				</View>)} // closes flatview thereafter (self-view self closing!)
			/> 
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
	goalItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
	},
});
