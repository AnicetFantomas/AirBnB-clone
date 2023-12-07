import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {BlurView} from 'expo-blur'
import Animated, { SlideInDown } from 'react-native-reanimated'
import { defaultStyles } from '../../constants/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const Page = () => {
  const onClearAll = () => {};

  return (
    <BlurView intensity={70} style={styles.container} tint='light'>
      <Text>booking</Text>
      <Animated.View style={defaultStyles.footer} entering={SlideInDown.delay(200)}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <TouchableOpacity onPress={onClearAll} style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 18, fontFamily:'mon-sb', textDecorationLine: 'underline'}}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.back()} style={[defaultStyles.btn, {paddingRight:20, paddingLeft:50}]}>
            <Ionicons name='search-outline' size={24} color={'#fff'} style={defaultStyles.btnIcon} />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100
  }
})

export default Page