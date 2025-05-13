import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { HomepageStyle } from "../styles/HomepageStyle";

// Sample product data
const products = [
  {
    id: 1,
    name: "Organic Apples",
    price: "$2.99",
    image: require("../assets/corn.png"),
    rating: 4.5,
  },
  {
    id: 2,
    name: "Fresh Carrots",
    price: "$1.49",
    image: require("../assets/corn.png"),
    rating: 4.2,
  },
  {
    id: 3,
    name: "Juicy Oranges",
    price: "$3.49",
    image: require("../assets/corn.png"),
    rating: 4.7,
  },
  {
    id: 4,
    name: "Crisp Lettuce",
    price: "$1.99",
    image: require("../assets/corn.png"),
    rating: 4.0,
  },
];

const categories = [
  { id: 1, name: "Fruits", icon: "🍎" },
  { id: 2, name: "Vegetables", icon: "🥕" },
  { id: 3, name: "Dairy", icon: "🥛" },
  { id: 4, name: "Bakery", icon: "🍞" },
  { id: 5, name: "Meat", icon: "🍗" },
];

export function HomePage({ navigation }) {
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={HomepageStyle.productCard}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <Image source={item.image} style={HomepageStyle.productImage} />
      <Text style={HomepageStyle.productName}>{item.name}</Text>
      <Text style={HomepageStyle.productPrice}>{item.price}</Text>
      <View style={HomepageStyle.ratingContainer}>
        <Text style={HomepageStyle.rating}>⭐ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={HomepageStyle.categoryCard}
      onPress={() => navigation.navigate("Category", { categoryId: item.id })}
    >
      <Text style={HomepageStyle.categoryIcon}>{item.icon}</Text>
      <Text style={HomepageStyle.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={HomepageStyle.container}>
      {/* Header */}
      <View style={HomepageStyle.topMenu}>
        {/* Search Bar */}
        <TouchableOpacity
          style={HomepageStyle.searchBar}
          //   onPress={() => navigation.navigate("Search")}
        >
          <Text style={HomepageStyle.searchText}>Search for products...</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={HomepageStyle.TopIcon}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={HomepageStyle.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Text style={HomepageStyle.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={HomepageStyle.categoryList}
      />

      {/* Featured Products */}
      <Text style={HomepageStyle.sectionTitle}>Featured Products</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={HomepageStyle.productRow}
        scrollEnabled={false}
      />

      {/* Special Offers */}
      <Text style={HomepageStyle.sectionTitle}>Special Offers</Text>
      <Image
        source={require("../assets/corn.png")}
        style={HomepageStyle.banner}
      />
    </ScrollView>
  );
}
