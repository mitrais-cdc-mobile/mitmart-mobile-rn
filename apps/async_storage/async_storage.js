'use strict';

import React, {
    AsyncStorage
} from 'react-native';
import network from '../app_config';

exports.setUserInfo = (username, loginId, ttl, createdDate, userId) => {
    const data = { username: username, loginId: loginId, ttl: ttl, createdDate: createdDate, userId: userId };
    AsyncStorage.setItem('UserInfo', JSON.stringify(data));
    AsyncStorage.setItem('isLogin', 'true');
}

exports.getUserInfo = () => {
    return AsyncStorage.getItem('UserInfo');
}

exports.getUserName = () => {
    return 'Mit Mart';
}

exports.setLoggedOut = () => {
    AsyncStorage.setItem('isLogin', 'false');
}

exports.getIsLoggedIn = () => {
    return AsyncStorage.getItem('isLogin');
}

exports.getData = (jsonBody, url) => {
    const req = { username: "rai", password: "password" };
    return     fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: jsonBody
    });
}
