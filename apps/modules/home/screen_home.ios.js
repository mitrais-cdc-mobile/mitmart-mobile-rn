/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

let navigator;

class HomeScreen extends Component {
  
  constructor(props) {
    super(props);
    navigator = props.navigator;
  }
  
  logout() {
        navigator.replace({
            id: 'LoginScreen'
        });
    }
    
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Hello</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>World!</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Username = ${this.props.username}`}</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Login Id = ${this.props.loginId}`}</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`UserId Id = ${this.props.userId}`}</Text>
        <Text
          onPress={this.logout} >
          {'Logout'}
        </Text>
      </View>
    );
  }
}

module.exports = HomeScreen;
