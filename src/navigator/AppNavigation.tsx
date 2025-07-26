import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {useAppSelector} from '@/redux/store';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from 'i18next';

import styles from './styles';
import {
  TabParamList,
  HomeStackParamList,
  ProfileStackParamList,
  LoginStackParamList,
  SearchStackParamList,
} from '@/types/app';
import HomeScreen from '@/screens/Home/Home';
import {getPhoneInfo} from '@/helpers';
import SignUpScreen from '@/screens/SignUpScreen/SignUpScreen';
import ProfileScreen from '@/screens/ProfileScreen/ProfileScreen';
import PostDetailScreen from '@/screens/PostDetailScreen/PostDetailScreen';
import NewPostScreen from '@/screens/NewPostScreen/NewPostScreen';
import LoginScreen from '@/screens/LoginScreen/LoginScreen';
import SettingsScreen from '@/screens/ProfileScreen/SettingsScreen/SettingsScreen';
import SearchScreen from '@/screens/SearchScreen/SearchScreen';

function getTabBarVisibility(route: RouteProp<ParamListBase, string>) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';

  const hiddenRoutes = ['PostDetail', 'Login', 'SignUp'];

  if (
    route.name === 'Auth' &&
    (routeName === 'SignUp' || routeName === 'Login' || routeName === '')
  ) {
    return false;
  }

  return !hiddenRoutes.includes(routeName);
}

const getTabIcon = (routeName: string, focused: boolean): any => {
  switch (routeName) {
    case 'Home':
      if (focused) {
        return require('@/assets/images/home-button-active.png');
      } else {
        return require('@/assets/images/home-button.png');
      }
    case 'Search':
      if (focused) {
        return require('@/assets/images/search-button-active.png');
      } else {
        return require('@/assets/images/search-button.png');
      }
    case 'Profile':
      if (focused) {
        return require('@/assets/images/profile-button-active.png');
      } else {
        return require('@/assets/images/profile-button.png');
      }
    default:
      return require('@/assets/images/home-button.png');
  }
};

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
  navigation: BottomTabNavigationProp<ParamListBase, string>;
  theme: Theme;
}): BottomTabNavigationOptions => {
  const showTabBar = getTabBarVisibility(route);

  return {
    headerShown: false,
    tabBarIcon: ({focused}) => {
      const iconSource = getTabIcon(route.name, focused);
      return (
        <View style={styles.iconContainer}>
          <Image source={iconSource} style={styles.icon} />
        </View>
      );
    },
    tabBarShowLabel: false,
    tabBarStyle: {
      display: showTabBar ? 'flex' : 'none',
    },
  };
};

// Stack Navigator for Login
const LoginStack = createNativeStackNavigator<LoginStackParamList>();

function LoginStackNavigator() {
  return (
    <LoginStack.Navigator
      screenOptions={{headerShown: false, navigationBarColor: '#2090f3'}}>
      <LoginStack.Screen name="SignUp" component={SignUpScreen} />
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

// Stack Navigator for Home tab
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="PostDetail" component={PostDetailScreen} />
      <HomeStack.Screen name="NewPost" component={NewPostScreen} />
    </HomeStack.Navigator>
  );
}

// Stack Navigator for Search tab
const SearchStack = createNativeStackNavigator<SearchStackParamList>();

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

// Stack Navigator for Profile tab
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="ProfilePage" component={ProfileScreen} />
      <ProfileStack.Screen name="PostDetail" component={PostDetailScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator<TabParamList>();

export default function AppNavigator() {
  const isToken = useAppSelector(state => state.account.isToken);

  useEffect(() => {
    getPhoneInfo.getPhoneLanguage();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        {!isToken && <Tab.Screen name="Auth" component={LoginStackNavigator} />}
        {isToken && <Tab.Screen name="Home" component={HomeStackNavigator} />}
        {isToken && (
          <Tab.Screen name="Search" component={SearchStackNavigator} />
        )}
        {isToken && (
          <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
