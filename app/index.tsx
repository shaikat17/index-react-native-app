import { Image, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants'

const index = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{
        height: '100%'
      }}>
        <View className="h-full w-full items-center justify-center">
          <Image 
          source={images.logo}
          className='w-[130px h-[84px'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

