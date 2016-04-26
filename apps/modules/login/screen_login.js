'use strict';

import React, {
  Component,
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
import Styles from './style_login';

var {height, width} = Dimensions.get('window');

var VALID_USERNAME = [
  { username: 'admin', password: 'password' },
  { username: 'rai', password: 'password' }
];

class LoginScreen extends Component {
  signin(username, password) {
    let isValid = false;
    this.setState({ message: 'Login Failed' });
    for (var i = 0; i < VALID_USERNAME.length; i++) {
      if (username === VALID_USERNAME[i].username && password === VALID_USERNAME[i].password) {
        isValid = true;
      }
    }
    if (isValid) {
      //TODO: implement toast for iOS
      ToastAndroid.show('Login Success!', ToastAndroid.SHORT);
      this.setState({ message: '' });
      // this.props.navigator.push({
      this.props.navigator.replace({
        id: 'HomeScreen',
        username: username,
        apiKey: '123'
      });
    } else {
      //TODO: implement toast for iOS
      ToastAndroid.show('Incorrect Username or Password!', ToastAndroid.SHORT);
    }
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
              onPress={() => this.signin(this.state.username, this.state.password) }
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

  _onPressButton() {
    // this.props.navigator.push({ id: 'HomeScreen' }); //it will back to previous screen
    this.props.navigator.replace({
      //it will replace previous screen, press back button will close the apps
      id: 'HomeScreen',
    });
  }

  onPressReset() {
    Alert.alert('Reset', 'Are you sure want to reset your password?');
  }
}

module.exports = LoginScreen;