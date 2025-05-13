import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoadingPage } from "./pages/LoadingPage";
import { HomePage } from "./pages/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoadingPage"
        screenOptions={{
          headerShown: false, // This hides the header for all screens
        }}
      >
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
