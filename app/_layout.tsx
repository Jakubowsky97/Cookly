import { Stack } from 'expo-router/stack';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

export default function Layout() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
