import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CalculatorScreen from "./app/screens/CalculatorScreen";
import HistoryScreen from "./app/screens/HistoryScreen";
export default function App() {
  const Tab = createStackNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Caculator" component={CalculatorScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
