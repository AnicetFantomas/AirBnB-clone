import React, { Component, useMemo, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Listing } from "../interfaces/listing";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "./Listings";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  listings: Listing[];
  category: string;
}
const ListingBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);
const showMap = () => {

}

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
      enablePanDownToClose={false}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
    >
      <View style={{ flex: 1 }}>
        <Listings listings={listings} category={category} />
        <View style={styles.absoluteBtn}>
          <TouchableOpacity onPress={showMap} style={styles.btn}>
                <Text style={{color: '#fff'}}>Map</Text>
                <Ionicons name="map" size={20} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  absoluteBtn: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },

  btn:{
    backgroundColor: Colors.dark,
    padding:16,
    height:50,
    flexDirection:'row',
    alignItems: "center",
    justifyContent:'center',
    borderRadius:20,
    gap:8
  }
});

export default ListingBottomSheet;
