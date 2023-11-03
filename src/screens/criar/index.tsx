import { ChevronsRight } from "lucide-react-native";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function Criar() {
  return (
    <View className="flex-1 p-4 items-center justify-around gap-2">
      <View>
        <Text className="text-2xl mt-4 font-semibold text-gray-600 max-w-[240px] text-center">
          O basico para criar uma conta no <Text className="text-blue-400">+ Pets</Text>
        </Text>
        <Text className="text-lg text-gray-500 font-normal text-center max-w-[240px] mt-4 leading-5 tracking-widest">
          Essas são as exigencias para criar uma conta a outras pode configurar depois
        </Text>
      </View>
      <View className="w-full items-start justify-center">
        <View className="items-start w-full gap-2">
          <Text className="pl-2 text-base text-gray-600 font-medium">Nome no app</Text>
          <TextInput keyboardType="default" autoCapitalize="none" autoCorrect={false} className="border border-gray-200 bg-gray-100 w-full rounded-md p-2" />
        </View>
        <View className="items-start w-full gap-2 mt-1">
          <Text className="pl-2 text-base text-gray-600 font-medium">Nome completo</Text>
          <TextInput keyboardType="default" autoCapitalize="none" autoCorrect={false} className="border border-gray-200 bg-gray-100 w-full rounded-md p-2" />
        </View>
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
          <Text className="text-lg font-bold text-white">Criar agora</Text>
          <ChevronsRight size={24} className="text-white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}