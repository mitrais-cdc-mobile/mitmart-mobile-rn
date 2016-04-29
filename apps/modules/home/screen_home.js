'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    TouchableHighlight
} from 'react-native';

import Styles from './style_home';

class HomeScreen extends Component {
    openDrawer() {
        // this.refs['DRAWER'].openDrawer()
        this._drawer.openDrawer();
    };

    logout() {
        this.props.navigator.replace({
            id: 'LoginScreen'
        });
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
                ref={(drawer) => { _drawer = drawer } }
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Hello</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>World!</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Username = ${this.props.username}`}</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Login Id = ${this.props.loginId}`}</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`UserId Id = ${this.props.userId}`}</Text>
                    <TouchableHighlight onPress={this.openDrawer}>
                        <Text>{'Open Drawer'}</Text>
                    </TouchableHighlight>
                    <Text
                        onPress={this.logout} >
                        {'Logout'}
                    </Text>
                </View>
            </DrawerLayoutAndroid>
            // <View style={Styles.container}>
            //     <Text style={Styles.welcome}>
            //         Welcome to React Native!
            //     </Text>
            //     <Text style={Styles.instructions}>
            //         To get started, edit index.android.js
            //     </Text>
            //     <Text style={Styles.instructions}>
            //         Shake or press menu button for dev menu
            //     </Text>
            // </View>
        );
    }
}

module.exports = HomeScreen;