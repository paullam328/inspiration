import React from 'react';
import Registration from './pages/Registration';
import Login from './pages/Login'
import Decision from './pages/Decision'

import Dashboard from './pages/GetInspired/Dashboard';

//Navigation (Routing...)
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TopNavbar from './parts/TopNavbar'

//Redux:
import { connect } from 'react-redux';

const Stack = createStackNavigator();

class AppNavigator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: false,
          storedToken: ""
        }
    }

    renderPreLoginComponents() {
        return (
          <>
            <Stack.Screen name="Login">
              { (props) => <Login {... props} showToast={this.props.showToast} /*setIsLoggedIn={this.setIsLoggedIn}*/ />}
            </Stack.Screen>
            <Stack.Screen  name="Registration">
              { (props) => <Registration {... props} showToast={this.props.showToast} />}
            </Stack.Screen>
          </>
        )
    }
    
    render() {
        //Protected routes pattern:
        //our screens which need the user to be logged in are "protected" 
        //and cannot be navigated to by other means if the user is not logged in.
        return (
          <>
            <NavigationContainer>
            {(this.props.storedToken == "") ?
              <Stack.Navigator>
                {this.renderPreLoginComponents()}
              </Stack.Navigator> :
              <TopNavbar />}
            </NavigationContainer>
          </>
        )
    }
}

const mapStateToProps = state => {
  return {
    // Takes in the file name as a key:
    storedToken: state.userCredentialSync
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

//export default AppNavigator;