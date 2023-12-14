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
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { addToWish, addToWishList } from "../redux/HomeSlice";

interface Props {
  listings: any[];
  category: string;
  refresh: number;
}

const Listings = ({ listings: items, category, refresh }: Props) => {
  const [loading, setLoanding] = useState(false);
  const listRef = useRef<FlatList>(null);
  const dispatch = useDispatch();
  const wishlistsItems = useSelector((state: any) => state.home.homes);
  const [selectedItem, setSelectedItem] = useState<string[]>([]);

  useEffect(() => {
    if (refresh) {
      listRef.current?.scrollToOffset({ offset: 0, animated: true });
    }
  }, [refresh]);

  useEffect(() => {
    console.log("listings reloaded", items.length);
    setLoanding(true);
    setTimeout(() => {
      setLoanding(false);
    }, 200);
  }, [category]);

  const toggleSelection = (itemId: string) => {
    setSelectedItem((prevSelectedItem) => {
      if (prevSelectedItem.includes(itemId)) {
        return prevSelectedItem.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItem, itemId];
      }
    });
  };

  // const isItemInWishList = (itemId: string) => {
  //   return wishlistsItems.some((item: any) => item.id === itemId);
  // }

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.listing}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
          <Image source={{ uri: item.xl_picture_url }} style={styles.image} />
          <TouchableOpacity
            style={{ position: "absolute", right: 30, top: 30 }}
            onPress={() => {
              const payload = {
                id: item.id,
                name: item.name,
                review_scores_rating: item.review_scores_rating,
                room_type: item.room_type,
                price: item.price,
              };
              dispatch(addToWish(payload));
              toggleSelection(item.id);
                console.log(item.id, "added");

              // if (isItemInWishList(item.id)) {
              //   dispatch(addToWishList(item.id));
              //   console.log(item.id, "added");
              // }
            }}
          >
            <Ionicons
              name={selectedItem.includes(item.id) ? "heart" : "heart-outline"}
              size={24}
              color={"#000"}
            />
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
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        ref={listRef}
        data={loading ? [] : items}
        renderItem={renderRow}
        ListHeaderComponent={
          <Text style={styles.info}>{items.length} homes</Text>
        }
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
  info: {
    textAlign: "center",
    fontFamily: "mon-sb",
    fontSize: 16,
    marginTop: 4,
  },
});

export default Listings;
