import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './Screens/HomeScreen';
import VitalsInput from './Screens/VitalsInput';
import MessageScreen from './Screens/MessagesScreen';
import ChatScreen from './Screens/ChatScreen'

import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';

const Stack = createNativeStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
            backgroundColor: "#3740FE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            fontWeight: "bold",
            },
        }}>
        <Stack.Screen 
            name="Signup" 
            component={Signup} 
            options={{ title: "Signup" }}
        />       
        <Stack.Screen 
            name="Login" 
            component={Login} 
            options={
            { title: "Login" },
            { headerLeft: null } 
            }
        />
        <Stack.Screen 
            name="Dashboard" 
            component={HomeScreen} 
            options={
            { title: "Dashboard" },
            { headerLeft: null } 
            }
        />
        <Stack.Screen
            name='RecordVitals'
            component={VitalsInput}
        />
        <Stack.Screen
            name='MessageScreen'
            component={MessageScreen}
        />
        <Stack.Screen
            name = 'ChatScreen'
            component={ChatScreen}
        />
        </Stack.Navigator>
    );
}

export default function App() {
return (
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName='Home page'>
//                 <Stack.Screen
//                     name='Home Page'
//                     component={HomeScreen}
//                     options={{
//                         headerShown: false,
//                     }}
//                 />
                // <Stack.Screen
                //     name='RecordVitals'
                //     component={VitalsInput}
                // />
                // <Stack.Screen
                //     name='MessageScreen'
                //     component={MessageScreen}
                // />
                // <Stack.Screen
                //     name = 'ChatScreen'
                //     component={ChatScreen}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     },
// });
