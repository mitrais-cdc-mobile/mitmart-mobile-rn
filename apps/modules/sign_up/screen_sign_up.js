'use strict';

import React, {
    Component,
    View,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import Styles from './style_sign_up';
<<<<<<< HEAD
import StylesGlobal from '../../styles/styles';
import TestData from '../../async_storage/async_storage';
import url from '../../app_config';
import network from '../../helpers/network_helper';

var navigator;

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        navigator = props.navigator;
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: ''
        };
    }

    signin() {
        navigator.push({
            id: 'LoginScreen'
        });
    }

    validation(username, email, password, phone) {
        if (!username && !password && !email && !phone) {
            Alert.alert('Sign-Up Failed', 'All Fields are required!');
        } else if (!username.trim()) {
            Alert.alert('Sign-Up Failed', 'Username is required!');
        } else if (!email.trim()) {
            Alert.alert('Sign-Up Failed', 'email is required!');
        } else if (!password.trim()) {
            Alert.alert('Sign-Up Failed', 'Password is required!');
        } else if (!phone.trim()) {
            Alert.alert('Sign-Up Failed', 'phone is required!');
        } else {
            this.signup(username, email, password, phone);
        }
    }

    signup(username, email, password, phone) {
        const req = JSON.stringify({ username: username, email: email, password: password, phone: phone });
        network.getDataPOST(url.SIGN_UP_URL, req)
            .then((data) => {
                if (data.id) {
                    navigator.resetTo({
                        id: 'HomeScreen',
                        username: username,
                        loginId: data.id,
                        userId: data.userId
                    });
                } else {
                    Alert.alert('Sign-Up Failed', 'Sign-Up Failed!');
                }
=======
import StylesGlobal from '../../styles/styles'

class SignUpScreen extends Component {
    signin() {
        this.props.navigator.push({
            id: 'LoginScreen'
        });
    }
    signup(username, email, password, phone) {
        const req = { username: username, email: email, password: password, phone: phone };
        fetch("http://mtpc585.mitrais.com:3000/api/users", {
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
>>>>>>> 34a2d5e07fb4319e06be5bfa9142a6b755452f19
            })
            .catch(error => {
                console.log(`[Error] - Sign in attempt is failing. Error: ${error.message}`);
            })
            .done();
    }
    render() {
<<<<<<< HEAD
        var username = TestData.getUserName();
        console.log(JSON.stringify(username));
=======
>>>>>>> 34a2d5e07fb4319e06be5bfa9142a6b755452f19
        var _scrollView = ScrollView;
        return (
            <View style={Styles.containerParent}>
                <View style={Styles.bgImageWrapper}>
                    <Image
                        source={require('../../resources/bg_image.jpg') }
                        style={Styles.bgImage} />
                </View>
                <View style={Styles.scrollView}>
                    <View style={StylesGlobal.containerAppsName}>
                        <Text style={StylesGlobal.textAppName}>
<<<<<<< HEAD
                            {username}
=======
                            Mit Mart
>>>>>>> 34a2d5e07fb4319e06be5bfa9142a6b755452f19
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
                                ref = 'phone_number'
                                style={Styles.inputText}
                                placeholder={`Phone Number`}
                                onChangeText={(phone_number) => this.setState({ phone_number }) }
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
                    <View style={Styles.containerBottom}>
                        <View style={Styles.containerButton}>
                            <TouchableOpacity
<<<<<<< HEAD
                                onPress={() => this.validation(
=======
                                onPress={() => this.signup(
>>>>>>> 34a2d5e07fb4319e06be5bfa9142a6b755452f19
                                    this.state.username,
                                    this.state.email,
                                    this.state.password,
                                    this.state.phone_number
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
                                onPress={() => this.signin() }
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