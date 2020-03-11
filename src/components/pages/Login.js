import React from 'react';
import { Text,TextInput, StyleSheet, View, Button } from 'react-native';
import { SHA3 } from 'sha3';
import Toast, {DURATION} from 'react-native-easy-toast';

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
      if (result.code == 200) {
        this.props.showToast(result.code + ": " + result.message);
        this.props.setIsLoggedIn(true);
      } else if (result.code == 403) {
        this.props.showToast(result.code + ": " + result.message);
      }

    })
    .catch( error => {
      console.log("Fetch Error: " + error);

      //Toast.show(result.message);
      return error;
    });
  }

  /*TODO:SHA-3 HASING IMPLEMENTATION!*/

  render() {
    return (
      <View style={inputStyles.outlook}>
        <View style={{ flex: 1, alignItems:"center"}}>
          <Text style={inputStyles.header}>Inspire</Text>
        </View>

        <View style={{ flex: 1 }}>
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
              <Button 
                title="Login" 
                onPress={this.onLogin}
                color="#00BFFF"></Button>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 2 }}>
              <Button  
                title="Create New Account" 
                onPress={()=> this.props.navigation.navigate('Registration', {name: 'Registration'})}
                color="#00BFFF"></Button>
            </View>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
      

    );
  }//flex grid: 6 horizontal
}

const inputStyles = StyleSheet.create({
  container: { height: 40, borderColor: 'gray', borderWidth: 1, margin:20, paddingLeft:10, backgroundColor: "white"},
  outlook: { backgroundColor: "orange", color: "white",  flex: 6, alignItems: "stretch"},
  header: { fontSize:120, top:10, color: "white", fontFamily:"AdillaAndRita" },
  button: { backgroundColor: "blue" }
})
//so apparently, bold conflicts with fontfamily...

export default Login;