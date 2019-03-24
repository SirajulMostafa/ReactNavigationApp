
import React, {Component} from 'react';
import { StyleSheet, Text, View,Button, ScrollView} from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation';

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <Button title='Login' onPress={()=>this.props.navigation.navigate('Dashboard')}></Button>
        <Button title='Sign Up' onPress={()=>alert('sign up')}></Button>
      
     </View>
    );
  }
}
class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
     </View>
    );
  }
}

export default App;

const AppSwitchNavigator =  createSwitchNavigator(
 {
   Welcome:{screen:WelcomeScreen},
   Dashboard:{screen:DashboardScreen}
 });

 const AppContainer = createAppContainer(AppSwitchNavigator)









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

//imrnc
// rncomp
// rnfcomp
// rnmap
// imrnp
// imrnp
// imrnss