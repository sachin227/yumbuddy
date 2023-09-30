import { StyleSheet, Text, View,Pressable,Image,FlatList,Dimensions } from 'react-native'
import React,{useState} from 'react'
import IMAGES from '../../utils/images'
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get("window");
const Onboarding = ({ navigation }) => {
     const [currentIndex, setCurrentIndex] = useState(0);
let list_data=[
    {
 id:1,
 image:IMAGES.buddyMainLogo
},
    {
 id:2,
 image:IMAGES.buddyMainLogo
},
    {
 id:3,
 image:IMAGES.buddyMainLogo
},
    {
 id:4,
 image:IMAGES.buddyMainLogo
},
   

]
  return (
    <LinearGradient
    colors={["#FFD39F", "#732D7A"]}
    // colors={[ "#732D7A","#FFD39F",]}
    style={styles.container}
    start={{ x: 0, y: 2}}
    end={{ x: 2, y:0 }}
    
  >
    {/* //<View style={styles.SplashMainContainer} > */}
    <View
      style={{
        // marginTop: 20,
        //  backgroundColor:"#5a297a",
        //  height:800
      }}
    >
      <View>
        <FlatList
          data={list_data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <>
              <View style={{
                  width: 395,
                  height: 100,
                 display:"flex",
                 marginTop: 200,
                 justifyContent:"center",
                 alignItems:"center"
                }}>
            <Image
                source={item.image}
                style={{
                  width: 150,
                  height: 120,
                  resizeMode: "contain",
                  marginBottom: 35,
                }}
              />
              </View>
              </>
            );
          }}
        />
      </View>


        <View
          style={{
            flexDirection: "row",
            width: width,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          {list_data?.map((item, index) => {
            return currentIndex == index ? (
            //   <Image
            //     key={index}
            //     source={IMAGES.SLIDER_SCROLL_RED}
            //     style={{ marginRight: 7,}}
            //   />/
              <View style={{
             height:8,
             width:20,
             borderRadius:10,
              marginLeft:5,
             backgroundColor:"#FB780A"
          }}>

            </View>
          
            ) : (
             <View style={{
             height:10,
             width:10,
             borderRadius:10,
             marginLeft:5,
             backgroundColor:"#8c4387"
          }}>

            </View>
            );
          })}
        </View>
  
        <View style={styles.GenderFormOptionsContainer}>
         <View style={styles.GenderFormBtn}>
            <Pressable onPress={()=>navigation.navigate("GenderForm")}>
         <Text style={styles.GenderFormOptionsText}>Get Started</Text>
         </Pressable>
    </View >
    </View>
    </View>
 

</LinearGradient>
  )
}

export default Onboarding

const styles = StyleSheet.create({
SplashMainContainer:{
   backgroundColor:"#5a297a",
//    height:"100%",
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

GenderFormBtn:{
   height:60,
    width:300,
    backgroundColor:"#FB780A",
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
      marginTop:100
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
   height:50,
    width:300,
    backgroundColor:"#fb7709",
    // opacity:0.5,
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
      marginTop:300,
      marginBottom:100
}
})