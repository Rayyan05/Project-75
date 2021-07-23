import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid
} from 'react-native';

import db from '../config';
import firebase from 'firebase'

export default class TransactionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author:'',
      writeStory:'',
      title:''

    }
  }

  submitStory = () =>{
    db.collection('stories').add({
      author:this.state.author,
      writeStory :this.state.writeStory,
      title:this.state.title
    })

    this.setState({
      author:'',
     writeStory:'',
    title:''})


  }

  
  render() {
    return (
     <KeyboardAvoidingView>
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>Write a story</Text>

        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Title of the Story" onChangeText={text => {
                this.setState({
                  title: text
                });
              }}
              
              value = {this.state.title}  />
        </View>
        
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Author" onChangeText={text => {
                this.setState({
                 author: text
                });
              }}
              
              value = {this.state.author} />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputBox2}
            placeholder="Write your story"

            onChangeText={text => {
                this.setState({
                  writeStory: text
                });
              }}
              
              value = {this.state.writeStory} 
               multiline={true} />
            
            
             
           
          
        </View>
        <View>
        <TouchableOpacity
      onPress={()=>{
                this.submitStory()
                
                  alert('This story has been submited.')
              }}>
        <Text>Submit</Text>
        </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputView: {
    flexDirection: 'row',
    margin: 20,
  },
  inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
  },

  inputBox2: {
    width: 200,
    height: 200,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 30,
  },
});
