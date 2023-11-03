import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from '@/routes';
import { Loading } from '@/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent={false} />
      { fontsLoaded ? <Routes /> : <Loading /> }
    </NavigationContainer>
  );
}
