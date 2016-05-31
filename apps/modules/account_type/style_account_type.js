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
    simpleButton: {
        width: 250,
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
        marginTop: 10
    },
    simpleButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    containerTop: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    container: {
        width: 270,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(175,175,175,0.5)',
        borderRadius: 4,
        padding: 10
    },
    container2: {
        height: 30,
        width: 250,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    image: {
        width: 30,
        height: 30,
        alignSelf: 'stretch',
        marginRight: 5
    },
    picker: {
        flex: 1,
        backgroundColor: 'white',
        height: 40
    }
});

module.exports = styles;