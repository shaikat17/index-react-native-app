import { Image, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants'
import CustomButton from '@/components/customButton'

const index = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{
        height: '100%'
      }}>
        <View className="h-full w-full items-center">
          <Image 
          source={images.logo}
          className='w-[400px] h-[150px]'
          resizeMode='contain'
          />
          <Image
          source={images.cards}
          className="max-w-[380px] w-full h-[300px]"
          resizeMode='contain'
          />
          <View className="relative mt-5">
          <Text className="text-2xl text-white font-bold text-center">
            Discover Endless Possibilities with{' '}
            <Text className="text-secondary-200">index!</Text>
          </Text>
          <Image 
          source={images.path}
          className="w-[80px] h-[15px] absolute -bottom-2 -right-3" 
          resizeMode='contain'/>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center px-1">
            Where creativity meets innovation: 
            embark on a journey of limitless exploration with index!
          </Text>

          <CustomButton 
          title="Continue with Email" 
          handlePress={() => {console.log('first')}}
          containerStyles="w-[90%] mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161122' barStyle={'light-content'} />
    </SafeAreaView>
  )
}

export default index

