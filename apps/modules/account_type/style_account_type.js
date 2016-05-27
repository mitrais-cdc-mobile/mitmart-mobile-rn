'use strict';

import {
    StyleSheet,
    Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');
const lineWidth = 215;

var styles = StyleSheet.create({
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch"
    },
    containerParent: {
        backgroundColor:'black',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    simpleButton: {
        width: 300,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#428BFF',
        borderColor: '#275399',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: 'darkgrey',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    simpleButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    containerLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5
    },
    line: {
        height: 1,
        width: width - lineWidth,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textOr: {
        color: 'white',
        marginRight: 5,
        marginLeft: 5
    },
    accountTypeText: {
        fontSize: 20,
        color : 'white',  
        fontWeight: 'bold'
    },
    doneButton: {
        position: 'absolute',
        bottom: 50,
        right: 50, 
    },
    doneButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color : 'white',  
    },
});

module.exports = styles;