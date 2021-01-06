//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
 

//Create custom components
const App = () => {

  //Declare variable
  //var counter = 0;
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Current Count : {counter}</Text>
      <Button title="Increment"
      onPress={()=>{
        //counter++;
        setCounter(counter + 1);
        console.log(counter);
      }}
      />
      <Button title="Decrement"
      onPress={()=>{
        //counter--;
        setCounter(counter - 1);
        console.log(counter);
      }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

//Export 
export default App;

//Apply Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
