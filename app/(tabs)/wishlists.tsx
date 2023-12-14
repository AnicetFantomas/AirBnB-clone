import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Wishlist from '../../components/WishList'

const Page = () => {

  const wishlistItems = useSelector((state: any) => state.home.homes);

  // console.log("Dojob", wishlistItems)

  return (
    <View>
      <Text>Wish list</Text>
      {wishlistItems.map((item: any) => (
        <View key={item.id}>
          <Text>{item.id}</Text>
        </View>
      ))}
    </View>
  )
}

export default Page