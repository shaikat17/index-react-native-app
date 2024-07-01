import { Pressable, Text, View,  } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <View className={`bg-secondary rounded-xl justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}>
        <Pressable className={`min-h-[62px] w-full justify-center items-center`}
    disabled={isLoading}
    onPress={handlePress} android_ripple={{color: '#fae37d', borderless:true}}
    >
        <Text className={`text-primary font-psemibold text-lg ${textStyles} `}>{title}</Text>
    </Pressable>
    </View>
  )
}

export default CustomButton