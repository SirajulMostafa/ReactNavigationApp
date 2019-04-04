import React, { Component } from 'react';
import { Root } from "native-base";
import Route from "./route/Route";
export default class App extends React.Component {
    render() {
        return (
            <Root>
                <Route />
            </Root>
        );
    }
}