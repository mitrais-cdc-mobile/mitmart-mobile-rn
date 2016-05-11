'use strict';

import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch"
    },
    inputText: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderBottomWidth: 2
    },
    inputText2: {
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
        shadowRadius: 1,
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
    containerLogo: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 100
    },
    containerReset: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    image: {
        width: 30,
        height: 30,
        alignSelf: 'stretch',
        marginRight: 5
    },
    imageEmail:{
        width: 30,
        height: 30,
        alignSelf: 'stretch',
        marginRight: 40
    },
    imageFacebook:{
      width: 30,
      height: 30,
      alignSelf: 'stretch',
      marginRight: 15  
    },
    textLogo: {
        color: 'white',
        fontSize: 100,
        fontWeight: 'bold',
    },
    textForgot: {
        color: 'white',
        fontSize: 14
    },
    textReset: {
        color: '#428BFF',
        fontSize: 14,
    }
});

module.exports = styles;