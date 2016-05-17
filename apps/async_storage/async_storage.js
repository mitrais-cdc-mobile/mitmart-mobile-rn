'use strict';

import {
    AsyncStorage
} from 'react-native';
import network from '../app_config';

exports.setUserInfo = (username, loginId, ttl, createdDate, userId) => {
    const data = { username: username, loginId: loginId, ttl: ttl, createdDate: createdDate, userId: userId };
    AsyncStorage.setItem('UserInfo', JSON.stringify(data));
}

exports.getUserInfo = () => {
    return AsyncStorage.getItem('UserInfo');
}

exports.getUserName = () => {
    return 'Mit Mart';
}

exports.setLoggedOut = async () => {
    try {
        return await AsyncStorage.removeItem('UserInfo');
    } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
    }
}

exports.getIsLoggedIn = () => {
    var value = AsyncStorage.getItem('UserInfo');
    return AsyncStorage.getItem('UserInfo')
        .then((response) => {
            const userInfo = response;
            let isLoggedIn = true;
            if (userInfo === null || typeof userInfo === 'undefined') {
                isLoggedIn = false;
            }
            return new Promise((resolve, reject) => {
                resolve(isLoggedIn);
            }
            );
        });
}
