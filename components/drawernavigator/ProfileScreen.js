import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default class ProfileScreen extends Component {

  // / static navigationOptions = {
  // //   header: null,
  // // }
    render() {
        return (
          <View style={styles.container}>
            <Button
              title="Profile"
              onPress={() =>
                  this.props.navigation.navigate("Setting")
              }
            />
          </View>
        );
    }
}
