import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";

const Page = () => {
  useWarmUpBrowser();
  return (
    <View style={styles.container}>
      <TextInput autoCapitalize="none" placeholder="Email" style={} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
});

export default Page;