import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import CreateNews from "../screens/CreateNews";
import News from "../screens/News";

const Tab =  createMaterialBottomTabNavigator();

const BottomTabNavigatorN = () => {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "News") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "CreateNews") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
      >
        <Tab.Screen name="News" component={News} options={{headerShown:false}}/>
        <Tab.Screen name="CreateNews" component={CreateNews} options={{headerShown:false}}/>
      </Tab.Navigator>
    );
  };
  
  const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#54223B",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });
  
  export default BottomTabNavigatorN;