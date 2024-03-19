import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


export default function App() {
 let [num,setNum] = useState(0)

const handleClick = () => {
  
  setNum(num--)
  
 }

 const handleClick2 = () => {
  setNum(num++);
 }


console.log(num)

  return (
  
  
    <View style={styles.container} >
      <div></div>
      <h1 style={styles.container2}>Counter</h1>
      <div style={styles.container3}>
      <Button title={"-"} onPress={handleClick} disabled={num === 0}></Button>
      <h2>{ num }</h2>
      <Button title={"+"} onPress={handleClick2}>ADD</Button>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  container2: {
    
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
    
    backgroundColor: '#fff',
    fontSize: 30,
    
  },
});
