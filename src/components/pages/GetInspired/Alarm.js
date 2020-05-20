import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import PlatformSpecificButton from '../../parts/PlatformSpecificButton'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Helpers from '../../../utils/helpers';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookReader, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

import * as Constants from '../../../utils/constants';


export const AlarmType = Object.freeze({
    "DEFAULT": 0,
    "MOTIVATIONAL_STORY": 1, 
    "MOTIVATIONAL_QUOTE": 2
});


class Alarm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            alarmType: AlarmType.DEFAULT,
            isDatePickerVisible: false,
            date: "",
            alarmType: Constants.ALARM_TYPE.STORY
        }
    }

    showDatePicker = (isVisible) => {
        this.setState({isDatePickerVisible: isVisible});
    };

    handleConfirm = date => {
        this.showDatePicker(false);
        this.setState({date: Helpers.dateFormatter(date)}, console.log("A date has been picked: ", this.state.date));

    };

    selectAlarmType = alarmType => {
        this.setState({alarmType: alarmType});
    }


    render() {
        return (
            <View style={{ flex: 6}}>
                <View style={{ flex: 0.5}}>
                    <Image source={require('../../../../assets/images/wakeup2.jpg')}
                           style={styles.headerImage}/>
                    <View style={styles.testView}>
                        <Text style={{...styles.text, ...styles.title}}>Inspirational</Text>
                        <Text style={{...styles.text, ...styles.title}}>Alarm</Text>
                    </View>
                </View>
                <LinearGradient colors={['orange', '#FF6200']} style={{ flex: 3, zIndex: -1}}>
                    <View style={styles.innerContainer}>
                    <View style={{flex: 1, ...styles.bodyHeader }}>
                        <Text style={ styles.bodyHeader }>Alarm Type</Text>
                    </View>
                    <View style={{flex: 1, ...styles.buttonRow}}>
                        {/* Touchable opacity is buggy to set opacity */}
                        <TouchableOpacity
                            style={(this.state.alarmType === Constants.ALARM_TYPE.STORY)? 
                                {...styles.alarmTypeOptionsActive, ...styles.alarmTypeOptions}: 
                                {...styles.alarmTypeOptions}}
                            onPress={() => this.selectAlarmType(Constants.ALARM_TYPE.STORY)}
                        >
                            <LinearGradient colors={ this.state.alarmType === Constants.ALARM_TYPE.STORY ?
                                ['orange', '#FF8500'] : ['rgba(23,23,23,0)']
                                } style={{opacity:(this.state.alarmType === Constants.ALARM_TYPE.STORY) ? 1 : 0.5, 
                                height: 52, borderRadius: 5}} >
                                <FontAwesomeIcon style={{...styles.buttonIcon}} icon={faBookReader}/>
                                <Text style={{...styles.buttonText, ...styles.bodyText}}>Story</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={(this.state.alarmType === Constants.ALARM_TYPE.QUOTE)? 
                                {...styles.alarmTypeOptionsActive, ...styles.alarmTypeOptions}: 
                                {...styles.alarmTypeOptions}}
                            onPress={() => this.selectAlarmType(Constants.ALARM_TYPE.QUOTE)}
                        >
                            <LinearGradient colors={ this.state.alarmType === Constants.ALARM_TYPE.QUOTE ?
                                ['orange', '#FF8500'] : ['rgba(23,23,23,0)']
                                } style={{opacity:(this.state.alarmType === Constants.ALARM_TYPE.QUOTE) ? 1 : 0.5, 
                                height: 52, borderRadius: 5}} >                            
                                <FontAwesomeIcon style={{...styles.buttonIcon}} icon={faQuoteLeft}/>
                                <Text style={{...styles.buttonText, ...styles.bodyText}}>Quote</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <LinearGradient colors={['orange', '#FF6200']} style={{flex: 3, ...styles.setAlarmContainer}}>
                        <View style={{ flex: 1}}>
                            <PlatformSpecificButton
                                    color="orange"
                                    buttonText="Set Alarm"
                                    buttonColor="white"
                                    buttonAction={() => this.showDatePicker(true)}
                                    margin={[20, 0, 0, 0]}
                                />
                            <DateTimePickerModal 
                                mode="datetime"
                                isVisible={this.state.isDatePickerVisible}
                                onCancel={() => this.showDatePicker(false)}
                                onConfirm={this.handleConfirm}
                                />
                        </View>
                        <View style={{ flex: 0.5}}>
                            <Text style={ styles.bodyText }>Your Alarm is Set:</Text>
                        </View>
                        <View style={{ flex: 1}}>
                            <Text style={{ ...styles.alarmText, ...styles.centerText }}>
                                {this.state.date != "" ? this.state.date : "--:--:--"}
                            </Text>
                        </View>
                    </LinearGradient>
                    <View style={{flex: 1}}>
                    
                    </View>
                    </View>
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
    text: {/*fontFamily:"AdillaAndRita"*/ },
    bodyHeader: {color: "orange", fontSize: 35, fontWeight:'bold', marginLeft: 10, marginTop: 30/*, fontFamily:"AdillaAndRita"*/},
    bodyText: {color: "white", fontSize: 20, fontFamily:"HelveticaNeue-Bold", marginLeft: 20},
    alarmText: {color: "white", fontSize: 30, fontFamily:"HelveticaNeue-Bold"},
    bodyTitle: {paddingLeft: 10},
    centerText: {textAlign: "center", flexWrap: 'wrap', marginHorizontal:10},
    buttonRow: {flexDirection: 'row', alignItems: 'center' , justifyContent: 'center'},
    setAlarmContainer: {
        backgroundColor:'orange', 
        borderRadius: 25, 
        marginLeft: 20, 
        marginRight: 20, 
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    alarmTypeOptions: { 
        marginRight:10,
        marginLeft:10,
        marginBottom: 10,
        paddingTop:10,
        paddingBottom: 40,
        backgroundColor: 'orange',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'orange',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 0.5,
        flexDirection: "row",
    },
    alarmTypeOptionsActive: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4
    },
    buttonText: {
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 25},
    buttonIcon: {
        color:'#fff',
        alignSelf: 'center',
        paddingLeft : 10,
        paddingRight : 25,
        fontSize: 50},
    innerContainer: {
        backgroundColor: 'white', 
        flex:6, 
        marginVertical: 40,
        marginHorizontal: 40,
        borderRadius: 40,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3
        }

})

export default Alarm;