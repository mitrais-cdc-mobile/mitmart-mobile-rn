import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';

import AppIntro from 'react-native-app-intro';
import Styles from './style_intro';

var navigator;

class IntroPages extends Component {

    constructor(props) {
        super(props);
        navigator = props.navigator;
    }

    onSkipBtnHandle = () => {
        navigator.replace({
            id: 'SignUpScreen',
        });
    }

    doneBtnHandle = () => {
        navigator.replace({
            id: 'SignUpScreen',
        });
    }

    render() {
        return (
            <AppIntro
                onDoneBtnClick={this.doneBtnHandle}
                onSkipBtnClick={this.onSkipBtnHandle}>

                <View style={[Styles.slide, { backgroundColor: '#fa931d' }]}>
                    <View level={10}><Text style={Styles.text}>Page 1</Text></View>
                    <View level={15}><Text style={Styles.text}>Page 1</Text></View>
                    <View level={8}><Text style={Styles.text}>Page 1</Text></View>
                </View>
                <View style={[Styles.slide, { backgroundColor: '#a4b602' }]}>
                    <View level={-10}><Text style={Styles.text}>Page 2</Text></View>
                    <View level={5}><Text style={Styles.text}>Page 2</Text></View>
                    <View level={20}><Text style={Styles.text}>Page 2</Text></View>
                </View>
                <View style={[Styles.slide, { backgroundColor: '#fa931d' }]}>
                    <View level={8}><Text style={Styles.text}>Page 3</Text></View>
                    <View level={0}><Text style={Styles.text}>Page 3</Text></View>
                    <View level={-10}><Text style={Styles.text}>Page 3</Text></View>
                </View>
                <View style={[Styles.slide, { backgroundColor: '#a4b602' }]}>
                    <View level={5}><Text style={Styles.text}>Page 4</Text></View>
                    <View level={10}><Text style={Styles.text}>Page 4</Text></View>
                    <View level={15}><Text style={Styles.text}>Page 4</Text></View>
                </View>

            </AppIntro>
        );
    }
}

module.exports = IntroPages;