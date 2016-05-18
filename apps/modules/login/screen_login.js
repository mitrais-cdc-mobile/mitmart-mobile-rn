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

import {
  LoginButton,
  ShareDialog
} from 'react-native-fbsdk';

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
    this.state = {
      shareLinkContent: shareLinkContent
    };

    const shareLinkContent = {
      contentType: 'link',
      contentUrl: "https://www.facebook.com/",
    };

  }

  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.androidState.shareLinkContent).then(
      function (canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.androidState.shareLinkContent);
        }
      }
    ).then(
      function (result) {
        if (result.isCancelled) {
          alert('Share cancelled');
        } else {
          alert('Share success');
        }
      },
      function (error) {
        alert('Share fail with error: ' + error);
      }
      );
  }

  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent).then(
      function (canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      }
    ).then(
      function (result) {
        if (result.isCancelled) {
          alert('Share cancelled');
        } else {
          alert('Share success');
        }
      },
      function (error) {
        alert('Share fail with error: ' + error);
      }
      );
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
      this.shareLinkWithShareDialog.bind(this);
    }
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
      () => this.shareLinkWithShareDialog();
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