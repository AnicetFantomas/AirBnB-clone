import {
  View,
  Text,
  ListRenderItem,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "../constants/styles";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Listing } from "../interfaces/listing";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoanding] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log("listings reloaded", items.length);
    setLoanding(true);
    setTimeout(() => {
      setLoanding(false);
    }, 2000);
  }, [category]);

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.listing}>
          <Image source={{ uri: item.medium_url }} style={styles.image} />
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        ref={listRef}
        data={loading ? [] : items}
        renderItem={renderRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
  },
  image: {
    width: '100%', 
    height: 300
  }
});

export default Listings;
