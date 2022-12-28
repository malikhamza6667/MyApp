import * as React from 'react';
import {useEffect} from 'react';
import {ScrollView,StyleSheet,Text,View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import SignInScreen from './Components/SignInScreen';
import SignUpScreen from './Components/SignUpScreen';
import ForgotPasswordScreen from './Components/ForgotPasswordScreen';
import NewPasswordScreen from './Components/NewPasswordScreen';
import ConfirmEmailScreen from './Components/ConfirmEmailScreen';
import SplashScreen from 'react-native-splash-screen'


const Stack = createNativeStackNavigator();
  
  const App =()=>{
     useEffect(() => {
      SplashScreen.hide();


     },[])
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      );
    };
    const styles = StyleSheet.create({
      root:{
        flex:1,
        backgroundColor:'#F9FBFC',
        //justifyContent:"center",
        alignContent:"center",
      }
    
     });
     export default App;
  