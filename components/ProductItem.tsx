import { formatPrice } from '@/libs/numberFormatter';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BuyButton from './BuyButton';

export type ProductProp = {
  id: number;
  title: string;
  price: number;
}

const ProductItem = (product: ProductProp) => {
  return (
    <View>
      <Image 
        style={{width: 160, height: 160}}
        source={require('../assets/images/products/black-coffee.png')}
      />
      <View
        style={styles.infoContainer}
      >
        <View
          style={{flex: 6}}
        >
          <Text>{product.title}</Text>
          <Text>{formatPrice(product.price)}</Text>
        </View>
        <View
          style={{flex: 4}}
        >
          <BuyButton />
        </View>
      </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
})