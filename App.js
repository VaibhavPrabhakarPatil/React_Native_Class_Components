import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Student from './component/Student';

class App extends Component {
  fruit=()=>{
    console.warn("vaibhav");
  }
  render(){
    return(

      <View>
        <Text style={{fontSize:30, color:'red'}}>Class Component</Text>
        <TextInput placeholder='Enter your name' />
        <Button title='press me' onPress={this.fruit}/>
        <Student/>
      </View>
    );
  }
  }
  export default App;

