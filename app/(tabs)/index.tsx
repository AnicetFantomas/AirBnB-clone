import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        Login
      </Link>
      <Link href={"/(modals)/booking"}>
        booking
      </Link>
      <Link href={"/listing/1209"}>
        Listing details 
      </Link>
    </View>
  )
}

export default Page