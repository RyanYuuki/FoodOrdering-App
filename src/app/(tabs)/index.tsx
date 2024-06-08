import { StyleSheet, Image, ScrollView, FlatList } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import products from "../../../assets/data/products";
import { Product } from "../../../assets/data/types";

const product = products[0];

const ProductItem = ({ product }) => {
  return (
    <View style={styles.container}>
    <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
  </View>
  )
}

export default function TabOneScreen() {
  return (
  <FlatList
    style={styles.productContainer}
    data={products}
    renderItem={({ item }) => <ProductItem product={item} />}
  />
  );
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 20,
  },
  container: {
    transform: 'translateX(70%)',
    width: '40%',
    padding: 40,
    marginTop: 20,
    borderRadius: 20,
  },
  image: {
    aspectRatio: 3/1,
    borderRadius: 30,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e78b7",
  },
});
