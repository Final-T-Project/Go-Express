 import React from "react";
 import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Touchable, TouchableOpacity } from "react-native";
 import { Ionicons, MaterialIcons } from "@expo/vector-icons";
 import TabBar from "../components/TabBar";
 
 import { Avatar, HStack, Center, NativeBaseProvider } from "native-base";
//  import { Avatar } from "react-native-paper";
export default function Profil({navigation}) {
     return (
         <>
         <View>
            <ScrollView>
                <View>
                    <TouchableOpacity
                    style={{padding:10,width:'100%',backgroundColor:"#ffedd5",height:150,}}
                    >
                    </TouchableOpacity>
                </View>
                
                
                <View style={{alignItems:'center'}}>
                           <TouchableOpacity>
                 <NativeBaseProvider>
                     <Center flex={1} px="3">
                         <Avatar bg="green.500" source={{uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }}  style={{width:140,height:140,borderRadius:100,marginTop:-90}}>
                        </Avatar>
                      </Center>
                </NativeBaseProvider>
                           </TouchableOpacity> 
                            <Text style={{fontSize:25,fontWeight:'bold',padding:10,color:'black'}}>User name</Text>
                          
                        </View>
                        {/* user number */}
                        <View
                        style={{alignSelf:'center',
                                flexDirection:'row',
                                // justifyContent:'centre',
                                backgroundColor:'#fff',
                                width:'90%',
                                padding:20,
                                paddingBottom:22,
                                borderRadius:10,
                                shadowOpacity:80,
                                elevation:15,
                                marginTop:50,
                                marginBottom:40}}
                        >
                             <Image source={{uri:"https://res.cloudinary.com/dn9qfvg2p/image/upload/v1672937081/phone-call_ile7m8.png" }} style={{width:33,height:33}}></Image>
                             <Text style={{fontSize:20,color:'#', marginLeft:70}}>User Email</Text>
                        </View>
                        {/* user Email */}
                        <View
                        style={{alignSelf:'center',
                                flexDirection:'row',
                                // justifyContent:'centre',
                                backgroundColor:'#fff',
                                width:'90%',
                                padding:15,
                                paddingBottom:22,
                                borderRadius:10,
                                shadowOpacity:80,
                                elevation:15,
                                marginTop:-15,
                                marginBottom:40}}
                        >
                             <Image source={{uri:"https://res.cloudinary.com/dn9qfvg2p/image/upload/v1671726895/gmail_dcjbrl.png" }} style={{width:33,height:33}}></Image>
                             <Text style={{fontSize:20,color:'#', marginLeft:70}}>User Email</Text>
                        </View>
                        {/* user place */}
                        <View
                        style={{alignSelf:'center',
                                flexDirection:'row',
                                // justifyContent:'centre',
                                backgroundColor:'#fff',
                                width:'90%',
                                padding:15,
                                paddingBottom:22,
                                borderRadius:10,
                                shadowOpacity:80,
                                elevation:15,
                                marginTop:-15,
                                marginBottom:40}}
                        >
                             <Image source={{uri:"https://res.cloudinary.com/dn9qfvg2p/image/upload/v1671726727/location_xel02r.png" }} style={{width:33,height:33}}></Image>
                             <Text style={{fontSize:20,color:'#', marginLeft:70}}>User Adress</Text>
                        </View>
                      
            </ScrollView> 
           
         </View> 
         
           
                         <TabBar navigation={navigation}/>
                   
      
         </>
     );

 }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#FFF"
//     },
//     text: {
       
//         color: "#52575D"
//     },
//     image: {
//         flex: 1,
//         height: undefined,
//         width: undefined
//     },
//     titleBar: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginTop: 24,
//         marginHorizontal: 16
//     },
//     subText: {
//         fontSize: 12,
//         color: "#AEB5BC",
//         textTransform: "uppercase",
//         fontWeight: "500"
//     },
//     profileImage: {
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//         overflow: "hidden"
//     },
//     dm: {
//         backgroundColor: "#41444B",
//         position: "absolute",
//         top: 20,
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     active: {
//         backgroundColor: "#34FFB9",
//         position: "absolute",
//         bottom: 28,
//         left: 10,
//         padding: 4,
//         height: 20,
//         width: 20,
//         borderRadius: 10
//     },
//     add: {
//         backgroundColor: "#41444B",
//         position: "absolute",
//         bottom: 0,
//         right: 0,
//         width: 60,
//         height: 60,
//         borderRadius: 30,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     infoContainer: {
//         alignSelf: "center",
//         alignItems: "center",
//         marginTop: 16
//     },
//     statsContainer: {
//         flexDirection: "row",
//         alignSelf: "center",
//         marginTop: 32
//     },
//     statsBox: {
//         alignItems: "center",
//         flex: 1
//     },
//     mediaImageContainer: {
//         width: 180,
//         height: 200,
//         borderRadius: 12,
//         overflow: "hidden",
//         marginHorizontal: 10
//     },
//     mediaCount: {
//         backgroundColor: "#41444B",
//         position: "absolute",
//         top: "50%",
//         marginTop: -50,
//         marginLeft: 30,
//         width: 100,
//         height: 100,
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 12,
//         shadowColor: "rgba(0, 0, 0, 0.38)",
//         shadowOffset: { width: 0, height: 10 },
//         shadowRadius: 20,
//         shadowOpacity: 1
//     },
//     recent: {
//         marginLeft: 78,
//         marginTop: 32,
//         marginBottom: 6,
//         fontSize: 10
//     },
//     recentItem: {
//         flexDirection: "row",
//         alignItems: "flex-start",
//         marginBottom: 16
//     },
//     activityIndicator: {
//         backgroundColor: "#CABFAB",
//         padding: 4,
//         height: 12,
//         width: 12,
//         borderRadius: 6,
//         marginTop: 3,
//         marginRight: 20
//     }
// });

