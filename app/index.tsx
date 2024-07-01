import { ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{
        height: '100%'
      }}>

      </ScrollView>
    </SafeAreaView>
  )
}

export default index

