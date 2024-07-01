import { Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf")
  })
  return (<Stack>
    <Stack.Screen name='index' options={{headerShown: false}} />
  </Stack>
  )
}

export default RootLayout

