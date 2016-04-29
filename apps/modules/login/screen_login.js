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
    const req = { username: username, password: password };
    fetch("http://mtpc585.mitrais.com:3000/api/users/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req)
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.navigator.resetTo({
          id: 'HomeScreen',
          username: username,
          loginId: data.id,
          userId: data.userId
        });
      })
      .catch(error => {
        console.log(`[Error] - Sign in attempt is failing. Error: ${error.message}`);
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