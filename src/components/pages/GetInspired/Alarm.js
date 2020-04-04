import React from 'react';
import { View, Text } from 'react-native';

class Alarm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems:"center"}}>
                <Text>Get Inspired - Alarm</Text>
            </View>
          );
    }

}

export default Alarm;