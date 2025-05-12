import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { MainStyle } from "./styles/mainStyle";

const Logo = require("./assets/corn.png");

export default function App() {
  return (
    <View style={MainStyle.container}>
      <Image source={Logo} style={MainStyle.image}></Image>
      <Text style={MainStyle.header}>Harvest You!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
