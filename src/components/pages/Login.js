import React from 'react';
import { Text,TextInput, StyleSheet, View, Button } from 'react-native';
import { SHA3 } from 'sha3';

class Login extends React.Component {
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

  onLogin = () => {
    const passwordHash = new SHA3(512)
    passwordHash.update(this.state.password);

    fetch("http://192.168.0.131:8080/post/login", {
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
      console.log("Response: " );
      console.log(result);
    })
    .catch( error => {
      console.log("Fetch Error: " + error);
      return error;
    });
  }

  /*TODO:SHA-3 HASING IMPLEMENTATION!*/

  render() {
    return (
      <View style={{ flex: 6, alignItems: "stretch"}}>
        <View style={{ flex: 1}}></View>
        <View style={{ flex: 1, alignItems:"center" }}>
          <Text style={{fontWeight:"bold", fontSize:30}}>Login</Text>
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
            <View style={{ flex: 2}}>
              <Button title="Login" onPress={this.onLogin}></Button>
            </View>
            <View style={{ flex: 0.5 }} />
            <View style={{ flex: 2 }}>
              <Button  title="Create New Account" onPress={()=> this.props.navigation.navigate('Registration', {name: 'Registration'})}></Button>
            </View>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
      
    );
  }//flex grid: 6 horizontal
}

const inputStyles = StyleSheet.create({
  container: { height: 40, borderColor: 'gray', borderWidth: 1, margin:20, paddingLeft:10}
})

export default Login;