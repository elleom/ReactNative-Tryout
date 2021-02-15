import React, {useState} from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";
0
const GoalInput = props => {
    /*
	Syntax = conts + [ array, funtion] = useState( OBJECT => string, array, etc )
	*/

    const [enteredGoal, setEnteredGoal] = useState(""); //text is so far null so state('')

    const goalInputHandler = (enteredtext) => {
        setEnteredGoal(enteredtext);
    }; 

	const AddGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal('');
	}

	return (
		<Modal visible={props.visible} animationType ="slide">
		<View style={styles.inputContainer}>
			<TextInput
				placeholder='course goal'
				style={styles.input}
				onChangeText={goalInputHandler}
				value={enteredGoal}
			/>
			<View style={styles.btnGroup}>
			<Button title="Close" color='red' onPress={props.onCancel}/>
			<Button title='ADD' onPress={AddGoalHandler} />

			</View>
			
		</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	input: {
		width: "80%",
		borderColor: "black",
		borderBottomWidth: 1,
	},
    inputContainer: {
		flex: 1,
		flexDirection: "column", //column is the default regardless
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		padding: 10
	},
	btnGroup: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
		margin: 10,
		padding: 10

	}
});

export default GoalInput;
