'use strict';

import React, {
    StyleSheet,
    Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    lineGrey: {
        flexDirection: 'row',
        flex: 1,
        height: 1,
        backgroundColor: 'grey',
        paddingTop: 5,
        paddingBottom: 5
    },
    lineWhite: {
        height: 10,
        backgroundColor: 'white'
    },
    lineBlack: {
        flexDirection: 'row',
        flex: 1,
        height: 1,
        backgroundColor: 'black',
        paddingTop: 5,
        paddingBottom: 5
    },
    textAppName: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    },
    containerAppsName: {
        width: width,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

module.exports = styles;