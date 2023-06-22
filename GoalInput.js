import {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'


function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const GoalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
      }
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('');
    } 

    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
        <TextInput value={enteredGoalText} style={styles.textInput} placeholder='Your Course Goal!' onChangeText={GoalInputHandler}/>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button  title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/>
        </View>
       <View style={styles.button}>
       <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
       </View>
        </View>
      </View>
      </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center' ,
        alignItems:'center',
        padding:16,
        backgroundColor:'#311b6b'
      }, 
      textInput: {
        borderWidth:1,
        borderColor: "#e4d0ff",
        backgroundColor:'#e4d0ff',
        width:"100%",
        marginRight:8,
        padding:8,
        color:'#120438',
        borderRadius:6,
      },
      buttonContainer: {
        flexDirection:'row',
      },
      button: {
        width: '30%',
        marginHorizontal:8,
        marginVertical:14,
      }
})