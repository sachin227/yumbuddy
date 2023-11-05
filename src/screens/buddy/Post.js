
import React, { useState } from 'react'
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from "react-native";
import IMAGES from '../../utils/images';
import LinearGradient from "react-native-linear-gradient";
import Font from '../../theme/index';
const Post = ({ navigation }) => {
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
                <View style={styles.cameraContainer}>
                    <Image
                        source={require("../../assests/images/camera.png")}
                        style={{
                            width: 350,
                            // height: 50,
                            resizeMode: "contain",
                            margin: 10,
                        }}
                    />
                 <View style={styles.cameraContainerText} >
                    <Text style={styles.cameraText}>Take Photo</Text>
                    <Text style={styles.cameraText}>Choose From Gallery</Text>
                 </View>
                </View>
                <View style={styles.PhotoVideoGalleryContainer}>
                 <Text style={styles.PhotoVideoGalleryText}>Photo</Text>
                 <View style={styles.Divider}></View>
                 <Text style={styles.PhotoVideoGalleryText}>Video</Text>
                 <View style={styles.Divider}></View>
                 <Text style={styles.PhotoVideoGalleryText}>Story</Text>
                </View>

                <View style={styles.RecentTextContainer}>
                    <Text style={styles.RecentText}>Recent Media</Text>
                </View>

                <View style={styles.placeContainer}>
                    <Image source={IMAGES.PlaceBig}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10 
                            // width: "100%"
                        }}
                    />
                     <Image source={IMAGES.PlaceBig}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10 
                            // width: "100%"
                        }}
                    />
                     <Image source={IMAGES.PlaceBig}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10 
                            // width: "100%"
                        }}
                    />
                     <Image source={IMAGES.PlaceBig}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10 
                            // width: "100%"
                        }}
                    />
                     <Image source={IMAGES.PlaceBig}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10 
                            // width: "100%"
                        }}
                    />
                    <Image source={IMAGES.PlaceBig}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10 
                            // width: "100%"
                        }}
                    />
                    <Image source={IMAGES.PlaceBig}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10 
                            // width: "100%"
                        }}
                    />
                    <Image source={IMAGES.PlaceBig}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10 
                            // width: "100%"
                        }}
                    />
                    <Image source={IMAGES.PlaceBig}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10 
                            // width: "100%"
                        }}
                    />
                    <Image source={IMAGES.PlaceBig}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10 
                            // width: "100%"
                        }}
                    />
                    </View>

         <Pressable onPress={()=>navigation.navigate("PostSecondScreen")}><View style={styles.NextBtnContainer} ><Text style={styles.NextBtnText}>Next</Text></View></Pressable>

            </View>

        </LinearGradient>
    );
}

export default Post;

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
        marginLeft:"70%"
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
    }
})

