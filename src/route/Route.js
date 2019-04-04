import React from "react";
import { View, Text, Button } from "react-native";
import LeftDrawer from "./RouteLeftDrawer";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from "../components/login/login";
const MainNavigator = createStackNavigator({
    Login: { screen: Login },
    LeftDrawer: { screen: LeftDrawer }
},
    {
        initialRouteName: "LeftDrawer",
        headerMode: "none",
        swipeEnabled: false
    });
const MainRoute = createAppContainer(MainNavigator);
export default MainRoute;