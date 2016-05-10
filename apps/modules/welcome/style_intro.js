'use strict';

import {
    StyleSheet,
    Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  splashImages: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height
    }
});

module.exports = styles;