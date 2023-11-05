
import React, { useState } from 'react'
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from "react-native";
import IMAGES from '../../utils/images';
import LinearGradient from "react-native-linear-gradient";
import Font from '../../theme/index';
import Icon, { Icons } from '../../utils/icons';
const UserProfile = ({ navigation }) => {
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

            <View style={styles.mainContainer}>

                <View style={styles.ProfileNamePicContainer}>
                    <Image
                        source={IMAGES.UserProfile}
                        style={{ resizeMode: "contain", }}
                    />
                    <View>
                        <Text style={styles.ProfileName}>Vaibhav Shukla</Text>
                        <Text style={styles.ProfileEmail}>@Vaibhav</Text>
                    </View>
                </View>


                <View style={styles.AddRequestContainer}>

                    <View style={styles.AddRequestBox}>
                        <Icon type={Icons.Feather} name={'plus-square'} color={"#fff"} size={30} />
                        <Text style={styles.AddRequestText}>Add a Request</Text>
                    </View>

                    <Image
                        source={IMAGES.fb}
                        style={{ resizeMode: "contain", }}
                    />
                    <Image
                        source={IMAGES.insta}
                        style={{ resizeMode: "contain", }}
                    />
                </View>

                <View style={styles.UserAllStatsContainer}>
                    <View style={styles.UserStatsBox}>
                        <Image
                            source={IMAGES.buddyPic}
                            style={{ resizeMode: "contain", height: 20, width: 30 }}
                        />
                        <Text style={styles.UserStatsBoxText}>Posts</Text>
                        <View style={styles.UserStatsDivider}></View>
                        <Text style={styles.UserStatsCount}>10</Text>
                    </View>
                    <View style={styles.UserStatsBox}>
                        <Image
                            source={IMAGES.UserFriends}
                            style={{ resizeMode: "contain", height: 20, width: 30 }}
                        />
                        <Text style={styles.UserStatsBoxText}>Friends</Text>
                        <View style={styles.UserStatsDivider}></View>
                        <Text style={styles.UserStatsCount}>10</Text>
                    </View>
                    <View style={styles.UserStatsBox}>
                        <Image
                            source={IMAGES.hotspot}
                            style={{ resizeMode: "contain", height: 20, width: 30 }}
                        />
                        <Text style={styles.UserStatsBoxText}>Hotspots</Text>
                        <View style={styles.UserStatsDivider}></View>
                        <Text style={styles.UserStatsCount}>10</Text>
                    </View>
                    <View style={styles.UserStatsBox}>
                        <Image
                            source={IMAGES.star}
                            style={{ resizeMode: "contain", height: 20, width: 30 }}
                        />
                        <Text style={styles.UserStatsBoxText}>Ratings</Text>
                        <View style={styles.UserStatsDivider}></View>
                        <Text style={styles.UserStatsCount}>4.5</Text>
                    </View>
                </View>

                <View style={styles.hotspotHeadingContainer}>
                    <Text style={styles.hotspotHeading}>Vaibhav’s Hotspot Wall</Text>
                </View>
           <View style={styles.ImageContainer}>
             <View style={styles.Imagebox}>
             <Image
                        source={IMAGES.location1}
                        style={{ resizeMode: "contain",height:"100%" ,width:"100%"}}
                    />
            <Text style={styles.placeText}>Palika Market</Text>
                     <View style={styles.likeContainer}> 
                    <Image
                        source={IMAGES.buddyHeart}
                        style={{ resizeMode: "contain",}}
                    />
                        <Text style={styles.ImageLikesText}>100+</Text>
                    </View>
             </View>
             <View style={styles.Imagebox}>
             <Image
                        source={IMAGES.location2}
                        style={{ resizeMode: "contain",height:"100%" ,width:"100%"}}
                    />
                     <View style={styles.likeContainer}> 
                    <Image
                        source={IMAGES.buddyHeart}
                        style={{ resizeMode: "contain",}}
                    />
                        <Text style={styles.ImageLikesText}>100+</Text>
                    </View>
                    <Text style={styles.placeText}>Palika Market</Text>
             </View>
             <View style={styles.Imagebox}>
             <Image
                        source={IMAGES.location3}
                        style={{ resizeMode: "contain",height:"100%" ,width:"100%"}}
                    />
                    <View style={styles.likeContainer}> 
                    <Image
                        source={IMAGES.buddyHeart}
                        style={{ resizeMode: "contain",}}
                    />
                        <Text style={styles.ImageLikesText}>100+</Text>
                    </View>
                    <Text style={styles.placeText}>Palika Market</Text>
             </View>
           </View>
           <View style={styles.hotspotHeadingContainer}>
                    <Text style={styles.hotspotHeading}>Recommended Friends</Text>
                </View>
            <View style={styles.FriendsContainer}>
                <View style={styles.FriendBoxMain}>
                <View style={styles.FriendBox}>
                <Image
                        source={IMAGES.Friend1}
                        style={{ }}
                    />
                <View style={styles.PlusFriendBox}>
                <Image
                        source={IMAGES.PlusIcon}
                        style={{ }}
                    />
                </View>
             
                </View>
                <Text style={styles.ImageLikesText}>Sachin</Text>
                </View>
                <View style={styles.FriendBoxMain}>
                <View style={styles.FriendBox}>
                <Image
                        source={IMAGES.Friend2}
                        style={{ }}
                    />
                <View style={styles.PlusFriendBox}>
                <Image
                        source={IMAGES.PlusIcon}
                        style={{ }}
                    />
                </View>
             
                </View>
                <Text style={styles.ImageLikesText}>Sachin</Text>
                </View>
                <View style={styles.FriendBoxMain}>
                <View style={styles.FriendBox}>
                <Image
                        source={IMAGES.Friend1}
                        style={{ }}
                    />
                <View style={styles.PlusFriendBox}>
                <Image
                        source={IMAGES.PlusIcon}
                        style={{ }}
                    />
                </View>
             
                </View>
                <Text style={styles.ImageLikesText}>Sachin</Text>
                </View>
                <View style={styles.FriendBoxMain}>
                <View style={styles.FriendBox}>
                <Image
                        source={IMAGES.Friend2}
                        style={{ }}
                    />
                <View style={styles.PlusFriendBox}>
                <Image
                        source={IMAGES.PlusIcon}
                        style={{ }}
                    />
                </View>
             
                </View>
                <Text style={styles.ImageLikesText}>Sachin</Text>
                </View>
           
            </View>
            </View>

        </LinearGradient>
    );
}

