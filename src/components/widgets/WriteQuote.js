import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomizedDropdown from '../parts/CustomizedDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen, faClock, faFireAlt, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';



class WriteQuote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quoteText: "",
            categories: ["General", "Sports", "Job Search", "Health", "Career"],
            category: "General"
        }
    }

    render() {
        const {width, height} = Dimensions.get('window');
        return (
            <LinearGradient colors={['orange', '#FF6200']} style={{ flex: 6, height:height }}>
                <LinearGradient colors={['rgba(21,21,21,1)', 'rgba(69,69,69,1)']} style={{ flex: 0.35, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{ ...styles.customButton, ...styles.backButton }}
                        onPress={() => { console.log("TEST");this.props.shrinkWidget(); }}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Write Your Quote</Text>
                    <TouchableOpacity
                        style={{ ...styles.customButton, ...styles.submitButton }}
                        onPress={() => { }}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View flex={0.1}>
                </View>
                <View flex={0.1}>
                    <CustomizedDropdown
                        color="gray"
                        title="category"
                        activeItem={this.state.category}
                        items={this.state.categories}
                        setActiveItem={this.setActiveItem}
                        icon={faSortAmountDown}
                    />
                </View>
                <View flex={0.1}>
                </View>
                <View flex={0.5} style={styles.createQuoteBox}>
                    <TextInput
                        style={{ flex: 1, padding: 15, textAlignVertical: 'top', fontSize: 20 }}
                        onChangeText={text => this.setState({ quoteText: text })}
                        value={this.state.quoteText}
                        multiline={true}
                        placeholder="What's so inspiring?"
                    />
                </View>
                <View flex={2.25}>
                </View>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    headerView: {
        backgroundColor: 'black',
        borderColor: '#D7D7D7',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    header: {
        backgroundColor: 'black',
        borderColor: '#D7D7D7',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    titleText: {
        color: 'white',
        fontWeight: '800',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginTop: 25
    },
    createQuoteBox: {
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 20,

        borderColor: '#D7D7D7',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    customButton: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'gray',
        borderRadius: 20,
        position: "absolute",
    },
    submitButton: {
        top: 40,
        right: 15
    },
    backButton: {
        top: 40,
        left: 15
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15
    }
});

export default WriteQuote;