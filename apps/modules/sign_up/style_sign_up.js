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
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    containerTop: {
        flex: 1,
        width: width,
    },
    container: {
        margin: 10,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerBottom: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    containerButton: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerBody: {
        backgroundColor: 'rgba(175,175,175,0.5)',
        margin: 10,
        padding: 10,
        borderRadius: 4,
    },
    containerForm: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    icon: {
        width: 30,
        height: 30,
        alignSelf: 'stretch',
        marginRight: 5
    },
    inputText: {
        flexDirection: 'row',
        flex: 1,
        height: 30,
        backgroundColor: 'white',
        borderColor: '#48209A',
        borderWidth: 1,
        borderRadius: 4,
        shadowColor: 'darkgrey',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    simpleButton: {
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
    }
});

module.exports = styles;