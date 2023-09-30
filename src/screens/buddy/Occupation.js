import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import IMAGES from "../../utils/images";
import LinearGradient from "react-native-linear-gradient";
import Font from "../../theme";
const OccupationForm = ({ navigation }) => {
  const [Mood, setMood] = useState("");
  const [Location, setLocation] = useState("");
  const [Food, setFood] = useState("");
  return (
    <LinearGradient
      colors={["#FFD39F", "#732D7A"]}
      // colors={[ "#732D7A","#FFD39F",]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 2 }}
      end={{ x: 2, y: 0 }}
    >
      <ScrollView>
        <View style={{ height: "100%" }}>
          <View style={styles.genderHContainer}>
            <Image
              source={IMAGES.yumbuddy}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                marginLeft: 45,
              }}
            />
            <Text style={styles.genderHeading}>Yumm Buddy is Matching</Text>
          </View>

          <View style={styles.optionBoxContainer}>
            <View style={styles.optionBox}>
              <Pressable onPress={() => setMood("Happy")}>
                <View
                  style={
                    Mood == "Happy" ? styles.optionsSeleted : styles.options
                  }
                >
                  <Text style={styles.optionsText}>Happy</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setMood("Sad")}>
                <View
                  style={Mood == "Sad" ? styles.optionsSeleted : styles.options}
                >
                  <Text style={styles.optionsText}>Sad</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setMood("Excited")}>
                <View
                  style={
                    Mood == "Excited"
                      ? styles.optionsDownSeleted
                      : styles.optionsDown
                  }
                >
                  <Text style={styles.optionsText}>Excited</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setMood("Fomo")}>
                <View
                  style={
                    Mood == "Fomo"
                      ? styles.optionsDownSeleted
                      : styles.optionsDown
                  }
                >
                  <Text style={styles.optionsText}>Fomo</Text>
                </View>
              </Pressable>
            </View>
            <View style={styles.optionHeading}>
              <Text style={styles.optionHeadingText}>Your Mood Today</Text>
            </View>
          </View>
          <View style={styles.optionBoxContainer}>
            <View style={styles.optionBoxSecond}>
              <Pressable onPress={() => setFood("North Indian")}>
                <View
                  style={
                    Food == "North Indian"
                      ? styles.optionsSeleted
                      : styles.options
                  }
                >
                  <Text style={styles.optionsText}>North Indian</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setMood("South Indian")}>
                <View
                  style={
                    Mood == "South Indian"
                      ? styles.optionsSeleted
                      : styles.options
                  }
                >
                  <Text style={styles.optionsText}>South Indian</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setFood("Chinese")}>
                <View
                  style={
                    Food == "Chinese"
                      ? styles.optionsDownSeleted
                      : styles.optionsDown
                  }
                >
                  <Text style={styles.optionsText}>Chinese</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setFood("Healthy")}>
                <View
                  style={
                    Food == "Healthy"
                      ? styles.optionsDownSeleted
                      : styles.optionsDown
                  }
                >
                  <Text style={styles.optionsText}>Healthy</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setFood("Sweets")}>
                <View
                  style={
                    Food == "Sweets"
                      ? styles.optionsDownSeleted
                      : styles.optionsDown
                  }
                >
                  <Text style={styles.optionsText}>Sweets</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setFood("Spicy")}>
                <View
                  style={
                    Food == "Spicy"
                      ? styles.optionsDownSeleted
                      : styles.optionsDown
                  }
                >
                  <Text style={styles.optionsText}>Spicy</Text>
                </View>
              </Pressable>
            </View>
            <View style={styles.optionHeading}>
              <Text style={styles.optionHeadingText}>Favorite Food</Text>
            </View>
          </View>
          <View style={styles.optionBoxContainer}>
            <View style={styles.optionBoxSecond}>
              <Pressable onPress={() => setLocation("Delhi")}>
                <View
                  style={
                    Location == "Delhi" ? styles.optionsSeleted : styles.options
                  }
                >
                  <Text style={styles.optionsText}>Delhi</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setLocation("Gurgaon")}>
                <View
                  style={
                    Location == "Gurgaon"
                      ? styles.optionsSeleted
                      : styles.options
                  }
                >
                  <Text style={styles.optionsText}>Gurgaon</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setLocation("Noida")}>
                <View
                  style={
                    Location == "Noida"
                      ? styles.optionsDownSeleted
                      : styles.optionsDown
                  }
                >
                  <Text style={styles.optionsText}>Noida</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setLocation("Lucknow")}>
                <View
                  style={
                    Location == "Lucknow"
                      ? styles.optionsDownSeleted
                      : styles.optionsDown
                  }
                >
                  <Text style={styles.optionsText}>Lucknow</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setLocation("Shimla")}>
                <View
                  style={
                    Location == "Shimla"
                      ? styles.optionsDownSeleted
                      : styles.optionsDown
                  }
                >
                  <Text style={styles.optionsText}>Shimla</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("Home");
                  setLocation("Ranchi");
                }}
              >
                <View
                  style={
                    Location == "Ranchi"
                      ? styles.optionsDownSeleted
                      : styles.optionsDown
                  }
                >
                  <Text style={styles.optionsText}>Ranchi</Text>
                </View>
              </Pressable>
            </View>
            <View style={styles.optionHeading}>
              <Text style={styles.optionHeadingText}>Favourite Place</Text>
            </View>
          </View>

          {/* <View style={styles.GenderFormOptionsContainer}></View>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <View style={styles.GenderFormOptionsContainer}>
          <View style={styles.GenderFormBtn}>
            <Text style={styles.GenderFormOptionsText}>Next</Text>
          </View>
        </View>
      </Pressable> */}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default OccupationForm;

