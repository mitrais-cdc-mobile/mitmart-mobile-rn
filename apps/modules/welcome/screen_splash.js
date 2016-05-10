'use strict';

import {
    Image,
    View
} from 'react-native';

import React, {
    Component
} from 'react';


import Styles from './style_splash';

import AsyncStorage from '../../async_storage/async_storage';
var navigator;

class SplashPage extends Component {
    constructor(props) {
        super(props);
        navigator = props.navigator;
        this.state = {};
    }

componentWillMount() {
        this.navigateScreen();
    }

    doLogin() {
        AsyncStorage.getIsLoggedIn()
            .then((isLoggedIn) => {
                if (isLoggedIn) {
                    console.log('doLogin if : ' + isLoggedIn);
                    navigator.replace({
                        id: 'HomeScreen',
                    });
                } else {
                    console.log('doLogin else : ' + isLoggedIn);
                    navigator.replace({
                        id: 'IntroScreen',
                    });
                }
            });
    }

    navigateScreen() {
        setTimeout(() => {
            this.doLogin();
        }, 2000);
    }
    render() {
        return (
            <View
                style={Styles.container}>
                <Image
                    style={Styles.splashImages}
                    source={require('../../resources/splash_image.jpg') }>
                </Image>
            </View>
        );
    }
}

module.exports = SplashPage;