import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class Quote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 6}}>
                <View style={{ flex: 0.5}}>
                    <Image source={require('../../../../assets/images/mic2.jpg')}
                           style={styles.headerImage}/>
                    <View style={styles.testView}>
                        <Text style={{...styles.text, ...styles.title}}>Inspirational</Text>
                        <Text style={{...styles.text, ...styles.title}}>Quotes</Text>
                    </View>
                </View>
                <LinearGradient colors={['orange', '#FF6200']} style={{ flex: 3, zIndex: -1}}>

                </LinearGradient>
            </View>
          );
    }
}


const styles = StyleSheet.create({
    headerImage: {
        flex: 1,
        // get rid of static width 
        width:null,
        height:null
    },
    testView: { 
        backgroundColor: "white",
        alignItems: "center",
        marginHorizontal: 80,
        marginVertical: 40,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 20,
        position: 'absolute',
        bottom:-120,
        justifyContent: 'center',
        left:0,
        right:0,
        borderColor:'#D7D7D7',
        borderWidth:1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      
    }, 
    title: {fontSize:30, fontWeight:'800', color: "orange" },
    text: {/*fontFamily:"AdillaAndRita"*/ }
});

export default Quote;