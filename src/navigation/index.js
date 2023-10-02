// import * as React from 'react';
// import { View, Text, Alert, BackHandler } from 'react-native';
// import { NavigationContainer, useRoute } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { useDispatch } from 'react-redux';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import Demo from '../screens/buddy/home.js';
import GenderForm from '../screens/buddy/GenderForm.js';
import Onboarding from '../screens/buddy/onboarding.js';
import OccupationForm from '../screens/buddy/Occupation.js';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
import OtpScreen from '../screens/buddy/otpScreen.js';
import OtpVerification from '../screens/buddy/otpVerification.js';
import ChatHotspot from '../screens/buddy/chatHotspot.js';
import AllUsers from '../screens/buddy/AllUsers.js';
const navigationRef = React.createRef();


// const DrawerNavigator = () => {

//     const dispatch = useDispatch();
//     const HomeScreenOptions = {
//         title: 'Home',
//         headerTitleAlign: 'center',
//         headerStyle: {
//             backgroundColor: '#2BC7C9',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         },
//         headerShown: false
//     };
//     React.useEffect(() => {
//         function handleBackButton() {
//             // @ts-ignore

//             const routeInfo = navigationRef.current.getCurrentRoute()
//             console.log('routein', routeInfo)
//             if (routeInfo.name === "Home") {
//                 exitApp()
//             }
//             else {
//                 // @ts-ignore
//                 if (navigationRef.current.canGoBack()) {
//                     // @ts-ignore
//                     navigationRef.current.goBack()
//                 }
//             }
//             return true;
//         }

//         const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

//         return () => backHandler.remove();
//     }, []);
//     const exitApp = () => {
//         Alert.alert(
//             'Exit App',
//             'Are you sure you want to exit?', [{
//                 text: 'Cancel',
//                 onPress: () => { },
//                 style: 'cancel'
//             }, {
//                 text: 'OK',
//                 onPress: () => BackHandler.exitApp()
//             },], {
//             cancelable: false
//         }
//         )
//     }

//     return (
//         <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
//             <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
//             {/* <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
//         </Drawer.Navigator>


//     );
// }

const Navigator = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
       <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
       <Stack.Screen name="Occupation" component={OccupationForm} options={{ headerShown: false }} />
       <Stack.Screen name="Home" component={Demo} options={{ headerShown: false }} />
       <Stack.Screen name="GenderForm" component={GenderForm} options={{ headerShown: false }} />
       <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
       <Stack.Screen name="ChatHotspot" component={ChatHotspot} options={{ headerShown: false }} />
       <Stack.Screen name="AllUsers" component={AllUsers} options={{ headerShown: false }} />
       {/* <Stack.Screen name="ChatHotspot" component={ChatHotspot} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigator;