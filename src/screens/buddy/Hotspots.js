
import React, { useState } from 'react'
import { View, Text, Image, ScrollView, Pressable,StyleSheet } from "react-native";
import IMAGES from '../../utils/images';
import LinearGradient from "react-native-linear-gradient";
import Font from '../../theme/index';
const Hotspots = ({ navigation }) => {
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
                <View style={{ justifyContent:"center",alignItems:"center",flexDirection:"row" }}>
                    <Image
                        source={IMAGES.foodMain}
                        style={{ height: 98, width: "90%",resizeMode:"cover" }}
                    />
                </View>
                <View style={styles.filterMain}>


                 <View style={styles.filterContainer}>
                 <Image
                        source={IMAGES.Filter}
                        style={{height:25, resizeMode:"contain" }}
                    />
                    <View style={styles.divider} >

                    </View>
                    <Text style={styles.filterText}>
                        Location
                    </Text>
                    <View style={styles.divider} >

</View>
<Text style={styles.filterText}>
    Rating
</Text>
<View style={styles.divider} >

</View>
<Text style={styles.filterText}>
    Food Type
</Text>
<View style={styles.divider} >

</View>
<Text style={styles.filterText}>
   Likes
</Text>
                 </View>
                 </View>
                <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap"
                    }}>
                    {[1, 2, 3, 4, 5, 6].map(() => {
                        return (<View
                            style={{
                                borderRadius: 8,
                                width: "43%",
                                height: 135,
                                backgroundColor: "#FFFFFF1A",
                                marginLeft: 20,
                                marginTop: 5,
                                marginBottom: 10,
                            }}
                        >
                            <View  style={{
                                   position:"relative"
                                }}>
                            <Image
                                source={IMAGES.hotsopts}
                                style={{
                                    width: "100%",
                                    height: 90,
                                    marginRight: 20,
                                    resizeMode: "contain",
                                }}
                            />
                            <View  style={{
                                   position:"absolute",
                                   height:20,
                                   width:95,
                                   bottom:5,
                                   left:5,
                                   backgroundColor: 'rgba(0, 0, 0, 0.40)',
                                   borderRadius: 8,
                                   borderWidth: 1,
                                   borderColor: 'rgba(255, 255, 255, 0.18)',
                                   shadowRadius: 32,
                                   shadowOpacity: 4,
                                   alignItems:"center",
                                   justifyContent:"center"
                                }}>

                                    <Text  style={{
                                   color:"#fff",
                                   fontSize:9
                                }}>Palika Market, Delhi</Text>
                                </View>
                       </View>
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
                                        marginLeft: 5,
                                        marginTop: 10,
                                    }}
                                >
                                    <Image
                                        source={IMAGES.users}
                                        style={{ width: 15, height: 15, marginRight: 20,resizeMode: "contain", }}
                                    />
                                    <Text
                                        style={{ color: "white", fontSize: 10, marginLeft: -18 }}
                                    >
                                        500+
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginLeft: 8,
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
                                        marginLeft: 8,
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
                                        10
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginLeft: 7,
                                        marginTop: 10,
                                    }}
                                >
                                    <Image
                                        source={IMAGES.foodStall}
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
                        </View>)
                    })}
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export default Hotspots;

const styles = StyleSheet.create({
    filterContainer:{
        height:40,
        width:"100%",
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:11,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:10
    },
    filterMain:{
    padding:20,
     justifyContent:"center",
     alignItems:"center"
    },
    divider:{
     height:25,
     width:1,
     backgroundColor:"#fff"
    },
    filterText:{
    color:"#fff",
    fontSize:17
    }
})