
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
 
 export default class Settings extends Component {
    render() {
        return (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text>Settings</Text>
            <Button
              title="Back"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        );
    }
}