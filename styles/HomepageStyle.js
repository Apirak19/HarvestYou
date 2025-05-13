import { StyleSheet } from "react-native";

export const HomepageStyle = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  cartIcon: {
    fontSize: 24,
  },
  searchBar: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    width: "85%",
  },
  searchText: {
    color: "#888",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  categoryList: {
    paddingBottom: 10,
  },
  categoryCard: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    width: 100,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 14,
  },
  //   container: {
  //     paddingVertical: 15,
  //   },
  productRow: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    width: "48%",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00cc99",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    color: "#888",
  },
  banner: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  topMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
    paddingTop: 30,
    backgroundColor: "#73946B",
  },
  TopIcon: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 10,

    // borderWidth: 2,
    // borderColor: "#000",

    marginRight: 10,
    alignItems: "center",
  },
});
