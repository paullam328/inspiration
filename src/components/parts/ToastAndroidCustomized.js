import React from 'react';
import { ToastAndroid } from 'react-native';

class ToastAndroidCustomized extends React.Component {
    render() {
        if (this.props.visible) {
            ToastAndroid.showWithGravityAndOffset(
             this.props.message,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              0,
              60,
            );
            return null;
          }
          return null;
    }
}

export default ToastAndroidCustomized;