import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Alarm from '../pages/GetInspired/Alarm'
import Video from '../pages/GetInspired/Video'
import Story from '../pages/GetInspired/Story'
import Quote from '../pages/GetInspired/Quote'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import Menu, { MenuItem } from "react-native-material-menu";

import { connect } from 'react-redux';
import { logOut } from '../../actions/userCredentialSync';
import WidgetManager from '../widgets/WidgetManager';

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator()

class TopNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeWidget: null
        }
    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    logout = () => {
        this.props.logOut();
    }

    setActiveWidget = (activeWidget) => {
        if (!(!!this.state.activeWidget)) {
            this.setState({ activeWidget: activeWidget });
        }
    }

    renderTabNavigator(stackNavProps) {
        return (
            <Tab.Navigator {...stackNavProps}>
                <Tab.Screen name="Alarm" component={Alarm} options={{ title: "Alarm" }} />
                <Tab.Screen name="Quote">
                    {(props) => <Quote {...props} setActiveWidget={this.setActiveWidget} />}
                </Tab.Screen>
                <Tab.Screen name="Story" component={Story} />
                <Tab.Screen name="Video" component={Video} />
            </Tab.Navigator>
        )
    }

    renderUserMenu() {
        return (
            <Menu
                ref={(ref) => this._menu = ref}
                style={{ marginTop: 34 }}
                button={<FontAwesomeIcon
                    size={30}
                    paddingRight={50}
                    style={inputStyles.headerText}
                    onPress={() => this._menu.show()}
                    icon={faUserCog}></FontAwesomeIcon>}>
                <MenuItem onPress={() => this.logout()} textStyle={{ color: '#000', fontSize: 16 }}>Logout</MenuItem>
            </Menu>
        )
    }

    destroyActiveWidget = () => {
        this.setState({ activeWidget: null });
    }

    render() {
        //Nesting navigation in a stack navigator rendering a header bar as a screen
        return (
            <>
                <WidgetManager
                    activeWidget={this.state.activeWidget}
                    destroyActiveWidget={this.destroyActiveWidget}></WidgetManager>
                <Stack.Navigator>
                    <Stack.Screen name="Inspire"
                        style={inputStyles.header}
                        options={{
                            headerRight: () => this.renderUserMenu(),
                            headerStyle: inputStyles.header,
                            headerTitleStyle: inputStyles.headerText
                        }}>
                        {(props) => this.renderTabNavigator(props)}
                    </Stack.Screen>
                </Stack.Navigator>
            </>
        );
    }

}

const inputStyles = StyleSheet.create({
    container: { height: 40, borderColor: 'gray', borderWidth: 1, margin: 20, paddingLeft: 10, backgroundColor: "white" },
    outlook: { backgroundColor: "orange", color: "white", flex: 6, alignItems: "stretch" },
    header: { backgroundColor: "orange" },
    headerText: { fontSize: 50, color: "white", fontFamily: "AdillaAndRita" }

})

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => {
            dispatch(logOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);