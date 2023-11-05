
import React ,{useState}from 'react'
import { View, Text, Image,ScrollView, Pressable  } from "react-native";
import IMAGES from '../../utils/images';
import LinearGradient from "react-native-linear-gradient";
import Font from '../../theme/index';
const Demo = ({navigation}) => {
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
      <ScrollView>
        <View>
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
                  width: 80,
                  height: 30,
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
          <View>
            <Image
              source={IMAGES.buddyPeople}
              style={{ height: 90, width: "100%", resizeMode: "contain" }}
            />
          </View>
          <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                          justifyContent: "space-between",
                        paddingHorizontal: 30,
                        // gap: 70,
                        width:"100%",
                        marginBottom: 10
                    }}>

                    <View style={{
                        height: 30
                    }}>
                        <Pressable onPress={()=>settab("trending")}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 18
                        }}>Trending
                        </Text>
                        </Pressable>
                        {tab=="trending"?<Image source={IMAGES.chatDivider} style={{
                            width: 72,
                            height: 2,
                            marginTop: 2
                        }} />:null}
                    </View>
                    <View style={{
                        height: 30
                    }}>
                        <Pressable onPress={()=>settab("recent")}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 18
                        }}>Recent</Text></Pressable>
                         {tab=="recent"?  <Image source={IMAGES.chatDivider} style={{
                            width: 55,
                            height: 2,
                            marginTop: 2
                        }} />:null}
                    </View>
                    <View style={{
                        height: 30
                    }}>
                         <Pressable onPress={()=>settab("space")}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 18
                        }}>My Space</Text>
                         {tab=="space"?
                          <Image source={IMAGES.chatDivider} style={{
                            width: 80,
                            height: 2,
                            marginTop: 2
                        }} />:null}
                        </Pressable>
                    </View>
                </View>
          <View
            style={[
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
            ]}
          >
            <View
              style={[
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={IMAGES.users}
                style={{
                  width: 20,
                  height: 18,
                  resizeMode: "contain",
                  marginLeft: 22,
                  marginTop: 10,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginLeft: 4,
                  marginTop: 10,
                  fontFamily: Font.fontFamily.baloo,
                }}
              >
                Buddies
              </Text>
            </View>

            <Pressable onPress={()=>navigation.navigate("AllUsers")}>
            <Image
              source={IMAGES.buddyMore}
              style={{
                width: 20,
                height: 18,
                resizeMode: "contain",
                marginRight: 20,
                marginTop: 10,
              }}
            />
            </Pressable>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                borderRadius: 8,
                width: 170,
                height: 135,
                backgroundColor: "#FFFFFF1A",
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Image
                source={IMAGES.CardImage}
                style={{
                  width: "100%",
                  height: 90,
                  marginRight: 20,
                  resizeMode: "contain",
                }}
              />

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{ width: 15, height: 15, marginRight: 20 }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    500+
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyHeart}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    1k+
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyShare}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    37
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderRadius: 8,
                width: 170,
                height: 135,
                backgroundColor: "#FFFFFF1A",
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Image
                source={IMAGES.CardImage}
                style={{
                  width: "100%",
                  height: 90,
                  marginRight: 20,
                  resizeMode: "contain",
                }}
              />

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{ width: 15, height: 15, marginRight: 20 }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    100+
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyHeart}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    50
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyShare}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    40
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderRadius: 8,
                width: 170,
                height: 135,
                backgroundColor: "#FFFFFF1A",
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Image
                source={IMAGES.CardImage}
                style={{
                  width: "100%",
                  height: 90,
                  marginRight: 20,
                  resizeMode: "contain",
                }}
              />

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{ width: 15, height: 15, marginRight: 20 }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    500K+
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyHeart}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    1k+
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyShare}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    40
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={[
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={IMAGES.hotspot}
                style={{
                  width: 20,
                  height: 18,
                  resizeMode: "contain",
                  marginLeft: 22,
                  marginTop: 10,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginLeft: 4,
                  marginTop: 10,
                  fontFamily: Font.fontFamily.baloo,
                }}
              >
                Hotspot
              </Text>
            </View>
            <Pressable onPress={()=>navigation.navigate("Hotspot")}>
            <Image
              source={IMAGES.buddyMore}
              style={{
                width: 20,
                height: 18,
                resizeMode: "contain",
                marginRight: 20,
                marginTop: 10,
              }}
            />
            </Pressable>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                borderRadius: 8,
                width: 170,
                height: 135,
                backgroundColor: "#FFFFFF1A",
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Image
                source={IMAGES.CardImage}
                style={{
                  width: "100%",
                  height: 90,
                  marginRight: 20,
                  resizeMode: "contain",
                }}
              />

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.users}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    500+
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    1k+
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    100+
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderRadius: 8,
                width: 170,
                height: 135,
                backgroundColor: "#FFFFFF1A",
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Image
                source={IMAGES.CardImage}
                style={{
                  width: "100%",
                  height: 90,
                  marginRight: 20,
                  resizeMode: "contain",
                }}
              />

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.users}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    100+
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    50
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    40
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderRadius: 8,
                width: 170,
                height: 135,
                backgroundColor: "#FFFFFF1A",
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Image
                source={IMAGES.CardImage}
                style={{
                  width: "100%",
                  height: 90,
                  marginRight: 20,
                  resizeMode: "contain",
                }}
              />

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{ width: 15, height: 15, marginRight: 20 }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    500K+
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    50
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    40
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={[
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={IMAGES.food}
                style={{
                  width: 20,
                  height: 18,
                  resizeMode: "contain",
                  marginLeft: 22,
                  marginTop: 10,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginLeft: 4,
                  marginTop: 10,
                  fontFamily: Font.fontFamily.baloo,
                }}
              >
                Food
              </Text>
            </View>
            <Pressable onPress={()=>navigation.navigate("Foods")}>
            <Image
              source={IMAGES.buddyMore}
              style={{
                width: 30,
                height: 18,
                resizeMode: "contain",
                marginRight: 20,
                marginTop: 10,
              }}
            />
            </Pressable>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                borderRadius: 8,
                width: 170,
                height: 135,
                backgroundColor: "#FFFFFF1A",
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Image
                source={IMAGES.CardImage}
                style={{
                  width: "100%",
                  height: 90,
                  marginRight: 20,
                  resizeMode: "contain",
                }}
              />

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{ width: 15, height: 15, marginRight: 20 }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    500K+
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyHeart}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    50
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyShare}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    40
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderRadius: 8,
                width: 170,
                height: 135,
                backgroundColor: "#FFFFFF1A",
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Image
                source={IMAGES.CardImage}
                style={{
                  width: "100%",
                  height: 90,
                  marginRight: 20,
                  resizeMode: "contain",
                }}
              />

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{ width: 15, height: 15, marginRight: 20 }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    500K+
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyHeart}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    50
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyShare}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    40
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderRadius: 8,
                width: 170,
                height: 135,
                backgroundColor: "#FFFFFF1A",
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Image
                source={IMAGES.CardImage}
                style={{
                  width: "100%",
                  height: 90,
                  marginRight: 20,
                  resizeMode: "contain",
                }}
              />

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyPic}
                    style={{ width: 15, height: 15, marginRight: 20 }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    500K+
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyHeart}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    50
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={IMAGES.buddyShare}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{ color: "white", fontSize: 10, marginLeft: -15 }}
                  >
                    40
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default Demo