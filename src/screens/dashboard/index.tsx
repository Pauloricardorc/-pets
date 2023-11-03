import { Settings } from "lucide-react-native";
import { View, Text } from "react-native";

export default function Dashboard () {
  return (
    <View className="flex-1 items-center p-4 bg-white">
      <View className="w-full px-2 flex-row items-center justify-between">
        <View className="w-6" />
        <Text className="text-2xl text-gray-500">Explorar</Text>
        <Settings size={24} className="text-gray-500" />
      </View>
    </View>
  )
}