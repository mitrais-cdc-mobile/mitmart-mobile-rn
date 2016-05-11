'use strict';

import {
    Navigator
} from 'react-native';

import React, {
    Component
} from 'react';

import LoginScreen from '../login/screen_login';
import HomeScreen from '../home/screen_home';
import SplashScreen from '../welcome/screen_splash';
import SignUpScreen from '../sign_up/screen_sign_up';
import IntroScreen from '../welcome/screen_intro';
import LoginScreenEmail from '../login/screen_login_email';

let nav;
class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'SplashScreen' }}
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
        let routeId = route.id;
        switch (routeId) {
            case 'SplashScreen':
                return (
                    <SplashScreen
                        navigator={navigator} />
                );
            case 'LoginScreen':
                return (
                    <LoginScreen
                        navigator={navigator} />
                );
            case 'LoginScreenEmail':
                return (
                    <LoginScreenEmail
                        navigator={navigator} />
                );
            case 'HomeScreen':
                return (
                    <HomeScreen
                        navigator={navigator}
                        username={route.username}
                        loginId={route.loginId}
                        userId={route.userId} />
                );
            case 'SignUpScreen':
                return (
                    <SignUpScreen
                        navigator={navigator} />
                );
            case 'IntroScreen':
                return (
                    <IntroScreen
                        navigator={navigator} />
                );
        }
    }
}

module.exports = App;