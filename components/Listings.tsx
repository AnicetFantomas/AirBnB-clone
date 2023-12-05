import {
  View,
  Text,
  ListRenderItem,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "../constants/styles";
import { Link } from "expo-router";
import { Listing } from "../interfaces/listing";
import { Ionicons } from "@expo/vector-icons";

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
          <TouchableOpacity
            style={{ position: "absolute", right: 30, top: 30 }}
          >
            <Ionicons name="heart-outline" size={24} color={"#000"} />
          </TouchableOpacity>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontFamily: "mon-sb", fontSize: 16 }}>
              {item.name}
            </Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Ionicons name="star" size={16} />
              <Text style={{ fontFamily: "mon-sb" }}>
                {item.review_scores_rating / 20}
              </Text>
            </View>
          </View>
          <Text style={{ fontFamily: "mon" }}>{item.room_type}</Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text style={{ fontFamily: "mon-sb" }}>$ {item.price}</Text>
            <Text style={{ fontFamily: "mon-sb" }}>night</Text>
          </View>
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
    gap: 10,
    marginVertical: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});

export default Listings;
