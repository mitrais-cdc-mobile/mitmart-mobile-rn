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
    // TODO : Implement Reset Email Function At Here

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
                                style={Styles.inputText2}
                                placeholder={`Please Input Your Email`}
                                onChangeText={(email) => this.setState({ email }) } />
                        </View>
                    </View>
                </View>
            </View>
        );
    }

     onPressReset() {
        Alert.alert('Reset', 'An email has been sent');
    }
}

module.exports = ResetScreen;