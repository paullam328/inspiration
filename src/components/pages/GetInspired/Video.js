import React from 'react';
import { View, Text } from 'react-native';

class Video extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems:"center"}}>
                <Text>Get Inspired - Video</Text>
            </View>
          );
    }

}

export default Video;