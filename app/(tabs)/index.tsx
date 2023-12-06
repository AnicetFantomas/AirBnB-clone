import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExplorerHeader from '../../components/ExplorerHeader'
import Listings from '../../components/Listings';
import listingsData from '../../assets/data/airbnb-listings.json'
import ListingsMap from '../../components/ListingsMap';
import listingsDataGeo from '../../assets/data/airbnb-listings.geo.json'
import ListingBottomSheet from '../../components/ListingBottomSheet';


const Page = () => {
  const [category, setCategory] = useState('Tiny homes');
  const items = useMemo(()=> listingsData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category)
  }

  return (
    <View style={{ flex: 1, marginTop:94 }}>
      <Stack.Screen options={{ header: () => <ExplorerHeader onCategoryChanged={onDataChanged} />}} />
      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={listingsDataGeo}  />
      <ListingBottomSheet listings={items} category={category} />
    </View>
  )
}

export default Page