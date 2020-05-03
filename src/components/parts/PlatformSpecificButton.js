import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Button } from 'react-native';

class PlatformSpecificButton extends React.Component {
    constructor(props) {
        super(props);

        this.inputStyles = StyleSheet.create({
            button: { 
              marginRight:40,
              marginLeft:40,
              marginTop: (!!this.props.margin && this.props.margin.length > 0) ? this.props.margin[0] : 10,
              paddingTop:10,
              paddingBottom:10,
              backgroundColor: this.props.buttonColor,
              borderRadius:10,
              borderWidth: 1,
              borderColor: '#fff',
              
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 3
            },
            buttonText: {
              color: this.props.color,
              fontWeight:'700',
              textAlign:'center',
              paddingLeft : 10,
              paddingRight : 10,
              fontSize: 20
            }
          })
    }
    render() {
        return Platform.select({
            ios: () => {
              return (
                <TouchableOpacity
                  style={this.inputStyles.button}
                  onPress={this.props.buttonAction}
                  underlayColor={this.props.buttonColor}>
                  <Text style={this.inputStyles.buttonText}>{this.props.buttonText}</Text>
                </TouchableOpacity>
              );
            },
            android: () => {
              return(
              <Button 
                title={this.props.buttonText}
                onPress={this.props.buttonAction}
                color={this.props.buttonColor}></Button>
              )
            }
          })()
    }
}

export default PlatformSpecificButton;