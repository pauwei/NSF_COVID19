import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, AsyncStorage, Button } from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import * as firebase from 'firebase';
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

let i = 0;
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
    
    state = {
        location: {},
        distance: {},
        curlocation1: {},
        curlocation2: {},
        errorMessage: '',
        time: {},
    }

    constructor() {
        super();
        console.ignoredYellowBox = [ 'Setting a timer' ];
    }
    onPress = async() => {
        //firebase.initializeApp(firebaseConfig);

        //Saving the user to async storage
        // await AsyncStorage.setItem('currentUser', JSON.stringify("paulweizhang@gmail.com"))
        //     .then( () => {
        //         console.log('It was saved successfully')
        //     })
        //     .catch( () => {
        //         console.log('There was an error saving the user')
        //     });

        //Enabling location
        //console.log("Enabling Location");
        this._enableLocationAsync();
    }

    _enableLocationAsync = async() => {
        try {
            //ask permission of user for location
            let { status } = await Location.requestPermissionsAsync();

            //check the location setting
            const permissionStatus = await Location.getProviderStatusAsync();
            const newStatus = permissionStatus.locationServicesEnabled;

            //Navigation
            const { navigation } = this.props;

            //if phone location is disabled
            if (!newStatus){
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
                    console.log("Under granted permissions to access location");
                    navigation.navigate("HomePage");     //Go to register/login page
                    return;
                } else {
                    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
                        accuracy: Location.Accuracy.Balanced,
                        timeInterval: 1 * 60 * 1000, //Every five minutes
                        deferredUpdatesInterval: 1 * 60 * 1000, //Every five minutes
                        foregroundService: {
                            notificationTitle: "GPS Tracking",
                            notificationBody: "Your Location is being tracked for research app"
                        },
                        pausesUpdatesAutomatically: false,
                    });

                    // Enable Background Fetch
                    // const status = await BackgroundFetch.getStatusAsync();
                    // switch (status) {
                    //     case BackgroundFetch.Status.Restricted:
                    //     case BackgroundFetch.Status.Denied:
                    //         console.log("Background execution is disabled");
                    //         return;
                        
                    //         default: {
                    //             console.log("Background execution allowed");
                                
                    //             let tasks = await TaskManager.getRegisteredTasksAsync();
                    //             if (tasks.find(f => f.taskName === LOCATION_TASK_NAME) === null){
                    //                 console.log("Registering task");
                    //             } else {
                    //                 console.log('Task ' + LOCATION_TASK_NAME + ' already registered, skipping');
                    //             }
                    //         }
                    // }

                    navigation.navigate("HomePage");    //Go to actual page
                }
            }
        } catch (error) {
            let status = await Location.getProviderStatusAsync();
            console.log("Error with asking user permission");
            console.log(error);
            if (!status.locationServiceEnabled) {
                const { navigation } = this.props;
                console.log("Error with asking user permission");
                navigation.navigate("HomePage");
                //Go back to login page
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.infoContainer]}>
                    <Text style={[styles.infoText]}>
                        For the purposes of this research, your location while participating in the survey will need to be enabled. 
                        The information will be for research modeling only and is completely anonymous. Your personal data will not be shared with anybody or parties. 
                        Click on the enable background location button below to enable gps tracking.{"\n\n"}
                    </Text>
                </View>
                <TouchableOpacity onPress={this.onPress} style={styles.button}>
                    <Text style={styles.buttonText}>Enable background location</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
//{marginTop: 100}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1976D2',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: '500',
        color: '#FFFFFF',
    },
    infoContainer: {
        alignItems: 'center',
        padding: 10,
    },
    infoText: {
        fontSize: 20,
        color: '#6B6C69',
    },
});

TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
    if (error){
        alert(error)
        //Error occurred - check 'error.message' for more details.
        return;
    }
    if (data) {
        const { locations } = data;


        //Getting userID without periods
        const userID = await AsyncStorage.getItem('currentUser');
        //console.log("User: " + userID);

        //get eastern time
        let date = new Date();

        //Creating path for database
        let dbpath = userID.replace(/[."]/g, '') + '/' + date;

        //Get the most recent location
        let timestamp, alt, head, long, spd, lat, acc;
        locations.forEach((currentLocation) => {
            timestamp = currentLocation.timestamp;      //time at which position information was obtained, milliseconds since epoch
            alt = currentLocation.coords.altitude;      //altitude in meters above WGS 84 reference ellipsoid
            long = currentLocation.coords.longitude;    //longitude in degrees
            lat = currentLocation.coords.latitude;      //latitude in degrees
            head = currentLocation.coords.heading;      //horizontal direciton of travel of device measured in degrees starting at due north and continuing clockwise around the compass
            spd = currentLocation.coords.speed;         //instantaneous speed of the devie in meters per second
            acc = currentLocation.coords.accuracy;      //radius of uncertainity for location, measured in meters
        });

        //See if firebase is initialized
        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }    

        //Storing user location on firebase
        firebase.database().ref('users/' + dbpath).set({
            timestampEpoch: timestamp,
            altitude: alt,
            latitude: lat,
            longitude: long,
            heading: head,
            speed: spd,
            accuracy: acc,
        });
        
        //Alert to test location is correct
        //alert(JSON.stringify(locations));
    }
});
