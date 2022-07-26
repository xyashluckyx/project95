import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../screens/Feed";
import BottomTabNavigatorJ from "./TabNavigatorJ";
import BottomTabNavigatorGK from "./TabNavigatorGK";
import BottomTabNavigatorN from "./TabNavigatorN";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Feed} />
      <Stack.Screen name="Jokes" component={BottomTabNavigatorJ} />
      <Stack.Screen name="GK" component={BottomTabNavigatorGK} />
      <Stack.Screen name="News" component={BottomTabNavigatorN} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
