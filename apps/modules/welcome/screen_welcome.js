'use strict';

import React, {
    Component,
    Image,
    View
} from 'react-native';
import Styles from './style_welcome';

class SplashPage extends Component {

    componentWillMount() {
        var navigator = this.props.navigator;
        setTimeout(() => {
            navigator.replace({
                id: 'LoginScreen',
            });
        }, 2000);
    }
    render() {
        return (
            <View
                style={Styles.container}>
                <Image
                    style={Styles.splashImages}
                    source={{ uri: 'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024' }}>
                </Image>
            </View>
        );
    }
}

module.exports = SplashPage;