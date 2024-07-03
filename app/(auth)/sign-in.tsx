import { View, Text, SafeAreaView, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";

import { images } from "@/constants";
import FormField from "@/components/formField";
import CustomButton from "@/components/customButton";
import { Link, router } from "expo-router";
import { getCurrentUser, signin } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";



const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.email || !form.password) {
      Alert.alert('Error!!!', 'Please fill up the all fields.')
    }

      setIsSubmitting(true)

      try {
        await signin(form.email, form.password)

        const result = await getCurrentUser()
        setUser(result)
        setIsLoggedIn(true)

        router.replace('/home')
      } catch (error) {
        console.log("🚀 ~ submit ~ error:", error)
        Alert.alert('Error', error.message)
      } finally {
        setIsSubmitting(false)
      }
  };


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[90vh] px-4 my-6">
        <Image
        source={images.logoSmall}
        className="h-[50px] w-[100px] mt-5"
        resizeMode="contain"/>
        <Text className="text-2xl text-white font-psemibold mt-7">
          Log in to index!
        </Text>

        <FormField 
        title="Email"
        value={form.email}
        handleChangeText={(e) => setForm({...form, email: e})}
        otherStyles="mt-7"
        keyboadType="email-address"
        />

<FormField 
        title="Password"
        value={form.password}
        handleChangeText={(e) => setForm({...form, password: e})}
        otherStyles="mt-7"
        />

<CustomButton
        title="Sign In"
        handlePress={submit}
        containerStyles="mt-7"
        isLoading={isSubmitting} />

        <View className="justify-center pt-5 flex-row gap-2">
        <Text className="text-lg text-gray-100 font-pregular">
          Don't have an account?
        </Text>
        <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign Up</Link>
        </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
