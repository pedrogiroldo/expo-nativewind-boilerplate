import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-center mt-4">
        Hello second page!{" "}
      </Text>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text className="text-blue-700 font-bold text-xl mt-4">
          Go back to the first page
        </Text>
      </TouchableOpacity>
    </View>
  );
}
