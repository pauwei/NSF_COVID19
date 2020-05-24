import React, {Component} from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Button, Vibration, Platform} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

let granted = false;

export default class PushNotification extends Component {
  state = {
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };  
  
  componentDidMount() {
    this.registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
    //this.props.navigation.navigate('gpsPage');
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  empty = async() => {
    this.props.navigation.navigate("gpsPage");
  }

  onSubmit = async() => {
    //this._enableNotification();
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    Notifications.addListener(this.handleNotification);
        const localNotification0 = {
          sound: 'default',  
          title: 'Friendly Notification.',
          body: 'Friendly remind you to complete the urban mobility survey.',
          _displayInForeground: true,        
        };

        const localNotification1 = {
          sound: 'default',  
          title: 'Friendly Notification!',
          body: 'Friendly remind you to complete the urban mobility survey.',
          _displayInForeground: true,        
        };

        
        let not0 = new Date(2020, 4, 25, 10, 0, 0);
        not0 = Date.parse(not0);
        let not1 = new Date(2020, 4, 28, 10, 0, 0);
        not1 = Date.parse(not1);
        let not2 = new Date(2020, 4, 31, 10, 0, 0);
        not2 = Date.parse(not2);
        let not3 = new Date(2020, 5, 3, 10, 0, 0);
        not3 = Date.parse(not3);
        let not4 = new Date(2020, 5, 6, 10, 0, 0);
        not4 = Date.parse(not4);
        let not5 = new Date(2020, 5, 9, 10, 0, 0);
        not5 = Date.parse(not5);
        let not6 = new Date(2020, 5, 12, 10, 0, 0);
        not6 = Date.parse(not6);
        let not7 = new Date(2020, 5, 15, 10, 0, 0);
        not7 = Date.parse(not7);
        let not8 = new Date(2020, 5, 18, 10, 0, 0);
        not8 = Date.parse(not8);
        let not9 = new Date(2020, 5, 21, 10, 0, 0);
        not9 = Date.parse(not9);
        let not10 = new Date(2020, 5, 24, 10, 0, 0);
        not10 = Date.parse(not10);
        let not11 = new Date(2020, 5, 28, 10, 0, 0);
        not11 = Date.parse(not11);
        let not12 = new Date(2020, 6, 1, 10, 0, 0);
        not12 = Date.parse(not12);
        let not13 = new Date(2020, 6, 4, 10, 0, 0);
        not13 = Date.parse(not13);
        let not14 = new Date(2020, 6, 7, 10, 0, 0);
        not14 = Date.parse(not14);
        let not15 = new Date(2020, 6, 10, 10, 0, 0);
        not15 = Date.parse(not15);
        let not16 = new Date(2020, 6, 13, 10, 0, 0);
        not16 = Date.parse(not16);
        let not17 = new Date(2020, 6, 16, 10, 0, 0);
        not17 = Date.parse(not17);
        let not18 = new Date(2020, 6, 19, 10, 0, 0);
        not18 = Date.parse(not18);
        let not19 = new Date(2020, 6, 22, 10, 0, 0);
        not19 = Date.parse(not19);
        let not20 = new Date(2020, 6, 25, 10, 0, 0);
        not20 = Date.parse(not20);
        let not21 = new Date(2020, 6, 28, 10, 0, 0);
        not21 = Date.parse(not21);
        let not22 = new Date(2020, 6, 31, 10, 0, 0);
        not22 = Date.parse(not22);
        let not23 = new Date(2020, 7, 3, 10, 0, 0);
        not23 = Date.parse(not23);
        let not24 = new Date(2020, 7, 6, 10, 0, 0);
        not24 = Date.parse(not24);
        let not25 = new Date(2020, 7, 9, 10, 0, 0);
        not25 = Date.parse(not25);
        let not26 = new Date(2020, 7, 12, 10, 0, 0);
        not26 = Date.parse(not26);
        let not27 = new Date(2020, 7, 15, 10, 0, 0);
        not27 = Date.parse(not27);
        let not28 = new Date(2020, 7, 18, 10, 0, 0);
        not28 = Date.parse(not28);
        let not29 = new Date(2020, 7, 21, 10, 0, 0);
        not29 = Date.parse(not29);
        let not30 = new Date(2020, 7, 24, 10, 0, 0);
        not30 = Date.parse(not30);
        let not31 = new Date(2020, 7, 28, 10, 0, 0);
        not31 = Date.parse(not31);
        let not32 = new Date(2020, 7, 31, 10, 0, 0);
        not32 = Date.parse(not32);
        let not33 = new Date(2020, 8, 3, 10, 0, 0);
        not33 = Date.parse(not33);
        let not34 = new Date(2020, 8, 6, 10, 0, 0);
        not34 = Date.parse(not34);

        const schedulingOptions0 = {
          time: not0,  
        };
        const schedulingOptions1 = {
          time: not1,  
        };
        const schedulingOptions2 = {
          time: not2,  
        };
        const schedulingOptions3 = {
          time: not3,  
        };
        const schedulingOptions4 = {
          time: not4,  
        };
        const schedulingOptions5 = {
          time: not5,  
        };
        const schedulingOptions6 = {
          time: not6,  
        };
        const schedulingOptions7 = {
          time: not7,  
        };
        const schedulingOptions8 = {
          time: not8,  
        };
        const schedulingOptions9 = {
          time: not9,  
        };
        const schedulingOptions10 = {
          time: not10,  
        };
        const schedulingOptions11 = {
          time: not11,  
        };
        const schedulingOptions12 = {
          time: not12,  
        };
        const schedulingOptions13 = {
          time: not13,  
        };
        const schedulingOptions14 = {
          time: not14,  
        };
        const schedulingOptions15 = {
          time: not15,  
        };
        const schedulingOptions16 = {
          time: not16,  
        };
        const schedulingOptions17 = {
          time: not17,  
        };
        const schedulingOptions18 = {
          time: not18,  
        };
        const schedulingOptions19 = {
          time: not19,  
        };
        const schedulingOptions20 = {
          time: not20,  
        };
        const schedulingOptions21 = {
          time: not21,  
        };
        const schedulingOptions22 = {
          time: not22,  
        };
        const schedulingOptions23 = {
          time: not23,  
        };
        const schedulingOptions24 = {
          time: not24,  
        };
        const schedulingOptions25 = {
          time: not25,  
        };
        const schedulingOptions26 = {
          time: not26,  
        };
        const schedulingOptions27 = {
          time: not27,  
        };
        const schedulingOptions28 = {
          time: not28,  
        };
        const schedulingOptions29 = {
          time: not29,  
        };
        const schedulingOptions30 = {
          time: not30,  
        };
        const schedulingOptions31 = {
          time: not31,  
        };
        const schedulingOptions32 = {
          time: not32,  
        };
        const schedulingOptions33 = {
          time: not33,  
        };
        const schedulingOptions34 = {
          time: not34,  
        };


        if (not0 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions0
        );
        }
        if (not1 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification1, schedulingOptions1
        );
        }
        if (not2 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions2
        );
        }
        if (not3 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions3
        );
        }
        if (not4 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions4
        );
        }
        if (not5 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions5
        );
        }
        if (not6 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions6
        );
        }
        if (not7 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions7
        );
        }
        if (not8 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions8
        );
        }
        if (not9 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions9
        );
        }
        if (not10 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions10
        );
        }
        if (not11 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions11
        );
        }
        if (not12 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions12
        );
        }
        if (not13 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions13
        );
        }
        if (not14 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions14
        );
        }
        if (not15 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification1, schedulingOptions15
        );
        }
        if (not16 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions16
        );
        }
        if (not17 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions17
        );
        }
        if (not18 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions18
        );
        }
        if (not19 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions19
        );
        }
        if (not20 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions20
        );
        }
        if (not21 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions21
        );
        }
        if (not22 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions22
        );
        }
        if (not23 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions23
        );
        }
        if (not24 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions24
        );
        }
        if (not25 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions25
        );
        }
        if (not26 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions26
        );
        }
        if (not27 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions27
        );
        }
        if (not28 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions28
        );
        }
        if (not29 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification1, schedulingOptions29
        );
        }
        if (not30 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions30
        );
        }
        if (not31 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions31
        );
        }
        if (not32 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions32
        );
        }
        if (not33 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions33
        );
        }
        if (not34 > (new Date()).getTime()) {
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions34
        );
        }

        if (Constants.isDevice && result.status === 'granted') {
          //console.log('Notification permissions granted.')
          this.props.navigation.navigate("gpsPage");
        }
    }

    handleNotification() {
        console.warn("Received notification");
    }

    async componentDidMount() {
        // let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

        // if (Constants.isDevice && result.status === 'granted') {
        //     //console.log('Notification permissions granted.')
        //     this.props.navigation.navigate("gpsPage");
        // }

        Notifications.addListener(this.handleNotification);
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={[styles.infoContainer]}>
              <Text style={[styles.infoText]}>
                For the purposes of this research, push notifications on your phone will be enabled.
                Click on the push notification button below to enable push notifications. {"\n\n"}
              </Text>
            </View>
            <TouchableOpacity onPress={this.onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Enable Push Notifications</Text>
            </TouchableOpacity>
            <View style={{ flex: 0.1, alignItems: 'center', }}></View>
            <TouchableOpacity onPress={this.empty} style={styles.button}>
              <Text style={styles.buttonText}>Not enable Push Notifications</Text>
            </TouchableOpacity>
          </View>
        );
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
    padding: 20,
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
  }
});