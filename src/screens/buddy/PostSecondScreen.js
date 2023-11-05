
import React, { useState } from 'react'
import { View, Text, Image, ScrollView, Pressable, StyleSheet,TextInput } from "react-native";
import IMAGES from '../../utils/images';
import LinearGradient from "react-native-linear-gradient";
import Font from '../../theme/index';
const PostSecondScreen = ({ navigation }) => {
    const [tab, settab] = useState("trending")
    return (
        <LinearGradient
            colors={["#FFD39F", "#732D7A"]}
            // colors={[ "#732D7A","#FFD39F",]}
            // style={styles.container}
            style={{ flex: 1 }}
            start={{ x: 0, y: 2 }}
            end={{ x: 2, y: 0 }}
        >

            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 10
                    }}
                >
                    <Image
                        source={IMAGES.buddymenu}
                        style={{
                            width: 30,
                            height: 40,
                            resizeMode: "contain",
                            marginLeft: 15,
                        }}
                    />
                    <Image
                        source={IMAGES.buddyLogo}
                        style={{
                            width: 150,
                            height: 50,
                            resizeMode: "contain",
                            margin: 10,
                        }}
                    />
                </View>

                <View>
                    <Image
                        source={IMAGES.buddybell}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                            marginRight: 20,
                        }}
                    />
                </View>
            </View>

            <View style={styles.mainContainer}>
                <View>
                    <Image
                        source={require("../../assests/images/PostImage.png")}
                        style={{
                            width: "100%",
                            // height: "50%",
                            resizeMode: "contain",
                            // margin: 10,
                        }}
                    />
              
                </View>
       
                <Text style={styles.label}>Hotspot Title</Text>
                    <TextInput
                        style={styles.input}
                    />
          
          <Text style={styles.label}>Tag People</Text>
                    <TextInput
                        style={styles.input}
                    />

<Text style={styles.label}>Location</Text>
                    <TextInput
                        style={styles.input}
                    />

<View style={styles.SavePostContainer}>
<View style={styles.SaveBtnContainer} ><Text style={styles.NextBtnText}>Save</Text></View>
<View style={styles.NextBtnContainer} ><Text style={styles.NextBtnText}>Post</Text></View>

</View>
          {/* <View style={styles.NextBtnContainer} ><Text style={styles.NextBtnText}>Next</Text></View> */}

            </View>

        </LinearGradient>
    );
}

export default PostSecondScreen;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        // flexDirection:"row",
        // justifyContent: "flex-end",
        // alignItems: "flex-end" ,
    },
    cameraContainer: {
        height: 270,
        width: "100%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 16,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal:60,
        position:"relative"
    },
    cameraContainerText:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center" ,
        width:"100%",
        marginTop:30,
        position:"absolute",
        bottom:30
    },
    cameraText:{
        color:"#fff"
    },
    PhotoVideoGalleryContainer:{
        height:40,
        width:"100%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 12,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:50,
        marginTop:30
    },
    Divider:{
       height:30,
       width:2,
       backgroundColor:"#fff" 
    },
    PhotoVideoGalleryText:
    {
       color:"#fff" 
    },
    RecentTextContainer:{
        width:"30%",
        height:35,
        borderWidth: 1,
        borderColor: "#fff",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:50,
        borderRadius:8,
        marginTop:20
    },
    RecentText:{
        color:"#fff"
    },
    placeContainer:{
        marginTop:20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap:"wrap",
        // gap:5
    },
    NextBtnContainer:{
        backgroundColor:"#FB780A",
        borderWidth:1,
        borderColor:"#fff",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width:"30%",
        height:40,
        borderRadius:8,
        marginTop:10,
        // marginLeft:"70%"
    },
    NextBtnText:{
        color:"#fff",
        fontSize:18
    },
    NextBtnMain:{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width:"100%",
    },
    label: {
        color: "#fff",
        marginTop: 30
    },
    input: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        borderColor:"#fff",
        // padding: 10,
        borderRadius:8,
        width:"100%"
    },
    SavePostContainer:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        marginTop:30
    },
    SaveBtnContainer:{
        backgroundColor:"#5B195A",
        borderWidth:1,
        borderColor:"#F76B0D",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width:"30%",
        height:40,
        borderRadius:8,
        marginTop:10,
    }
})

