import '../tamagui-web.css'

import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useColorScheme, Image } from 'react-native'
import { PortalProvider, TamaguiProvider, XStack, Text, Button } from 'tamagui'

import { tamaguiConfig } from '../tamagui.config'
import { Ionicons } from '@expo/vector-icons'

export default function RootLayout() {
  const colorScheme = useColorScheme()
  

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme || 'light'}>
      <PortalProvider shouldAddRootHost>
        <ThemeProvider value={colorScheme === 'white' ? DarkTheme : DefaultTheme}>
          {/* Header Section */}
          <XStack 
            alignItems="center" 
            justifyContent="space-between" 
            padding="16px" 
            backgroundColor="white" 
            borderBottomWidth={1} 
            borderColor="#1C75BC"
          >
            {/* Logo Section */}
            <XStack alignItems="center" gap="8px">
              <Image 
                source={require('../assets/images/logo2.png')} // Replace with your actual logo path
                style={{ width: 150, height: 40 }} // Adjust size as needed
                resizeMode="contain"
              />
            </XStack>

            {/* Streak Section */}
            <XStack alignItems="center" gap="16px">
              <XStack alignItems="center" gap="8px">
              <Text color="#1C75BC" fontWeight="bold">Streak</Text> {/* Matching logo blue color */}
              <Text color="#1C75BC" fontWeight="bold">🔥 7</Text>
            </XStack>

            {/* Profile and Settings Icons */}
           //</XStack> <XStack alignItems="center" gap="16px">
              {/* Personal Profile Icon */}
              <Button onPress={() => alert('Profile Pressed!')} size="$3" circular>
                <Ionicons name="person-circle-outline" size={24} color="white" />
              </Button>

              {/* Settings Icon */}
              <Button onPress={() => alert('Settings Pressed!')} size="$3" circular>
                <Ionicons name="settings-outline" size={24} color="white" />
              </Button>
            </XStack>
          </XStack>

          {/* Main Navigation */}
          <Stack>
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="exercise" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </PortalProvider>
    </TamaguiProvider>
  );


  
}



