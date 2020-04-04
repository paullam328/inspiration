import React from 'react';
import { View, Text } from 'react-native';

class Story extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems:"center"}}>
                <Text>Get Inspired - Story</Text>
            </View>
          );
    }

}

export default Story;