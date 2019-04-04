import React, { Component } from "react";
import { Button, Image, StyleSheet, TouchableHighlight } from "react-native";
import Profile from "./ProfileScreen";
import WelcomeScreen from "./WelcomeScreen";
import Setting from "./Settings";
import Main from "../Style/Main";

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";


// const createStackNavWelcomeScreen = createStackNavigator(
//   {
//     Welcome: { screen: WelcomeScreen },
    
//   },

//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {

//         headerLeft: (
//           <Button title="Menu" onPress={() => navigation.openDrawer()} />
//         )
//       };
//     }
//   }

// );
const StackScreens = createDrawerNavigator (
  {
   // Welcome: { screen: createStackNavWelcomeScreen },
    Welcome: { screen: WelcomeScreen },
    Profile: { screen: Profile },
    Setting: { screen: Setting }
  },

  
);

const MyDrawerNavigator = createStackNavigator({
  Welcome: { screen: StackScreens },
  Setting: { screen: StackScreens },
  Profile: { screen: StackScreens },
  Welcome: { screen: StackScreens }
}, {
    defaultNavigationOptions: ({ navigation }) => {
      return {

        headerLeft: (
          <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
        ),
         headerRight: (
          <Button title="Profile" onPress={() => navigation.toggleDrawer()} />
        ),
        
      };
    }
  });
  


// MyDrawerNavigator.navigationOptions = {
//   title: "Home Feed",

//   header: () => ({
//     // Render a button on the right side of the header
//     // When pressed switches the screen to edit mode.
//     left: <Button title={"Drawer"} />,
//     tintColor: "rgba(51, 51, 51, 1)"
//   })
// };
//const AppContainer = createAppContainer(createStackNav);
const AppContainer = createAppContainer(MyDrawerNavigator);

export default AppContainer;
