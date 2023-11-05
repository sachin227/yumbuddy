import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Pressable,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import LinearGradient from "react-native-linear-gradient";
  import IMAGES from "../../utils/images";
  import CheckBox from "@react-native-community/checkbox";
  import Font from "../../theme";
  import { getApiLevel } from "react-native-device-info";
  const AllHotspots = ({ navigation }) => {
    const [isSelected, setSelection] = useState("chat");
    return (
      <LinearGradient
        colors={["#FFD39F", "#732D7A"]}
        // colors={[ "#732D7A","#FFD39F",]}
        style={styles.container}
        start={{ x: 0, y: 2 }}
        end={{ x: 2, y: 0 }}
  
      >
        {/* <View style={styles.dFlex}>
          <Pressable onPress={() => setSelection("chat")}>
            <View style={isSelected == "chat" ? styles.chatBtnSelected : styles.chatBtn}>
              <Text style={styles.chatBtnText}>Chat</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setSelection("hotspot")}>
            <View style={isSelected == "hotspot" ? styles.chatBtnSelected : styles.chatBtn}>
              <Text style={styles.chatBtnText}>Hotspot Chat</Text>
            </View>
          </Pressable>
        </View> */}
        <View style={styles.ImgContainer} >
        <Image source={IMAGES.buddymenu} 
                  style={{
                    resizeMode: "contain",
                    // height:20,
                    width:50
                  }} 
                  />
                   <Image source={IMAGES.buddyLogo} 
                  style={{
                    resizeMode: "contain",
                    // height:60,
                    width:150
                  }} 
                  />
        </View>
        <View style={styles.backBtnContainer}>
        <Image source={require("../../assests/images/backButton.png")} 
                  style={{
                    resizeMode: "contain",
                    height:20,
                    width:20
          }} 
          />
            <Text style={styles.backBtnContainerText}>Sachin's Hotspot</Text>
        </View>
       <View style={styles.RecentTextContainer}>
       <Text style={styles.recentText}>Recent</Text>
       </View>
    
        <View>
          <View style={styles.PlacesContainer}>
            <View style={styles.PlaceAndNameContainer} >
            <Image source={IMAGES.PlaceBig}
              style={{
                width:70,
                height:70,
                resizeMode: "contain",
              }} />
              <Text style={styles.msgNumber}>Khana </Text>
              <Text style={styles.msgNumber}>Khazana</Text>
              </View>
               <View style={styles.PlaceAndNameContainer} >
            <Image source={IMAGES.PlaceBig}
              style={{
                width:70,
                height:70,
                resizeMode: "contain",
              }} />
              <Text style={styles.msgNumber}>Khana </Text>
              <Text style={styles.msgNumber}>Khazana</Text>
              </View>
               <View style={styles.PlaceAndNameContainer} >
            <Image source={IMAGES.PlaceBig}
              style={{
                width:70,
                height:70,
                resizeMode: "contain",
              }} />
              <Text style={styles.msgNumber}>Khana </Text>
              <Text style={styles.msgNumber}>Khazana</Text>
              </View>
               <View style={styles.PlaceAndNameContainer} >
            <Image source={IMAGES.PlaceBig}
              style={{
                width:70,
                height:70,
                resizeMode: "contain",
              }} />
              <Text style={styles.msgNumber}>Khana </Text>
              <Text style={styles.msgNumber}>Khazana</Text>
              </View>
              <View style={styles.PlaceAndNameContainer} >
            <Image source={IMAGES.PlaceBig}
              style={{
                width:70,
                height:70,
                resizeMode: "contain",
              }} />
              <Text style={styles.msgNumber}>Khana </Text>
              <Text style={styles.msgNumber}>Khazana</Text>
              </View>
          </View>
          <View style={styles.createBtnMain}> 
          <View></View>
            <Text style={styles.myHotspotText}>My Hotspot</Text>
            <View style={styles.createTextbtn}>
            <Image source={IMAGES.addPost} 
                  style={{
                    resizeMode: "contain",
                    height:20,
                    width:20
                  }} 
                  />
            <Pressable onPress={()=>navigation.navigate("CreatePost")}><Text style={styles.createText}>Create New</Text></Pressable>
            </View>
            <View>

            </View>
          </View>
          <ScrollView>
            <View>
              <View style={{
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
              }}>
                <View style={{
                  flexDirection: "row"
                }}>
                  <Image source={IMAGES.chatUser} 
                  style={{
                    width: 400,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: -150
                  }} 
                  />
                  <Image source={"/"} style={{
                    width: 12,
                    height: 12,
                    marginLeft: -185,
                    marginTop: 60
                  }} />
                </View>
                <View style={styles.chatContainer}>
                  <Text style={styles.chatName}>
                    Palika Market (15+ People)
                  </Text>
                  <Text style={styles.chatMsg}>
                  We visited there on Sunday.
                  </Text>
                </View>
                <View style={styles.createdByTime}>
                  {/* <Text style={styles.msgTime}>
                    15 M Ago
                  </Text> */}
                  <View style={styles.createdByContainer}>
                      <Text style={styles.msgNumber}>
                        Created By <Text style={styles.createdByText}>Sachin</Text>
                      </Text>
                    </View>
  
                </View>
              </View>
              <View style={{
                justifyContent: "center",
                alignItems: "center"
              }}>
  
                <Image source={IMAGES.chatDivider} style={{
                  width: 350,
                  height: 100,
                  resizeMode: "contain",
                  marginTop: -50
                }} />
  
              </View>
            </View>
            {[1, 2, 3].map((item, idx) => {
              return (<View key={idx} style={{
                marginTop: -50
              }}>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center"
                }}>
                  <View style={{
                    flexDirection: "row"
                  }}>
                    <Image source={IMAGES.chatUser} style={{
                      width: 400,
                      height: 100,
                      resizeMode: "contain",
                      marginLeft: -150
                    }} />
                    <Image source={"/"} style={{
                      width: 12,
                      height: 12,
                      marginLeft: -185,
                      marginTop: 60
                    }} />
                  </View>
                  <View style={styles.chatContainer}>
                    <Text style={styles.chatName}>
                      Palika Market (15+ People)
                    </Text>
                    <Text style={styles.chatMsg}>
                      We visited there on Sunday.
                    </Text>
                  </View>
                  <View style={styles.createdByTime}>
                    {/* <Text style={styles.msgTime}>
                      15 M Ago
                    </Text> */}
                    <View style={styles.createdByContainer}>
                      <Text style={styles.msgNumber}>
                        Created By <Text style={styles.createdByText}>Sachin</Text>
                      </Text>
                    </View>
  
                  </View>
                </View>
                <View style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}>
  
                  <Image source={IMAGES.chatDivider} style={{
                    width: 350,
                    height: 100,
                    resizeMode: "contain",
                    marginTop: -50
                  }} />
  
                </View>
              </View>)
            })}
  
          </ScrollView>
        </View>
      </LinearGradient>
    );
  };
  
  export default AllHotspots;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      // justifyContent: 'center',
      marginTop: 40,
      alignItems: "center",
      paddingHorizontal: 5
    },
    text: {
      fontSize: 24,
      color: "white",
      fontWeight: "bold",
      fontFamily: Font.fontFamily.openSansBold
    },
    input: {
      width: 289, // Set the width of the input
      height: 50, // Set the height of the input
      borderColor: "#fff", // Set the border color
      borderWidth: 1, // Set the border width
      borderRadius: 6, // Add border radius for rounded corners
      paddingHorizontal: 74, // Add horizontal padding inside the input
      fontSize: 16, // Set the font size
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Set the background color
      marginTop: 20,
      color: "#fff",
    },
    inputContainer: {
      position: "relative",
    },
  
    GenderFormBtn: {
      height: 45,
      width: 280,
      backgroundColor: "#FB780A",
      borderRadius: 8,
      marginTop: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#fff", // Set the border color
      borderWidth: 1,
    },
    dFlex: {
      flexDirection: "row",
      gap: 20,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40
    },
    chatBtn: {
      height: 40,
      width: 150,
      borderWidth: 2,
      borderColor: "#fff",
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    chatBtnSelected: {
      height: 40,
      width: 150,
      borderWidth: 2,
      borderColor: "#fff",
      borderRadius: 6,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FB780A"
    },
    chatBtnText: {
      color: "#fff",
      fontSize: 16
    },
    chatPeopleContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30
    },
    chatName: {
      color: "#fff",
      fontWeight: "bold"
    },
    chatMsg: {
      color: "#fff",
      marginTop: 5
    },
    chatContainer: {
      marginLeft: 10
  
    },
    msgTime: {
      color: "#fff"
    },
    msgNumberContainer: {
      height: 22,
      width: 22,
      backgroundColor: "rgb(233, 66, 66))",
      borderColor: "#fff",
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
      marginTop: 6
    },
    createdByContainer: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
      marginTop: 6
    },
    msgNumber: {
      color: "#fff",
      fontSize: 11,
      marginTop:1
    },
    chatmsgTime: {
      marginLeft: "15%"
    },
    createdByTime: {
      marginLeft: "8%"
    },
    PlacesContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      gap:5,
      paddingHorizontal:"4%",
      marginTop:"5%"
    },
    PlaceAndNameContainer:{
      justifyContent:"center",
      alignItems:"center"
    },
    createdByName:{
      color:"rgb(247, 184, 110)"
    },
    createdByText:{
        color:"#F7B86E",
        fontWeight:"bold",
        fontSize:16
    },
    createText:{
        color:"#fff"
    },
    createTextbtn:{
    //   height:32,
    //   width:"28%",
      borderWidth:1,
      borderColor:"#fff"  ,
      flexDirection:"row",
      gap:10,
      borderRadius:16,
      justifyContent:"center",
      alignItems:"center",
      padding:6,
      paddingHorizontal:10,
      marginLeft:"40%"
    },
createBtnMain:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    paddingHorizontal:30,
    // borderWidth:1,
    // borderColor:"red",
    marginTop:20

},
myHotspotText:{
    color:"#fff",
    fontSize:20
},
RecentTextContainer:{
    paddingHorizontal:25,
    marginTop:20
},
recentText:{
    color:"#fff",
    fontSize:16
},
ImgContainer:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginTop:20,
    paddingHorizontal:10
},
backBtnContainer:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    paddingHorizontal:20,
    gap:80,
    marginTop:20
},
backBtnContainerText:{
    color:"#fff",
    fontSize:20
}
 });
  