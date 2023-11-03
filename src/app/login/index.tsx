import { ChevronsRight } from "lucide-react-native";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 p-8 items-center justify-around gap-8">
      <View>
        <Text className="w-full text-5xl self-center text-blue-400 font-extrabold">+ Pets</Text>
      </View>
      <View className="w-full items-start justify-center">
      <Text className="text-3xl self-center mb-4 font-bold text-blue-400 max-w-[240px] text-center">
          Entrar agora
        </Text>
        <View className="items-start w-full gap-2 mt-1">
          <Text className="pl-2 text-base text-gray-600 font-medium">E-mail</Text>
          <TextInput keyboardType="email-address" autoCapitalize="none" autoCorrect={false} className="border border-gray-200 bg-gray-100 w-full rounded-md p-2" />
        </View>
        <View className="items-start w-full gap-2 mt-1">
          <Text className="pl-2 text-base text-gray-600 font-medium">Senha</Text>
          <TextInput secureTextEntry autoCapitalize="none" autoCorrect={false} className="border border-gray-200 bg-gray-100 w-full rounded-md p-2" />
        </View>
      </View>
      <View className="w-full items-center">
        <TouchableOpacity className="flex-row justify-between w-2/4 py-4 px-6 bg-blue-300 items-center rounded-xl">
          <View />
          <Text className="text-lg font-bold text-white">Entrar</Text>
          <ChevronsRight size={24} className="text-white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}