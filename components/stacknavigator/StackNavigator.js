import React, { Component } from "react";
import { Button } from "react-native";
import Profile from "../stacknavigator/ProfileScreen";
import WelcomeScreen from "./WelcomeScreen";
import Setting from "./Settings";
import Main from "../Style/Main";

import {
    createAppContainer,
    createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";


const createStackNav = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Profile: Profile,
    Setting: Setting,
  }
  // {
  //     defaultNavigationOptions: {
  //         headerTintColor: '#fff',
  //         headerStyle: {
  //             backgroundColor: '#000',
  //         },
  //     },
  //     navigationOptions: {
  //         tabBarLabel: 'Home!',
  //     },
  // }
);

const createtTapNav = createBottomTabNavigator({
  Welcome: WelcomeScreen,
  Profile: Profile,
  Setting: Setting,
});

//const AppContainer = createAppContainer(createStackNav);
const AppContainer = createAppContainer(createtTapNav);

export default AppContainer;
