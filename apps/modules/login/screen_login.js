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

import Spinner from 'react-native-loading-spinner-overlay';
import ProgressWheels from '../../components/progress_wheels/progress_wheels';
import Styles from './style_login';
import AsyncStorage from '../../async_storage/async_storage';
import Url from '../../app_config';
import Network from '../../helpers/network_helper';
var post = new Network.Post();

var {height, width} = Dimensions.get('window');

var navigator;
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    navigator = props.navigator;
    this.state = {
      username: '',
      password: '',
      visible: false
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
    this.setState({ visible: true });
    const req = JSON.stringify({ username: username, password: password });
    post.getData(Url.LOGIN_URL, req)
      .then((data) => {
        if (data.id) {
          AsyncStorage.setUserInfo(username, data.id, data.ttl, data.created, data.userId);
          return data;
        } else if (data.error) {
          return data.error;
        }
      })
      .then((data) => {
        this.setState({ visible: false });
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
        this.setState({ visible: false });
        Alert.alert('Login Failed', JSON.stringify(error));
        console.log(`[Error] - Sign in attempt is failing. Error: ${JSON.stringify(error)}`);
      })
      .done();
  }

  render() {
    var progressWheels = this.state.isLoading ? ProgressWheels : (<View/>);
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
        <View style={{ flex: 1 }}>
          <Spinner visible={this.state.visible} />
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

module.exports = LoginScreen;