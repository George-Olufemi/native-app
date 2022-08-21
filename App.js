import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('Open up App.js to start working on your app!');
  const [inputText, setInputText] = useState('');
  const changeTextHandler = () => {
    setText('Hello World');
  }
  const changeinput = () => {
    setInputText(inputText)
  }
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <StatusBar style="auto" />
      <View style={styles.navBar}>
        <Text>Hello World</Text>
      </View>
      <Button onPress={changeTextHandler} title = "touch" />
      <TextInput 
        style={styles.input} 
        placeholder="Enter your name" 
        placeholderTextColor='white' 
        onChangeText={setInputText}
      />
      <Button onPress={changeinput} title = "Change Text" />
      <Text>{inputText}</Text>
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
  navBar: {
    backgroundColor: 'red',
    height: 100,
    width: '100%',
    position: "absolute",
    bottom: 0
  },
  input: {
    width: 300,
    color: "white",
    backgroundColor: 'blue',
    padding: 5,
    placeholder: 'white',
  }
});
