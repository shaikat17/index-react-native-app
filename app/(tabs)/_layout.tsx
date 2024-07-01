import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View>
      <Image source={} />
    </View>
  )
}
const TabsLayOut = () => {
  return (
    <>
    <Tabs>
      <Tabs.Screen name='home' options={{
        title="Home",
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon />
        )
      }} />
    </Tabs>
    </>
  )
}

export default TabsLayOut