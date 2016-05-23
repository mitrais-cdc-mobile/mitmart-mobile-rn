'use strict';

import {
    View,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    Alert,
    ScrollView,
    Picker
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
var accounts = ['Customer', 'Merchant'];

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: '',
            visible: false,
            selectedAccount: '',
            listAccount: []
        };
    }

    componentDidMount() {
        this.setState({ selectedAccount: accounts[0] });
        this.setState({ listAccount: accounts });
    }

    goToSignInScreen() {
        this.props.navigator.push({
            id: 'LoginScreen'
        });
    }

    validateData(username, email, password, phone, accountType) {
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
        } else if (typeof (accountType) == 'undefined' || accountType.trim() == '') {
            Alert.alert('Sign-Up Failed', 'phone is required!');
        } else {
            this.doSignUp(username, email, password, phone, accountType);
        }
    }

    doSignUp(username, email, password, phone, accountType) {
        this.setState({ visible: true });
        let req = JSON.stringify({ username: username, email: email, password: password, phone: phone, accountType: accountType });
        post.getData(Url.SIGN_UP_URL, req)
            .then((data) => {
                this.setState({ visible: false });
                if ((data.accountType) && (data.accountType == 'Customer')) {
                    this.clearAllTextFields();
                    Alert.alert('Sign-Up Success', 'Sign Up success. \nActivation email has been sent. \nPlease check your email to activate your account',
                        [{ text: 'OK', onPress: () => this.goToSignInScreen() },]
                    );
                } else if ((data.accountType) && (data.accountType == 'Merchant')) {
                    Alert.alert('Merchant', 'Not implement yet');
                } else {
                    Alert.alert('Sign-Up Failed', data.message, );
                }
            })
            .catch(error => {
                this.setState({ visible: false });
                console.log(`[Error] - Sign Up attempt is failing. Error: ${error.message}`);
            })
            .done();
    }

    clearAllTextFields() {
        this.clearText('email');
        this.clearText('username');
        this.clearText('phone_number');
        this.clearText('password');
        this.setState({ selectedAccount: accounts[0] });
    }

    clearText(fieldName) {
        this.refs[fieldName].setNativeProps({ text: '' });
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
                        <View style={Styles.containerForm}>
                            <Image
                                style = {Styles.icon}
                                source={require('../../resources/ic_rate_review_white.png') }/>
                            <View style= {Styles.picker} >
                                <Picker
                                    ref = 'accountType'
                                    style= {{ flex: 1 }}
                                    selectedValue={this.state.selectedAccount}
                                    onValueChange={(acc) => this.setState({ selectedAccount: acc }) }>
                                    { this.state.listAccount.map((s, i) => {
                                        return <Picker.Item
                                            key={i}
                                            value={s}
                                            label={s} />
                                    }) }
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Spinner visible={this.state.visible} />
                    </View>
                    <View style={Styles.containerBottom}>
                        <View style={Styles.containerButton}>
                            <TouchableOpacity
                                onPress={() => this.validateData(
                                    this.state.username,
                                    this.state.email,
                                    this.state.password,
                                    this.state.phone_number,
                                    this.state.selectedAccount
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