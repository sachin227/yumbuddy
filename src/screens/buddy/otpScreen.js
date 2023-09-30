import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import IMAGES from "../../utils/images";
import CheckBox from "@react-native-community/checkbox";
import Font from "../../theme";
const OtpScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <LinearGradient
      colors={["#FFD39F", "#732D7A"]}
      // colors={[ "#732D7A","#FFD39F",]}
      style={styles.container}
      start={{ x: 0, y: 2}}
      end={{ x: 2, y:0 }}
      
    >
      {/* Your content here */}
      <View style={styles.content}>
        <Text style={[styles.text]}>Enter Phone Number</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} maxLength={10} />
          <View
            style={{
              position: "absolute",
              top: 35,
              left: 10,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image source={IMAGES.flag} />
            <Text style={{ marginLeft: 5, color: "#fff", fontSize: 16,fontFamily:Font.fontFamily.openSansRegular }}>
              +91
            </Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Image source={IMAGES.buddySecure} />
          <Text style={{ color: "#FFFFFF80", fontSize: 12.5, marginLeft: 5,fontFamily:Font.fontFamily.openSansRegular }}>
            Your number is squared with 128-AES Encryption{" "}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 100,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            tintColors={{ false: "#fff" }}
            style={{ marginLeft: -10 }}
          />
          <Text style={{ color: "#FFFFFF80", fontSize: 12.5, marginLeft: 5,fontFamily:Font.fontFamily.openSansRegular}}>
            I accept Terms & Condition and Privacy policy
          </Text>
        </View>
        <View style={styles.GenderFormOptionsContainer}>
          <Pressable onPress={
            // () => navigation.navigate("GenderForm")
            () => navigation.navigate("OtpVerification")
            }>
            <View style={styles.GenderFormBtn}>
              <Text style={{ color: "#fff", fontFamily:'bold', fontWeight:'800',fontFamily:Font.fontFamily.openSansRegular}}>Get OTP</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal:5
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    fontFamily:Font.fontFamily.openSansBold
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
});
