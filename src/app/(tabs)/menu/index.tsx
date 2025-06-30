import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { Stack } from "expo-router";
import { View, FlatList, StyleSheet } from "react-native";

export default function MenuScreen() {
  return (
    <View style={{flex: 1}} >
      <Stack.Screen options={{headerShown:true}} />
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
    </View>
  );
}
