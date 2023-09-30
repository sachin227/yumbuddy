import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import OtpInputs from "react-native-otp-inputs";
import IMAGES from "../../utils/images";
// import { Facebook } from "../../utils/images/fb";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
// import  Facebook  from "../../assests/images/mobile.svg";
const GenderForm = ({ navigation }) => {
  const [selected, setselected] = useState("Female");
  // let svgImage = Facebook;
  // console.log(svgImage);
  return (
    <LinearGradient
      colors={["#FFD39F", "#732D7A"]}
      // colors={[ "#732D7A","#FFD39F",]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 2 }}
      end={{ x: 2, y: 0 }}

      // (318.09deg, #732D7A -11.26%, #FFD39F 197.58%),
      // (331.96deg, #732D7A 12.67%, #FFD39F 150.64%),
      // useAngle={true}
      // angle={331.96}
      // locations={[.12, 1.50]}
      // colors={['#732D7A', '#FFD39F']}
    >
      <ScrollView>
        <View style={{ height: "100%" }}>
          <View style={styles.genderHContainer}>
            <Image
              source={IMAGES.buddySlider}
              style={{
                width: 200,
                height: 200,
                resizeMode: "contain",
                // marginBottom: 35,
              }}
            />
            <TextInput
              placeholder="Your Name"
              placeholderTextColor="#fff"
              style={styles.input}
            />
            <TextInput
              placeholder="Gender"
              placeholderTextColor="#fff"
              style={styles.input}
            />
            <TextInput
              placeholder="Age"
              placeholderTextColor="#fff"
              style={styles.input}
            />
            <TextInput
              placeholder="Refferal Code"
              placeholderTextColor="#fff"
              style={styles.input}
            />
          </View>

          <View style={styles.GenderFormOptionsContainer}>
            <Pressable onPress={() => navigation.navigate("Occupation")}>
              <View style={styles.GenderFormBtn}>
                <Text style={{ color: "#fff" }}>Sign In</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.genderHContainer}>
            <Text style={{ fontSize: 24, color: "#fff" }}>OR</Text>
          </View>
          <View style={styles.GenderFormOptionsContainer}>
            <Pressable onPress={() => navigation.navigate("Occupation")}>
              <View style={styles.GenderFormBtn}>
                <Text style={{ color: "#fff" }}>Sign Up With</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.socialContainer}>
            <Image
              source={IMAGES.google}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                marginLeft: 45,
              }}
            />
            <Image
              source={IMAGES.insta}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                marginLeft: 30,
              }}
            />
            <Image
              source={IMAGES.twitter}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                marginLeft: 30,
              }}
            />
            {/* <Facebook height={30} width={30}></Facebook> */}
            <Image
              source={IMAGES.fb}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                marginLeft: 30,
              }}
            />
            {/* <SvgXml xml={svgImage} width="100" height="100" /> */}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default GenderForm;

const styles = StyleSheet.create({
  genderHeading: {
    fontSize: 30,
    color: "#fff",
  },
  genderHContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  GenderFormOptions: {
    height: 50,
    width: 300,
    backgroundColor: "#F4F4F4",
    // opacity:0.5,
    borderRadius: 8,
    marginTop: 40,
    borderColor: "#fff",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GenderFormOptionsSelected: {
    height: 55,
    width: 300,
    backgroundColor: "#F4F4F4",
    // opacity:0.5,
    borderRadius: 8,
    marginTop: 40,
    borderColor: "#FB780A",
    borderWidth: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GenderFormBtn: {
    height: 50,
    width: 320,
    backgroundColor: "#FB780A",
    // opacity:0.5,
    borderRadius: 8,
    //  borderColor:"#fff",
    //    borderWidth:1,
    // marginTop: 60,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GenderFormOptionsText: {
    color: "black",
    // fontWeight:"bold",
    fontSize: 20,
  },
  GenderFormOptionsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 40,
  },
  socialContainer: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
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
    textAlign: "center",
  },
  GenderFormBtn: {
    height: 45,
    width: 290,
    backgroundColor: "#FB780A",
    borderRadius: 8,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff", // Set the border color
    borderWidth: 1,
  },
});
