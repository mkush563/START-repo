import { Text, View } from "react-native";
import {Button, PortalProvider, Stack} from "tamagui";
import { Airplay } from '@tamagui/lucide-icons'
import {useRouter} from "expo-router";


export default function Index() {
    const router = useRouter();

    // push to onboarding.tsx
    const startOnboarding = () => {
        router.push("/onboarding");
    }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Button alignSelf="center" icon={Airplay} size="$6" backgroundColor={"red"} onPress={startOnboarding} >
            Large
        </Button>
        <Text>Hallo</Text>
    </View>
  );
}
