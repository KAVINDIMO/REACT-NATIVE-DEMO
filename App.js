import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {
 
 const [name,setname] = useState('kavin');
 
  return (
    <View style={styles.container}>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0Bf',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
