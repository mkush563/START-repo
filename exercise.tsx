import {useRouter} from "expo-router";
import {View, Text, SafeAreaView} from "react-native";
import { useLocalSearchParams } from 'expo-router';
import {Button} from "tamagui";

export default function Exercise() {
    const {
        // The route parameter
        user,
        // An optional search parameter.
        tab,
    } = useLocalSearchParams<{ user: string; tab?: string }>();

    console.log({ user, tab });
    const router = useRouter();

    return (
        <SafeAreaView>

        <View>
            <Button onPress={() => {router.back()}}><Text>Go Back</Text></Button>
            <Text>
                {tab}
            </Text>
        </View>
        </SafeAreaView>
    )
}
