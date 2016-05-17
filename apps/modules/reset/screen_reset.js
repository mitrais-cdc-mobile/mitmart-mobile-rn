'use strict';

import React, {
    Component,
    Dimensions,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    ToastAndroid,
    Alert,
    TouchableOpacity
} from 'react-native';
import Styles from './style_reset';

var {height, width} = Dimensions.get('window');

class ResetScreen extends Component {
    constructor(props) {
        super(props);
        navigator = props.navigator;
        this.state = {
            email: ''
        };
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
                                source={require('../../resources/ic_messages.png') }/>
                            <TextInput
                                ref = 'email'
                                validate = {() => this.validateEmail(this.state.email) }
                                style={Styles.inputText2}
                                placeholder={`Please Input Your Email`}
                                onChangeText={(email) => this.setState({ email }) } />
                        </View>
                        <TouchableOpacity
                            onPress={() => this.onPressReset(this.state.email) }
                            keyboardType = {'email-address'}
                            style={Styles.simpleButton}>
                            <View >
                                <Text style={Styles.simpleButtonText}>Reset my password</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    onPressReset(email) {
        if (this.validateEmail(email)) {
            // TODO: Please implement service invoker to make a reset password request, and do the action according to the response of the request  
            Alert.alert('Reset', 'An email has been sent');
        }
        else {
            Alert.alert('Error', 'Invalid Email');
        }
    }

    validateEmail(email) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}

module.exports = ResetScreen;