const styles = StyleSheet.create({
  genderHeading: {
    fontSize: 22,
    color: "#fff",
    marginLeft: 22,
    fontFamily:Font.fontFamily.openSansBold
  },
  genderHContainer: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  GenderFormOptions: {
    height: 60,
    width: 300,
    backgroundColor: "#8c4387",
    opacity: 0.5,
    borderRadius: 8,
    marginTop: 40,
    borderColor: "#fff",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GenderFormOptionsSelected: {
    height: 60,
    width: 300,
    backgroundColor: "#8c4387",
    opacity: 0.5,
    borderRadius: 8,
    // marginTop: 40,
    borderColor: "#fb7709",
    borderWidth: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GenderFormBtn: {
    height: 60,
    width: 300,
    backgroundColor: "#fb7709",
    opacity: 0.5,
    borderRadius: 8,
    // marginTop: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GenderFormOptionsText: {
    color: "#fff",
    // fontWeight:"bold",
    fontSize: 20,
    fontFamily:Font.fontFamily.openSansBold
  },
  GenderFormOptionsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  optionBoxContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    position: "relative",
  },
  optionBox: {
    height: 160,
    width: 310,
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 20,
    display: "flex",
    // justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  optionBoxSecond: {
    height: 200,
    width: 310,
    borderColor: "#FFFF",
    borderWidth: 1,
    borderRadius: 20,
    // backgroundColor:'#FFFFFF33',
    display: "flex",
    // justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  optionHeading: {
    position: "absolute",
    height: 40,
    width: 240,
    top: -20,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  optionHeadingText: {
    fontSize: 18,
    // color: "black",
    // fontWeight: "bold",
    fontFamily:Font.fontFamily.openSansBold
  },
  options: {
    height: 40,
    width: 135,
    borderColor: "##FFFF",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#FFFFFF33",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 13,
    marginTop: 40,
  },
  optionsSeleted: {
    height: 40,
    width: 135,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "rgba(245, 102, 14, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 13,
    marginTop: 40,
  },
  optionsDownSeleted: {
    height: 40,
    width: 135,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "rgba(245, 102, 14, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 13,
    marginTop: 10,
  },
  optionsDown: {
    height: 40,
    width: 135,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#FFFFFF33",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 13,
    marginTop: 10,
  },
  optionsText: {
    color: "#fff",
    fontFamily:Font.fontFamily.openSansRegular
  },
});
