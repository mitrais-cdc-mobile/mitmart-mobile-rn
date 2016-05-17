'use strict';

import {
    AppRegistry,
    Text,
    View,
    DrawerLayoutAndroid,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import React, {
    Component,

} from 'react';

import Styles from './style_home';
import AsyncStorage from '../../async_storage/async_storage';
var data;
var navigator;

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        navigator = props.navigator;
        this.state = {
            username: '',
            loginId: '',
            ttl: '',
            createdDate: '',
            userId: '',
        };
    }

    componentDidMount() {
        this.getUserData();
    }

    openDrawer() {
        this.refs['DRAWER'].openDrawer()
    };

    logout() {
        this.setLoggedOut().then((value) => {
            navigator.replace({
                id: 'LoginScreen'
            });
        });

    }

    getUserData() {
        AsyncStorage.getUserInfo()
            .then((value) => {
                console.log(value);
                data = JSON.parse(value);
                console.log('data: ' + data);
                this.setState({ username: data.username });
                this.setState({ loginId: data.loginId });
                this.setState({ ttl: data.ttl });
                this.setState({ createdDate: data.createdDate });
                this.setState({ userId: data.userId });
                console.log(this.state.loginInfo);
            }).done();
    }

    setLoggedOut() {
        return AsyncStorage.setLoggedOut();
    }

    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>
                    I'm in the Drawer!
                </Text>
            </View>
        );

        var _drawer = DrawerLayoutAndroid;
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                ref='DRAWER'
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Hello</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>World!</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Username = ${this.state.username}`}</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Login Id = ${this.state.loginId}`}</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Ttl = ${this.state.ttl}`}</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Created Date = ${this.state.createdDate}`}</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`User Id = ${this.state.userId}`}</Text>
                    <TouchableHighlight onPress={() => this.openDrawer() }>
                        <Text>{'Open Drawer'}</Text>
                    </TouchableHighlight>
                    <Text
                        onPress={() => this.logout() } >
                        {'Logout'}
                    </Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

module.exports = HomeScreen;