'use strict';

import React, {
  Component,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Styles from './style_login';

var {height, width} = Dimensions.get('window');

class LoginScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={Styles.bgImageWrapper}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024' }}
            style={Styles.bgImage} />
        </View>
        <View style={Styles.container}>
          <TextInput
            style={Styles.inputText2}
            placeholder={`Username`} />
          <TextInput
            style={Styles.inputText2}
            placeholder={`Password`} />
          <TouchableOpacity onPress={this._onPressButton.bind(this) } style={Styles.simpleButton}>
            <View
              onPress={this._onPressButton.bind(this) } >
              <Text style={Styles.simpleButtonText}> Login</Text>
            </View>
          </TouchableOpacity>
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
}

module.exports = LoginScreen;