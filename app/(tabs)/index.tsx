import ProductItem, { ProductProp } from "@/components/ProductItem";
import SearchInput from "@/components/SearchInput";
import { COLORS } from "@/styles";
import { FlatList, StyleSheet, Text, View } from "react-native";

const coffeeProducts: ProductProp[] = [
  { id: 1, title: 'Kopi Tubruk', price: 15000 },
  { id: 2, title: 'Kopi Susu Gula Aren', price: 22000 },
  { id: 3, title: 'Espresso', price: 18000 },
  { id: 4, title: 'Americano', price: 20000 },
  { id: 5, title: 'Latte', price: 25000 },
  { id: 6, title: 'Cappuccino', price: 24000 },
  { id: 7, title: 'Mocha', price: 27000 },
  { id: 8, title: 'Cold Brew', price: 23000 },
  { id: 11, title: 'Kopi Tubruk', price: 15000 },
  { id: 21, title: 'Kopi Susu Gula Aren', price: 22000 },
  { id: 31, title: 'Espresso', price: 18000 },
  { id: 41, title: 'Americano', price: 20000 },
  { id: 51, title: 'Latte', price: 25000 },
  { id: 61, title: 'Cappuccino', price: 24000 },
  { id: 71, title: 'Mocha', price: 27000 },
  { id: 81, title: 'Cold Brew', price: 23000 },
];

export default function Index() {
  const productList = ({ item }: { item: ProductProp}) => (
    <View
      style={styles.product}
    >
      <ProductItem 
        id={item.id}
        price={item.price}
        title={item.title}
      />
    </View>
  );

  return (
    <View>
      <View style={{ marginTop: 20, marginBottom: 10 }}>
        <Text style={styles.titleText}>Kedai Kovie</Text>
        <SearchInput />
      </View>

      {/* Scrollable FlatList */}
      <FlatList
        data={coffeeProducts}
        renderItem={productList}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 42,
    textAlign: 'center',
    color: COLORS.red,
    padding: 14
  },
  product: {
    margin: 10
  }
})

