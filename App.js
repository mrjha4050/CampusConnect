
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import React from 'react';
import RegistrationScreen from './screen/RegistrationScreen';
import LoginScreen from './screen/Loginscreen';
import StudentHome from './screen/StudentHome';
import TeacherHome from './screen/TeacherHome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TeacherHome" component={TeacherHome} />
        <Stack.Screen name="StudentHome" component={StudentHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
