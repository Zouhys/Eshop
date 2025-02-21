import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StoreContext } from './StoreContext';

const CartPage = () => {
  const { cart } = useContext(StoreContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {item.name} – {item.price} Kč
      </Text>
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
  },
  itemText: { fontSize: 18 },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
});

export default CartPage;
