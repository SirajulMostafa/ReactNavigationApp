
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
        <Text>Dashboard 2</Text>
      </View>
    );
  }
}



class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>Feed</Text> */}
       
        <Button title='Details feed page' onPress={() => this.props.navigation.navigate('Detail')}></Button>
        
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



class Detail extends Component{
  render(){
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Detail</Text>
      </View>
    );
  }
}

const FeedStack = createStackNavigator({
  Feed: {
    screen:Feed,
    
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Feed',
         headerLeft:(
           <Button title="Menu" style={{paddingLeft:10}} onPress={()=>navigation.openDrawer() } />
         )
        };
    }
    
  },
  Detail:{
    screen:Detail
  }
},
{defaultNavigationOptions:{
  gesturesEnabled:false// for apple always menu button show the bashbord
  }
}
)
const ProfileStack = createStackNavigator({
  Profile: {
    screen:Profile,
    
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Profile',
         headerLeft:(
           <Button title="Menu" style={{paddingLeft:10}} onPress={()=>navigation.openDrawer() } />
         )
        };
    }
    
  }
})
const SettingsStack = createStackNavigator({
  Settings: {
    screen:Settings,
    
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Setting',
         headerLeft:(
           <Button title="Menu" style={{paddingLeft:10}} onPress={()=>navigation.openDrawer() } />
         )
        };
    }
    
  }
  
})



const DashboardTabNavigator = createBottomTabNavigator(
  {
    FeedStack,
    ProfileStack,
    SettingsStack
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header:null,
        headerTitle: routeName
      }
    }
  })
const DashboarStackNavigator = createStackNavigator({
  DashboardTabNavigator: {screen: DashboardTabNavigator},
  

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
    Dashboard: { screen: DashboarStackNavigator },
    Welcome: { screen: WelcomeScreen },
    DashboardScreen: { screen: DashboardScreen },
    
  }
  );


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

// imrnc  - Import React Native Component
// imrnfc - Import React Native Functional Component
// imrnp -  Create Panresponder.create
// imrnss - Create React Native Style Sheet
// clog   - console.log("$1")
// rnmap  - React Native Map Method
// rndime - const {width,height} = Dimensions.get('window')
// rncomp - Create a React Native Component
// rnfcomp  - Create a Functional React Native Component

