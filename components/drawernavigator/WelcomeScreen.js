import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default class WelcomeScreen extends Component {

  // static navigationOptions = {
  //   header: null,
  // }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Welcome"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
    
      </View>
    );
  }
}
