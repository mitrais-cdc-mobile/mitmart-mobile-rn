'use strict';

import React from 'react-native';
import LoginScreen from '../login/screen_login';
import HomeScreen from '../home/screen_home';
import WelcomeScreen from '../welcome/screen_welcome';
var {
    Component,
    Navigator,
    BackAndroid
} = React;
var nav;

class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'WelcomeScreen' }}
                renderScene={this.renderScene.bind(this) }
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                } } />
        );
    }

    renderScene(route, navigator) {
        nav = navigator;
        var routeId = route.id;
        if (routeId === 'WelcomeScreen') {
            return (
                <WelcomeScreen
                    navigator={navigator} />
            );
        }
        if (routeId === 'LoginScreen') {
            return (
                <LoginScreen
                    navigator={navigator} />
            );
        }
        if (routeId === 'HomeScreen') {
            return (
                <HomeScreen
                    navigator={navigator} />
            );
        }
    }
}

BackAndroid.addEventListener('hardwareBackPress', function () {
    if (nav && nav.getCurrentRoutes().length > 1) {
        nav.pop();
        return true;
    }
    return false;
});

module.exports = App;