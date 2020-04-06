import React from 'react';
import { Text,TextInput, StyleSheet, View, Button, Platform, TouchableOpacity } from 'react-native';
import { SHA3 } from 'sha3';
import Toast, {DURATION} from 'react-native-easy-toast';
import PlatformSpecificButton from '../parts/PlatformSpecificButton';
import { ipAddr } from '../../config/ip'

class Registration extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      }
  }

  onChangeUsernameText = (text) => {
    this.setState({username: text});
  }
  
  onChangePasswordText = (text) => {
    this.setState({password: text});
  }

  onRegisterAccount = () => {
    const passwordHash = new SHA3(512)
    passwordHash.update(this.state.password);

    fetch(`http://${ipAddr}:8080/post/register`, {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        "username": this.state.username,
        "password": passwordHash.digest('hex')
      })
    })
    .then( result => result.json())
    .then( result => {
      if (result.code == 201) {
        this.props.showToast(result.code + ": " + result.message);
        this.props.navigation.navigate('Login', {name: 'Login'});
      } else if (result.code == 403) {
        this.props.showToast(result.code + ": " + result.message);
      }
    })
    .catch( error => {
      console.log("Fetch Error: " + error);
      return error;
    });
  }

  /*TODO:SHA-3 HASING IMPLEMENTATION!*/

  render() {
    return (
      <View style={inputStyles.outlook}>
        <View style={{ flex: 2, alignItems:"center", justifyContent:'center' }}>
          <Text style={inputStyles.header}>Inspire</Text>
        </View>
        <View style={{ flex: 1, alignSelf: "stretch"}}>
          <TextInput style={inputStyles.container}
            onChangeText={text => this.onChangeUsernameText(text)}
            value={this.state.value}
            placeholder="username"
          />        
        </View>
        <View style={{ flex: 1}}>  
          <TextInput style={inputStyles.container}
            onChangeText={text => this.onChangePasswordText(text)}
            value={this.state.value}
            placeholder="password"
          />
        </View>
        <View style={{ flex: 1, margin:50 }}>
            <View style={{ flex: 2 }}>
              
                <PlatformSpecificButton
                  buttonAction={this.onRegisterAccount}
                  buttonText="Register"
                  buttonColor="orange" />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 2 }}>
              <PlatformSpecificButton
                    buttonAction={()=> this.props.navigation.navigate('Login', {name: 'Login'})}
                    buttonText="Back To Login Page"
                    buttonColor="orange" />
            </View>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
      
    );
  }//flex grid: 6 horizontal
}

// Button renders the native button, and therefore
// does not obey the style rules!

const inputStyles = StyleSheet.create({
  container: { height: 40, borderColor: 'gray', borderWidth: 1, margin:20, paddingLeft:10, backgroundColor: "white"},
  outlook: { backgroundColor: "#00BFFF", color: "white",  flex: 6, alignItems: "stretch" },
  header: { fontSize:120, top:10, color: "white", fontFamily:"AdillaAndRita" },
})

export default Registration;