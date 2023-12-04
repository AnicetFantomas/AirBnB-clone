import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const ExplorerHeader = () => {
  const categories = [
    {
      name: "Tiny homes",
      icon: "home",
    },
    {
      name: "Cabins",
      icon: "house-siding",
    },
    {
      name: "Trending",
      icon: "local-fire-department",
    },
    {
      name: "Play",
      icon: "videogame-asset",
    },
    {
      name: "City",
      icon: "apartment",
    },
    {
      name: "Beachfront",
      icon: "beach-access",
    },
    {
      name: "Countryside",
      icon: "nature-people",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'fff' }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={"/(modals)/booking"}>Booking</Link>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 130,
  },
  actionRow: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: 'space-between',
    paddingHorizontal:24,
    paddingBottom:16
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24
  }
});

export default ExplorerHeader;
