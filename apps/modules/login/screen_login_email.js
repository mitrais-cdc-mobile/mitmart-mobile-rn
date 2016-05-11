'use strict';

import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ToastAndroid,
  Alert,
  TouchableOpacity
} from 'react-native';

import React, {
  Component
} from 'react';

import Styles from './style_login';
import AsyncStorage from '../../async_storage/async_storage';
import url from '../../app_config';
import network from '../../helpers/network_helper';

var {height, width} = Dimensions.get('window');

var navigator;
class LoginScreenEmail extends Component {
  constructor(props) {
    super(props);
    navigator = props.navigator;
    this.state = {
      username: '',
      password: ''
    };
  }

  validation(username, password) {
    if (!username && !password) {
      Alert.alert('Login Failed', 'Username and Password required!');
    } else if (!username.trim()) {
      Alert.alert('Login Failed', 'Username is required!');
    } else if (!password.trim()) {
      Alert.alert('Login Failed', 'Password is required!');
    } else {
      this.signin(username, password);
    }
  }

  signin(username, password) {
    const req = JSON.stringify({ username: username, password: password });
    network.getDataPOST(url.LOGIN_URL, req)
      .then((data) => {
        if (data.id) {
          AsyncStorage.setUserInfo(username, data.id, data.ttl, data.created, data.userId);
          return data;
        } else if (data.error) {
          Alert.alert('Login Failed', data.error.message);
          return data.error;
        }
      })
      .then((data) => {
        if (data.id) {
          navigator.resetTo({
            id: 'HomeScreen',
            username: username,
            loginId: data.id,
            userId: data.userId
          });
        } else {
          Alert.alert('Login Failed', data.error.message);
        }
      })
      .catch(error => {
        console.log(`[Error] - Sign in attempt is failing. Error: ${JSON.stringify(error)}`);
      })
      .done();
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <View style={Styles.bgImageWrapper}>
          <Image
            source={require('../../resources/bg_image.jpg') }
            style={Styles.bgImage} />
        </View>
        <View style={Styles.containerTop}>
          <Image
            style = {{ height: 200, width: 300, alignSelf: 'stretch' }}
            source={require('../../resources/mitmart_logo.png') }
            resizeMode='contain' />
        </View>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <View style={Styles.container}>
            <View style={Styles.container2}>
              <Image
                style = {Styles.image}
                source={require('../../resources/ic_messages.png') }/>
              <TextInput
                ref = 'username'
                style={Styles.inputText2}
                placeholder={`Username`}
                onChangeText={(username) => this.setState({ username }) } />
            </View>
            <View style={Styles.container2}>
              <Image
                style = {Styles.image}
                source={require('../../resources/ic_lock_large.png') }/>
              <TextInput
                ref='password'
                style={Styles.inputText2}
                placeholder={`Password`}
                onChangeText={(password) => this.setState({ password }) }
                secureTextEntry= {true} />
            </View>
            <TouchableOpacity
              onPress={() => this.validation(this.state.username, this.state.password) }
              style={Styles.simpleButton}>
              <View >
                <Text style={Styles.simpleButtonText}> Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={Styles.containerReset}>
            <Text
              style={Styles.textForgot}>
              {'Forgot password, '}
            </Text>
            <Text
              style={Styles.textReset}
              onPress={this.onPressReset} >
              {'reset now!'}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  onPressReset() {
    Alert.alert('Reset', 'Are you sure want to reset your password?');
  }
}

module.exports = LoginScreenEmail;