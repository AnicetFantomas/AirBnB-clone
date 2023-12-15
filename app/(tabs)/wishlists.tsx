import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Listing } from "../../interfaces/listing";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInRight, FadeOutLeft, SlideInDown } from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";
import { defaultStyles } from "../../constants/styles";
import { deleteItem, resetList } from "../../redux/HomeSlice";

const Page = () => {
  const wishlistItems = useSelector((state: any) => state.home.homes);
  const dispatch = useDispatch();

  return (
    

    <>
    <ScrollView>
      {wishlistItems.map((item: any) => (
        <Link href={`/listing/${item.id}`} asChild key={item.id}>
          <TouchableOpacity>
            <Animated.View
              style={styles.listing}
              entering={FadeInRight}
              exiting={FadeOutLeft}
            >
              
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
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
      ))}
      
    </ScrollView>
  
        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 130,
          }}
        >
          <TouchableOpacity onPress={() => {dispatch(resetList())}}
            style={[defaultStyles.btn, { paddingHorizontal: 20,  }]}
          >
            <Text style={defaultStyles.btnText}>Reset List</Text>
          </TouchableOpacity>
        </View>
    </>
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

export default Page;
