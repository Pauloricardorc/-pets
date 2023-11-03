import { Image } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";

import Pets from '@/assets/petsLogo.png'
import { LinearGradient } from "expo-linear-gradient";

export default function Home({ navigation }) {
  return (
    <LinearGradient
      className="flex-1 items-center"
      colors={['#38bdf8', '#0284c7']}
      start={{ x: 0.7, y: 0.2 }}
    >
      <View className="flex-1 bg-white overflow-hidden rounded-br-full">
        <Image
          className="flex self-center w-[500px] h-[300]"
          source={Pets}
          contentFit="cover"
          transition={1000}
        />
        <Text className="w-full text-5xl self-center text-blue-400 font-extrabold">+ Pets</Text>
      </View>
      <View className="w-full h-1/2 items-center justify-end pb-20 gap-4">
        <TouchableOpacity onPress={() => navigation.push('criar')} className="flex items-center w-3/4 p-3 bg-white rounded-2xl shadow-md shadow-black">
          <Text className="font-semibold text-lg text-blue-400">Nova conta</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center w-3/4 p-3 bg-red-500 rounded-2xl shadow-md shadow-black">
          <Text className="font-semibold text-lg text-white">Entrar com Google</Text>
        </TouchableOpacity>
        <View className="items-center">
          <Text className="text-base text-blue-100 font-medium">Usar com minha conta</Text>
          <Text onPress={() => navigation.push('login')} className="text-base text-white font-medium underline">Entrar agora</Text>
        </View>
      </View>
    </LinearGradient>
  )
}