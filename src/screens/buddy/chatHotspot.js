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
const ChatHotspot = ({ navigation }) => {
  const [isSelected, setSelection] = useState("chat");
  return (
    <LinearGradient
      colors={["#FFD39F", "#732D7A"]}
      // colors={[ "#732D7A","#FFD39F",]}
      style={styles.container}
      start={{ x: 0, y: 2 }}
      end={{ x: 2, y: 0 }}

    >
      <View style={styles.dFlex}>
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
      </View>
      {isSelected == "chat" ? 
      <View>
        <View style={styles.chatPeopleContainer}>
          <Image source={IMAGES.buddyPeople} style={{
            width: "100%",
            height: 100,
            resizeMode: "contain",
          }} />
        </View>
        <ScrollView>
          <View>
            <View style={{
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              width:"100%"
            }}>
              <View style={{
                flexDirection: "row",
                justifyContent:"start",
                
              }}>
                <Image source={IMAGES.chatUser} style={{
                  width: 400,
                  height: 100,
                  resizeMode: "contain",
                  marginLeft: -150
                }} />
                <Image source={IMAGES.chatOnline} style={{
                  width: 12,
                  height: 12,
                  marginLeft: -185,
                  marginTop: 60
                }} />
              </View>
              <View style={styles.chatContainer}>
                <Text style={styles.chatName}>
                  Shivam
                </Text>
                <Text style={styles.chatMsg}>
                  Good Morning, How are you?
                </Text>
              </View>
              <View style={styles.chatmsgTime}>
                <Text style={styles.msgTime}>
                  15 M Ago
                </Text>
                <View style={styles.msgNumberContainer}>
                  <Text style={styles.msgNumber}>
                    80
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => {
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
                  <Image source={IMAGES.chatOnline} style={{
                    width: 12,
                    height: 12,
                    marginLeft: -185,
                    marginTop: 60
                  }} />
                </View>
                <View style={styles.chatContainer}>
                  <Text style={styles.chatName}>
                    Shivam
                  </Text>
                  <Text style={styles.chatMsg}>
                    Good Morning, How are you?
                  </Text>
                </View>
                <View style={styles.chatmsgTime}>
                  <Text style={styles.msgTime}>
                    15 M Ago
                  </Text>
                  <View style={styles.msgNumberContainer}>
                    <Text style={styles.msgNumber}>
                      80
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
      </View> : 
      <View>
        <View style={styles.PlacesContainer}>
          <View style={styles.PlaceAndNameContainer} >
          <Image source={IMAGES.PlaceBig}
            style={{
              width:86,
              height:86,
              resizeMode: "contain",
            }} />
            <Text style={styles.msgNumber}>Palika </Text>
            <Text style={styles.msgNumber}>Market</Text>
            </View>
             <View style={styles.PlaceAndNameContainer} >
          <Image source={IMAGES.PlaceBig}
            style={{
              width:86,
              height:86,
              resizeMode: "contain",
            }} />
            <Text style={styles.msgNumber}>Palika </Text>
            <Text style={styles.msgNumber}>Market</Text>
            </View>
             <View style={styles.PlaceAndNameContainer} >
          <Image source={IMAGES.PlaceBig}
            style={{
              width:86,
              height:86,
              resizeMode: "contain",
            }} />
            <Text style={styles.msgNumber}>Palika </Text>
            <Text style={styles.msgNumber}>Market</Text>
            </View>
             <View style={styles.PlaceAndNameContainer} >
          <Image source={IMAGES.PlaceBig}
            style={{
              width:86,
              height:86,
              resizeMode: "contain",
            }} />
            <Text style={styles.msgNumber}>Palika </Text>
            <Text style={styles.msgNumber}>Market</Text>
            </View>
           
        </View>
        <ScrollView>
          <View>
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
                <Text style={styles.msgTime}>
                  15 M Ago
                </Text>
                <View style={styles.createdByContainer}>
                  <Text style={styles.msgNumber}>
                    Created By <Text styles={styles.createdByName}>Sachin</Text>
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
          {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => {
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
                  <Text style={styles.msgTime}>
                    15 M Ago
                  </Text>
                  <View style={styles.createdByContainer}>
                    <Text style={styles.msgNumber}>
                      Created By <Text styles={styles.createdByName}>Sachin</Text>
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
      </View>}
      <View>
        <View style={styles.chatPeopleContainer}>
          <Image source={IMAGES.buddyPeople} style={{
            width: 400,
            height: 100,
            resizeMode: "contain",
          }} />
        </View>
        <ScrollView>
          <View>
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
                  Shivam
                </Text>
                <Text style={styles.chatMsg}>
                  We visited there on Sunday.
                </Text>
              </View>
              <View style={styles.createdByTime}>
                <Text style={styles.msgTime}>
                  15 M Ago
                </Text>
                <View style={styles.createdByContainer}>
                  <Text style={styles.msgNumber}>
                    Created By <Text styles={styles.createdByName}>Sachin</Text>
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
          {[1, 2, 3, 4].map((item, idx) => {
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
                    Shivam
                  </Text>
                  <Text style={styles.chatMsg}>
                    We visited there on Sunday.
                  </Text>
                </View>
                <View style={styles.createdByTime}>
                  <Text style={styles.msgTime}>
                    15 M Ago
                  </Text>
                  <View style={styles.createdByContainer}>
                    <Text style={styles.msgNumber}>
                      Created By <Text styles={styles.createdByName}>Sachin</Text>
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

export default ChatHotspot;

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
    fontSize: 12,
  },
  chatmsgTime: {
    marginLeft: "15%"
  },
  createdByTime: {
    marginLeft: "10%"
  },
  PlacesContainer:{
    flexDirection:"row",
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
  }
});
