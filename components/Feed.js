

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

 export default class Feed extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text>Feed</Text> */}

                <Button title='Details feed page' onPress={() => this.props.navigation.navigate('Detail')}></Button>

            </View>
        );
    }
}