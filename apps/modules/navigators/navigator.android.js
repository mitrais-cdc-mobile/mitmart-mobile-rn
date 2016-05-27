'use strict';

import {
    Navigator,
    BackAndroid
} from 'react-native';

import React, {
    Component
} from 'react';

import LoginScreen from '../login/screen_login';
import HomeScreen from '../home/screen_home';
import SplashScreen from '../welcome/screen_splash';
import SignUpScreen from '../sign_up/screen_sign_up';
import IntroScreen from '../welcome/screen_intro';
import ResetScreen from '../reset/screen_reset';
import AccountTypeScreen from '../account_type/screen_account_type';

var nav;

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
           case 'AccountTypeScreen':
           return (
                <AccountTypeScreen
                    navigator={navigator} 
                    username={route.username}
                    password= {route.password} 
                    email= {route.email} 
                    phone= {route.phone}
                 />               
           );
        }
         if (routeId === 'ResetScreen') {
            return (
                <ResetScreen
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