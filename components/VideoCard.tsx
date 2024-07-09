import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gay-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregulare"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {play ? (
        <View>
          <Text className="text-white">Playing</Text>
        </View>
      ) : (
        <View className="w-full h-60">
          <Pressable
            android_ripple={{ color: 'rgba(255, 255, 255, 0.5)', foreground: true, borderless: false }}
            className="w-full h-full mt-3 relative justify-center rounded-lg items-center overflow-hidden"
            onPress={() => setPlay(true)}
          >
            <Image
              source={{ uri: thumbnail }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
            <Image
              source={icons.play}
              className="w-12 h-12 absolute"
              resizeMode="contain"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default VideoCard;
