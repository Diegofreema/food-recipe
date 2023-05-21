import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screen/CategoryScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealsDetails from './screen/MealsDetails';
import Favorite from './screen/Favorite';
import { FavoriteContextProvider } from './context/FavoriteMeals';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#351401' },
        sceneContainerStyle: { backgroundColor: '#583520' },
        headerTintColor: 'white',
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#f17d3a',
        drawerActiveBackgroundColor: '#442f21',
      }}
    >
      <Drawer.Screen
        name="MealCategories"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={Favorite}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#351401' },
            contentStyle: { backgroundColor: '#583520' },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen
            name="Categories"
            component={MyDrawer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Meals" component={MealsOverviewScreen} />
          <Stack.Screen name="Details" component={MealsDetails} />
        </Stack.Navigator>
      </FavoriteContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