export default UserProfile;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20
    },
    ProfileNamePicContainer: {
        flexDirection: "row",
        // justifyContent:"center",
        alignItems: "center",
        gap: 10
    }, ProfileName: {
        color: "#fff",
        fontSize: 16
    }, ProfileEmail: {
        color: "#fff",
        marginTop: 5,
        fontSize: 14
    },
    AddRequestContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
        marginTop: 6,
        // justifyContent:"center",
        alignItems: "center",
        gap: 50
    },
    AddRequestBox: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#fff",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        width: "40%",
        gap: 6
    },
    AddRequestText: {
        color: "#fff",
        // fontWeight:"bold"
    },
    UserStatsBox: {
        height: 90,
        width: 75,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    UserStatsDivider: {
        height: 2,
        width: 40,
        borderWidth: 1,
        borderColor: "#fff",
    },
    UserStatsBoxText: {
        color: "#fff"
    },
    UserStatsCount: {
        color: "#fff",
        fontWeight: "bold"
    },
    UserAllStatsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        padding: 10
    },
    hotspotHeading:{
     fontSize:20,
     color:"#fff"
    },
    hotspotHeadingContainer:{
padding:10,
marginTop:10
    },
    Imagebox:{
        height:130,
        width:"30%",
        // borderWidth: 1,
        // borderColor: "#fff",
        // borderRadius:16,
        position:"relative",
        alignItems:"center",
        marginBottom:30
    },
    ImageContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:6,
    },
    likeContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:5,
        position:"absolute",
        bottom:8,
        left:30
    },
    ImageLikesText:{
        color:"#fff"
    },
    placeText:{
        color:"#fff",
        marginTop:6
    },
    FriendsContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    FriendBox:{
position:"relative"
    },
    PlusFriendBox:{
position:"absolute",
bottom:4,
right:5
    },
    FriendBoxMain:{
        alignItems:"center"
    }
})