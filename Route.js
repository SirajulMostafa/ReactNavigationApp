


import React, { Component } from 'react';
import {  Button} from 'react-native';
//import Icon from '@expo/vector-icons/Ionicons'

import Feed from './components/Feed';
import Detail from "./components/Details";
import Profile from "./components/Profile";
import DashboardScreen from "./components/DashboardScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import Settings from "./components/Settings";
import Main from './components/Style/Main'

import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';




const FeedStack = createStackNavigator({
    Feed: {
        screen: Feed,

        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Feed',
                headerLeft: (
                    <Button title="Menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />
                )
            };
        }

    },
    Detail: {
        screen: Detail
    }
},
    {
        defaultNavigationOptions: {
            gesturesEnabled: false// for apple always menu button show the bashbord
        }
    }
)
const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,

        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Profile',
                headerLeft: (
                    <Button title="Menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />
                )
            };
        }

    }
})
const SettingsStack = createStackNavigator({
    Settings: {
        screen: Settings,

        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Setting',
                headerLeft: (
                    <Button title="Menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />
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
                header: null,
                headerTitle: routeName
            }
        }
    })
const DashboarStackNavigator = createStackNavigator({
    DashboardTabNavigator: { screen: DashboardTabNavigator },


}, {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                // headerLeft:(
                //   <Icon style={{paddingLeft:10}}
                //   name="md-menu" size={30} 
                //   onPress={()=>navigation.openDrawer()}
                //   />

                // )
                headerLeft: (
                    <Button title="Menu" onPress={() => navigation.openDrawer()} />
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

export default AppContainer = createAppContainer(AppSwitchNavigator)

