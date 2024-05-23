import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import {LoginScreen} from '../screens/LoginScreen';

export default HomesScreen = ({navigation}) => {
 
 const navLogin = () => {
  navigation.navigate('Login')
 }
 
 
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Entypo name="facebook" size={40} color="white" style={styles.icon} />
        <Text style={styles.text}>acebook</Text>
      </View>
      <TouchableOpacity onPress={navLogin}>
        <Text>Clique Aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#023e7d'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: -1,
  },
  text: {
    fontSize: 40, 
    color: 'white'
  },
});

