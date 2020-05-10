import * as React from 'react';
import { ScrollView,View, StyleSheet, Image, AsyncStorage, Alert } from 'react-native';
import { Button,TextInput,Surface,Text, Card, Title, Paragraph } from 'react-native-paper';
import NotifyService from '../../Services/notify.service';
import { IsEmail, IsPassword } from '../../Utils/validator.utils';
import * as firebase from 'firebase';
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
import { YellowBox } from 'react-native';
import _ from 'lodash';

//Disable yellow warnings
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const firebaseConfig = {
    apiKey: "AIzaSyDDbZi5dhSWzTB7cZTVgbHFdaOf4hkuagE",
    authDomain: "nsf-covid19-app.firebaseapp.com",
    databaseURL: "https://nsf-covid19-app.firebaseio.com",
    projectId: "nsf-covid19-app",
    storageBucket: "nsf-covid19-app.appspot.com",
    messagingSenderId: "783468935285",
    appId: "1:783468935285:web:bf5ec53bc91f5bfefaa03c",
    measurementId: "G-YXN3G28EJH"
};

export default class LoginComp extends React.Component{ 
  state = {
    email:"",
    //email: "qwop@gmail.com",
    password : ""
  }

  UNSAFE_componentWillMount = async() => {
    //Check if first launch to initialize firebase
    try {
        const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
        if (hasLaunched === null) {
            await AsyncStorage.setItem('HAS_LAUNCHED', 'true')
                .then( () => {
                    firebase.initializeApp(firebaseConfig);
                })
                .catch( () => {
                    console.log("Firebase uninitialized");
                });
        }
    } catch (error) {
        //firebase has already been initialized
        //console.log("Error logging user in");
    }
  }

  onPress = async() => {
    //validate fields

    //Check if firebase is initialized
    if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig)
    }  

    //validate login
    let userID = this.state.email.replace(/[."]/g, '');
    firebase.database().ref('/users/' + userID).once('value').then( (data) => {
        if (!data.exists()) {
            this.showAlert('Email not valid');
            return;
        }
        
        //Getting user password
        let password;
        data.forEach( (userData) => {
            userData.forEach( (userInfo) => {
                if (userInfo.key === 'password'){
                    password = JSON.stringify(userInfo);
                    //console.log("Password: ", userInfo)
                }
            });
        });

        //checking password
        password = password.replace(/["]/g, '');
        if (password !== this.state.password) {
            this.showAlert('Password is incorrect');
            return;
        }
        
        this.setAsyncUser(userID);
    });
  }

  setAsyncUser = async(userID) => {
    //Saving the user to async storage
    await AsyncStorage.setItem('currentUser', JSON.stringify(userID)).then( () => {
        //console.log(userID + " saved successfully");
        this.nextPage(true);
        return true;
    }).catch( () => {
        //console.log(userID + " not saved successfully");
        this.nextPage(false);
        return false;
    });
  }

  nextPage = (go) => {
    //Go to notification page
    if (go) {
        this.props.navigation.navigate('notificationPage')
    } else {
        //console.log("Error submitting . . . , please try again");
        this.showAlert('Error logging in . . . , please try again');
    }
  }

  showAlert = (alertMsg) => {
      Alert.alert(
          'Login Error',
          alertMsg,
          [
              {text: 'OK'}
          ],
          {cancelable: false}
      );
  }

//   login = async () => {
//     if (!this.validateInput()) {
//         return;
//     }

//     const params = {
//         email: this.state.email,
//         password: this.state.password,
//     }

//     // const result = await PublicApi.login(params);
//     // if (result.success) {
//     //     NotifyService.notify({
//     //         title: 'Login Success',
//     //         duration: 500,
//     //         message: '',
//     //         type: 'success'
//     //     })

//     //     AppConstants.USER = result.response;
//     //     this.storeData(result.token);
//     //     resetToScreen('App');
//     // }
// }

validateInput = () => {
    const { email, password } = this.state;

    return IsEmail(email, 'Enter correct email address') && IsPassword(password, 'Enter correct password format')
}

render(){
    return (   

    <View style={{ flex: 1 }} >
                <View style={{ flex: 1, }} />
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
                                onPress={this.onPress}
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
                <View style={{ flex: 0, alignItems: 'center', }}>
                    </View>
                <View style={{ flex: 3, alignItems: 'center', }}>
                <View style={{ width: '90%' }} >
                <View  >
                <Image  source={ require('../../assets/img/LoginImage.png')}
                style={{
                    width: null,
                    resizeMode: 'contain',
                    height: "90%"
                  }}
                />
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