import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import ExplorerHeader from '../../components/ExplorerHeader'
import Listings from '../../components/Listings'

const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ header: () => <ExplorerHeader />}} />
      <Listings />
    </View>
  )
}

export default Page