import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Layout = () => {
  const wishlistItemsNumber = useSelector((state: any) => state.home.homes.length);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: { fontFamily: "mon-sb" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />

     <Tabs.Screen
  name="wishlists"
  options={{
    tabBarLabel: "Wishlists",
    tabBarIcon: ({ color, size }) => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="heart-outline" color={color} size={size} />
        {wishlistItemsNumber > 0 && (
          <View
            style={{
              position: 'absolute',
              top: -4, 
              right: -4, 
              backgroundColor: '#263991',
              borderRadius: 10,
              padding: 4,
            }}
          >
            <Text style={{ color: 'white', fontFamily: 'mon-sb', fontSize: 12 }}>
              {wishlistItemsNumber}
            </Text>
          </View>
        )}
      </View>
    ),
  }}
/>


      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Host",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "inbox",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: "Notifications",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
