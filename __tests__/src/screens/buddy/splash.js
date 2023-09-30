import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React,{useState} from 'react'
import IMAGES from '../../utils/images'
import LinearGradient from "react-native-linear-gradient";

const Splash = ({ navigation }) => {
    const [selected, setselected] = useState("Female")
  return (
    <LinearGradient
    colors={["#FFD39F", "#732D7A"]}
      style={styles.container}
      start={{ x: 0, y: 2}}
      end={{ x: 2, y:0 }}
  >
      <View style={styles.SplashMainContainer} >
<Image
                source={IMAGES.buddyMainLogo}
                style={{
                  width: 140,
                  height: 140,
                  resizeMode: "contain",
                  marginBottom: 35,
                }}
              />
       
    </View>
    </LinearGradient>
 
   
  )
}

export default Splash

const styles = StyleSheet.create({
SplashMainContainer:{
   height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
},
genderHContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:50
},
GenderFormOptions:{
    height:60,
    width:300,
    backgroundColor:"#8c4387",
    opacity:0.5,
    borderRadius:8,
    marginTop:40,
    borderColor:"#fff",
    borderWidth:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",

},
GenderFormOptionsSelected:{
  height:60,
    width:300,
    backgroundColor:"#8c4387",
    opacity:0.5,
    borderRadius:8,
    marginTop:40,
    borderColor:"#fb7709",
    borderWidth:4,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
},
GenderFormBtn:{
   height:60,
    width:300,
    backgroundColor:"#fb7709",
    opacity:0.5,
    borderRadius:8,
    marginTop:60,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
},
GenderFormOptionsText:{
    color:"#fff",
    // fontWeight:"bold",
    fontSize:20
},
GenderFormOptionsContainer:{
    display:"flex",
    justifyContent:"center",
      alignItems:"center",
      marginTop:40
}
})