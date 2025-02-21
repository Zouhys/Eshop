import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StoreContext } from './StoreContext';

const FavoritesPage = () => {
  const { favorites } = useContext(StoreContext);

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Oblíbené</Text>
      <FlatList
        data={favorites}
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
  itemText: { fontSize: 18 },
});

export default FavoritesPage;
