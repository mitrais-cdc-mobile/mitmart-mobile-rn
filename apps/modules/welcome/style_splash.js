'use strict';

import {
    StyleSheet,
    Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    splashImages: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height
    }
});

module.exports = styles;