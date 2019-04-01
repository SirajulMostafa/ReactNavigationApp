import React, { Component } from "react";
import { Button } from "react-native";
import Profile from "../stacknavigator/ProfileScreen";
import WelcomeScreen from "./WelcomeScreen";
import Setting from "./Settings";
import Main from "../Style/Main";

import {
    createAppContainer,
    createStackNavigator,
   
} from "react-navigation";


const createStackNav = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreen,
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

const AppContainer = createAppContainer(createStackNav);

export default AppContainer;
