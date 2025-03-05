// src/CartPage.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { StoreContext, Product } from './StoreContext';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(StoreContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {item.name} – {item.price} Kč
      </Text>
      <Button title="Odstranit" onPress={() => removeFromCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Košík</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Text style={styles.total}>Celková cena: {totalPrice} Kč</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemText: { fontSize: 18 },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: 20 }
});

export default CartPage;
