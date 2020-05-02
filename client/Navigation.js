import { createAppContainer,createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginComp from './components/forms/LoginComp'
import BottomNaviComp from './components/BottomNaviComp'
import RegisterComp from './components/forms/RegisterComp'
import GPS from './components/gps-tracking'
import PushNotification from './components/PushNotfication'

// const SearchStackNavigator = createStackNavigator({
//     Search: { 
//       screen: LoginComp,
//       navigationOptions: {
//         header: null
//       }
//     }
//   })

const LoginPage = createStackNavigator({
    Login: {
        screen: LoginComp, 
        navigationOptions: {
            headerShown: false
        }
    }
})

const HomePage  = createStackNavigator({
    Home: {
        screen: BottomNaviComp, 
        navigationOptions: {
            headerShown: false
        }
    }
})

const RegisterPage  = createStackNavigator({
    Register: {
        screen: RegisterComp, 
        navigationOptions: {
            headerShown: false
        }
    }
})

const gpsPage = createStackNavigator({
    GPSComp: {
        screen: GPS,
        navigationOptions: {
            headerShown: false
        }
    }
})

const notificationPage = createStackNavigator({
    notificationComp: {
        screen: PushNotification,
        navigationOptions: {
            headerShown: false
        }
    }
})

const SwitchLoginHome = createSwitchNavigator({
    LoginPage,
    HomePage,
    RegisterPage,
    gpsPage,
    notificationPage,
})

//const Router = createAppContainer(SwitchLoginHome)

//module.exports.Router = createAppContainer(SwitchLoginHome)
export const Router = createAppContainer(SwitchLoginHome) ;
//export default Router = createAppContainer(SwitchLoginHome);