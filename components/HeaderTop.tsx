import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { useLinkTo } from "@react-navigation/native";

const HeaderTop = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);

  const linkTo = useLinkTo();

  useEffect(() => {
    setFirstName(user?.firstName);
  }, [user]);

  //   const handlePress = () => {
  //     linkTo("/app/(tabs)/profile");
  //   }

  return (
    isSignedIn && (
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
          <Link href={"/(tabs)/profile"} asChild>
            <TouchableOpacity style={styles.profileIcon}>
              <View>
                <Image
                  source={{ uri: user?.imageUrl }}
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </View>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#263991",
    height: 60,
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
