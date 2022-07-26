import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import Jokes from "../screens/Jokes";
import CreateJokes from "../screens/CreateJokes";

const Tab =  createMaterialBottomTabNavigator();

const BottomTabNavigatorJ = () => {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Jokes") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "CreateJokes") {
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
        <Tab.Screen name="Jokes" component={Jokes} options={{headerShown:false}}/>
        <Tab.Screen name="CreateJokes" component={CreateJokes} options={{headerShown:false}}/>
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
  
  export default BottomTabNavigatorJ;