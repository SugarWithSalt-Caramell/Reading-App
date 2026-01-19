import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Hier importieren wir deine Screens (basierend auf deinem Screenshot)
// Der Ordner heißt bei dir "src/Pages.tsx", deshalb der Pfad:
import LibraryScreen from './src/Pages.tsx/Library';
import BrowseScreen from './src/Pages.tsx/Browse';
import HistoryScreen from './src/Pages.tsx/History';
import MoreScreen from './src/Pages.tsx/More';
import UpdateScreen from './src/Pages.tsx/Update';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Versteckt die obere Leiste (Manga Apps brauchen oft Platz)
          tabBarStyle: { backgroundColor: '#000' }, // Dunkles Design für die Leiste unten
          tabBarActiveTintColor: '#fff', // Weiße Farbe für aktiven Tab
          tabBarInactiveTintColor: '#666', // Graue Farbe für inaktiven Tab
          tabBarIcon: ({ color, size }) => {
            let iconName = 'book';

            if (route.name === 'Library') iconName = 'book-open-variant';
            else if (route.name === 'Browse') iconName = 'compass';
            else if (route.name === 'History') iconName = 'history';
            else if (route.name === 'Updates') iconName = 'alert-decagram';
            else if (route.name === 'More') iconName = 'dots-horizontal';

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Updates" component={UpdateScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}