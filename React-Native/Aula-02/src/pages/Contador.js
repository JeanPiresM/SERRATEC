import { Button, Text, StyleSheet, View} from "react-native";
import {useState} from "react";

function Contador() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);
  const incrementCounter = () => {
   
    setCount(count + 1);
  };
  
  const resetCounter = () => {
   
    setCount(0);
  };


  const changeTheme = () =>{
    console.log("Change theme");
    setTheme(!theme)
  };

  return (
    <View style={theme ? styles.lightTheme : styles.darkTheme}>
      <Text>I'M THE COUNTER!!!</Text>
      <Text style={styles.counter}>{count}</Text>
      <Button title="CLICK HERE TO INCREMENT" onPress={incrementCounter} />
      <Button title="CLick here to reset the counter" onPress={resetCounter}/>
      <Button title="Light/Dark" onPress={changeTheme}/>
    </View>
  );
}
export default Contador;

const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor: "#fff"
 },
  counter: {
    fontSize: 200,
  },
  lightTheme:{
    backgroundColor: "#fff",
    color:"#000",
    flex: 1,
  },
  darkTheme:{
    backgroundColor: "#000",
    color:"#fff",
    flex: 1,
  }
});
