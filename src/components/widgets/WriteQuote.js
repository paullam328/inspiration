import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class WriteQuote extends React.Component {
    render() {
        return (
            <LinearGradient colors={['orange', '#FF6200']} style={{ backgroundColor: 'white', top: 0, bottom: 0, left: 0, right: 0, position: 'absolute', zIndex: 100 }}>
                <View flex={6}>
                    <View flex={0.5} style={styles.createQuoteBox}>
                        <Text>What's so inspiring!</Text>
                    </View>
                    <View flex={0.25} style={styles.createQuoteBox}>
                        <Text>What's so inspiring!</Text>
                    </View>
                    <View flex={1} style={styles.createQuoteBox}>
                        <Text>What's so inspiring!</Text>
                    </View>
                    <View flex={4.25}>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    createQuoteBox: {
        position: 'relative',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 20,

        borderColor: '#D7D7D7',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    }
});

export default WriteQuote;