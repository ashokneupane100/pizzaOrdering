import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";

const sizes = ["S", "M", "L", "XL"];
const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p?.id.toString() === id);
  if (!product) {
    return <Text>Product Not Found !!!</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text>Select Size:</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <View key={size} style={styles.size}>
            <Text style={styles.sizeText} key={size}>
              {size}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.price}>Rs {product?.price} </Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sizes: {
    flexDirection:'row',
    justifyContent:"space-around",

  },
  size: {
    backgroundColor:"gainsboro",
    width:50,
    aspectRatio:1,
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    marginVertical:10,
  },
  sizeText: {
    fontSize:20,
    fontWeight:'500',

  },
});
