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
        this.refs['DRAWER'].openDrawer()
    };
    render() {

        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>
                    I'm in the Drawer!
                </Text>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                ref={'DRAWER'}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>{this.props.username}</Text>
                    <TouchableHighlight onPress={this.openDrawer}>
                        <Text>{'Open Drawer'}</Text>
                    </TouchableHighlight>
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