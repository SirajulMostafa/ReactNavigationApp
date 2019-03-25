
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
//import Icon from '@expo/vector-icons/Ionicons'

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

        <Button title='Login' onPress={() => this.props.navigation.navigate('Dashboard')}></Button>
        <Button title='Sign Up' onPress={() => alert('sign up')}></Button>

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



class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

export default App;



const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      }
    }
  })
const DashboarStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
},{
  defaultNavigationOptions:({navigation})=>{
    return{
      // headerLeft:(
      //   <Icon style={{paddingLeft:10}}
      //   name="md-menu" size={30} 
      //   onPress={()=>navigation.openDrawer()}
      //   />
     
      // )
       headerLeft:(
         <Button title="Menu" onPress={()=>navigation.openDrawer() } />
       )

      
    }
  }
})

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: { screen: DashboarStackNavigator }
  });


const AppSwitchNavigator = createSwitchNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
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

