import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";

const HeaderTop = () => {
  const { isSignedIn } = useAuth();
  const {user} = useUser();

  return isSignedIn && (
    <View style={styles.header}>
      <View>
        <Text style={{ color: "#fff", fontSize: 24, fontFamily: "mon-b" }}>
          Hello {user?.firstName}
        </Text>
        <Text style={{ color: "#fff", fontSize: 14, marginTop: 5 }}>
          Welcome back...
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.profileIcon}>
            <View>
                <Image source={{ uri: user?.imageUrl }} style={{ width: 50, height: 50, borderRadius: 50 }} />
            </View>
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
  },
});

export default HeaderTop;
