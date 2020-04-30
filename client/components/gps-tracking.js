import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as firebase from 'firebase';
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const LOCATION_TASK_NAME = 'background-location-task';

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

export default class GPS extends React.Component {
    componentDidMount = async() => {
        firebase.initializeApp(firebaseConfig);
        this._enableLocationAsync();
    }

    _enableLocationAsync = async() => {
        try {
            //ask permission of user for location
            let { status } = await Permissions.askAsync(Permissions.LOCATION);

            //check the location setting
            const permissionStatus = await Location.getProviderStatusAsync();
            const newStatus = permissionStatus.locationServicesEnabled;

            //if phone location is disabled
            if (!newStatus){
                const { navigation } = this.props;
                Alert.alert(
                    "Error",
                    "Please Turn On Your Location",
                    [
                        {
                            text: "OK",
                            onPress: this.openSetting
                        }
                    ]
                );
            }
            //if location setting is enabled
            else {
                //if status is granted or not
                if (status !== "granted") {
                    this.setState({
                        errorMessage: "Permission to access location was denied"
                    });
                    navigation.navigate("App");     //Go to register/login page
                    return;
                } else {
                    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
                        accuracy: Location.Accuracy.Balanced,
                        timeInterval: 300000, //Every five minutes
                        foregroundService: {
                            notificationTitle: "GPS Tracking",
                            notificationBody: "Your Location is being tracked for research app"
                        },
                        pausesUpdatesAutomatically: false,
                    });
                    navigation.navigate("Home");    //Go to actual page
                }
            }
        } catch (error) {
            let status = await Location.getProviderStatusAsync();
            if (!status.locationServiceEnabled) {
                const { navigation } = this.props;
                navigation.navigate("App");
                //Go back to login page
            }
        }
    }

    //Options for using touch and on press to activate location async
    // onPress = async() => {
    //     await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
    //         accuracy: Location.Accuracy.Balanced,
    //         timeIntervial: 5000,
    //     });
    // };

    // render() {
    //     return (
    //         <TouchableOpacity onPress={this.onPress} style={{marginTop: 100}}>
    //             <Text>Enable background location</Text>
    //         </TouchableOpacity>
    //     )
    // }
}

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error){
        alert(error)
        //Error occurred - check 'error.message' for more details.
        return;
    }
    if (data) {
        const { locations } = data;
        const currentUser = await AsyncStorage.getItem('currentUser');

        //get eastern time
        let date = moment().utcOffset('-5:00').format('YYYY-MM-DD hh:mm:ss a');

        //Storing user location on firebase
        firebase.database().ref('users/' + currentUser + '/' + date).set(locations);
        alert(JSON.stringify(locations));
        //will show the location object
    }
});
