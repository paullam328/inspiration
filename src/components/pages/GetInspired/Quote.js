import React from 'react';
import { View, Text } from 'react-native';

class Quote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems:"center"}}>
                <Text>Get Inspired - Quote</Text>
            </View>
          );
    }

}

export default Quote;