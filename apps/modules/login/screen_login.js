'use strict';

import {
  Text,
  Image,
  View,
  TouchableOpacity,
  NativeModules,
  Platform
} from 'react-native';

import React, {
  Component
} from 'react';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  ShareDialog,
  LoginManager,
} = FBSDK;

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import Styles from './style_login';
import AsyncStorage from '../../async_storage/async_storage';
import url from '../../app_config';
import network from '../../helpers/network_helper';

var FacebookLoginManager = NativeModules.FacebookLoginManager;
var FBLoginManager = NativeModules.FBLoginManager;

var itypeof = function (val) {
  return Object.prototype.toString.call(val).replace(/(\[|object|\s|\])/g, '').toLowerCase();
};

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: "https://www.facebook.com/",
    };

    this.state = {
      shareLinkContent: shareLinkContent,
      user: null
    }
  }

  signinEmail() {
    this.props.navigator.push({
      id: 'LoginScreenEmail'
    });
  }

  signinFacebook() {
    if (Platform.OS === 'ios') {
      FacebookLoginManager.newSession((error, info) => {
        if (error) {
          this.setState({ result: error });
        }
        else {
          this.setState({ result: info });
        }
      });
    }
    else {
      LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
        function (result) {
          if (result.isCancelled) {
            alert('Login cancelled');
          }
          else {
            alert('login success with permissions:' + result.grantedPermissions.toString());
          }
        },
        function (error) {
          alert('login failed with error:' + error);
        }
      )
    }
  }

  signInGoogle() {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({ user: user });
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  }

  signinEmail() {
    this.props.navigator.push({
      id: 'LoginScreenEmail'
    });
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
          <TouchableOpacity
            onPress={() => this.signinEmail() }
            style={Styles.simpleButton}>
            <View style={Styles.container2}>
              <Image
                style = {Styles.imageEmail}
                source={require('../../resources/ic_messages.png') }/>
              <Text style={Styles.simpleButtonText}> sign in with Email</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.signinFacebook() }
            style={Styles.simpleButton}>
            <View style={Styles.container2}>
              <Image
                style = {Styles.imageFacebook}
                source={require('../../resources/facebook.png') }/>
              <Text style={Styles.simpleButtonText}> sign in with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

module.exports = LoginScreen;