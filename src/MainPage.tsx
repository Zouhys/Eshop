// src/MainPage.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import { StoreContext, Product } from './StoreContext';

const products: Product[] = [
  { id: 1, name: 'iphone', price: 2990 },
  { id: 2, name: 'Laptop', price: 9990 },
  { id: 3, name: 'Tablet', price: 4990 },
  { id: 4, name: 'myčka', price: 49900 },
  { id: 5, name: 'mikrovlnka', price: 50000 },
  { id: 6, name: 'pán prstenů DVD', price: 100000 },
  { id: 7, name: 'šachovnice', price: 1 },
  { id: 8, name: 'tigeříček', price: 18 },
  { id: 9, name: 'specialitka ze skřínky', price: 180 },
  { id: 10, name: 'specialitka z penálu', price: 20 },

];


const MainPage = () => {
  const { addToCart, addToFavorites } = useContext(StoreContext);

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    Alert.alert('Přidáno do košíku', `${item.name} bylo přidáno do košíku.`);
  };

  const handleAddToFavorites = (item: Product) => {
    addToFavorites(item);
    Alert.alert('Přidáno do oblíbených', `${item.name} bylo přidáno do oblíbených.`);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {item.name} – {item.price} Kč
      </Text>
      <View style={styles.buttonRow}>
        <Button title="Do košíku" onPress={() => handleAddToCart(item)} />
        <Button title="Do oblíbených" onPress={() => handleAddToFavorites(item)} />
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