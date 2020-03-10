import React from 'react';
import Registration from './src/components/pages/Registration';
import Login from './src/components/pages/Login'
import { StyleSheet, Text, View, NativeModules, ToastAndroid } from 'react-native';

//Navigation (Routing...)
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ToastAndroidCustomized from './src/components/parts/ToastAndroidCustomized'

import * as Font from 'expo-font'

//Storing for front-end data + local storage
//import { createStore } from 'redux';
//import { persistStore, persistReducer, persistGate } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
//import { PersistGate } from 'redux-persist/integration/react'

//import { Router, Stack, Scene } from 'react-native-router-flux';

// if (__DEV__) {
//   NativeModules.DevSettings.toggleElementInspector()
//   NativeModules.DevSettings.setIsDebuggingRemotely(true)
//   NativeModules.DevSettings.setLiveReloadEnabled(true)
//   NativeModules.DevSettings.setHotLoadingEnabled(true)
// }

const Stack = createStackNavigator();


class App extends React.Component {
  // componentDidMount()
  // {
  //   console.log("mount");
  // }

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
    this.setState({isFontLoaded:true});
  }

  isLoggedInSwitchPages() { // so page handler deal with 

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

  render() {
    if (this.state.isFontLoaded) {
      return (
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login">
                { (props) => <Login {... props} showToast={this.showToast} />}
              </Stack.Screen>
              <Stack.Screen  name="Registration">
                { (props) => <Registration {... props} showToast={this.showToast} />}
              </Stack.Screen>
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