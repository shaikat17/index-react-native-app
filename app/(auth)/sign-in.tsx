import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useState } from "react";

import { images } from "@/constants";
import FormField from "@/components/formField";
import CustomButton from "@/components/customButton";
import { Link } from "expo-router";



const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
        <Image
        source={images.logo}
        className="w-[130px] h-[50px]"/>
        <Text className="text-2xl text-white font-psemibold mt-5">
          Log in to index!
        </Text>

        <FormField 
        title="Email"
        value={form.email}
        handleChangeText={(e) => setForm({...form, email: e})}
        otherStyles="mt-7"
        keyboadType="email"
        />

<FormField 
        title="Password"
        value={form.password}
        handleChangeText={(e) => setForm({...form, password: e})}
        otherStyles="mt-7"
        keyboadType="password"
        />

<CustomButton
        title="Sign In"
        handlePress={submit}
        containerStyles="mt-7"
        isLoading={isSubmitting} />

        <View className="justify-center pt-5 flex-row gap-2">
        <Text className="text-lg text-gray-100 font-pregular">
          Don't have account?
        </Text>
        <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign Up</Link>
        </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
