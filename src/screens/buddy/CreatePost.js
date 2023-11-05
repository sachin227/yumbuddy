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
//   import { TextInput } from "react-native"
//   import { FloatingLabelInput } from 'react-native-floating-label-input';
const CreatePost = ({ navigation }) => {
    const [isSelected, setSelection] = useState("chat");
    return (
        <LinearGradient
            colors={["#FFD39F", "#732D7A"]}
            // colors={[ "#732D7A","#FFD39F",]}
            style={styles.container}
            start={{ x: 0, y: 2 }}
            end={{ x: 2, y: 0 }}

        >
            <ScrollView>
            <View style={styles.maincontainer}>

                <View style={styles.editPostContainer}>
                    <Image source={require("../../assests/images/editPost.png")}
                        style={{
                            resizeMode: "contain",
                            height: 80,
                            width: 80
                        }}
                    />

                    <Text style={styles.createPostText}>Create your Hotspot</Text>

                </View>
                <View>
                    <Text style={styles.label}>Hotspot Title</Text>
                    <TextInput
                        style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    />


                    <Text style={styles.label}>Hotspot Tital</Text>
                    <TextInput
                        style={styles.input2}
                    // onChangeText={onChangeNumber}

                    />

                    <Text style={styles.label}>Hotspot is famous for</Text>
                    <View style={styles.famousForContainer}>

                    </View>

                    <View style={styles.famousContainerBoxes}>
                        <View style={styles.famousContainerBox}>
                            <Text style={styles.famousContainerBoxText}>North Indian</Text>
                        </View>
                        <View style={styles.famousContainerBox}>
                            <Text style={styles.famousContainerBoxText}>South Indian</Text>
                        </View>
                        <View style={styles.famousContainerBox}>
                            <Text style={styles.famousContainerBoxText}>Sweets</Text>
                        </View>
                        <View style={styles.famousContainerBox}>
                            <Text style={styles.famousContainerBoxText}>Spicy</Text>
                        </View>
                        <View style={styles.famousContainerBox}>
                            <Text style={styles.famousContainerBoxText}>North Indian</Text>
                        </View>
                        <View style={styles.famousContainerBox}>
                            <Text style={styles.famousContainerBoxText}>Happy</Text>
                        </View>
                    </View>

                    <Image source={IMAGES.chatDivider}
                        style={{
                            // resizeMode: "contain",
                            marginTop:20,
                            height: 2,
                            width: "100%"
                        }}
                    />

                    <View style={styles.selectHeading}>
                        <Text style={styles.selectHeadingText}>
                            Select Location
                        </Text>
                    </View>

                    <Image source={require("../../assests/images/map.png")}
                        style={{
                            // resizeMode: "contain",
                            marginTop:10,
                            height: 2,
                            width: "100%",
                            height:150,
                            borderRadius:8
                        }}
                    />

                    <View style={styles.mapBtnContainer}>
                    <View style={styles.famousContainerBox}>
                            <Text style={styles.famousContainerBoxText}>Nearest Landmark</Text>
                        </View>
                        <View style={styles.famousContainerBox}>
                            <Text style={styles.famousContainerBoxText}>Radius 500 Mtr</Text>
                        </View>
                    </View>

                    <Image source={IMAGES.chatDivider}
                        style={{
                            // resizeMode: "contain",
                            marginTop:20,
                            height: 2,
                            width: "100%"
                        }}
                    />

<View style={styles.selectHeading}>
                        <Text style={styles.selectHeadingText}>
                            Hotspot Media
                        </Text>
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
                </View>

            </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default CreatePost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        // padding: 10,
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
        width: "100%", // Set the width of the input
        height: 50, // Set the height of the input
        borderColor: "#fff", // Set the border color
        borderWidth: 1, // Set the border width
        borderRadius: 6, // Add border radius for rounded corners
        paddingHorizontal: 10, // Add horizontal padding inside the input
        fontSize: 16, // Set the font size
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Set the background color
        marginTop: 8,
        color: "#fff",
    },
    input2: {
        width: "100%", // Set the width of the input
        height: 70, // Set the height of the input
        borderColor: "#fff", // Set the border color
        borderWidth: 1, // Set the border width
        borderRadius: 6, // Add border radius for rounded corners
        paddingHorizontal: 10, // Add horizontal padding inside the input
        fontSize: 16, // Set the font size
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Set the background color
        marginTop: 8,
        color: "#fff",
    },
    input3: {
        width: "100%", // Set the width of the input
        height: 80, // Set the height of the input
        borderColor: "#fff", // Set the border color
        borderWidth: 1, // Set the border width
        borderRadius: 6, // Add border radius for rounded corners
        paddingHorizontal: 10, // Add horizontal padding inside the input
        fontSize: 16, // Set the font size
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Set the background color
        marginTop: 8,
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
        marginTop: 1
    },
    chatmsgTime: {
        marginLeft: "15%"
    },
    createdByTime: {
        marginLeft: "8%"
    },
    PlacesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: "4%",
        marginTop: "5%"
    },
    PlaceAndNameContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    createdByName: {
        color: "rgb(247, 184, 110)"
    },
    createdByText: {
        color: "#F7B86E",
        fontWeight: "bold",
        fontSize: 16
    },
    createText: {
        color: "#fff"
    },
    createTextbtn: {
        //   height:32,
        //   width:"28%",
        borderWidth: 1,
        borderColor: "#fff",
        flexDirection: "row",
        gap: 10,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        paddingHorizontal: 10,
        marginLeft: "40%"
    },
    createBtnMain: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 30,
        // borderWidth:1,
        // borderColor:"red",
        marginTop: 20

    },
    myHotspotText: {
        color: "#fff",
        fontSize: 20
    },
    RecentTextContainer: {
        paddingHorizontal: 25,
        marginTop: 20
    },
    recentText: {
        color: "#fff",
        fontSize: 16
    },
    ImgContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
        paddingHorizontal: 10
    },
    backBtnContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 80,
        marginTop: 20
    },
    backBtnContainerText: {
        color: "#fff",
        fontSize: 20
    },
    maincontainer: {
        padding: 20,
        paddingHorizontal: 20,

    },
    editPostContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 30
    },
    createPostText: {
        color: "#ffff",
        fontSize: 20
    },
    label: {
        color: "#fff",
        marginTop: 20
    },
    famousForContainer: {
        width: "100%", // Set the width of the input
        height: 80, // Set the height of the input
        borderColor: "#fff", // Set the border color
        borderWidth: 1, // Set the border width
        borderRadius: 6, // Add border radius for rounded corners
        paddingHorizontal: 10, // Add horizontal padding inside the input
        fontSize: 16, // Set the font size
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Set the background color
        marginTop: 8,
        color: "#fff",
    },
    famousContainerBoxes: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
        marginTop: 15
    },
    famousContainerBox: {
        backgroundColor: "#711362",
        borderWidth: 1, // Set the border width
        borderRadius: 12, // Add border radius for rounded corners
        borderColor: "#fff",
        padding: 6,
        paddingHorizontal: 14

    },
    famousContainerBoxText: {
        color: "#fff"
    },
    selectHeading:{
        width:"100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    selectHeadingText:{
       color:"#fff",
       fontSize:18,
       marginTop:10
    },
    mapBtnContainer:{
        marginTop:15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap:20
    },
    placeContainer:{
        marginTop:10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap:"wrap",
        // gap:5
    }
});
