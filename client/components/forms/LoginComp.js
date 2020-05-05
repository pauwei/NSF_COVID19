import * as React from 'react';
import { View, StyleSheet, Image, AsyncStorage  } from 'react-native';
import { Button,TextInput,Surface,Text, Card, Title, Paragraph } from 'react-native-paper';
import NotifyService from '../../Services/notify.service';
import { IsEmail, IsPassword } from '../../Utils/validator.utils';

export default class LoginComp extends React.Component{ 
  state = {
    email:"admin@gmail.com",
    password : ""
  }

  login = async () => {
    if (!this.validateInput()) {
        return;
    }

    const params = {
        email: this.state.email,
        password: this.state.password,
    }

    // const result = await PublicApi.login(params);
    // if (result.success) {
    //     NotifyService.notify({
    //         title: 'Login Success',
    //         duration: 500,
    //         message: '',
    //         type: 'success'
    //     })

    //     AppConstants.USER = result.response;
    //     this.storeData(result.token);
    //     resetToScreen('App');
    // }
}
validateInput = () => {
    const { email, password } = this.state;

    return IsEmail(email, 'Enter correct email address') && IsPassword(password, 'Enter correct password format')
}

setUser = async() => {
    await AsyncStorage.setItem('currentUser', JSON.stringify(this.state.email))
        .then( () => {
            //console.log(this.state.email + " was successfully saved");
        })
        .catch( () => {
            //console.log('There was an error saving the user')
        });
    
    this.props.navigation.navigate('notificationPage')
}
//   componentDidMount() {
//     // Listen for authentication state to change.
//     Firebase.auth().onAuthStateChanged(user => {
//         console.log(user);
//         if (user != null) {
//             this.props.navigation.navigate('User');
//         }

//         // Do other things
//     });
// }
  render(){
    return (   
    //   <Surface style={styles.container} >
    //    <TextInput
    //     label='Email'
    //     value={this.state.email}
    //     onChangeText={text => this.setState({ email:text })}
    //   />
    //    <TextInput
    //     label='Password'
    //     value={this.state.password}
    //     secureTextEntry={true} autoCorrect={false}
    //     onChangeText={text => this.setState({ password:text })}
    //   />
    //     <Button  onPress={()=>this.login()}>Sign In</Button>
   
        
    //   </Surface>
    <View style={{ flex: 1 }} >
                <View style={{ flex: 2, }} />
                <View style={{ flex: 4, alignItems: 'center', }}>
                <View style={{ width: '90%' }} >
                <Image  source={ require('../../assets/img/LoginImage.png')}
                style={{
                    width: "100%",
                    height: "90%",
                  }}
                />
                 </View>

                  {/* <Card>                       
                        <Card.Cover source={ require('../../assets/img/ICIC.png') } 
                        style={{ height:250, width: 250,  }}/>
                    </Card> */}
                    </View>
                <View style={{ flex: 4, alignItems: 'center' }} >
                    <View style={{ width: '90%' }} >
                        <View style={{ padding: 5 }} >
                            <TextInput
                                mode='outlined'
                                label='Email'
                                keyboardType="email-address"
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                            />
                        </View>
                        <View style={{ padding: 5 }} >
                            <TextInput
                                mode='outlined'
                                label='Password'
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                                secureTextEntry
                            />
                        </View>
                        <View style={{ padding: 5 }} >
                            <Button
                                mode="contained"
                                // onPress={() => this.login()}
                                //onPress={() =>  this.props.navigation.navigate('notificationPage')}
                                onPress={this.setUser}
                                style={{ justifyContent: 'center' }}
                            >
                                Login
                            </Button>
                        </View>

                        <View style={{ paddingTop: 10, paddingBottom: 10 }} />

                        <View style={{ padding: 5 }} >
                            <Button
                                mode="outlined"
                                onPress={() =>  this.props.navigation.navigate('RegisterPage')}
                                style={{ justifyContent: 'center' }}
                            >
                                Create new account
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }} />
            </View>
      );
    }
  
//   async login(){
//     try {
//       await global.firebase.auth().signInWithEmailAndPassword(
//         this.state.email,
//         this.state.password
//       );
      
//     } catch (error) {
//       alert(error);
      
//     }
   
//      /*var { navigation } = this.props;
//      global.app.setState({logined:true});
//      //navigation.navigate('Home');
//      navigation.replace("Home");*/
//   } 
  /*fblogin(){
     var { navigation } = this.props;
     global.app.setState({logined:true});
     //navigation.navigate('Home');
     navigation.replace("Home");
  } 
  googlelogin(){
     var { navigation } = this.props;
     global.app.setState({logined:true});
     //navigation.navigate('Home');
     navigation.replace("Home");
  }  
  register(){
    var { navigation } = this.props;
    navigation.navigate("SignUp");
  }  */
}



//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//   });