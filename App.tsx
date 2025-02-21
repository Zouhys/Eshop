import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from './src/MainPage';
import CartPage from './src/CartPage';
import FavoritesPage from './src/FavoritesPage';
import { StoreProvider } from './src/StoreContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MainPage} />
          <Tab.Screen name="Cart" component={CartPage} />
          <Tab.Screen name="Favorites" component={FavoritesPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
