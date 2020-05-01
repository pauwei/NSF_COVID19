import { createAppContainer,createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginComp from './components/forms/LoginComp'
import BottomNaviComp from './components/BottomNaviComp'
import RegisterComp from './components/forms/RegisterComp'

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
            header: null
        }
    }
})

const HomePage  = createStackNavigator({
    Home: {
        screen: BottomNaviComp, 
        navigationOptions: {
            header: null
        }
    }
})

const RegisterPage  = createStackNavigator({
    Register: {
        screen: RegisterComp, 
        navigationOptions: {
            header: null
        }
    }
})

const SwitchLoginHome = createSwitchNavigator({
    LoginPage,
    HomePage,
    RegisterPage,
})

module.exports.Router = createAppContainer(SwitchLoginHome)