import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Welcome to Expo Dev!</Text>
      <Text>Open up app/index.tsx to start working on your app!</Text>
      <TouchableOpacity onPress={() => router.push("/second-page")}>
        <Text className="text-blue-700 font-bold text-xl mt-4">
          Ir para a segunda página
        </Text>
      </TouchableOpacity>
    </View>
  );
}
