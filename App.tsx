import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Criar from '@/app/criar';
import Home from '@/app/home';
import Login from '@/app/login';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='login' component={Login} options={{animation: 'slide_from_bottom'}} />
        <Stack.Screen name='criar' component={Criar} options={{animation: 'slide_from_bottom'}} />
      </Stack.Navigator>
      <StatusBar style="light" translucent={false} />
    </NavigationContainer>
  );
}
