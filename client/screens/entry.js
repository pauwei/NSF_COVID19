import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import { primaryGradientArray } from '../utils/Colors.js';
import Header from '../components/header.js';


const headerTitle = 'NSF COVID19';

export default class Entry extends React.Component{
    render(){
        return(
            <View style={styles.background}>
                <LinearGradient colors = { ['rgba(0,0,0,0.8)', 'transparent'] } style={styles.container}>
                    <StatusBar barStyle = "light-content" />
                    <Header title = {headerTitle} />
                    <Text>Welcome to the NSF COVID19 App!</Text>
                </LinearGradient>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aqua',
    },
    containerTemp: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300
        //flex: 1
    },
    centered: {
        alignItems: 'center'
    }
});