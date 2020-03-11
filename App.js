import React from 'react';
import Registration from './src/components/pages/Registration';
import Login from './src/components/pages/Login'
import Decision from './src/components/pages/Decision'
import { StyleSheet, Text, View, NativeModules, ToastAndroid, processColor } from 'react-native';

//Navigation (Routing...)
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ToastAndroidCustomized from './src/components/parts/ToastAndroidCustomized'

import * as Font from 'expo-font'

import {EventEmitter} from 'events';

//Storing for front-end data + local storage
import { createStore } from 'redux';
//import { persistStore, persistReducer, persistGate } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
//import { PersistGate } from 'redux-persist/integration/react'

//import { Router, Stack, Scene } from 'react-native-router-flux';

const Stack = createStackNavigator();


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isToastVisible: false,
      toastMsg: "",
      isFontLoaded: false
    }
  }

  async componentDidMount() {
    


    console.log("rendering...");
    await Font.loadAsync({
      'AdillaAndRita': require('./assets/fonts/AdillaAndRita.ttf'),
    });
    console.log("loaded...");
    //EventEmitter.setMaxListeners(100);
    this.setState({isFontLoaded:true});
  }

  showToast = (msg) => {
    //this.refs.toast.show(msg, DURATION.LENGTH_SHORT);
    this.setState(
      {
        toastMsg: msg,
        isToastVisible: true,
      },
      () =>     {
        this.setState(
        {
          isToastVisible: false,
        },
      );
   })
   console.log(this.state.isToastVisible)

  }

  setIsLoggedIn = (bool) => {
    //this.refs.toast.show(msg, DURATION.LENGTH_SHORT);
    this.setState(
      {
        isLoggedIn: bool
      }
    )
  }

  pageRendererOnLogin() {
    if (!this.state.isLoggedIn) {
      return (
        <>
          <Stack.Screen name="Login">
            { (props) => <Login {... props} showToast={this.showToast} setIsLoggedIn={this.setIsLoggedIn} />}
          </Stack.Screen>
          <Stack.Screen  name="Registration">
            { (props) => <Registration {... props} showToast={this.showToast} />}
          </Stack.Screen>
        </>
              
      )
    }
    else {
      //Protected routes pattern:
      //our screens which need the user to be logged in are "protected" 
      //and cannot be navigated to by other means if the user is not logged in.
      return(
        <Stack.Screen  name="Decision" component={Decision}>
        </Stack.Screen>
      )
    }
  }

  render() {
    if (this.state.isFontLoaded) {
      return (
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
              {this.pageRendererOnLogin()}
            </Stack.Navigator>
          </NavigationContainer>
          
          <ToastAndroidCustomized visible={this.state.isToastVisible} message={this.state.toastMsg} style={styles.toast}/>
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>

        </View>
      )
    }
  }
}
//<Toast ref="toast"></Toast>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toast: {
    backgroundColor: "black",
    opacity: 0.8
  }
});


export default App;