import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

import React, {
    Component,

} from 'react';

import AsyncStorage from '../../async_storage/async_storage';
var data;

class HomeScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
            username: '', 
            loginId: '',
            ttl: '',
            createdDate: '',
            userId: '',
        };
  }
  
  componentDidMount() {
        this.getUserData();
  }
  
  logout() {
        this.setLoggedOut().then((value) => {
            this.props.navigator.replace({
            id: 'LoginScreen'
          });
      });
  }
  
  getUserData() {
        AsyncStorage.getUserInfo()
            .then((value) => {
                 console.log(value);
                data = JSON.parse(value);
                console.log('data: ' + data);
                this.setState({ username: data.username });
                this.setState({ loginId: data.loginId });
                this.setState({ ttl: data.ttl });
                this.setState({ createdDate: data.createdDate });
                this.setState({ userId: data.userId });
                console.log(this.state.loginInfo);
            }).done();
    }

    setLoggedOut() {
       return AsyncStorage.setLoggedOut();
    }
    
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Hello</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>World!</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Username = ${this.state.username}`}</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Login Id = ${this.state.loginId}`}</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Ttl = ${this.state.ttl}`}</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`Created Date = ${this.state.createdDate}`}</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{`User Id = ${this.state.userId}`}</Text>
        <Text
          onPress={this.logout.bind(this)} >
          {'Logout'}
        </Text>
      </View>
    );
  }
}

module.exports = HomeScreen;
