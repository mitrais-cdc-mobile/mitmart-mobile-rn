'use strict';

import React, {
    Component,
    Image,
    View
} from 'react-native';
import Styles from './style_welcome';

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
            .then((value) => {
                console.log(`is Login : ${value}`);
                if (value === 'true') {
                    navigator.replace({
                        id: 'HomeScreen',
                    });
                } else {
                    navigator.replace({
                        id: 'SignUpScreen',
                    });
                }
            }).done();
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
                    source={{ uri: 'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024' }}>
                </Image>
            </View>
        );
    }
}

module.exports = SplashPage;