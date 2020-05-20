import React from 'react';
import { View, Text, Image, StyleSheet, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen , faClock, faFireAlt, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import CustomizedDropdown from '../../parts/CustomizedDropdown';
import WriteQuote from '../../widgets/WriteQuote';

//sort by: most recent/most likes
//filter by: week/month/year

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popularityOptions: ["Most Liked", "Most Loved", "Most Insightful"],
            popularity: "Most Liked",
            timeOptions: ["Overall", "Weekly", "Recent"], //recent will ignore show options
            time: "Overall",
            categories: ["General", "Sports", "Job Search", "Health", "Career"],
            category: "General"
        }
    }

    setActiveItem = (key, item) => {
        console.log(item);
        this.setState({[key]: item});
    }

    render() {
        return (
                <LinearGradient colors={['orange', '#FF6200']} style={{ flex: 6, zIndex: -1}}>
                    <View style={{flex: 0.015}}></View>
                    <View style={{flex: 0.05, ...styles.createQuoteBox}} onTouchEnd={()=>this.props.setActiveWidget(WriteQuote)}>
                        <Text style={{...styles.createQuoteText}}>
                            <FontAwesomeIcon 
                                icon={ faPen }
                                size={ 12 } 
                                color="gray"
                                style={{textAlign:'center'}}
                             /> &nbsp;Start making Difference to someone's Life!
                        </Text>
                    </View>
                    <View style={{flex: 0.015}}></View>
                    <View style={{flex: 0.05, flexDirection:'row', marginHorizontal: 12}}>
                        <View style={{flex: 2, alignItems:'center'}}>
                        <CustomizedDropdown
                                    color="gray"
                                    title="popularity"
                                    activeItem={this.state.popularity}
                                    items={this.state.popularityOptions}
                                    setActiveItem={this.setActiveItem}
                                    icon={faFireAlt}
                                />
                        </View>
                        <View style={{flex: 2, alignItems:'center'}}>
                        <CustomizedDropdown
                                    color="gray"
                                    title="time"
                                    activeItem={this.state.time}
                                    items={this.state.timeOptions}
                                    setActiveItem={this.setActiveItem}
                                    icon={faClock}
                                />
                        </View>
                        <View style={{flex: 2, alignItems:'center'}}>
                        <CustomizedDropdown
                                    color="gray"
                                    title="category"
                                    activeItem={this.state.category}
                                    items={this.state.categories}
                                    setActiveItem={this.setActiveItem}
                                    icon={faSortAmountDown}
                                />
                        </View>
                    </View>
                </LinearGradient>
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
    createQuoteBox: {
        justifyContent: 'center',
        backgroundColor: 'white',
        position:'relative',
        borderRadius:20,
        marginHorizontal:20,

        borderColor:'#D7D7D7',
        borderWidth:1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        
    },
    createQuoteText: {
        color: 'gray',
        fontSize: 12,
        alignSelf:'center'
    },
    title: {fontSize:30, fontWeight:'800', color: "orange" },
    text: {/*fontFamily:"AdillaAndRita"*/ }
});

export default Quote;