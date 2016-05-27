'use strict';

import {
    View,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';

import React, {
    Component
} from 'react';

import Styles from './style_account_type';
import StylesGlobal from '../../styles/styles';
import AsyncStorage from '../../async_storage/async_storage';
import Url from '../../app_config';
import Network from '../../helpers/network_helper';


var post = new Network.Post();
var value;

class AccountTypeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            password: this.props.password,
            email: this.props.email,
            phone: this.props.phone,
            visible: false
        };
    }


    goToSignInScreen() {
        this.props.navigator.push({
            id: 'LoginScreen'
        });
    }

    doSignUp(username, email, password, phone, accountType) {
        // this.setState({ visible: true });
        let req = JSON.stringify({ username: username, email: email, password: password, phone: phone, accountType: accountType });
        post.getData(Url.SIGN_UP_URL, req)
            .then((data) => {
                // this.setState({ visible: false });
                if (data.id) {
                    this.goToSignInScreen();
                } else {
                    Alert.alert('Sign-Up Failed', data.message);
                }
            })
            .catch(error => {
                this.setState({ visible: false });
                console.log(`[Error] - Sign Up attempt is failing. Error: ${error.message}`);
            })
            .done();
    }
    
      
    render() {  
        return (
            <View style={Styles.containerParent}>
                <View style={Styles.bgImageWrapper}>
                    <Image
                        source={require('../../resources/bg_image.jpg') }
                        style={Styles.bgImage} />
                </View>
                  <Text style={Styles.accountTypeText}>your username is {this.state.username}</Text>
                    <Text style={Styles.accountTypeText}>your email is {this.state.email}</Text>
                      <Text style={Styles.accountTypeText}>your password is {this.state.password}</Text>
                        <Text style={Styles.accountTypeText}>your phone number is {this.state.phone}</Text>
                <Text style={Styles.accountTypeText}>You are a {this.state.accountType}</Text>
                
                        <View style={Styles.containerButton}>
                            <TouchableOpacity
                                onPress={() => this.setState({visible:true , accountType:'Customer'})}
                                style={Styles.simpleButton}>
                                <View >
                                    <Text style={Styles.simpleButtonText}>Customer</Text>
                                </View>
                            </TouchableOpacity>
                         
                            <TouchableOpacity
                                onPress={() => this.setState({visible:true, accountType:'Merchant'})}
                                style={Styles.simpleButton}>
                                <View >
                                    <Text style={Styles.simpleButtonText}>Merchant</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        
 
                         <TouchableOpacity  style={Styles.doneButton}
                                onPress={() => this.doSignUp(
                                    this.state.username,this.state.email,this.state.password, this.state.phone,this.state.accountType)}>
                               <Text style={Styles.doneButtonText}>Done</Text> 
                               
                            </TouchableOpacity>
                       

            </View>
        );
    }
}

module.exports = AccountTypeScreen;