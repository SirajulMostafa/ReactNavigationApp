
import React, {Component} from 'react';
import { StyleSheet, Text, View,Button, ScrollView} from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';


//const ExampleScreen = View;
 export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Test to React Native!</Text>
     </View>
    );
  }
}
class Dashboard extends Component {
  render() {
    return (
      <ScrollView >
        <View style={{height:1000,borderWidth:15,borderColor:'gray'}} /> 
     </ScrollView>
    );
  }
}





const AppStackNavigator = createStackNavigator(
{
  Home:Home
},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'orange'
    }
  }
}

)
const AppDrawerNavigator = createDrawerNavigator(
{
  Home:Home,
  Dashboard:Dashboard
},{
  
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'orange'
    }
  }
  , unmountInactiveRoutes:true,
}

)
// export default createAppContainer(AppStackNavigator)
//const AppContainer= createAppContainer(AppStackNavigator)
const AppContainer= createAppContainer(AppDrawerNavigator)


















const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
 
});
