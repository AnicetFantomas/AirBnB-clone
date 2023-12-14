import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const Wishlist = () => {
  const wishlistItems = useSelector((state: any) => state.home.homes.filter((item: any) => item.wishlist));

  const renderWishlistItem = ({ item }) => (
    <View style={styles.wishlistItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <TouchableOpacity style={styles.removeButton}>
        <Ionicons name="trash-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlistItems}
        renderItem={renderWishlistItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'mon-sb',
    marginBottom: 16,
  },
  wishlistItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemName: {
    fontFamily: 'mon-sb',
    fontSize: 18,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
});

export default Wishlist;
