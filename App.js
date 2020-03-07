import React from 'react';
import Registration from './src/components/pages/Registration'
import { StyleSheet, Text, View, NativeModules } from 'react-native';

// if (__DEV__) {
//   NativeModules.DevSettings.toggleElementInspector()
//   NativeModules.DevSettings.setIsDebuggingRemotely(true)
//   NativeModules.DevSettings.setLiveReloadEnabled(true)
//   NativeModules.DevSettings.setHotLoadingEnabled(true)
// }

class App extends React.Component {
  // componentDidMount()
  // {
  //   console.log("mount");
  // }
  render() {
    return (
      <Registration />
    );
    /*  
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        </View>
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