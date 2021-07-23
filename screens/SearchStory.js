import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements'
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';



export default class Searchscreen extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        allStories: [],
        dataSource:[],
        search:'',
   

      }
    }

    componentDidMount=()=>{
      this.retrieveStories()
    }

    updateSearch=search=>{
     this.setState({
       search
     })
    };

    retrieveStories=()=>{
     
        var allStories=[];
        var stories = db.collection('stories')
        .get().then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
            allStories.push(doc.data())
          })
          this.setState({
            allStories
          })
            
        })
    
      
    }
    catch(error){
      console.log(error)
    }


searchFilter=(text)=>{
  var newData = this.state.allStories.filter((item)=>{
    var itemData = item.title?item.title.toUpperCase():''.toUpperCase()
    
    return itemData.indexOf(text)>-1
  })

  this.setState({
    dataSource:newData,
    search:text

  })


}

render(){                         
  return(
    <View>
    <SearchBar
    placeholder="Type here"
    onChangeText={text=>this.searchFilter(text)}
    value = {this.state.search}
  
   
    />

<FlatList
          data={this.state.search===""?this.state.allStories:this.state.dataSource}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
              <Text>"Author: " + {item.author}</Text>
              <Text>"Title: " + {item.title}</Text>
             
          
            </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
        
        /> 
    </View>
  )
}
}






