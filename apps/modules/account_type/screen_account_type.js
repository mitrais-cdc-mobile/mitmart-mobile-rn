'use strict';

import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Picker
} from 'react-native';

import React, {
    Component
} from 'react';

import Styles from './style_account_type';
import AsyncStorage from '../../async_storage/async_storage';
import Url from '../../app_config';
import Network from '../../helpers/network_helper';

var accounts = ['Customer', 'Merchant'];
var post = new Network.Post();
var value;

class AccountTypeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    doSignUp() {
        //TODO: implement social media sign in
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
                    <Image
                        style = {{ height: 200, width: 300, alignSelf: 'stretch' }}
                        source={require('../../resources/mitmart_logo.png') }
                        resizeMode='contain' />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={Styles.container}>
                        <View style={Styles.container2}>
                            <Image
                                style = {Styles.image}
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
                        <TouchableOpacity
                            onPress={() => this.validation(this.state.username, this.state.password) }
                            style={Styles.simpleButton}>
                            <View >
                                <Text style={Styles.simpleButtonText}>Done</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

module.exports = AccountTypeScreen;