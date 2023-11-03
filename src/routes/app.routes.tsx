import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Criar from '@/screens/criar';
import Home from '@/screens/home';
import Login from '@/screens/login';
import Dashboard from "@/screens/dashboard";
import { LayoutDashboard, User } from "lucide-react-native";
import Perfil from "@/screens/Perfil";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function AppRoutes() {
  const isLogged = true;

  return (
    <>
      {isLogged ? (
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarLabelStyle: { fontSize: 14, paddingBottom: 10 },
              tabBarStyle: { height: 70 }
            }}
          >
            <Tab.Screen name='Dashboard' component={Dashboard}
              options={{
                tabBarIcon: ({ color, size }) => <LayoutDashboard color={color} size={size} />
              }}
            />
            <Tab.Screen name='Perfil' component={Perfil}
              options={{
                tabBarIcon: ({ color, size }) => <User color={color} size={size} />
              }}
            />
          </Tab.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='login' component={Login} options={{ animation: 'slide_from_bottom' }} />
            <Stack.Screen name='criar' component={Criar} options={{ animation: 'slide_from_bottom' }} />
          </Stack.Navigator>
        </>
      )}
    </>
  )
}