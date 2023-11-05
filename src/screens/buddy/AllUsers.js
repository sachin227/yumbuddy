
import React, { useState } from 'react'
import { View, Text, Image, ScrollView, Pressable, StyleSheet, FlatList, Dimensions } from "react-native";
import IMAGES from '../../utils/images';
import LinearGradient from "react-native-linear-gradient";
import Font from '../../theme/index';
const { height, width } = Dimensions.get("window");
const AllUsers = ({ navigation }) => {

    const [tab, settab] = useState("trending")
    const [currentIndex, setCurrentIndex] = useState(0);
    let list_data = [
        {
            id: 1,
            image: IMAGES.space2
        },
        {
            id: 2,
            image: IMAGES.space2
        },
        {
            id: 3,
            image: IMAGES.space2
        }]
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
                    width: "100%",
                    marginBottom: 10
                }}>

                <View style={{
                    height: 30
                }}>
                    <Pressable onPress={() => settab("trending")}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 18
                        }}>Trending
                        </Text>
                    </Pressable>
                    {tab == "trending" ? <Image source={IMAGES.chatDivider} style={{
                        width: 72,
                        height: 2,
                        marginTop: 2
                    }} /> : null}
                </View>
                <View style={{
                    height: 30
                }}>
                    <Pressable onPress={() => settab("recent")}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 18
                        }}>Recent</Text></Pressable>
                    {tab == "recent" ? <Image source={IMAGES.chatDivider} style={{
                        width: 55,
                        height: 2,
                        marginTop: 2
                    }} /> : null}
                </View>
                <View style={{
                    height: 30
                }}>
                    <Pressable onPress={() => settab("space")}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 18
                        }}>My Space</Text>
                        {tab == "space" ?
                            <Image source={IMAGES.chatDivider} style={{
                                width: 80,
                                height: 2,
                                marginTop: 2
                            }} /> : null}
                    </Pressable>
                </View>
            </View>
            <View>
                <Image
                    source={IMAGES.buddyPeople}
                    style={{ height: 90, width: "100%", resizeMode: "contain" }}
                />
            </View>
            {tab !== "space" ?
                <ScrollView>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap"
                        }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
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
                                <View style={styles.LargeImageContainer}>
                                    <Image
                                        source={IMAGES.CardImage}
                                        style={{
                                            width: "100%",
                                            height: 90,
                                            marginRight: 20,
                                            resizeMode: "contain",
                                        }}
                                    />
                                    <Image
                                        source={require("../../assests/images/verified.png")}
                                        style={{
                                            position: "absolute",
                                            resizeMode: "contain",
                                            right: 8,
                                            top: 8
                                        }}
                                    />
                                    <View style={styles.AddBtnContainer} >
                                        <Image
                                            source={require("../../assests/images/addIcon2.png")}
                                            style={{
                                                width: 14,
                                                objectFit: "contain"
                                            }} />
                                        <Text style={styles.AddBtnText}> Add</Text>
                                    </View >
                                    <View style={styles.absoluteTextContainer}>
                                        <Text style={styles.absoluteTextContainerText}>@Mukesh I love traveling</Text>
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
                            </View>)
                        })}
                    </View>
                </ScrollView>
                :
                <ScrollView>
                    <View
                        style={styles.LargeCardsContainer}>
{[1,2,3,4].map((item,idx)=>{
 return(  <View style={styles.LargeCards}>
    <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        // paddingVertical: 2,
        paddingHorizontal: 10,
        marginBottom: 10
    }}>
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10
            }}
        >
            <Image
                source={IMAGES.Friend1}
                style={{ width: 40, height: 40 }}
            />
            <Text style={{
                color: "#fff"
            }}>@Lokesh</Text>
        </View>
 
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10
            }}
        >
            <Image
                source={IMAGES.buddyMore}
                style={{}}
            />
            <Text style={{
                color: "#fff"
            }}>View All</Text>
        </View>
    </View>
    <View style={{
        borderWidth: 2,
        borderColor: "#fff",
        width: "100%",
        borderRadius: 16
    }}>
        {/* <Image
            source={IMAGES.space2}
            style={{
                width: "100%",
                height: 180,
                borderRadius: 16,
                objectFit: "cover"
            }}
        /> */}
 
        <FlatList
            data={list_data}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={(e) => {
                const x = e.nativeEvent.contentOffset.x;
                setCurrentIndex((x / width).toFixed(0));
            }}
            horizontal
            renderItem={({ item, index }) => {
                return (
                    <>
                        <View style={{
                            width: 360,
                            height: 180,
                            display: "flex",
                            //  marginTop: 200,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 30,
                            borderRadius: 16,
                            position: "relative"
                        }}>
                            <Image
                                source={IMAGES.space2}
                                style={{
                                    width: "100%",
                                    height: 180,
                                    borderRadius: 16,
                                    objectFit: "cover",
                                    // marginLeft:20
 
                                }}
                            />
                        </View>
                    </>
                );
            }}
        />
        <View
            style={{
                flexDirection: "row",
                width: width,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                position: "absolute",
                bottom: 10,
                left: -30
            }}
        >
            {list_data?.map((item, index) => {
                return currentIndex == index ? (
                    //   <Image
                    //     key={index}
                    //     source={IMAGES.SLIDER_SCROLL_RED}
                    //     style={{ marginRight: 7,}}
                    //   />/
                    <View style={{
                        height: 8,
                        width: 20,
                        borderRadius: 10,
                        marginLeft: 5,
                        backgroundColor: "#FB780A"
                    }}>
 
                    </View>
 
                ) : (
                    <View style={{
                        height: 10,
                        width: 10,
                        borderRadius: 10,
                        marginLeft: 5,
                        backgroundColor: "#fff"
                    }}>
 
                    </View>
                );
            })}
        </View>
    </View>
    <View
        style={{
            // display: "flex",
            flexDirection: "row",
            // alignItems: "center",
            width: "100%",
            justifyContent: "space-between"
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
                source={IMAGES.buddyHeart}
                style={{ width: 25, height: 25, marginRight: 20, resizeMode: "contain" }}
            />
            <Text
                style={{ color: "white", fontSize: 14, marginLeft: -15 }}
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
                source={IMAGES.buddyShare}
                style={{
                    width: 25,
                    height: 25,
                    marginRight: 20,
                    resizeMode: "contain",
                }}
            />
            <Text
                style={{ color: "white", fontSize: 14, marginLeft: -15 }}
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
                source={require("../../assests/images/chatIcon.png")}
                style={{
                    width: 25,
                    height: 25,
                    marginRight: 20,
                    resizeMode: "contain",
                }}
            />
            <Text
                style={{ color: "white", fontSize: 14, marginLeft: -15 }}
            >
                37
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
                source={require("../../assests/images/locationSpot.png")}
                style={{
                    width: 25,
                    height: 25,
                    marginRight: 20,
                    resizeMode: "contain",
                }}
            />
            <Text
                style={{ color: "white", fontSize: 14, marginLeft: -15 }}
            >
                5 Days Ago
            </Text>
        </View>
    </View>
    <View
        style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%"
        }}
    >
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 10,
                paddingHorizontal: 10,
                marginTop: 10,
                width: "100%"
            }}
        >
            <Text
                style={{ color: "white", fontSize: 14, marginLeft: -15 }}
            >
                @Lokesh Very Nice
            </Text>
 
            <Text
                style={{ color: "white", fontSize: 14, marginLeft: -15 }}
            >
                54 Minutes Ago
            </Text>
        </View>
    </View>
 </View>)
})}
                     

                    </View>

                </ScrollView>}
        </LinearGradient>
    );
}

export default AllUsers;


const styles = StyleSheet.create({
    LargeCards: {
        // height: 273,
        width: "90%",
        backgroundColor: "#af7a93",
        borderRadius: 16,
        padding: 10,
        paddingVertical:10,
        // justifyContent:"center",
        alignItems: "center",
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#fff"
    },
    LargeCardsContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

    },
    LargeImageContainer: {
        position: "relative"
    },
    AddBtnContainer: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        width: "27%",
        bottom: 5,
        right: 4,
        borderRadius: 8,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 16,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 30,
        shadowOpacity: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        padding: 2,
    },
    AddBtnText: {
        color: "#fff",
        fontSize: 8,
        fontWeight: "bold"
    },
    absoluteTextContainer: {
        position: "absolute",
        paddingHorizontal: 4,
        bottom: 6,
        left: 5,
        backgroundColor: "#fff",
        borderRadius: 16,
        backgroundColor: "rgba(0, 0, 0, 0.60)",
        padding: 4
    },
    absoluteTextContainerText: {
        fontSize: 8,
        color: "#fff",
        fontWeight: "bold"
    }

})