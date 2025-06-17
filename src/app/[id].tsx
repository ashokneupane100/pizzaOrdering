import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductDetailScreen = () => {
  const{id}=useLocalSearchParams()
  return (
    <View>
      <Text style={{fontSize:20}}>Product details and id of :{id} </Text>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})