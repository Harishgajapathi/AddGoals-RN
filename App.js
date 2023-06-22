import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem  from './GoalItem';
import GoalInput from './GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler(){
       setModalIsVisible(true)
  }
  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text:enteredGoalText, id: Math.random().toString()}])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id){
   setCourseGoals(currentCourseGoals => {
    return currentCourseGoals.filter((goal) =>goal.id !== id );
   })
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput visible={modalIsVisible} onCancel={endAddGoalHandler} onAddGoal={addGoalHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals}
        renderItem={itemData => {
          return <GoalItem onDeleteItem={deleteGoalHandler} id={itemData.item.id} text={itemData.item.text}/>
        }}    
        keyExtractor={(item,index) => {
          return item.id
        }}
        /> 
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
    backgroundColor:'#1e048a'
  },
  inputContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between' ,
    alignItems:'center',
    marginBottom:16,
    borderBottomWidth:1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth:1,
    borderColor: "#cccccc",
    width:"70%",
    marginRight:8,
    padding:8,
  },
  goalsContainer: {
        flex:5,
  }
});
