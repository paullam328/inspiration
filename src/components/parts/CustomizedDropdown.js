import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Button, View } from 'react-native';
import Menu, { MenuItem } from "react-native-material-menu";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown, faClock, faFireAlt, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

class CustomizedDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.height = 20;

    this.inputStyles = StyleSheet.create({
      button: {
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 200,
        alignItems: "center",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3
      },
      buttonText: {
        color: this.props.color,
        fontWeight: '700',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: this.height / 2,
        fontSize: 12,
        fontWeight: '400'
      },
      buttonTitle: {
        color: this.props.color,
        fontWeight: '700',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: "center",
        fontSize: 12,
        fontWeight: '700',
        paddingHorizontal: 2
      }
    })
  }

  _menu = null;

  showMenu = (shouldShow) => {
    shouldShow ? this._menu.show() : this._menu.hide()
  };

  render() {
    return (
      <>

        <Menu
          ref={(ref) => this._menu = ref}
          style={{
            marginTop: 55,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff',
            width: 120,

            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 3
          }}
          button={
            <TouchableOpacity
              onPress={() => this.showMenu(true)}
              style={{ ...this.inputStyles.button, ...this.props.buttonStyle }}
              underlayColor={this.props.buttonColor}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: this.height / 2 }}>
                <FontAwesomeIcon
                  icon={this.props.icon}
                  size={12}
                  color="gray" />

                <Text style={{ ...this.inputStyles.buttonTitle, ...this.props.textStyle }}>{this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)}</Text>
                
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ position: "absolute", right: -5, justifyContent: 'center', top: this.height * 1.5 }}
                  color="gray" />
              </View>
              <Text style={{ ...this.inputStyles.buttonText, ...this.props.textStyle }}>{this.props.activeItem}</Text>
            </TouchableOpacity>
          }>
          {
            this.props.items.map(item => {
              return (
                <MenuItem
                  onPress={() => {
                    this.showMenu(false);
                    this.props.setActiveItem(this.props.title, item);
                  }}
                  textStyle={{
                    color: '#000', fontSize: 12
                  }}>
                  {item}
                </MenuItem>
              )
            })
          }
        </Menu>
      </>
    );

  }
}

export default CustomizedDropdown;