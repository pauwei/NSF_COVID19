import React, { Component } from 'react';
import { View, ScrollView, AsyncStorage, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
// import PublicApi from '../../Api/public.api';
// import { navigate, resetToScreen } from '../../Services/navigation.service';
import NotifyService from '../../Services/notify.service';
import { IsName, IsEmail, IsPassword, IsMobilePhone } from '../../Utils/validator.utils';
// dropdown
import { Dropdown } from 'react-native-material-dropdown';
// firebase imports
import * as firebase from 'firebase';
import "firebase/database";
import "firebase/firestore";
import "firebase/storage"; 
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate has been renamed',
    'Warning: componentWillReceiveProps has been renamed',
]);

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

//TOD: check password
class RegisterComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            gender: '',
            age: '',
            race: '',
            ethnicity: '',
            profession: '',
            marital: '',
            income: '',
            medical: '',
        }
    }

    register = async () => {
        // Validation
        if (!this.validate()){
            //Error registering
            return;
        }

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            age: this.state.age,
            race: this.state.race,
            ethnicity: this.state.ethnicity,
            profession: this.state.profession,
            marital: this.state.marital,
            income: this.state.income,
            medical: this.state.medical,
        };

        //Check if firebase is initialized
        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        } 

        //Database data sync
        let userID = user.email.replace(/[."]/g, '');

        //checking user email in database
        firebase.database().ref('/users/' + userID).once('value').then( (data) => {
            //If user is not undefined and exists
            if (data.exists()) {
                this.showAlert('User email already exists');
                successful = false;

            } else {
                //Saving the user to async storage
                this.setAsyncUser(userID);
            }
        });
    }

    showAlert = (alertMsg) => {
        Alert.alert(
            'Registration Error',
            alertMsg,
            [
                {text: 'OK'}
            ],
            {cancelable: false}
        );
    }

    setAsyncUser = async(userId) => {
        await AsyncStorage.setItem('currentUser', JSON.stringify(userId)).then( () => {
            //console.log(userID + " saved successfully")
            this.storeUser(true, userId);
            //return false;
        }).catch( (err) => {
            console.log(err);
            console.log(userId + " not saved successfully");
            this.storeUser(false, userId);
            //return false;
        });
    }

    storeUser = (successful, userID) => {
        //Add user data to database
        if (successful){
            firebase.database().ref('users/' + userID + '/info').set({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                gender: this.state.gender,
                age: this.state.age,
                race: this.state.race,
                ethnicity: this.state.ethnicity,
                profession: this.state.profession,
                marital: this.state.marital,
                income: this.state.income,
                medical: this.state.medical,
            });
        
            //Go to login page
            Alert.alert(
                'Registration Successful',
                'You have been successfully registered for the study',
                [
                    {text: 'Go Back to Login', onPress: () => this.props.navigation.navigate('LoginPage')}
                ],
                { cancelable: false }
            );        
        } else {
            this.showAlert('Registration unsuccessful . . . , please try again');
        }
    }

    validate = () => {
        const { name, email, password, gender, age, race, ethnicity, profession, marital, income, medical} = this.state;

        let errors = '';
        //Check empty fields
        if (name === '')
            errors += 'Name, ';
        if (email === '')
            errors += 'Email, ';
        if (password === '')
            errors += 'Password, ';
        if (gender === '')
            errors += 'Gender, ';
        if (age === '')
            errors += 'Age, ';
        if (race === '')
            errors += 'Race, ';
        if (ethnicity === '')
            errors += 'Ethnicity, ';
        if (profession === '')
            errors += 'Profession, ';
        if (marital === '')
            errors += 'Marital, ';
        if (income === '')
            errors += 'Income, ';
        if (medical === '')
            errors += 'Medical, ';

        if (errors === ''){
            return true;
        } else {
            errors = errors.substring(0, errors.length - 2) + ' field(s) are empty. Please fill them in.';
            this.showAlert(errors);
            return false;
        }
        //return IsName(name, 'Name should be atleast 3 and maximum 24 charactes') && IsEmail(email, 'Please enter correct email') && IsMobilePhone(mobile, 'Please enter correct mobile number') && IsPassword(password, 'Please enter correct password format') 
    }


    render() {
        //sources: http://www.amplituderesearch.com/market-research-questions.shtml
        let gender = [{
                value: 'Female ',
            }, {
                value: 'Male',
            }, {
                value: 'Other',
            }];
        let race = [{
                value: 'Yes',
            }, {
                value: 'No'
            }];
        let ethnicity = [{
                value: 'American Indian or Alaska Native',
            }, {
                value: 'Asian',
            }, {
                value: 'Black or African American'
            }, {
                value: 'Native Hawaiian or Other Pacific Islander',
            }, {
                value: 'White',
            }, {
                value: 'Prefer not to respond',
            }];

        let marital =  [{
                value: 'Married',
            }, {
                value: 'Single',
            }, {
                value: 'Separated',
            }, {
                value: 'Divorced',
            }, {
                value: 'Widowed ',
            }];

        let income = [{
                value: 'Less than $25,000 ',
            }, {
                value: '$25,000 - $34,999',
            }, {
                value: '$35,000 - $49,999',
            }, {
                value: '$50,000 - $74,999',
            }, {
                value: '$75,000 - $99,999',
            }, {
                value: '$100,000 - 149,999'
            }, {
                value: '$150,000 - $199,999'
            }, {
                value: '$200,000 or more',
            }];

        let medical = [{
                value: 'Yes ',
            }, {
                value: 'No',
            }];

        return (
            <ScrollView >
            <View style={{ flex: 1,  }} >
                <View style={{ flex: 1 }} />
                <View style={{ flex: 4, alignItems: 'center' }} >
                    <View style={{ width: '80%' }} >
                    <View style={{ padding: 5,height:50}} >
                           
                        </View>
                        <View style={{ padding: 5}} >
                            <TextInput
                                mode='outlined'
                                label='Name'
                                value={this.state.name}
                                onChangeText={name => this.setState({ name })}
                            />
                        </View>
                        <View style={{ padding: 5 }} >
                            <TextInput
                                mode='outlined'
                                label='Email'
                                value={this.state.email}
                                keyboardType="email-address"
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
                        <Dropdown
                                label='Gender'
                                data={gender}
                                value={this.state.gender}
                                onChangeText={gender => this.setState({ gender })}
                            />
                        </View>
                        <View style={{ padding: 5 }} >
                            <TextInput
                                mode='outlined'
                                label='Age'
                                value={this.state.age}
                                keyboardType="phone-pad"
                                onChangeText={age => this.setState({ age })}
                            />
                        </View>
                        <View style={{ padding: 5 }} >
                        <Dropdown
                                label='Hispanic, Latino or Spanish origin'
                                data={race}
                                value={this.state.race}
                                onChangeText={race => this.setState({ race })}
                            />
                        </View>
                        <View style={{ padding: 5 }} >
                        <Dropdown
                                label='Ethnicity'
                                data={ethnicity}
                                value={this.state.ethnicity}
                                onChangeText={ethnicity => this.setState({ ethnicity })}
                            />
                        </View>
                        <View style={{ padding: 5 }} >
                            <TextInput
                                mode='outlined'
                                label='Profession'
                                value={this.state.profession}
                                onChangeText={profession => this.setState({ profession })}
                            />
                        </View>
                       
                        <View style={{ padding: 5 }} >
                        <Dropdown
                                label='Marital status'
                                data={marital}
                                value={this.state.marital}
                                onChangeText={marital =>this.setState({ marital })}
                            />
                        </View>
                        <View style={{ padding: 5 }} >
                        <Dropdown
                                label='Household Income Range'
                                data={income}
                                value={this.state.income}
                                onChangeText={income => this.setState({ income })}
                            />
                        </View>
                        <View style={{ padding: 5 }} >
                        <Dropdown
                                label='Do you have any medical condition?'
                                data={medical}
                                value={this.state.medical}
                                onChangeText={medical => this.setState({ medical })}
                            />
                        </View>
                        <View style={{ padding: 5 }} >
                            <Button
                                mode="contained"
                                onPress={this.register}
                                style={{ justifyContent: 'center' }}
                            >
                                register
                            </Button>
                        </View>
                    </View>
                    
                </View>
                <View style={{ flex: 1 }} />
            </View>
            </ScrollView >
        )
    }
}

export default RegisterComp;