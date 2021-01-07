//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ApiManager from './api/ApiManager'

//Create custom components
const App = () => {

  //Declare variable
  const [counter, setCounter]  = useState(0); //hooks
  const [result , setResults]  = useState([]);

  const getPost = async () => {
      const response = await ApiManager.get('/posts');
      setResults(response);
  };

  return (
    <View style={styles.container}>
      
      <Text>we have found : {result.length} results</Text>
      <Text>Current Count :{counter} </Text>
      
      <Button title="Get POST"
      onPress={()=>{
        getPost();
      }}/>

      <Button title="Increment"
      onPress={()=>{
        //---dont do this -----counter++; // counter = counter + 1 
        setCounter(counter + 1);
        console.log(counter);
      }}
      />
      
      <Button title="Decrement"
      onPress={()=>{
        //dont directly change variables counter--; 
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
