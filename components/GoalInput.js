import React, {useState} from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
0
const GoalInput = props => {
    /*
	Syntax = conts + [ array, funtion] = useState( OBJECT => string, array, etc )
	*/

    const [enteredGoal, setEnteredGoal] = useState(""); //text is so far null so state('')

    const goalInputHandler = (enteredtext) => {
        setEnteredGoal(enteredtext);
    }; 

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder='course goal'
				style={styles.input}
				onChangeText={goalInputHandler}
				value={enteredGoal}
			/>
			<Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		width: "80%",
		borderColor: "black",
		borderBottomWidth: 1,
	},
    inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	}
});

export default GoalInput;
