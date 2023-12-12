import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const HeaderTop = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={{ color: "#fff", fontSize: 24, fontFamily: "mon-b" }}>
          Hello Anicet
        </Text>
        <Text style={{ color: "#fff", fontSize: 14, marginTop: 5 }}>
          Welcome back
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.profileIcon}>

        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#263991",
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#fff",
  }
});

export default HeaderTop;
