import { View, Text } from 'react-native'
import React from 'react'

const ExplorerHeader = () => {

    const categories = [
        {
          name: 'Tiny homes',
          icon: 'home',
        },
        {
          name: 'Cabins',
          icon: 'house-siding',
        },
        {
          name: 'Trending',
          icon: 'local-fire-department',
        },
        {
          name: 'Play',
          icon: 'videogame-asset',
        },
        {
          name: 'City',
          icon: 'apartment',
        },
        {
          name: 'Beachfront',
          icon: 'beach-access',
        },
        {
          name: 'Countryside',
          icon: 'nature-people',
        },
      ];
  return (
    <View>
      <Text>ExplorerHeader</Text>
    </View>
  )
}

export default ExplorerHeader;