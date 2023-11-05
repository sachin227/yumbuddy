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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from "../utils/icons.js";
import * as Animatable from 'react-native-animatable';
import Hotspots from '../screens/buddy/Hotspots.js';
import Foods from '../screens/buddy/Foods.js';
import Profile from '../screens/profile/index.js';
import UserProfile from '../screens/buddy/Profile.js';
import AllHotspots from '../screens/buddy/AllHotspots.js';
import CreatePost from '../screens/buddy/CreatePost.js';
import Post from '../screens/buddy/Post.js';
import PostSecondScreen from '../screens/buddy/PostSecondScreen.js';
const Tab = createBottomTabNavigator();
const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: Demo },
  { route: 'Search', label: 'Chat', type: Icons.Ionicons, icon: 'chatbubbles-outline', component: ChatHotspot },
  { route: 'Add', label: 'Post', type: Icons.Feather, icon: 'plus-square', component: Post },
  { route: 'Hotspot', label: 'Hotspot', type: Icons.Entypo, icon: 'location', component: AllHotspots },
  { route: 'Profile', label: 'Profile', type: Icons.FontAwesome, icon: 'user-circle-o', component:UserProfile },
];
const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }
const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon type={item.type} name={item.icon} color={focused ? "#fff" : "#732D7A"} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}
const TabNavigator = () => {
  return (
  //   <Tab.Navigator
  //   screenOptions={{
  //     headerShown: false,
  //     tabBarStyle: styles.tabBar,
  //   }}
  // >
  //   {TabArr.map((item, index) => {
  //     return (
  //       <Tab.Screen key={index} name={item.route} component={item.component}
  //         options={{
  //           tabBarShowLabel: false,
  //           tabBarButton: (props) => <TabButton {...props} item={item} />
  //         }}
  //       />
  //     )
  //   })}
  // </Tab.Navigator>
  <Tab.Navigator
  screenOptions={{
    headerShown: false,
    tabBarStyle: styles.tabBar,
  }}
>
  {TabArr.map((item, index) => {
    return (
      <Tab.Screen key={index} name={item.route} component={item.component}
        options={{
          tabBarShowLabel: true,
          tabBarButton: (props) => <TabButton {...props} item={item} />
        }}
      />
    )
  })}
  
</Tab.Navigator>
  );
};

const Navigator = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName={"OtpScreen"} screenOptions={{headerShown:false}}>
       <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
       <Stack.Screen name="Occupation" component={OccupationForm} options={{ headerShown: false }} />
       <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
       <Stack.Screen name="GenderForm" component={GenderForm} options={{ headerShown: false }} />
       <Stack.Screen name="ChatHotspot" component={ChatHotspot} options={{ headerShown: false }} />
       <Stack.Screen name="AllUsers" component={AllUsers} options={{ headerShown: false }} />
       <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
       <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="Foods" component={Foods} options={{ headerShown: false }} />
       <Stack.Screen name="AllHotspots" component={AllHotspots} options={{ headerShown: false }} />
       <Stack.Screen name="CreatePost" component={CreatePost} options={{ headerShown: false }} />
       <Stack.Screen name="PostSecondScreen" component={PostSecondScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    backgroundColor:"rgb(253, 228, 248)"
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "rgb(253, 228, 248)",
    backgroundColor: "rgb(253, 228, 248)",
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#732D7A",
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: "purple",
  }
})