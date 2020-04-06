import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import PlatformSpecificButton from '../../parts/PlatformSpecificButton'

export const AlarmType = Object.freeze({
    "DEFAULT": 0,
    "MOTIVATIONAL_STORY": 1, 
    "MOTIVATIONAL_QUOTE": 2
});


class Alarm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            alarmType: AlarmType.DEFAULT
        }
    }

    render() {
        return (
            <View style={{ flex: 6}}>
                <View style={{ flex: 2 }}>
                    <Image source={require('../../../../assets/images/wakeup.jpg')}
                           style={styles.headerImage}/>
                    <View style={styles.testView}>
                        <Text style={{...styles.text, ...styles.title}}>Inspirational</Text>
                        <Text style={{...styles.text, ...styles.title}}>Alarm</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 3, marginTop: -40 }}>
                    <View style={{flex: 1, ...styles.bodyTitle }}>
                        <Text style={ styles.bodyText }>Alarm Type</Text>
                    </View>
                    <View style={{flex: 1, ...styles.buttonRow}}>
                    <PlatformSpecificButton
                            buttonText="MotivationalStory"
                            buttonColor="orange"
                            buttonAction={() => this.setState({alarmType:AlarmType.MOTIVATIONAL_STORY})}
                        />
                        <PlatformSpecificButton
                            buttonText="MotivationalQuote"
                            buttonColor="orange"
                            buttonAction={() => this.setState({alarmType:AlarmType.MOTIVATIONAL_QUOTE})}
                        />
                    </View>
                    <View style={{flex: 3}}>
                    
                    </View>
                    <View style={{flex: 1}}>
                    
                    </View>
                </View>
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
        backgroundColor: "orange",
        alignItems: "center",
        margin: 40,
        paddingHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 50,
        position: 'absolute',
        bottom:-120,
        justifyContent: 'center',
        left:0,
        right:0
    }, 
    title: {fontSize:80, lineHeight: 70, color: "white" },
    text: {fontFamily:"AdillaAndRita" },
    bodyText: {color: "orange", fontSize: 40, fontFamily:"HelveticaNeue-Bold"},
    bodyTitle: {paddingLeft: 10},
    buttonRow: {flexDirection: 'row', alignItems: 'center' , justifyContent: 'center'}
})

export default Alarm;