

import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Button title='Login' onPress={() => this.props.navigation.navigate('Dashboard')}></Button>
                <Button title='Sign Up' onPress={() => alert('sign up')}></Button>

            </View>
        );
    }
}
