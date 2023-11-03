import { View } from "react-native";

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-32 h-32 rounded-full border border-blue-500 animate-pulse" />
    </View>
  );
}