import React from 'react';
import Registration from './src/components/pages/Registration';
import Login from './src/components/pages/Login'
import { StyleSheet, Text, View, NativeModules } from 'react-native';

//Navigation (Routing...)
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Registration" component={Registration}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
    /*  
<Router>
        <Stack key="root">
          <Scene key="registration" component={Registration} title="registration" />
        </Stack>
      </Router>

      */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;