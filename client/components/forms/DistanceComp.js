import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, AsyncStorage, Button } from 'react-native';
import * as Location from 'expo-location';
import SS from '../gps-tracking'
import {Badge} from 'react-native-paper'


export default class Distance extends React.Component {

    state = {
        location: {},
        distance: {},
        curlocation1: {},
        curlocation2: {},
        errorMessage: '',
        time: {},
    }

    _getcurrentlocation = async() => {
        const location = await Location.getCurrentPositionAsync();
        if (location){
            this.setState({location: location})
            await AsyncStorage.setItem('locationS', JSON.stringify(location))
            let errorMessage = 'Got location data'
            this.setState({errorMessage: errorMessage})
            await AsyncStorage.setItem('errorMessageS', JSON.stringify(errorMessage))

            await AsyncStorage.setItem('curlocation1altitude', JSON.stringify(location.coords.latitude))
            await AsyncStorage.setItem('curlocation1longitude', JSON.stringify(location.coords.longitude))
            // await AsyncStorage.setItem('curlocation1altitude', JSON.stringify(locations.lat))
            // await AsyncStorage.setItem('curlocation1longitude', JSON.stringify(locations.long))
            const curlocation1lat = await AsyncStorage.getItem('curlocation1altitude')
            const curlocation1long = await AsyncStorage.getItem('curlocation1longitude')
            let curlocation1latF = parseFloat(curlocation1lat)
            let curlocation1longF = parseFloat(curlocation1long)
      
            const curlocation2lat = await AsyncStorage.getItem('curlocation2altitude')
            const curlocation2long = await AsyncStorage.getItem('curlocation2longitude')
            let curlocation2latF = parseFloat(curlocation2lat)
            let curlocation2longF = parseFloat(curlocation2long)
            ////////////////////////////////////
            if (curlocation2latF){
                const distanceold = await AsyncStorage.getItem('distanceS')
                let distance = parseFloat(distanceold) + 6378.137 * 1000 * Math.abs(Math.acos(
                Math.cos(curlocation1latF*Math.PI/180)*
                Math.cos(curlocation2latF*Math.PI/180)*
                Math.cos((curlocation2longF-curlocation1longF)*Math.PI/180)+
                Math.sin(curlocation1latF*Math.PI/180)*
                Math.sin(curlocation2latF*Math.PI/180)));

                let time = new Date()
                let hour = time.getHours()
                let minutes = time.getMinutes()

                if (hour==0 & minutes<15){distance = 0}
                await AsyncStorage.setItem('distanceS', JSON.stringify(distance))
                //   this.setState({distance: distance})
                // this.setState({time: minutes})

            }
            //////////////////////////////////////
            await AsyncStorage.setItem('curlocation2altitude', JSON.stringify(location.coords.latitude))
            await AsyncStorage.setItem('curlocation2longitude', JSON.stringify(location.coords.longitude))
            // await AsyncStorage.setItem('curlocation2altitude', JSON.stringify(locations.lat))
            // await AsyncStorage.setItem('curlocation2longitude', JSON.stringify(locations.long))
            this._getdistance()
        }
        else {
            let errorMessage = 'No location data'
            this.setState({errorMessage: errorMessage})
            await AsyncStorage.setItem('errorMessageS', JSON.stringify(errorMessage))

        }
        // return {distance}
    }

    _getdistance = async() => {
        const location = await AsyncStorage.getItem('locationS');
        const distance = await AsyncStorage.getItem('distanceS');
        const curlocation1 = await AsyncStorage.getItem('curlocation1altitude');
        const curlocation2 = await AsyncStorage.getItem('curlocation2altitude');
        const errorMessage = await AsyncStorage.getItem('errorMessageS');
        // let distanceF = parseFloat(distance)
        this.setState({location: location})
        this.setState({distance: distance})
        this.setState({curlocation1})
        this.setState({curlocation2})
        this.setState({errorMessage: errorMessage})
    }

    render() {
        let text = '';
        text = parseInt(this.state.distance)|| 0
        // if (this.state.distance) {ss
		// 	text = this.state.distance;
        // } else if(this.state.distance == null) {
        //     text = '0'
        // } else {
        // text = '0'
        // }

        return (
            <View style={styles.container}>
                <View style={[styles.infoContainer]}>
                    <Text style={[styles.infoText]}>
                        Push the button to get your daily movement distance.{"\n\n"}
                    </Text>
                    {/* <Button title="Distance." onPress={this._showdistance} /> */}
                    <TouchableOpacity onPress={this._getcurrentlocation} style={styles.button}>
                    <Text style={styles.buttonText}>Daily Movements</Text>
                    </TouchableOpacity>
                    <Text>
                        {"\n\n"}
                        {/* {JSON.stringify(this.state.location)} */}
                        {/* {JSON.stringify(this.state.distance)} */}
                        {/* {JSON.stringify(this.state.curlocation1)}
                        {JSON.stringify(this.state.curlocation2)}
                        {JSON.stringify(this.state.errorMessage)} */}
                    </Text>
                    <View 
                    style={{ alignItems: 'center', }}
                    >
                    <Badge status="success"
                    size = {80}
                    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                    style={[styles.numText]}>{text}{'m'}</Badge>
                    </View>
                </View>

            </View>
        )
    }

}

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
    numText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
});
