import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  // ------------> importing the Tag of the bottom Navigation tag
import { StyleSheet, Text, View } from 'react-native';
import History from '../History';
import Profil from '../Profil';
import SideBar from '../SideBar';
import Home from '../Home';

export default function Tabs() {

  ///----------------------------------------------------> create the Tag of the Navigation tag <----------------------------------------------------------------------------///
          const Tab = createBottomTabNavigator()
  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  return (
    <>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Sidebar" component={SideBar}/>
      <Tab.Screen name="History" component={History}/>
      <Tab.Screen name="Profil" component={Profil}/>
    </Tab.Navigator>
    
    </>
  )
}