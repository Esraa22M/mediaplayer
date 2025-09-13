import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}

const NavigationContainer = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
