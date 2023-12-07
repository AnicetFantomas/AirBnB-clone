import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {BlurView} from 'expo-blur'
import Animated, { SlideInDown } from 'react-native-reanimated'
import { defaultStyles } from '../../constants/styles'

const Page = () => {
  return (
    <BlurView intensity={70} style={styles.container} tint='light'>
      <Text>booking</Text>
      <Animated.View style={defaultStyles.footer} entering={SlideInDown.delay(200)}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>

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