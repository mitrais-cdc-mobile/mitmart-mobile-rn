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
  AccessToken,
  GraphRequest,
  GraphRequestManafer,
} = FBSDK;

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import Styles from './style_login';
import AsyncStorage from '../../async_storage/async_storage';
import url from '../../app_config';
import network from '../../helpers/network_helper';
import simpleAuthClient from '../../helpers/simpleauthclient';
import accounts from '../../helpers/account';

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
      user: null,
      loading: false,
    };
  }

  goToAccountTypeScreen() {
    this.props.navigator.push({
      id: 'AccountTypeScreen'
    });
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
        } else {
          this.setState({ result: info });
          alert('login with user ID:' + info.userId + 'and Token:' + info.token);
          this.goToAccountTypeScreen();
        }
      });
    } else {
      LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
        (result) => {
          if (result.isCancelled) {
            alert('Login cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                alert('login with Token:' + data.accessToken.toString());
              }
            )

            this.props.navigator.push({
              id: 'AccountTypeScreen'
            });
          }
        },
        (error) => {
          alert('login failed with error:' + error);
        }
      )
    }
  }

  componentDidMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true })
      .then(() => {
        GoogleSignin.configure({
          scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
          webClientId: '113884141286-lb3s7ngort9lgr582vs62mdtjba215nt.apps.googleusercontent.com',
          offlineAccess: true
        });

        GoogleSignin.currentUserAsync()
          .then((user) => {
            console.log('USER0', user);
            this.setState({ user: user });
          }).done();
      })
      .catch((err) => {
        console.log("Play services error", err.code, err.message);
      })
  }

  signInGoogle() {
    if (Platform.OS === 'ios') {
      simpleAuthClient.configure(accounts);
      this.setState({
        loading: true
      });
      simpleAuthClient.authorize('google-web')
        .then(info => {
          this.props.navigator.push({
            title: 'google-web',
            component: Profile,
            passProps: {
              info: info,
              provider: 'google-web'
            }
          });
          this.setState({
            loading: false
          });
        })
        .catch(error => {
          alert('Authorize Error', error && error.description || '');
          this.setState({
            loading: false
          });
        });
    } else {
      GoogleSignin.signIn()
        .then((user) => {
          console.log('USER1', user);
          this.setState({ user: user });
        })
        .catch((err) => {
          console.log('WRONG SIGN IN', err);
        }).done();
    }
  }

  signinInstagram() {
    if (Platform.OS === 'ios') {
      simpleAuthClient.configure(accounts);
      this.setState({
        loading: true
      });
      simpleAuthClient.authorize('instagram')
        .then(info => {
          this.props.navigator.push({
            title: 'instagram',
            component: Profile,
            passProps: {
              info: info,
              provider: 'instagram'
            }
          });
          this.setState({
            loading: false
          });
        })
        .catch(error => {
          React.Alert.War(
            'Authorize Error',
            error && error.description || '');
          this.setState({
            loading: false
          });
        });
    }
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
            style={[Styles.buttonBase, Styles.buttonPosStart]}>
            <View style={Styles.containerStart}>
              <Image
                style = {Styles.image}
                source={require('../../resources/ic_messages.png') }/>
              <Text style={[Styles.simpleButtonText, Styles.simpleButtonTextPosition]}>Sign in with Email</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.signinFacebook() }
            style={[Styles.buttonBase, Styles.buttonPosStart]}>
            <View style={Styles.containerStart}>
              <Image
                style = {Styles.image}
                source={require('../../resources/facebook.png') }/>
              <Text style={[Styles.simpleButtonText, Styles.simpleButtonTextPosition]}>Sign in with Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.signInGoogle() }
            style={[Styles.buttonBase, Styles.buttonPosStart]}>
            <View style={Styles.containerStart}>
              <Image
                style = {Styles.image}
                source={require('../../resources/google.png') }/>
              <Text style={[Styles.simpleButtonText, Styles.simpleButtonTextPosition]}>Sign in with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.signinInstagram() }
            style={[Styles.buttonBase, Styles.buttonPosStart]}>
            <View style={Styles.containerStart}>
              <Image
                style = {Styles.image}
                source={require('../../resources/instagram.png') }/>
              <Text style={[Styles.simpleButtonText, Styles.simpleButtonTextPosition]}>Sign in with Instagram</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

module.exports = LoginScreen;