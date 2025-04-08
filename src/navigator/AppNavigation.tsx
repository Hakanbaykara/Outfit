import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
  Theme,
} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import HomeScreen from '@/screens/Home/Home';
import styles from './styles';
import {TabParamList} from '@/types/app';

function Home() {
  return <HomeScreen />;
}

function OutfitScreen() {
  return (
    <View>
      <Text>Outfit Suggestions</Text>
    </View>
  );
}

function WardrobeScreen() {
  return (
    <View>
      <Text>Your Wardrobe</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

const getTabIcon = (routeName: string, focused: boolean): any => {
  switch (routeName) {
    case 'Home':
      return focused
        ? require('@/assets/images/home_active.png') // active icon
        : require('@/assets/images/home.png');
    case 'Outfit':
      return focused
        ? require('@/assets/images/outfit_active.png') // active icon
        : require('@/assets/images/outfit.png');
    // case 'Wardrobe':
    //   return require('@/assets/images/wardrobe.png');
    // case 'Settings':
    //   return require('@/assets/images/settings.png');
    default:
      return require('@/assets/images/home.png');
  }
};

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
  navigation: BottomTabNavigationProp<ParamListBase, string>;
  theme: Theme;
}): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarIcon: ({focused}) => {
    const iconSource = getTabIcon(route.name, focused);
    return <Image source={iconSource} style={styles.icon} />;
  },
});

const Tab = createBottomTabNavigator<TabParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Outfit" component={OutfitScreen} />
        <Tab.Screen name="Wardrobe" component={WardrobeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
