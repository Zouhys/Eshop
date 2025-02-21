import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { StoreContext, Product } from './StoreContext';

// Ukázková data produktů
const products: Product[] = [
  { id: 1, name: 'Smartphone', price: 299 },
  { id: 2, name: 'Laptop', price: 999 },
  { id: 3, name: 'Tablet', price: 499 },
];

const MainPage = () => {
  const { addToCart, addToFavorites } = useContext(StoreContext);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {item.name} – {item.price} Kč
      </Text>
      <View style={styles.buttonRow}>
        <Button title="Do košíku" onPress={() => addToCart(item)} />
        <Button title="Do oblíbených" onPress={() => addToFavorites(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Eshop elektroniky</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  itemText: { fontSize: 18, marginBottom: 10 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default MainPage;
