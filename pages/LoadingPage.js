import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  Button,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStyle } from "../styles/mainStyle";

const Logo = require("../assets/corn.png");

export function LoadingPage({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a minimum display time of 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // Navigate to 'Home' after loading completes
      navigation.replace("HomePage");
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={MainStyle.container}>
      <Image source={Logo} style={MainStyle.image} />
      <Text style={MainStyle.header}>Harvest You!</Text>
      <StatusBar style="auto" />

      <View style={{ height: 60, justifyContent: "center" }}>
        {loading ? (
          <View style={{ alignItems: "center" }}>
            <ActivityIndicator size="large" color="#00cc99" />
            <Text>Loading...</Text>
          </View>
        ) : (
          ""
        )}
      </View>
    </View>
  );
}
