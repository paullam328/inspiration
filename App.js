import React from 'react';
import { StyleSheet, Text, View, NativeModules, ToastAndroid, processColor, Platform } from 'react-native';

import ToastAndroidCustomized from './src/components/parts/ToastAndroidCustomized'

import * as Font from 'expo-font'

//import {EventEmitter} from 'events';
import Toast from 'react-native-easy-toast'

//Storing for front-end data + local storage
import { persistor, store } from './src/config/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import AppNavigator from './src/components/AppNavigator';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToastVisible: false,
      toastMsg: "",
      isFontLoaded: false,
      storedToken: ""
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
    if (Platform.OS === "ios")
      this.refs.toast.show(msg);

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
  }

  renderToast() {
    if (Platform.OS === 'ios') {
        return <Toast ref="toast"></Toast>
    } else {
        return <ToastAndroidCustomized visible={this.state.isToastVisible} message={this.state.toastMsg} style={styles.toast}/>
    }
  }

  render() {
    if (this.state.isFontLoaded) {
      return (
        <Provider store={ store }>
          <PersistGate loading={ null } persistor={ persistor }>
          <View style={{ flex: 1 }}>
            <AppNavigator showToast={this.showToast}></AppNavigator>
            {this.renderToast()}
          </View>
          </PersistGate>
        </Provider>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>

        </View>
      )
    }
  }
}

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

//so apparently, bold conflicts with fontfamily...
export default App;