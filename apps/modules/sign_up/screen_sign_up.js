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

import Spinner from 'react-native-loading-spinner-overlay';
import Styles from './style_sign_up';
import StylesGlobal from '../../styles/styles';
import AsyncStorage from '../../async_storage/async_storage';
import Url from '../../app_config';
import Network from '../../helpers/network_helper';
var post = new Network.Post();
var value;
class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: '',
            visible: false
        };
    }

 goToAccountTypeScreen() {
        this.props.navigator.push({
            id: 'AccountTypeScreen',
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
        });
    }
    
    validation(username, email, password, phone) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!username && !password && !email && !phone) {
            Alert.alert('Sign-Up Failed', 'All Fields are required!');
        } else if (typeof (username) == 'undefined' || username.trim() == '') {
            Alert.alert('Sign-Up Failed', 'Username is required!');
        } else if (typeof (email) == 'undefined' || email.trim() == '') {
            Alert.alert('Sign-Up Failed', 'email is required!');
        } else if (!re.test(email)) {
            Alert.alert('Sign-Up Failed', 'Invalid email format');
        } else if (typeof (password) == 'undefined' || password.trim() == '') {
            Alert.alert('Sign-Up Failed', 'Password is required!');
        } else if (typeof (phone) == 'undefined' || phone.trim() == '') {
            Alert.alert('Sign-Up Failed', 'phone is required!');
        } else {
            this.goToAccountTypeScreen();
        }
    }

    render() {
        return (
            <View style={Styles.containerParent}>
                <View style={Styles.bgImageWrapper}>
                    <Image
                        source={require('../../resources/bg_image.jpg') }
                        style={Styles.bgImage} />
                </View>
                <View style={Styles.containerTop}>
                    <View style={StylesGlobal.containerAppsName}>
                        <Text style={StylesGlobal.textAppName}>
                            MitMart
                        </Text>
                    </View>
                    <View style={Styles.containerBody}>
                        <View style={Styles.containerForm}>
                            <Image
                                style = {Styles.icon}
                                source={require('../../resources/ic_messages.png') }/>
                            <TextInput
                                ref = 'email'
                                style={Styles.inputText}
                                placeholder={`Email`}
                                onChangeText={(email) => this.setState({ email }) }
                                keyboardType={'email-address'} />
                        </View>
                        <View style={Styles.containerForm}>
                            <Image
                                style = {Styles.icon}
                                source={require('../../resources/ic_person_white.png') }/>
                            <TextInput
                                ref = 'username'
                                style={Styles.inputText}
                                placeholder={`Username`}
                                onChangeText={(username) => this.setState({ username }) } />
                        </View>
                        <View style={Styles.containerForm}>
                            <Image
                                style = {Styles.icon}
                                source={require('../../resources/ic_phone_white.png') }/>
                            <TextInput
                                ref = 'phone'
                                style={Styles.inputText}
                                placeholder={`Phone Number`}
                                onChangeText={(phone) => this.setState({ phone }) }
                                keyboardType={'numeric'} />
                        </View>
                        <View style={Styles.containerForm}>
                            <Image
                                style = {Styles.icon}
                                source={require('../../resources/ic_lock_large.png') }/>
                            <TextInput
                                ref = 'password'
                                style={Styles.inputText}
                                placeholder={`Password`}
                                onChangeText={(password) => this.setState({ password }) }
                                secureTextEntry= {true} />
                        </View>
                    </View>
                    <View>
                        <Spinner visible={this.state.visible} />
                    </View>
                    <View style={Styles.containerBottom}>
                        <View style={Styles.containerButton}>
                            <TouchableOpacity
                                onPress={() => this.validation(
                                    this.state.username,
                                    this.state.email,
                                    this.state.password,
                                    this.state.phone
                                ) }
                                style={Styles.simpleButton}>
                                <View >
                                    <Text style={Styles.simpleButtonText}> Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={Styles.containerLine}>
                                <View style={Styles.line}></View>
                                <Text style={Styles.textOr}>Or</Text>
                                <View style={Styles.line}></View>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.goToSignInScreen() }
                                style={Styles.simpleButton}>
                                <View >
                                    <Text style={Styles.simpleButtonText}> Sign In</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

module.exports = SignUpScreen;