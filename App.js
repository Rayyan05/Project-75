import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SearchStory from './screens/SearchStory';
import WriteScreenStoryScreen from './screens/WriteStoryScreen';
import LoginScreen from './screens/loginscreen';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteScreenStoryScreen},
  SearchStory: {screen: SearchStory},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "SearchStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);


const switchNavigator = createSwitchNavigator({
LoginScreen:{screen: LoginScreen},
  TabNavigator:{screen: TabNavigator}
  })
  
  const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
